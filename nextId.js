function nextId(data) {
    // your code here
let lastDataEntry = data[data.length - 1];
return lastDataEntry.id + 1
}

let data = [
   {
     id: 1,
     label: "Rose"
   },
   {
     id: 3,
     label: "Tiger"
   },
   {
     id: 10,
     label: "Tree"
   }
]  

console.log(nextId(data))

module.exports = nextId
