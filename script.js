/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(item){
    if(item.marks>50){
      console.log(item.name);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(item){
        if(item.marks>50){
          console.log(item.name);
        }
     });
}

function addData() {
  //Write your code here, just console.log
  let x={id:4,name:"susan",age:"20",marks:45}
    arr.push(x);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let passedStudents = arr.filter((student) => student.marks >= 50);
arr=passedStudents;
console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   let sec=
 [
    {
    id:5,
    name:"mango",
    age:"18",
    marks:80
    }, 
    {
    id:4, 
    name:"goat",
    age:"20", 
    marks:85
    }, 
    {
    id:6, 
    name:"aris",
     age:"19",
     marks:35
    } 
]
 let new_arr=arr.concat(sec);  
 
 arr=new_arr;
 console.log(arr);
}
