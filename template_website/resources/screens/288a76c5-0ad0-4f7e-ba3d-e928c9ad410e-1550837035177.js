jQuery("#simulation")
  .on("click", ".s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/288a76c5-0ad0-4f7e-ba3d-e928c9ad410e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9cc9115f-f958-48bb-94e8-d0a1ff21774b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_4": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d80cff60-66ed-4dc2-938b-2bbc44dc1445",
                    "transition": {
                      "type": "flipvertical",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2a086ae6-4dfb-4704-acdb-2e23b3ce3510"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/12d6b07f-622e-4401-89a9-341863c6f6c5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_8 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_16 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_15 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_10 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_9 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "100"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_9 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_16 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_15 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_10 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_8 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "101"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "100"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_10 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_16 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_15 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_9 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_8 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "194"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "100"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_15 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_16 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_10 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_9 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_8 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "291"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "100"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_16 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_15 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_10 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_9 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_8 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "421"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "115"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_30 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_15 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_10 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_9 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Text_8 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "421"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "115"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e #s-Rectangle_4": {
                      "attributes-ie": {
                        "-pie-background": "#5E5E5E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-288a76c5-0ad0-4f7e-ba3d-e928c9ad410e .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    }
  });