jQuery("#simulation")
  .on("click", ".s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-plans"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-plans",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Plans",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "action": "jimSelectData",
                            "parameter": {
                              "datatype": "datarow",
                              "datamaster": "Quotes",
                              "element": "#s-quotes_2",
                              "value": {
                                "field": "Plans"
                              }
                            }
                          },{
                            "field": "Name"
                          } ]
                        }
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
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": "#s-quotes_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": "#s-quotes_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Plans",
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "Plans",
                      "element": "#s-plans"
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9325ba04-54b5-457a-8082-6c2b74316ff7",
                    "popup": {
                      "width": 730,
                      "height": 250,
                      "iscentered": true,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "no",
                      "isresizable": "no"
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
    jFirer.parents("tr.datarow").trigger("click");
  })
  .on("pageload", ".s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-quotes_2",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Quotes",
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Assigned to"
                          },{
                            "datatype": "variable",
                            "element": "logged employee"
                          } ]
                        }
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
    } else if(jFirer.is("#s-Rich_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Rich_text_1",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ {
                          "target": "#s-Rich_text_1"
                        }," " ]
                      },{
                        "datatype": "variable",
                        "element": "logged employee"
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
  })
  .on("mouseenter dragenter", ".s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Input_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e .s-Input_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "8pt"
                      }
                    }
                  },{
                    "#s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e .s-Input_10 input": {
                      "attributes": {
                        "color": "#1E4C79",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "Arial",
                        "font-size": "8pt",
                        "font-style": "normal",
                        "font-weight": "400"
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
  .on("mouseleave dragleave", ".s-073f4bd0-6dcd-43d3-b38d-f93051bf4c4e .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Input_10")) {
      jEvent.undoCases(jFirer);
    }
  });