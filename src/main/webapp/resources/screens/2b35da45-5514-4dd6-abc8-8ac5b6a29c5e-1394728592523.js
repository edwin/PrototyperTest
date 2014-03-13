jQuery("#simulation")
  .on("click", ".s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "Quotes",
                    "fields": {
                      "Plans": {
                        "action": "jimSelectData",
                        "parameter": {
                          "datatype": "variable",
                          "element": "Plans",
                          "value": {
                            "field": "Name"
                          }
                        }
                      },
                      "Title": {
                        "datatype": "variable",
                        "element": "title"
                      },
                      "First Name": {
                        "datatype": "variable",
                        "element": "fist name"
                      },
                      "Middle initials": {
                        "datatype": "variable",
                        "element": "middle"
                      },
                      "Family name": {
                        "datatype": "variable",
                        "element": "family"
                      },
                      "Date of birth": {
                        "datatype": "variable",
                        "element": "date"
                      },
                      "Gender": {
                        "datatype": "variable",
                        "element": "gender"
                      },
                      "Nationality": {
                        "datatype": "variable",
                        "element": "nationality"
                      },
                      "Country of residence": {
                        "datatype": "variable",
                        "element": "residence"
                      },
                      "Email": {
                        "datatype": "variable",
                        "element": "email"
                      },
                      "Phone": {
                        "datatype": "variable",
                        "element": "phone"
                      },
                      "Heart disorders": {
                        "datatype": "variable",
                        "element": "heart"
                      },
                      "Endocrine disorders": {
                        "datatype": "variable",
                        "element": "endocrine"
                      },
                      "Breathing disorders": {
                        "datatype": "variable",
                        "element": "breathing"
                      },
                      "Stomach disorders": {
                        "datatype": "variable",
                        "element": "stomach"
                      },
                      "Assigned to": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e144d61f-b155-47cc-bf0b-842a70dae4af"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/deb9bdf6-f097-42d1-9924-ea3790c7b7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/13f89107-5c2f-4515-a766-088944a36cfb"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/620b4236-46e8-44fc-a79c-c6532aca547c"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6754f284-5b0c-479f-96c4-e97958f93a7a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9390cc95-7713-47d9-875b-142fb75a7294"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6754f284-5b0c-479f-96c4-e97958f93a7a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e144d61f-b155-47cc-bf0b-842a70dae4af"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ null,"admin" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ null,"medicalcare" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimCountData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "employees",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "name"
                          },null ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },null ]
                        } ]
                      }
                    }
                  }
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "logged employee",
                    "value": null
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/073f4bd0-6dcd-43d3-b38d-f93051bf4c4e"
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
  .on("pageload", ".s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_11",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "USD ",{
                          "action": "jimRound",
                          "parameter": [ {
                            "datatype": "variable",
                            "element": "total"
                          },"2" ]
                        } ]
                      }," Annually" ]
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
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_17"
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
  .on("mouseenter dragenter", ".s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_6": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_6": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_6": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_7": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_8": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_9": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_9": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_12": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Rectangle_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Image_3": {
                      "attributes": {
                        "opacity": "0.58"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Image_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=58)",
                        "filter": "alpha(opacity=58)"
                      }
                    }
                  },{
                    "#s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e #s-Image_3": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=58)",
                        "filter": "alpha(opacity=58)"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-2b35da45-5514-4dd6-abc8-8ac5b6a29c5e .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_3")) {
      jEvent.undoCases(jFirer);
    }
  });