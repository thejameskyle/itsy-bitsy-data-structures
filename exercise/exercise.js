 /*
All exercise from `"Data Structures and Algorithms with JavaScript" by Michael McMillan`
*/
          
/*
LL   LL   LL   LLLLLL
LL   LL LL  LL   LL
LL   LL   LL     LL 
LL   LL LL  LL   LL
LLLL LL   LL     LL
*/

/*
Write a function that inserts an element into a list only if the element to be 
inserted is larger than any of the elements currently in the list. 
Larger can mean either greater than when working with numeric values, or 
further down in the alphabet, when working with textual values.
*/ 

larger(value) {                         
    let max = Math.max.apply(Math, this.memory); 
    if (value > max) {
        this.push(value);
    }  else {
        console.log('element is not largest');
    }          
} 

/*
Write a function that inserts an element into a list only if the element 
to be inserted is smaller than any of the elements currently in the list.
*/

smaller(value) {                         
    let min = Math.min.apply(Math, this.memory); 
    if (value < min) {
        this.unshift(value);
    }  else {
        console.log('element is not smallest');
    }          
}

/*
Insert: Inserting an Element into a List
*/

insert(value, after) {
    let insertPosition = this.memory.findIndex(function match(v){
        return after === v;
    });
    if(insertPosition) {
        this.memory.splice(insertPosition + 1, 0, value);
        this.length += 1;
        return true;
    }
    return false;
}

/*
Clear: Removing All Elements from a List
*/

clear() {
    this.memory.length = 0;
    this.length = 0;
}

/*
Contains: Determining if a Given Value Is in a List
*/

contains(value) {
    return this.memory.find(function match(v){
        return value === v;
    });
}













