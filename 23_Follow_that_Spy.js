function findRoutes(routesArray) {
    var allPlaces = new Set();
    var routeMap = {};
  
    routesArray.forEach(function(route) {
      allPlaces.add(route[0]);
      allPlaces.add(route[1]);
      if (!routeMap[route[0]]) {
        routeMap[route[0]] = [];
      }
      routeMap[route[0]].push(route[1]);
    });
  
    var sortedPlaces = Array.from(allPlaces).sort();
    var visited = new Set();
    var routes = [];
  
    function dfs(place) {
      visited.add(place);
  
      if (routeMap[place]) {
        routeMap[place].forEach(function(nextPlace) {
          if (!visited.has(nextPlace)) {
            dfs(nextPlace);
          }
        });
      }

      routes.unshift(place);
    }
  
    sortedPlaces.forEach(function(place) {
      if (!visited.has(place)) {
        dfs(place);
      }
    });
  
    return routes.join(', ');
  }
  
  describe("Follow That Spy", function() {
    it("Fixed", function() {
      var routes1 = findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]);
      Test.assertEquals(routes1, "MNL, TAG, CEB, TAC, BOR");
      var routes2 = findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]);
      Test.assertEquals(routes2, "UK, GER, BEL, CAN");
      var routes3 = findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]);
      Test.assertEquals(routes3, "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle");
      var routes4 = findRoutes([["Agra", "Tokyo"], ["Seoul", "Ljubljana"], ["Ljubljana", "Wroclaw"], ["Wroclaw", "Nashville"], ["Nashville", "Amsterdam"], ["Amsterdam", "Hull"], ["Hull", "Vancouver"], ["Vancouver", "Agra"], ["Tokyo", "Manila"]]);
      Test.assertEquals(routes4, "Seoul, Ljubljana, Wroclaw, Nashville, Amsterdam, Hull, Vancouver, Agra, Tokyo, Manila");
      var routes5 = findRoutes([["Calgary", "Fargo"], ["Spokane", "Toronto"], ["Winnipeg", "Montreal"], ["Toronto", "Calgary"], ["Fargo", "Winnipeg"]]);
      Test.assertEquals(routes5, "Spokane, Toronto, Calgary, Fargo, Winnipeg, Montreal");
      var routes6 = findRoutes([["BRA", "KSA"], ["USA", "BRA"], ["JPN", "PHL"], ["KSA", "UAE"], ["UAE", "JPN"]]);
      Test.assertEquals(routes6, "USA, BRA, KSA, UAE, JPN, PHL");
      var routes7 = findRoutes([["HQ", "SH"]]);
      Test.assertEquals(routes7, "HQ, SH");
      var routes8 = findRoutes([["San Policarpo", "Oras"], ["Balangiga", "Lawaan"], ["Borongan", "Maydolong"], ["Jipapad", "Maslog"], ["Balangkayan", "Llorente"], ["Mercedes", "Guiuan"], ["Taft", "Sulat"], ["Sulat", "San Julian"], ["Arteche", "San Policarpo"], ["Oras", "Dolores"], ["Dolores", "Can-avid"], ["Can-avid", "Taft"], ["San Julian", "Borongan"], ["Maydolong", "Balangkayan"], ["Llorente", "Hernani"], ["Hernani", "General MacArthur"], ["General MacArthur", "Giporlos"], ["Giporlos", "Balangiga"], ["Lawaan", "Salcedo"], ["Salcedo", "Mercedes"], ["Maslog", "Arteche"]]);
      Test.assertEquals(routes8, "Jipapad, Maslog, Arteche, San Policarpo, Oras, Dolores, Can-avid, Taft, Sulat, San Julian, Borongan, Maydolong, Balangkayan, Llorente, Hernani, General MacArthur, Giporlos, Balangiga, Lawaan, Salcedo, Mercedes, Guiuan");
    });
  });