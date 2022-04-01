document.querySelector("#form").addEventListener("submit",myfunction);
// var todoarr =[];   //get from local storage
// var todoarr = JSON.parse(localStorage.getItem("tododata"))||null
// console.log(todoarr);

if(localStorage.getItem("tododata")==null){
    todoarr=[];
}else{
    todoarr = JSON.parse(localStorage.getItem("tododata"))
}

// var todoarr = JSON.parse(localStorage.getItem("tododata"))||[]


function myfunction(){
    // var todolist =[];
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var priroty = document.querySelector("#priority").value;

    var todoobj = {
       itemname :name,
       itemqty: quantity,
       itempriroty: priroty
    }

    todoarr.push(todoobj);
    // console.log(todoarr);

    localStorage.setItem("tododata", JSON.stringify(todoarr));
    
//   bug 
// 1.whenever page is refreshing array is empty;
// 2.when key is not present pushinf into null through an error;

}