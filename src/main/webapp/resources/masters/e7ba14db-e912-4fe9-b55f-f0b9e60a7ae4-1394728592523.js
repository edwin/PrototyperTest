jQuery("#simulation")
  .on("click", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "target": "#m-e7ba14db-Input_1"
                  },"admin" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "target": "#m-e7ba14db-Input_2"
                  },"medicalcare" ]
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
                          },{
                            "target": "#m-e7ba14db-Input_1"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "target": "#m-e7ba14db-Input_2"
                          } ]
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
                    "value": {
                      "target": "#m-e7ba14db-Input_1"
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/073f4bd0-6dcd-43d3-b38d-f93051bf4c4e"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#m-e7ba14db-Label_3"
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
  .on("keyup.jim", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#m-e7ba14db-Input_2",
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
                    "target": "#m-e7ba14db-Input_2"
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
  .on("pageload", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#m-e7ba14db-Label_3"
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