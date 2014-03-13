jQuery("#simulation")
  .on("click", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimGetSelection",
                  "parameter": {
                    "target": "#s-Category_2"
                  }
                },"---" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_2": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_2-options": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false",
                        "background-color": "#FF4848"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_2-options": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false",
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                  "target": "#s-Input_5"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_5": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                  "target": "#s-Input_1"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                },"---" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_1": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_1-options": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false",
                        "background-color": "#FF4848"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_1-options": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false",
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                    "target": "#s-Category_3"
                  }
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_3": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_3-options": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false",
                        "background-color": "#FF4848"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_3-options": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false",
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                    "target": "#s-Category_4"
                  }
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_4": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_4-options": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false",
                        "background-color": "#FF4848"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Category_4-options": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false",
                        "background-color": "#FFFFFF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                  "target": "#s-Input_4"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_4": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "target": "#s-Input_4"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_21"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_21"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                  "target": "#s-Input_8"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_20"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8": {
                      "attributes": {
                        "background-color": "#FF4848",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8": {
                      "attributes-ie": {
                        "-pie-background": "#FF4848",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-6754f284-5b0c-479f-96c4-e97958f93a7a #s-Input_8": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "target": "#s-Input_4"
                  },{
                    "target": "#s-Input_7"
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "target": "#s-Input_7"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_22"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "true"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_22"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "errorplan1",
                    "value": "false"
                  }
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
                  "datatype": "variable",
                  "element": "errorplan1"
                },"false" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4a62240e-9bcb-465a-afa2-e7cfb50e75e6"
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
  })
  .on("keyup.jim", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_6",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_5",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_1",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_2",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Category_3",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Category_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Category_1",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Category_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Category_4",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Category_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_4",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_7",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_7"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Input_8",
                    "axis": "scrollxy",
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 1000
                    }
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Input_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageunload", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fist name",
                    "value": {
                      "target": "#s-Input_5"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "title",
                    "value": {
                      "action": "jimGetSelection",
                      "parameter": {
                        "target": "#s-Category_2"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "middle",
                    "value": {
                      "target": "#s-Input_6"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "family",
                    "value": {
                      "target": "#s-Input_1"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "age",
                    "value": {
                      "target": "#s-Input_3"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "gender",
                    "value": {
                      "action": "jimGetSelection",
                      "parameter": {
                        "target": "#s-Category_1"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "date",
                    "value": {
                      "target": "#s-Input_2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "nationality",
                    "value": {
                      "action": "jimGetSelection",
                      "parameter": {
                        "target": "#s-Category_3"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "residence",
                    "value": {
                      "action": "jimGetSelection",
                      "parameter": {
                        "target": "#s-Category_4"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "email",
                    "value": {
                      "target": "#s-Input_4"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "phone",
                    "value": {
                      "target": "#s-Input_8"
                    }
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
  })
  .on("change", ".s-6754f284-5b0c-479f-96c4-e97958f93a7a .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_18",
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "target": "#s-Input_2"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimIndexOf",
                          "parameter": [ {
                            "target": "#s-Input_2"
                          },"/" ]
                        },"1" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "target": "#s-Input_2"
                        } ]
                      } ]
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_18",
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "target": "#s-Label_18"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimIndexOf",
                          "parameter": [ {
                            "target": "#s-Label_18"
                          },"/" ]
                        },"1" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "target": "#s-Label_18"
                        } ]
                      } ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_19",
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemDate"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimIndexOf",
                          "parameter": [ {
                            "action": "jimSystemDate"
                          },"/" ]
                        },"1" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "action": "jimSystemDate"
                        } ]
                      } ]
                    }
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_19",
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "target": "#s-Label_19"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimIndexOf",
                          "parameter": [ {
                            "target": "#s-Label_19"
                          },"/" ]
                        },"1" ]
                      },{
                        "action": "jimCount",
                        "parameter": [ {
                          "target": "#s-Label_19"
                        } ]
                      } ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "target": "#s-Label_19"
                      },{
                        "target": "#s-Label_18"
                      } ]
                    }
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