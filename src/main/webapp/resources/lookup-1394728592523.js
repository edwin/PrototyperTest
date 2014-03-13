(function(window, undefined) {
  var dictionary = {
    "44f9f3d3-fc84-431d-ae2e-e5b2730d6bfc": "health plan - man over 30",
    "69ae3315-bba3-4578-8229-2240341ca672": "Plan detail",
    "2b35da45-5514-4dd6-abc8-8ac5b6a29c5e": "Health plans - payment 2",
    "620b4236-46e8-44fc-a79c-c6532aca547c": "Mission & values",
    "deb9bdf6-f097-42d1-9924-ea3790c7b7f9": "Health plans - medical history",
    "6754f284-5b0c-479f-96c4-e97958f93a7a": "Health plans",
    "9390cc95-7713-47d9-875b-142fb75a7294": "contact",
    "073f4bd0-6dcd-43d3-b38d-f93051bf4c4e": "employee_loggedin",
    "13f89107-5c2f-4515-a766-088944a36cfb": "About us",
    "9325ba04-54b5-457a-8082-6c2b74316ff7": "Plan detail 2",
    "b4d769f2-c0fa-4d7a-92d4-f6e1f36ca555": "admin_ loggedin",
    "4a62240e-9bcb-465a-afa2-e7cfb50e75e6": "Health plans - choose plan",
    "e144d61f-b155-47cc-bf0b-842a70dae4af": "Home",
    "272db33c-1f0b-4641-8582-538d89e9549a": "Health plans - payment",
    "7c383df9-abf1-49a7-a7f8-1688c19d3d1c": "banner",
    "2150a1d3-0804-4cba-b7c6-35eb368fea3a": "Template 1",
    "a10e5122-7661-4f1e-b249-57b23f05d877": "banner large",
    "e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4": "login"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);