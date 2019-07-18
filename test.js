const {passByValue} = require('elegant-standard');

let arr = [{
    name: "Akhilesh"
},{
    name: "Akhilesh"
},{
    name: "Akhilesh"
}];

const alterArr = passByValue(arr => {
    arr[1].name = "Jackass";
    console.log(arr);
});

const alterArrByRef = arr => {
    arr[1].name = "Jackass";
    console.log(arr);
};

alterArr(arr);
console.log(arr);
alterArrByRef(arr);
console.log(arr);