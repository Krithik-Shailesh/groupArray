var groupArray = require('group-array');

/*
Data response for /apps


var data = [
    {
      "_id": "public:0x2574e20481daeb02981fd67bbdbb331e9498f6071461c04efbf9ed539e584c33",
      "name": "MRL State Machine",
      "description": "commerce sm",
      "category": "CommerceSM",
      "metaData": {},
      "logo": "",
      "icon": "",
      "startAt": "PurchaseOrder"
    },
    {
      "_id": "public:0x5674e20481daeb02981fd67bbdbb331e9498f6071461c04efbf9ed539e584c34",
      "name": "Bosch State Machine",
      "description": "store information",
      "category": "PurchaseSM",
      "metaData": {},
      "logo": "",
      "icon": "",
      "startAt": "Contract"
    },
    {
        "_id": "public:0x5674e20481daeb02981fd67bbdbb331e9498f6071461c04efbf9ed539e584c34",
        "name": "Bosch State Machine",
        "description": "store information",
        "category": "PurchaseSM",
        "metaData": {},
        "logo": "",
        "icon": "",
        "startAt": "Cont"
      }

  ]
let map = new Map()

data.forEach(element => {
    if(map.has(element.category)){

        let val =map.get(element.category)

        val.push(element)
        map.set(element.category, val)
        
    }
    else{
        map.set(element.category, [element])
    }
  });

  console.log(map)
  */
// let arr = groupArray(data, 'category')

// console.log(arr);



/*
sm half done response
var data ={
    "sm": "public:0xw37ae7b9ab33812ee49bb1f3fe4ee8656d0ed6a9a54198d2339c59952335890e-0x77bD16B6d1344D1178F0ba95C4bDA2FF3baf1b53",
    "stateTo": "PurchaseOrder",
    "data": [
      {
        "_id": "0xfd7ae7b9ab33812ee49bb1f3fe4ee8656d0ed6a9a54198d2339c59952335730e-0x77bD16B6d1344D1178F0ba95C4bDA2FF3baf1b53",
        "customer": {
          "name": "Bosch"
        },
        "provider": {
          "name": "TVS Logistices"
        },
        "totalPaymentDue": {
          "price": 10000
        }
      }
    ],
    "filterOptions": {
      "pageSize": 50,
      "currentPage": 1,
      "count": 0
    }
  }


  let response = []

  let obj = {
      MainHeading : data.stateTo
  }

  response.push(obj)

  console.log(Object.keys(data.data[0]))
  */


var data = {
    "sm": "public:0x2574e20481daeb02981fd67bbdbb331e9498f6071461c04efbf9ed539e584c33-0x77bD16B6d1344D1178F0ba95C4bDA2FF3baf1b53",
    "stateTo": "PurchaseOrder",
    "data": [
        {
            "_id": "0xfd7ae7b9ab33812ee49bb1f3fe4ee8656d0ed6a9a54198d2339c59952335730e-0x77bD16B6d1344D1178F0ba95C4bDA2FF3baf1b53",
            "purchaseOrderNumber": "PO/01",
            "paymentTerms": 10,
            "customer": {
                "name": "Bosch"
            },
            "provider": {
                "name": "Mahindra Logistics"
            },
            "totalPaymentDue": {
                "price": 10089
            },
            "referencesOrder": {
                "orderDate": 1620046220000
            },
            "childStates": {
                "Schedule":{
                    
                },
                "GatePass":{

                },
                "Completed":{

                }
            }
            
        },
        {
            "_id": "0x897ae7b9ab33812ee49bb1f3fe4ee8656d0ed6a9a54198d2339c59952335730e-0x77bD16B6d1344D1178F0ba95C4bDA2FF3baf1b53",
            "purchaseOrderNumber": "PO/02",
            "paymentTerms": 120,
            "customer": {
                "name": "Bosch"
            },
            "provider": {
                "name": "Mahindra Logistics"
            },
            "totalPaymentDue": {
                "price": 10089
            },
            "referencesOrder": {
                "orderDate": 1620046220000
            }
        }
    ],
    "filterOptions": {
        "pageSize": 50,
        "currentPage": 1,
        "count": 0
    }
}
let obj = data;


let response ={}

response.mainHeading = data.stateTo;

response.tableHead = [];
response.tableVal = [];


  for(let i in data.data){

    delete obj.data[i].childStates
    delete obj.data[i]._id

    console.log(typeof Object.values(obj.data[i]))
    
    console.log(Object.keys(obj.data[i]))
    
    if(typeof Object.values(obj.data[i]) === 'object'){
        console.log(1)
    }
  }

  response.tableHead = (Object.keys(obj.data[0]))


  console.log(response.tableVal[0]);