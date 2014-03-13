jQuery("#simulation")
  .on("click", ".s-9390cc95-7713-47d9-875b-142fb75a7294 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_1"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_7"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_1": {
                      "attributes": {
                        "background-color": "#FF8080",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF4A4A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF4A4A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF4A4A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF4A4A",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_1": {
                      "attributes-ie": {
                        "-pie-background": "#FF8080",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_7"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_2"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_8"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_2": {
                      "attributes": {
                        "background-color": "#FF8080",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF4A4A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF4A4A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF4A4A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF4A4A",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FF8080",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_8",
                    "value": "This field is required"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "target": "#s-Input_2"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_8"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_2": {
                      "attributes": {
                        "background-color": "#FF8080",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF4A4A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF4A4A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF4A4A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF4A4A",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FF8080",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_8",
                    "value": "That is not a valid email address"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_8"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimGetSelection",
                  "parameter": {
                    "target": "#s-Category_1"
                  }
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_9"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Category_1": {
                      "attributes": {
                        "background-color": "#FF8080",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF4A4A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF4A4A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF4A4A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF4A4A",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Category_1-options": {
                      "attributes-ie": {
                        "-pie-background": "#FF8080",
                        "-pie-poll": "false",
                        "background-color": "#FF8080"
                      }
                    }
                  } ]
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_9"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Category_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-9390cc95-7713-47d9-875b-142fb75a7294 #s-Category_1-options": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false",
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNotEquals",
                      "parameter": [ {
                        "target": "#s-Input_1"
                      },"" ]
                    },{
                      "action": "jimNotEquals",
                      "parameter": [ {
                        "target": "#s-Input_2"
                      },"" ]
                    } ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "action": "jimGetSelection",
                      "parameter": {
                        "target": "#s-Category_1"
                      }
                    },"" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "target": "#s-Input_2"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "contact",
                    "fields": {
                      "name": {
                        "target": "#s-Input_1"
                      },
                      "mail": {
                        "target": "#s-Input_2"
                      },
                      "message": {
                        "target": "#s-Input_3"
                      },
                      "subject": {
                        "action": "jimGetSelection",
                        "parameter": {
                          "target": "#s-Category_1"
                        }
                      }
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_7"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_7"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": ""
                  }
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-Category_1",
                    "value": ""
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": ""
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });