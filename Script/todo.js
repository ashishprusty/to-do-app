var todoitems = JSON.parse(localStorage.getItem("tododata"));
console.log(todoitems)
// var completed = JSON.parse(localStorage.getItem("completeddata")) || [];
var complete = JSON.parse(localStorage.getItem("completedata"))||[];
// console.log(complete)

todoitems.map(function(el){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = el.itemname;
    var td2 = document.createElement("td");
    td2.innerHTML = el.itemqty;
    var td3 = document.createElement("td");
    td3.innerHTML = el.itempriroty;
    var td4 = document.createElement("td");
    
    td4.textContent = "mark as complete";
    td4.setAttribute("class","complete")
    td4.style.color ="red";
    td4.style.cursor="pointer"
    td4.addEventListener("click",function (){
        markCompleteFunction(el)
        // var comp = document.querySelector(".complete");
        td4.innerHTML = "completed"
        td4.style.backgroundColor = "#dcfce7";
        td4.style.color = "#2e6534"
        
    })
    
   
    // btn.style.backgroundColor="#1f2937";
    // btn.style.padding="10px";
    // btn.style.color="white"
    
    tr.append(td,td2,td3,td4);

    document.querySelector("#body").append(tr)
})
function markCompleteFunction(el){
  complete.push(el);
  localStorage.setItem("completedata" ,JSON.stringify(complete));


}




// function markCompleteFunction(el) {

//     completed.push(el);

//     localStorage.setItem("completeddata", JSON.stringify(completed));
      
//   }





