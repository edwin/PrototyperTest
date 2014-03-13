jQuery("#simulation")
  .on("click", ".t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Rectangle_3")) {
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
    } else if(jFirer.is("#t-Rectangle_4")) {
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
    } else if(jFirer.is("#t-Rectangle_5")) {
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
    } else if(jFirer.is("#t-Rectangle_8")) {
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
    } else if(jFirer.is("#t-Rectangle_9")) {
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
    } else if(jFirer.is("#t-Image_2")) {
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
    }
  })
  .on("mouseenter dragenter", ".t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_3": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_3": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_3": {
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
    } else if(jFirer.is("#t-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_4": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_4": {
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
    } else if(jFirer.is("#t-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_5": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_5": {
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
    } else if(jFirer.is("#t-Rectangle_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_8": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_8": {
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
    } else if(jFirer.is("#t-Rectangle_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_9": {
                      "attributes": {
                        "opacity": "0.43"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_9": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=43)",
                        "filter": "alpha(opacity=43)"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Rectangle_9": {
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
    } else if(jFirer.is("#t-Image_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Image_2": {
                      "attributes": {
                        "opacity": "0.58"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Image_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=58)",
                        "filter": "alpha(opacity=58)"
                      }
                    }
                  },{
                    "#t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c #t-Image_2": {
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
  .on("mouseleave dragleave", ".t-7c383df9-abf1-49a7-a7f8-1688c19d3d1c .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Rectangle_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Image_2")) {
      jEvent.undoCases(jFirer);
    }
  });