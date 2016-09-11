 /*
All exercise from `"Data Structures and Algorithms with JavaScript" by Michael McMillan`
*/

/*
1. Write a function that inserts an element into a list only if the element to be 
inserted is larger than any of the elements currently in the list. 
Larger can mean either greater than when working with numeric values, or 
further down in the alphabet, when working with textual values.
*/ 

  largest(value) {                         
      let max = Math.max.apply(Math, this.memory); 
      if (value > max) {
          this.push(value);
      }  else {
          console.log('element is not largest');
      }          
  } 

/*
2. Write a function that inserts an element into a list only if the element 
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