
var Clipboard = require('./clipboard');

// Returns a new datastructure to prevent accidental sharing between diffent editor instances
function getDefaultMenus(editor) {

  // FIXME: provide a proper interface for actions to manipulate section, remove @editor
  var pasteAction = function (graph, itemKey, item) {
    var pasted = Clipboard.paste(graph);
    this.selectedNodes = pasted.nodes;
    this.selectedEdges = [];
  }.bind(editor);
  var pasteMenu = {
    icon: "paste",
    iconLabel: "Incolla",
    action: pasteAction
  };
  // Default context menu defs

  var nodeActions = {
    delete: function (graph, itemKey, item) {
      graph.removeNode(itemKey);
      // Remove selection
      var newSelection = [];
      for (var i=0, len=this.selectedNodes.length; i<len; i++){
        var selected = this.selectedNodes[i];
        if (selected !== item) {
          newSelection.push(selected);
        }
      }
      window.deleteQuestion(item.metadata.formId,item.metadata.questionNumber);
      this.selectedNodes = newSelection;
    }.bind(editor),
    copy: function (graph, itemKey, item) {
      Clipboard.copy(graph, [itemKey]);
    },
    transition: function (graph, itemKey, item) {
      $("#transitionModal").modal("show");
      $("#transitionModal input[name='form']").val(item.metadata.formId);
      $("#transitionModal input[name='questionNumber']").val(item.metadata.questionNumber);
    }.bind(editor)
  }, edgeActions = {
    delete: function (graph, itemKey, item) {
      graph.removeEdge(item.from.node, item.from.port, item.to.node, item.to.port);
      // Remove selection
      var newSelection = [];
      for (var i=0, len=this.selectedEdges.length; i<len; i++){
        var selected = this.selectedEdges[i];
        if (selected !== item) {
          newSelection.push(selected);
        }
      }
      this.selectedEdges = newSelection;
    }.bind(editor)
  };

  var menus = {
    main: {
      icon: "sitemap",
      e4: pasteMenu
    },
    edge: {
      actions: edgeActions,
      icon: "long-arrow-right",
      s4: {
        icon: "trash-o",
        iconLabel: "Elimina",
        action: edgeActions.delete
      }
    },
    node: {
      actions: nodeActions,
      s4: {
        icon: "trash-o",
        iconLabel: "Elimina",
        action: nodeActions.delete
      },
      // w4: {
      //   icon: "copy",
      //   iconLabel: "Copia",
      //   action:  nodeActions.copy
      // },
      n4: {
        icon: "sitemap",
        iconLabel: "Branch",
        action:  nodeActions.transition
      }
    },
    nodeInport: {
      w4: {
        icon: "sign-in",
        iconLabel: "export",
        action: function (graph, itemKey, item) {
          var pub = item.port;
          if (pub === 'start') {
            pub = 'start1';
          }
          if (pub === 'graph') {
            pub = 'graph1';
          }
          var count = 0;
          // Make sure public is unique
          while (graph.inports[pub]) {
            count++;
            pub = item.port + count;
          }
          var priNode = graph.getNode(item.process);
          var metadata = {x:priNode.metadata.x-144, y:priNode.metadata.y};
          graph.addInport(pub, item.process, item.port, metadata);
        }
      }
    },
    nodeOutport: {
      e4: {
        icon: "sign-out",
        iconLabel: "Esporta",
        action: function (graph, itemKey, item) {
          var pub = item.port;
          var count = 0;
          // Make sure public is unique
          while (graph.outports[pub]) {
            count++;
            pub = item.port + count;
          }
          var priNode = graph.getNode(item.process);
          var metadata = {x:priNode.metadata.x+144, y:priNode.metadata.y};
          graph.addOutport(pub, item.process, item.port, metadata);
        }
      }
    },
    graphInport: {
      icon: "sign-in",
      iconColor: 2,
      n4: {
        label: "inport"
      },
      s4: {
        icon: "trash-o",
        iconLabel: "Elimina",
        action: function (graph, itemKey, item) {
          graph.removeInport(itemKey);
        }
      }
    },
    graphOutport: {
      icon: "sign-out",
      iconColor: 5,
      n4: {
        label: "outport"
      },
      s4: {
        icon: "trash-o",
        iconLabel: "Elimina",
        action: function (graph, itemKey, item) {
          graph.removeOutport(itemKey);
        }
      }
    },
    group: {
      icon: "th",
      w4: {
        icon: "plus",
        iconLabel: "Gruppo",
        action: function (graph, itemKey, item) {
          newForm(item);
        }
      },
      n4: {
        icon: "plus",
        iconLabel: "Domanda",
        action: function (graph, itemKey, item) {
          $("#newQuestionModal").modal("show");
          $("#newQuestionModal input[name='form']").val(item.metadata.formId);
          //modals.element();
        }
      },
      e4: {
        icon: "pencil",
        iconLabel: "Modifica Form",
        action: function (graph, itemKey, item) {
          window.editForm(item.metadata.formId);
        }
      },
      s4: {
        icon: "trash-o",
        iconLabel: "Elimina",
        action: function (graph, itemKey, item) {
          window.deleteForm(item.metadata.formId);
          graph.removeGroup(itemKey);
        }
      }
      /*s4: {
        icon: "trash-o",
        iconLabel: "ungroup",
        action: function (graph, itemKey, item) {
          graph.removeGroup(itemKey);
        }
      },
      // TODO copy group?
      e4: pasteMenu*/
    },
    selection: {
      icon: "th",
      w4: {
        icon: "copy",
        iconLabel: "Copia",
        action: function (graph, itemKey, item) {
          Clipboard.copy(graph, item.nodes);
        }
      },
      e4: pasteMenu
    }
  };
  return menus;
}

module.exports = {
  getDefaultMenus: getDefaultMenus, 
};
