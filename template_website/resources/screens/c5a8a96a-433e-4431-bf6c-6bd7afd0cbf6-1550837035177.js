jQuery("#simulation")
  .on("click", ".s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 .click", function(event, data) {
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
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2": {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_2": {
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
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3": {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_3": {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4": {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_4": {
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
                    "target": "screens/d80cff60-66ed-4dc2-938b-2bbc44dc1445"
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5": {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Text_5": {
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/682428d2-1820-472d-ab3e-19f5b249b7a8"
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
    }
  })
  .on("mouseup", ".s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 .mouseup", function(event, data) {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Rectangle_2": {
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
  .on("mousedown", ".s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 .mousedown", function(event, data) {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Rectangle_2": {
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
  .on("mouseenter dragenter", ".s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 .mouseenter", function(event, data) {
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
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Rectangle_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  },{
                    "#s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 #s-Rectangle_2": {
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
  .on("mouseleave dragleave", ".s-c5a8a96a-433e-4431-bf6c-6bd7afd0cbf6 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    }
  });