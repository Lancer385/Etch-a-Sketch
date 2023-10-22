const container = document.querySelector("#container");


function makeGrid(number){
    let counter = 0;    
    for (i = 0; i <= (number**2 + number); i++){
        const nth = number + 1;
        let div = document.createElement("div");
        container.appendChild(div);
        if (i == counter){
            counter += nth;
            continue; // this will skip every (nth + 1) div
        }
        div.setAttribute("class", "grid");
    }
}

makeGrid(16)

const nodeList = document.querySelectorAll(".grid");
let gridWidth = container.clientWidth / Math.sqrt(nodeList.length);
let gridHeight = container.clientHeight / Math.sqrt(nodeList.length);
nodeList.forEach((node) => {
    node.style.width = `${gridWidth}px`;
    node.style.height = `${gridHeight}px`;
    node.addEventListener("mouseover", ()=>{
        node.style.backgroundColor = "red";
    })
})