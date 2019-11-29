import React, { Component } from 'react';
import ReactDOM  from 'react-dom';


var oldObj={
  FirstNAme:"Anjali",
  LastNamne:"Musmade",
  Salary:100
};
//cloning using spread
var newObj={...oldObj,Salary:2000};

console.log(oldObj);
console.log(newObj);

var arr=[1,2,3,4];
var arr2=[...arr,5,6,7];

console.log(arr);
console.log(arr2);

var objAssigned=Object.assign({},oldObj,{Salary:4000,Project:"ABC"});
console.log(objAssigned);
//obj destructuring
//using a form of spread to gety remaning all too in variables if large  num of props.

let {FirstNAme,...rest}=oldObj;
console.log(rest);

//rename the property
let {FirstNAme,LastNamne:lname,...remaining}=objAssigned;
console.log(remaining);
console.log(remaining.Salary);
console.log(lname);

ReactDOM.render( <div>See Console</div>,document.getElementById('root'));


