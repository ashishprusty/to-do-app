var complete = JSON.parse(localStorage.getItem("completedata"));

complete.map(function(el){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = el.itemname;
    var td2 = document.createElement("td");
    td2.innerHTML = el.itemqty;
    var td3 = document.createElement("td");
    td3.innerHTML = el.itempriroty;

    tr.append(td1,td2,td3);
    document.querySelector("#body").append(tr)

})
