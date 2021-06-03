Implement a function that returns the next available id in an array of objects. The ids are numerical and ascending - that is, each new entry to the array of objects has a higher id than any existing objects.

The object structure is:
```
{
   id: 3,
   label: "Tiger"
}   
```
Example:
```
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

nextId(data) // should return 11
```
If data is empty, nextId(data) should return 1
