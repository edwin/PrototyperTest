jQuery("#simulation")
  .on("click", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Tab_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Tab_1"
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
  .on("pageload", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-Category_1",
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "datarow",
                        "datamaster": "Quotes",
                        "element": "#s-quotes_2",
                        "value": {
                          "field": "Assigned to"
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
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Category_1",
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "employees",
                        "value": {
                          "field": "name"
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
  })
  .on("change", ".s-b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555 .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datagrid",
                      "datamaster": "Quotes",
                      "element": "#s-quotes_2",
                      "value": {
                        "target": ".s-Input_15"
                      }
                    },
                    "fields": {
                      "Plans": null,
                      "Title": null,
                      "First Name": null,
                      "Middle initials": null,
                      "Family name": null,
                      "Date of birth": null,
                      "Gender": null,
                      "Nationality": null,
                      "Country of residence": null,
                      "Email": null,
                      "Phone": null,
                      "Heart disorders": null,
                      "Endocrine disorders": null,
                      "Breathing disorders": null,
                      "Stomach disorders": null,
                      "Assigned to": {
                        "action": "jimGetSelection",
                        "parameter": {
                          "target": "#s-Category_1"
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