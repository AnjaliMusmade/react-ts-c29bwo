import React, { Component } from 'react';
import ReactDOM  from 'react-dom';


var oldObj={
  FirstNAme:"Anjali",
  LastNamne:"Musmade",
  Salary:100
};

var newObj={...oldObj,Salary:2000};

console.log(oldObj);
console.log(newObj);

var arr=[1,2,3,4];
var arr2=[...arr,5,6,7];

console.log(arr);
console.log(arr2);

ReactDOM.render( <div>Hello</div>,document.getElementById('root'));


