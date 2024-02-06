let btn = document.querySelector(".btn");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", () => {

    let task = inp.value;
    let cnt = ul.childElementCount;
    task=task+"delete";
    let flag=false;
    for(let i=0;i<cnt;i++){
        if(ul.children[i].innerText == task){

            console.log("right");
            console.log("Task is:",task);
            console.log("li is:",ul.children[i].innerText);
            flag=true;
            break;
        }else{
            console.log("false");
            console.log("Task is:",task);
            console.log("li is:",ul.children[i].innerText)
        }
    }

    if (inp.value == "") {
        // console.log("No any item entered")
        alert("Please write any activity...")
    }else if(flag){
        alert("The task is already exist...");
        inp.value = "";
    }else {
        let del = document.createElement('button');
        del.innerHTML = "delete";
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        ul.appendChild(li);
        li.appendChild(del);
        del.classList.add("delete-item")
        inp.value = "";
        // console.log(del.parentNode.innerHTML)
    }

})

// let delBtn = document.querySelectorAll(".delete-item");

// Array.from(delBtn).forEach((Btn)=>{
//     Btn.addEventListener("click" , ()=>{
//         console.log(Btn.parentElement.innerText);
//         let par=Btn.parentElement;
//         par.remove();
//     })
// })

ul.addEventListener("click",(e)=>{
    // console.log("BUtton click");
    // console.log(e.target.parentNode);
    let item=e.target.parentNode;
    item.remove();
})



