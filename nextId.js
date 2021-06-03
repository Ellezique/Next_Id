function nextId(data) {
    // your code here
    //Check that there is a data array and that it is not empty i.e. it has a length
    if (Array.isArray(data) && data.length) {    
        //return highest id in array + 1
        return data.id.sort(function(a, b){return b-a})] + 1
    //if there is no data array or if it is empty, return 1
    } else {
        return 1
    }
}


module.exports = nextId
