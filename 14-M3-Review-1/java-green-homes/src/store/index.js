import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homes: [
      {
        "mlsNumber": "1000",
        "imageName": require("../assets/1000.jpg"),
        "address": {
          "addressLine": "123 Elm Street",
          "city": "Columbus",
          "state": "Ohio",
          "zipCode": 43323
        },
        "numberOfBedrooms": 3.0,
        "numberOfBathrooms": 4.0,
        "price": 250000.00,
        "description": "Freddies Nightmare will come to your life in the classic home. Sweet dreams!"
      },
      {
        "mlsNumber": "1001",
        "imageName": require("../assets/1001.jpg"),
        "address": {
          "addressLine": "125 Elm Street",
          "city": "Columbus",
          "state": "Ohio",
          "zipCode": 43323
        },
        "numberOfBedrooms": 3.0,
        "numberOfBathrooms": 3.0,
        "price": 100000.00,
        "description": "Nice house but the neighbor is a little strange."
      },
      {
        "mlsNumber": "1002",
        "imageName": require("../assets/1002.jpg"),
        "address": {
          "addressLine": "777 Oak Street",
          "city": "Dublin",
          "state": "Ohio",
          "zipCode": 43017
        },
        "numberOfBedrooms": 5.0,
        "numberOfBathrooms": 3.0,
        "price": 350000.00,
        "description": "Charming house far away from those Elm street weirdos."
      },
      {
        "mlsNumber": "1003",
        "imageName": require("../assets/1003.jpg"),
        "address": {
          "addressLine": "555 E Main Street",
          "city": "Columbus",
          "state": "Ohio",
          "zipCode": 43203
        },
        "numberOfBedrooms": 25.0,
        "numberOfBathrooms": 10.0,
        "price": 450000.00,
        "description": "This house was featured on the reality tv show: Kevin Flipped My House."
      },
      {
        "mlsNumber": "1004",
        "imageName": require("../assets/1004.jpg"),
        "address": {
          "addressLine": "127 Slider Lane",
          "city": "Columbus",
          "state": "Ohio",
          "zipCode": 43210
        },
        "numberOfBedrooms": 25.0,
        "numberOfBathrooms": 10.0,
        "price": 150000.00,
        "description": "Next door to the White Castle, always be on the lookout for Harold and Kumar!"
      },
      {
        "mlsNumber": "1005",
        "imageName": require("../assets/1005.jpg"),
        "address": {
          "addressLine": "127 Crime Fighters Blvd",
          "city": "Columbus",
          "state": "Ohio",
          "zipCode": 43210
        },
        "numberOfBedrooms": 25.0,
        "numberOfBathrooms": 10.0,
        "price": 750000.00,
        "description": "Rumour has it batman used to live here before upgrading to the bat cave!"
      }
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
