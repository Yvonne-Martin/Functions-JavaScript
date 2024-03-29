//Question 2
var array = [2,3,4,0,0,-3,-8,0]
function myArray(){
    let negative = array.filter((element)=>
    element<0);
    let positive = array.filter((element)=>
    element>0);
    let zeroNums=array.filter((element)=>
    element==0);
    return{
        negative: negative,
        positive:positive,
        zeroNums: zeroNums

    }
}
console.log(myArray(array));

//Question 3

let array = [
    {"id": "mnczcnmbcbc",
    "name":"leilamartin",
    "salary1":"690"
},
    {"id": "mnczcnmbcbc",
    "name":"james mwangi",
    "salary2":"690"
},
{"id": "mnczcnmbcbc",
"name":"kellie jose",
"salary2":"690"
}
]
let array1 = array.sort(
    (salary1,salary2)
    console.log(array);
)
//Question1
