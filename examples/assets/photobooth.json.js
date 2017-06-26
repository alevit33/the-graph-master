var sample = {
  "id": "ti6yn",
  "project": "",
  "properties": {
    "name": "photobooth",
    "environment": {
      "runtime": "html",
      "src": "preview/iframe.html",
      "width": 300,
      "height": 300,
      "content": "    <video id=\"vid\" autoplay loop width=\"640\" height=\"480\" style=\"display:none;\"></video>\n    <canvas id=\"out\" width=\"640\" height=\"480\" style=\"max-width:100%;\"></canvas>\n\n<input id=\"slider\" type=\"range\" min=\"0\" max=\"1\" value=\"0.5\" step=\"0.01\"></input>\n    <button id=\"start\">start camera</button>\n    <button id=\"prev\">prev</button>\n    <button id=\"next\">next</button>\n    <button id=\"save\">save</button>\n\n<style>\n  #saved img { width: 160px; height: 120px;}\n</style>\n<div id=\"saved\"></div>"
    }
  },
  "inports": { 
    "prev": {
      "process": "routers/KickRouter_bzaiw",
      "port": "prev",
      "metadata": {
        "x": 0,
        "y": 144
      }
    },
    "next": {
      "process": "routers/KickRouter_bzaiw",
      "port": "next"
    }
  },
  "outports": {
    "image": {
      "process": "core/Split_xyb8x",
      "port": "out",
      "metadata": {
        "x": 2000,
        "y": 1000
      }
    }
  },
  "groups": [
    {
      "name": "elements", 
      "nodes": ["dom/GetElement_ah82a", "dom/GetElement_f4nkd", "dom/GetElement_z64xf", "dom/GetElement_ah36i", "core/Split_jzzu2"],
      "metadata": {
        "description": "get the elements from the dom",
        "color": 0
      }
    },
    {
      "name": "setup", 
      "nodes": ["interaction/ListenMouse_1w3vt", "core/Split_y0bla", "seriously/SetSource_szf33", "gum/GetUserMedia_9e9i4", "dom/SetAttribute_uto4k", "core/Split_occbw", "core/RepeatAsync_647ff", "core/Kick_4njgs"],
      "metadata": {
        "color": 2
      }
    },
    {
      "name": "countdown",
      "nodes": ["core/Split_lbwyz", "interaction/ListenMouse_1u0rk", "strings/SendString_zry4n", "core/RunTimeout_3wulz", "dom/AddClass_9rihj", "core/Split_ho5ib", "strings/SendString_lnf0z", "core/Kick_7efi8", "dom/RemoveClass_ec7ug"],
      "metadata": {
        "description": "",
        "color": 3
      }
    },
    {
      "name": "changefilter",
      "nodes": ["dom/GetElement_85so0"],
      "metadata": {
        "description": "",
        "color": 5
      }
    },
    {
      "name": "save",
      "nodes": ["core/MakeFunction_t17n", "core/Split_xyb8x", "strings/SendString_7g9h8", "dom/GetElement_4houj", "core/RepeatAsync_grqs3", "dom/CreateElement_sf6ec", "dom/SetAttribute_3bmlw"],
      "metadata": {
        "description": "",
        "color": 9
      }
    },
    {
      "name": "filter",
      "nodes": ["dom/GetElement_j674o", "routers/KickRouter_bzaiw", "interaction/ListenChange_z7m5u", "math/Multiply_rbxrn", "math/Multiply_3v13k", "seriously/HueSaturation_bzfvt", "core/Split_jx318", "math/Multiply_3eldx", "seriously/TVGlitch_e1qre", "seriously/Hex_lx162", "seriously/Ascii_17c9q", "seriously/Invert_7xnl3", "seriously/Edge_egmkb", "seriously/Split_7oj15", "seriously/SetTarget_kii7s"],
      "metadata": {
        "description": "",
        "color": 10
      }
    }
  ],
  "processes": {
    "dom/GetElement_f4nkd": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 324,
        "y": 144,
        "label": "startButton"
      }
    },
    "interaction/ListenMouse_1w3vt": {
      "component": "interaction/ListenMouse",
      "metadata": {
        "x": 324,
        "y": 288,
        "label": "clickStart"
      }
    },
    "gum/GetUserMedia_9e9i4": {
      "component": "gum/GetUserMedia",
      "metadata": {
        "x": 324,
        "y": 648,
        "label": "webCam"
      }
    },
    "dom/GetElement_z64xf": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 504,
        "y": 144,
        "label": "videoEl"
      }
    },
    "dom/SetAttribute_uto4k": {
      "component": "dom/SetAttribute",
      "metadata": {
        "x": 432,
        "y": 648,
        "label": "setVideoSrc"
      }
    },
    "seriously/SetSource_szf33": {
      "component": "seriously/SetSource",
      "metadata": {
        "x": 576,
        "y": 648,
        "label": "setFilterSource"
      }
    },
    "seriously/Ascii_17c9q": {
      "component": "seriously/Ascii",
      "metadata": {
        "x": 1080,
        "y": 396,
        "label": "seriously/Ascii"
      }
    },
    "dom/GetElement_ah82a": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 1404,
        "y": 144,
        "label": "canvasEl"
      }
    },
    "seriously/SetTarget_kii7s": {
      "component": "seriously/SetTarget",
      "metadata": {
        "x": 1404,
        "y": 648,
        "label": "filterTarget"
      }
    },
    "dom/GetElement_85so0": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 720,
        "y": 144,
        "label": "prevButton"
      }
    },
    "interaction/ListenMouse_aii7r": {
      "component": "interaction/ListenMouse",
      "metadata": {
        "x": 720,
        "y": 288,
        "label": "clickPrev"
      }
    },
    "dom/GetElement_e16dy": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 864,
        "y": 144,
        //"label": "nextButton"
      }
    },
    "interaction/ListenMouse_bil4d": {
      "component": "interaction/ListenMouse",
      "metadata": {
        "x": 864,
        "y": 288,
        "label": "clickNext"
      }
    },
    "routers/KickRouter_bzaiw": {
      "component": "routers/KickRouter",
      "metadata": {
        "x": 828,
        "y": 648,
        "label": "chooseFilter"
      }
    },
    "seriously/TVGlitch_e1qre": {
      "component": "seriously/TVGlitch",
      "metadata": {
        "x": 1080,
        "y": 504,
        "label": "seriously/TVGlitch"
      }
    },
    "seriously/Hex_lx162": {
      "component": "seriously/Hex",
      "metadata": {
        "x": 1008,
        "y": 612,
        "label": "seriously/Hex"
      }
    },
    "seriously/Edge_egmkb": {
      "component": "seriously/Edge",
      "metadata": {
        "x": 1152,
        "y": 612,
        "label": "seriously/Edge"
      }
    },
    "seriously/Invert_7xnl3": {
      "component": "seriously/Invert",
      "metadata": {
        "x": 1008,
        "y": 828,
        "label": "negative"
      }
    },
    "seriously/Split_7oj15": {
      "component": "seriously/Split",
      "metadata": {
        "x": 1152,
        "y": 756,
        "label": "halfScreen"
      }
    },
    "core/Split_jx318": {
      "component": "core/Split",
      "metadata": {
        "x": 1008,
        "y": 720,
        "label": "core/Split"
      }
    },
    "core/Split_occbw": {
      "component": "core/Split",
      "metadata": {
        "x": 684,
        "y": 648,
        "label": "core/Split"
      }
    },
    "core/Split_y0bla": {
      "component": "core/Split",
      "metadata": {
        "x": 504,
        "y": 468,
        "label": "core/Split"
      }
    },
    "seriously/HueSaturation_bzfvt": {
      "component": "seriously/HueSaturation",
      "metadata": {
        "x": 1080,
        "y": 972,
        "label": "seriously/HueSaturation"
      }
    },
    "core/Split_jzzu2": {
      "component": "core/Split",
      "metadata": {
        "x": 1404,
        "y": 288,
        "label": "core/Split"
      }
    },
    "core/Kick_7efi8": {
      "component": "core/Kick",
      "metadata": {
        "x": 1476,
        "y": 792,
        "label": "sendCanvas"
      }
    },
    "core/MakeFunction_t17n": {
      "component": "core/MakeFunction",
      "metadata": {
        "x": 1296,
        "y": 936,
        "label": "canvasToJPEG"
      }
    },
    "dom/GetElement_ah36i": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 1584,
        "y": 144,
        "label": "saveButton"
      }
    },
    "interaction/ListenMouse_1u0rk": {
      "component": "interaction/ListenMouse",
      "metadata": {
        "x": 1584,
        "y": 288,
        "label": "clickSave"
      }
    },
    "dom/CreateElement_sf6ec": {
      "component": "dom/CreateElement",
      "metadata": {
        "x": 1584,
        "y": 1008,
        "label": "dom/CreateElement"
      }
    },
    "dom/SetAttribute_3bmlw": {
      "component": "dom/SetAttribute",
      "metadata": {
        "x": 1584,
        "y": 1152,
        "label": "dom/SetAttribute"
      }
    },
    "core/RepeatAsync_grqs3": {
      "component": "core/RepeatAsync",
      "metadata": {
        "x": 1440,
        "y": 1152,
        "label": "core/RepeatAsync"
      }
    },
    "dom/GetElement_4houj": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 1584,
        "y": 792,
        "label": "savedEl"
      }
    },
    "core/Split_xyb8x": {
      "component": "core/Split",
      "metadata": {
        "x": 1296,
        "y": 1080,
        "label": "core/Split"
      }
    },
    "strings/SendString_7g9h8": {
      "component": "strings/SendString",
      "metadata": {
        "x": 1440,
        "y": 1008,
        "label": "strings/SendString"
      }
    },
    "core/RepeatAsync_647ff": {
      "component": "core/RepeatAsync",
      "metadata": {
        "x": 612,
        "y": 792,
        "label": "core/RepeatAsync"
      }
    },
    "core/Kick_4njgs": {
      "component": "core/Kick",
      "metadata": {
        "x": 756,
        "y": 792,
        "label": "kickFirstFilter"
      }
    },
    "dom/GetElement_j674o": {
      "component": "dom/GetElement",
      "metadata": {
        "x": 432,
        "y": 1044,
        "label": "sliderEl"
      }
    },
    "interaction/ListenChange_z7m5u": {
      "component": "interaction/ListenChange",
      "metadata": {
        "x": 612,
        "y": 1044,
        "label": "slid"
      }
    },
    "math/Multiply_3eldx": {
      "component": "math/Multiply",
      "metadata": {
        "x": 828,
        "y": 1152,
        "label": "x2xPI"
      }
    },
    "math/Multiply_3v13k": {
      "component": "math/Multiply",
      "metadata": {
        "x": 828,
        "y": 1044,
        "label": "tenth"
      }
    },
    "math/Multiply_rbxrn": {
      "component": "math/Multiply",
      "metadata": {
        "x": 828,
        "y": 936,
        "label": "tenth"
      }
    },
    "core/RunTimeout_3wulz": {
      "component": "core/RunTimeout",
      "metadata": {
        "x": 1584,
        "y": 432,
        "label": "core/RunTimeout"
      }
    },
    "core/Split_ho5ib": {
      "component": "core/Split",
      "metadata": {
        "x": 1584,
        "y": 576,
        "label": "core/Split"
      }
    },
    "dom/AddClass_9rihj": {
      "component": "dom/AddClass",
      "metadata": {
        "x": 1836,
        "y": 360,
        "label": "dom/AddClass"
      }
    },
    "core/Split_lbwyz": {
      "component": "core/Split",
      "metadata": {
        "x": 1728,
        "y": 144,
        "label": "core/Split"
      }
    },
    "dom/RemoveClass_ec7ug": {
      "component": "dom/RemoveClass",
      "metadata": {
        "x": 1836,
        "y": 648,
        "label": "dom/RemoveClass"
      }
    },
    "strings/SendString_zry4n": {
      "component": "strings/SendString",
      "metadata": {
        "x": 1728,
        "y": 360,
        "label": "countdown"
      }
    },
    "strings/SendString_lnf0z": {
      "component": "strings/SendString",
      "metadata": {
        "x": 1728,
        "y": 648,
        "label": "countdown"
      }
    }
  },
  "connections": [],
  /* [
    {
      "src": {
        "process": "dom/GetElement_f4nkd",
        "port": "element"
      },
      "tgt": {
        "process": "interaction/ListenMouse_1w3vt",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "interaction/ListenMouse_1w3vt",
        "port": "click"
      },
      "tgt": {
        "process": "gum/GetUserMedia_9e9i4",
        "port": "start"
      },
      "metadata": {
        "route": "9"
      }
    },
    {
      "src": {
        "process": "gum/GetUserMedia_9e9i4",
        "port": "url"
      },
      "tgt": {
        "process": "dom/SetAttribute_uto4k",
        "port": "value"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/Ascii_17c9q",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetTarget_kii7s",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_85so0",
        "port": "element"
      },
      "tgt": {
        "process": "interaction/ListenMouse_aii7r",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_e16dy",
        "port": "element"
      },
      "tgt": {
        "process": "interaction/ListenMouse_bil4d",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "interaction/ListenMouse_aii7r",
        "port": "click"
      },
      "tgt": {
        "process": "routers/KickRouter_bzaiw",
        "port": "prev"
      },
      "metadata": {
        "route": "9"
      }
    },
    {
      "src": {
        "process": "interaction/ListenMouse_bil4d",
        "port": "click"
      },
      "tgt": {
        "process": "routers/KickRouter_bzaiw",
        "port": "next"
      },
      "metadata": {
        "route": "9"
      }
    },
    {
      "src": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetTarget_kii7s",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "routers/KickRouter_bzaiw",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/Hex_lx162",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/Edge_egmkb",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetTarget_kii7s",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/Hex_lx162",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/Edge_egmkb",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "routers/KickRouter_bzaiw",
        "port": "out"
      },
      "tgt": {
        "process": "core/Split_jx318",
        "port": "in"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "core/Split_jx318",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/Invert_7xnl3",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/Split_7oj15",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetTarget_kii7s",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/SetSource_szf33",
        "port": "out"
      },
      "tgt": {
        "process": "core/Split_occbw",
        "port": "in"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "core/Split_occbw",
        "port": "out"
      },
      "tgt": {
        "process": "routers/KickRouter_bzaiw",
        "port": "in"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_z64xf",
        "port": "element"
      },
      "tgt": {
        "process": "core/Split_y0bla",
        "port": "in"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_y0bla",
        "port": "out"
      },
      "tgt": {
        "process": "dom/SetAttribute_uto4k",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_y0bla",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetSource_szf33",
        "port": "source"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "routers/KickRouter_bzaiw",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/HueSaturation_bzfvt",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/HueSaturation_bzfvt",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetTarget_kii7s",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_ah82a",
        "port": "element"
      },
      "tgt": {
        "process": "core/Split_jzzu2",
        "port": "in"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_jzzu2",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/SetTarget_kii7s",
        "port": "target"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_jzzu2",
        "port": "out"
      },
      "tgt": {
        "process": "core/Kick_7efi8",
        "port": "data"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Kick_7efi8",
        "port": "out"
      },
      "tgt": {
        "process": "core/MakeFunction_t17n",
        "port": "in"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "core/Split_jx318",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/Split_7oj15",
        "port": "sourcea"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "seriously/Invert_7xnl3",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/Split_7oj15",
        "port": "sourceb"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "dom/CreateElement_sf6ec",
        "port": "element"
      },
      "tgt": {
        "process": "dom/SetAttribute_3bmlw",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_4houj",
        "port": "element"
      },
      "tgt": {
        "process": "dom/CreateElement_sf6ec",
        "port": "container"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/RepeatAsync_grqs3",
        "port": "out"
      },
      "tgt": {
        "process": "dom/SetAttribute_3bmlw",
        "port": "value"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "core/Split_xyb8x",
        "port": "out"
      },
      "tgt": {
        "process": "core/RepeatAsync_grqs3",
        "port": "in"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "core/MakeFunction_t17n",
        "port": "out"
      },
      "tgt": {
        "process": "core/Split_xyb8x",
        "port": "in"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "core/Split_xyb8x",
        "port": "out"
      },
      "tgt": {
        "process": "strings/SendString_7g9h8",
        "port": "in"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "strings/SendString_7g9h8",
        "port": "out"
      },
      "tgt": {
        "process": "dom/CreateElement_sf6ec",
        "port": "tagname"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "core/Split_occbw",
        "port": "out"
      },
      "tgt": {
        "process": "core/RepeatAsync_647ff",
        "port": "in"
      },
      "metadata": {
        "route": "0"
      }
    },
    {
      "src": {
        "process": "core/RepeatAsync_647ff",
        "port": "out"
      },
      "tgt": {
        "process": "core/Kick_4njgs",
        "port": "in"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "core/Kick_4njgs",
        "port": "out"
      },
      "tgt": {
        "process": "routers/KickRouter_bzaiw",
        "port": "index"
      },
      "metadata": {
        "route": 0
      }
    },
    {
      "src": {
        "process": "routers/KickRouter_bzaiw",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/Ascii_17c9q",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "routers/KickRouter_bzaiw",
        "port": "out"
      },
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "source"
      },
      "metadata": {
        "route": "5"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_j674o",
        "port": "element"
      },
      "tgt": {
        "process": "interaction/ListenChange_z7m5u",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "interaction/ListenChange_z7m5u",
        "port": "value"
      },
      "tgt": {
        "process": "math/Multiply_3eldx",
        "port": "multiplicand"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "math/Multiply_3eldx",
        "port": "product"
      },
      "tgt": {
        "process": "seriously/Split_7oj15",
        "port": "angle"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "interaction/ListenChange_z7m5u",
        "port": "value"
      },
      "tgt": {
        "process": "math/Multiply_3v13k",
        "port": "multiplicand"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "math/Multiply_3v13k",
        "port": "product"
      },
      "tgt": {
        "process": "seriously/Hex_lx162",
        "port": "size"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "interaction/ListenChange_z7m5u",
        "port": "value"
      },
      "tgt": {
        "process": "math/Multiply_rbxrn",
        "port": "multiplicand"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "math/Multiply_rbxrn",
        "port": "product"
      },
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "distortion"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "interaction/ListenChange_z7m5u",
        "port": "value"
      },
      "tgt": {
        "process": "seriously/HueSaturation_bzfvt",
        "port": "hue"
      },
      "metadata": {
        "route": "3"
      }
    },
    {
      "src": {
        "process": "interaction/ListenMouse_1u0rk",
        "port": "click"
      },
      "tgt": {
        "process": "core/RunTimeout_3wulz",
        "port": "start"
      },
      "metadata": {
        "route": "9"
      }
    },
    {
      "src": {
        "process": "core/RunTimeout_3wulz",
        "port": "out"
      },
      "tgt": {
        "process": "core/Split_ho5ib",
        "port": "in"
      },
      "metadata": {
        "route": "0"
      }
    },
    {
      "src": {
        "process": "core/Split_ho5ib",
        "port": "out"
      },
      "tgt": {
        "process": "core/Kick_7efi8",
        "port": "in"
      },
      "metadata": {
        "route": "0"
      }
    },
    {
      "src": {
        "process": "dom/GetElement_ah36i",
        "port": "element"
      },
      "tgt": {
        "process": "core/Split_lbwyz",
        "port": "in"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_lbwyz",
        "port": "out"
      },
      "tgt": {
        "process": "interaction/ListenMouse_1u0rk",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_lbwyz",
        "port": "out"
      },
      "tgt": {
        "process": "dom/AddClass_9rihj",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "core/Split_lbwyz",
        "port": "out"
      },
      "tgt": {
        "process": "dom/RemoveClass_ec7ug",
        "port": "element"
      },
      "metadata": {
        "route": "10"
      }
    },
    {
      "src": {
        "process": "strings/SendString_zry4n",
        "port": "out"
      },
      "tgt": {
        "process": "dom/AddClass_9rihj",
        "port": "class"
      },
      "metadata": {
        "route": "0"
      }
    },
    {
      "src": {
        "process": "strings/SendString_lnf0z",
        "port": "out"
      },
      "tgt": {
        "process": "dom/RemoveClass_ec7ug",
        "port": "class"
      },
      "metadata": {
        "route": "0"
      }
    },
    {
      "src": {
        "process": "core/Split_ho5ib",
        "port": "out"
      },
      "tgt": {
        "process": "strings/SendString_lnf0z",
        "port": "in"
      },
      "metadata": {
        "route": "0"
      }
    },
    {
      "src": {
        "process": "interaction/ListenMouse_1u0rk",
        "port": "click"
      },
      "tgt": {
        "process": "strings/SendString_zry4n",
        "port": "in"
      },
      "metadata": {
        "route": "9"
      }
    },
    {
      "data": "#start",
      "tgt": {
        "process": "dom/GetElement_f4nkd",
        "port": "selector"
      }
    },
    {
      "data": "#vid",
      "tgt": {
        "process": "dom/GetElement_z64xf",
        "port": "selector"
      }
    },
    {
      "data": "src",
      "tgt": {
        "process": "dom/SetAttribute_uto4k",
        "port": "attribute"
      }
    },
    {
      "data": "#out",
      "tgt": {
        "process": "dom/GetElement_ah82a",
        "port": "selector"
      }
    },
    {
      "data": "#prev",
      "tgt": {
        "process": "dom/GetElement_85so0",
        "port": "selector"
      }
    },
    {
      "data": "#next",
      "tgt": {
        "process": "dom/GetElement_e16dy",
        "port": "selector"
      }
    },
    {
      "data": 0.01,
      "tgt": {
        "process": "seriously/Split_7oj15",
        "port": "fuzzy"
      }
    },
    {
      "data": "0.5",
      "tgt": {
        "process": "seriously/Split_7oj15",
        "port": "split"
      }
    },
    {
      "data": "0.25",
      "tgt": {
        "process": "seriously/HueSaturation_bzfvt",
        "port": "saturation"
      }
    },
    {
      "data": "return x.toDataURL(\"image/jpeg\", 0.85);",
      "tgt": {
        "process": "core/MakeFunction_t17n",
        "port": "function"
      }
    },
    {
      "data": "#save",
      "tgt": {
        "process": "dom/GetElement_ah36i",
        "port": "selector"
      }
    },
    {
      "data": "#saved",
      "tgt": {
        "process": "dom/GetElement_4houj",
        "port": "selector"
      }
    },
    {
      "data": "src",
      "tgt": {
        "process": "dom/SetAttribute_3bmlw",
        "port": "attribute"
      }
    },
    {
      "data": "img",
      "tgt": {
        "process": "strings/SendString_7g9h8",
        "port": "string"
      }
    },
    {
      "data": "0",
      "tgt": {
        "process": "core/Kick_4njgs",
        "port": "data"
      }
    },
    {
      "data": "#slider",
      "tgt": {
        "process": "dom/GetElement_j674o",
        "port": "selector"
      }
    },
    {
      "data": "6.283185",
      "tgt": {
        "process": "math/Multiply_3eldx",
        "port": "multiplier"
      }
    },
    {
      "data": 0.01,
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "verticalsync"
      }
    },
    {
      "data": "0.04",
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "linesync"
      }
    },
    {
      "data": 0.01,
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "time"
      }
    },
    {
      "data": "0.01",
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "bars"
      }
    },
    {
      "data": 0.15,
      "tgt": {
        "process": "seriously/TVGlitch_e1qre",
        "port": "scanlines"
      }
    },
    {
      "data": "0.1",
      "tgt": {
        "process": "math/Multiply_3v13k",
        "port": "multiplier"
      }
    },
    {
      "data": "0.1",
      "tgt": {
        "process": "math/Multiply_rbxrn",
        "port": "multiplier"
      }
    },
    {
      "data": "3000",
      "tgt": {
        "process": "core/RunTimeout_3wulz",
        "port": "time"
      }
    },
    {
      "data": "countdown",
      "tgt": {
        "process": "strings/SendString_zry4n",
        "port": "string"
      }
    },
    {
      "data": "countdown",
      "tgt": {
        "process": "strings/SendString_lnf0z",
        "port": "string"
      }
    }
  ]*/
};



var processes = {};
var groups = [];
var groups = [];
var connections = [];

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


function processForm(group, questions, level, forms, xOffset) {

  if (!level)
    level = 0;

  if (!xOffset)
    xOffset = 0;

  var xOffsetOut = xOffset;

  var nodes = [];

  var prevForm = [];
  for (var i = 0; i < questions.length; i++) {

    if (questions[i].form) {

      var formNodes = processForm(forms[questions[i].form].title, forms[questions[i].form].questions, level, forms, xOffset);


      if (i > 0) {
        connections.push({
          "src": {
            "process": nodes[nodes.length -1],
            "port": "out"
          },
          "tgt": {
            "process": formNodes.nodes[0],
            "port": "class"
          },
          "metadata": {
            "route": "0"
          }
        });
      }


      xOffset = formNodes.offset;

      groups.push({
        name: forms[questions[i].form].title,
        nodes: formNodes.nodes,
        spacing: 400,
        metadata: {
          description: "Esempio contenitore",
          color: 1,
          spacing: 10,
        }
      });

      nodes = nodes.concat(formNodes.nodes);

    } else {

      var key = makeid();

      var node = {
        "component": questions[i].question,
        "metadata": {
          id: key,
          "x": xOffset+ i*150 +200,
          "y": level*200, //+ i*100,
          "label": questions[i].question.substr(0, 15) + '..',
          padding: 400,
        }
      };

      if (i > 0) {
        connections.push({
          "src": {
            "process": nodes[nodes.length -1],
            "port": "out"
          },
          "tgt": {
            "process": key,
            "port": "class"
          },
          "metadata": {
            "route": "0"
          }
        });
      }

      xOffsetOut = xOffset+ i*150 +200;

      var n_elements = Object.keys(questions[i].mapAnswers).length -1;

      var off = node.metadata.x - n_elements*300*1.5;

      var n = 0;

      for (var k in questions[i].mapAnswers) {

        var target = questions[i].mapAnswers[k];

        var formNodes1 = processForm(forms[target], forms[target].questions, level + 1, forms, off + n);

        n += forms[target].questions.length * 350;

        connections.push({
          "src": {
            "process": key,
            "port": "out"
          },
          "tgt": {
            "process": formNodes1.nodes[0],
            "port": "class"
          },
          "metadata": {
            "route": "0"
          }
        });

        n++;

      }


      processes[key] = node;
      nodes.push(key);
    }
  }



  return {
    nodes: nodes,
    offset: xOffsetOut
  };
}


function trasformData(data) {

  for (var i in data) {

    if (data[i].root) {
      var rootForm = data[i];

      var elements = processForm('root', rootForm.questions, 0, data);

      groups.push({
        name: rootForm.title,
        nodes: elements.nodes,
        metadata: {
          description: "Esempio contenitore",
          color: 5,
          spacing: 70
        }
      });
    }
  }

  sample.processes = processes;
  sample.groups = groups;
  sample.connections = connections;

  return sample;
}


var sample2 = {
  "PDLyF1497539445751": {
    "questions": [{
      "form": "sGUme1497539445754"
    }, {
      "form": "XiVqb1497539445756"
    }, {
      "form": "FeNAM1497539445756"
    }],
    "title": "Questionario Privacy",
    "metadata": {
      "something": true
    },
    "root": true
  },
  "sGUme1497539445754": {
    "questions": [{
      "question": "Informazioni di base della Società",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "type": "textarea",
        "additionalInfo": "true",
        "subtitle": "Inserisci le informazioni di base della tua società",
        "placeholder": "Inserisci informazioni della società",
        "header": {
          "title": "Struttura societaria",
          "subtitle": "Fornisci tutte le informazioni necessarie per farci capire la struttura della tua società!",
          "items": ["Fornisci le informazioni in modo chiaro", "Compila tutti i campi per permetterci di avere una visione organica", "Carica files non pesanti oltre i 5 megabyte"]
        }
      }
    }, {
      "question": "Fornire visura storica",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "additionalInfo": "true",
        "type": "file",
        "subtitle": "Carica il file con la visione storica della vostra società"
      }
    }, {
      "question": "La Società ha almeno una sede nel territorio dell’Unione Europea?",
      "answers": [],
      "mapAnswers": {
        "Si, la mia società ha almeno una sede in UE": "dKGHF1497539445754",
        "No, la mia società non ha alcuna sede in UE": "VNHHT1497539445754"
      },
      "metadata": {
        "type": "radio",
        "options": ["Si, la mia società ha almeno una sede in UE", "No, la mia società non ha alcuna sede in UE"]
      }
    }],
    "title": "Struttura societaria",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "dKGHF1497539445754": {
    "questions": [{
      "question": "In questa sede viene svolta attività di trattamento dati?",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "Ricorda che ai sensi della normativa, si considera “attività di trattamento” qualunque operazione svolta.",
        "type": "radio",
        "options": ["Si", "No"]
      }
    }],
    "title": "caseyes",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "VNHHT1497539445754": {
    "questions": [{
      "question": "La Società offre beni o servizi all’interno del territorio dell’Unione Europea?",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "è irrilevante la presenza di una sede attraverso cui vengono offerti tali beni o servizi",
        "type": "radio",
        "options": ["Si", "No"]
      }
    }, {
      "question": "La Società monitora il comportamento dei clienti/ potenziali clienti all’interno del territorio dell’Unione Europea?",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "Ad. Esempio svolgendo attività di profilazione",
        "type": "radio",
        "options": ["Si", "No"]
      }
    }],
    "title": "caseno",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "XiVqb1497539445756": {
    "questions": [{
      "question": "La Vostra Società controlla, è controllata o collegata con altre società ?",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "type": "radio",
        "options": ["Si", "No"],
        "additionalInfo": "true",
        "header": {
          "title": "Gruppi societari",
          "subtitle": "Fornisci tutte le informazioni necessarie per farci capire la struttura della tua società!",
          "items": ["Fornisci le informazioni in modo chiaro", "Compila tutti i campi per permetterci di avere una visione organica", "Carica files non pesanti oltre i 5 megabyte"]
        }
      }
    }, {
      "question": "Fornire schema riepilogativo della struttura societaria.",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "Caricare un files, in qualsivoglia formato che rappresenta la struttura della società",
        "additionalInfo": "true",
        "type": "file"
      }
    }, {
      "question": "Il gruppo di cui fate parte ha società con sedi Extra-UE ?",
      "answers": [],
      "mapAnswers": {
        "Si": "xffXQ1497539445756"
      },
      "metadata": {
        "textarea": "Si intende società la cui casa madre ha una sede in una paese fuori dalla UE",
        "type": "radio",
        "options": ["Si", "No"]
      }
    }],
    "title": "Gruppi societari - Clienti",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "xffXQ1497539445756": {
    "questions": [{
      "question": "Indicare in quali paesi.",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "Separa i paesi con una virgola se sono più di uno",
        "type": "textarea"
      }
    }],
    "title": "caseyes",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "FeNAM1497539445756": {
    "questions": [{
      "question": "La Società comunica i dati dei propri dipendenti/collaboratori alla propria casa madre estera e/o infragruppo all’interno dell’UE? ",
      "answers": [],
      "mapAnswers": {
        "Si": "EgAGS1497539445756"
      },
      "metadata": {
        "type": "radio",
        "options": ["Si", "No"],
        "additionalInfo": "true",
        "header": {
          "title": "Trasferimento di dati all'estero",
          "subtitle": "Trasferimento di dati - Dipendenti",
          "items": ["Fornisci le informazioni in modo chiaro", "Compila tutti i campi per permetterci di avere una visione organica", "Carica files non pesanti oltre i 5 megabyte"]
        }
      }
    }, {
      "question": "I dipendenti/collaboratori sono informati della condivisione dei loro dati infragruppo?",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "",
        "additionalInfo": "true",
        "type": "radio",
        "options": ["Si", "No"]
      }
    }, {
      "question": "I dipendenti/collaboratori sono informati della condivisione dei loro dati infragruppo?",
      "answers": [],
      "mapAnswers": {
        "Si": "umVtI1497539445757"
      },
      "metadata": {
        "subtitle": "",
        "additionalInfo": "true",
        "type": "radio",
        "options": ["Si", "No"]
      }
    }],
    "title": "Gruppi societari - Dipendenti",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "EgAGS1497539445756": {
    "questions": [{
      "question": "Indicare finalità",
      "answers": [],
      "mapAnswers": {
        "Altro": "msyNM1497539445757"
      },
      "metadata": {
        "type": "checkbox",
        "options": ["Finalità_1", "Finalità_2", "Finalità_3", "Altro", "Finalità_7", "Finalità_8", "Finalità_9", "Finalità_boh"]
      }
    }],
    "title": "caseyes",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "msyNM1497539445757": {
    "questions": [{
      "question": "Specificare per quali altre finalità",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "additionalInfo": "true",
        "subtitle": "E' necessario conoscere tutte le finalità per cui tu comunichi i dati dei tuoi dipendenti",
        "type": "textarea"
      }
    }],
    "title": "casealtro",
    "metadata": {
      "something": true
    },
    "root": false
  },
  "umVtI1497539445757": {
    "questions": [{
      "question": "Quale strumento / quali strumenti di garanzia sono stati utilizzati a supporto?",
      "answers": [],
      "mapAnswers": {},
      "metadata": {
        "subtitle": "Scegliere una o più opzioni",
        "additionalInfo": "true",
        "type": "checkbox",
        "options": ["Model clauses", "Binding corporate rules", "Privacy shield", "Consenso degli interessati", "Adempimento contrattuale", "Interesse pubblico", "Meccanismo individuato da ente di certificazione / codice di condotta"]
      }
    }],
    "title": "caseyes",
    "metadata": {
      "something": true
    },
    "root": false
  }
};

var Form = require('./../../complex-form/form.js');

var a = new Form({title: "Gruppi societari", metadata: {something: true}});

a.addQuestion({
  question: 'La Vostra Società controlla, è controllata o collegata con altre società ?',
  metadata: {
    type: 'textarea',
    additionalInfo: 'true',
    header: ''
  }
});

a.addQuestion({
  question: 'Fornire schema riepilogativo della struttura societaria.',
  metadata: {
    additionalInfo: 'true',
    type: 'file'
  }
});

var b = a.addQuestion({
  question: 'Il gruppo di cui fate parte ha società con sedi Extra-UE ?',
  metadata: {
    type: 'radio'
  }
});

var a_1 = new Form({title: "caseyes", metadata: {something: true}});

a_1.addQuestion({
  question: 'indicare in quali paesi.',
  metadata: {
    type: 'textarea'
  }
});

a.getQuestion(2).addSubFormForAnswers(['si'], a_1);

module.exports.register = function (context) {

  var TheGraph = context.TheGraph;

  TheGraph.trasformData = trasformData;

  //TheGraph.example = trasformData(a.serialize());
  TheGraph.model = a;


};

//loadGraph(trasformData(a.serialize()));
//loadGraph(trasformData(sample2));




