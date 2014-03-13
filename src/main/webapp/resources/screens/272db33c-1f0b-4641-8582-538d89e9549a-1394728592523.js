jQuery("#simulation")
  .on("click", ".s-272db33c-1f0b-4641-8582-538d89e9549a .click", function(event, data) {
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
    } else if(jFirer.is("#s-Label_8")) {
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
    }
  })
  .on("pageload", ".s-272db33c-1f0b-4641-8582-538d89e9549a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_18")) {
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
    }
  });