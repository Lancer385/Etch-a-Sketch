const container = document.querySelector("#container");


function makeGrid(number){
    for (i = 0; i <= (number + Math.sqrt(number)); i++){
        let div = document.createElement("div");     
        div.setAttribute("class", "grid");
        container.appendChild(div);
    }
}

makeGrid(256)

const nodeList = document.querySelectorAll(".grid");

nodeList.forEach((node) => {
    node.addEventListener("mouseover", ()=>{
        node.style.backgroundColor = "red";
    })
})

