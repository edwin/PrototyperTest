jQuery("#simulation")
  .on("click", ".s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .click", function(event, data) {
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "Plans",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datagrid",
                        "datamaster": "Plans",
                        "element": "#s-plans",
                        "value": {
                          "target": ".s-Input_4"
                        }
                      }
                    }
                  }
                },
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
    } else if(jFirer.is("#s-Label_18")) {
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
    } else if(jFirer.is(".s-Input_1")) {
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
                    "target": "screens/69ae3315-bba3-4578-8229-2240341ca672",
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
  .on("mouseenter dragenter", ".s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "8pt"
                      }
                    }
                  },{
                    "#s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .s-Input_1 input": {
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
  .on("mouseleave dragleave", ".s-4a62240e-9bcb-465a-afa2-e7cfb50e75e6 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is(".s-Input_1")) {
      jEvent.undoCases(jFirer);
    }
  });