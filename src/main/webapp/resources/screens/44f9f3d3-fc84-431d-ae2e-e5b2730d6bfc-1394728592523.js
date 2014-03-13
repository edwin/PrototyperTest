jQuery("#simulation")
  .on("click", ".s-44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_3")) {
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
                      "target": ".s-Input_2"
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
  .on("pageload", ".s-44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-man over 30",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "Plans",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimEquals",
                            "parameter": [ null,"men" ]
                          },{
                            "action": "jimGreater",
                            "parameter": [ null,"30" ]
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
    }
  });