const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addtask(){
    if(inputbox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            alert("Unchecked");
        } else {
            e.target.classList.add("checked");
            alert("Checked");
        }
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();
