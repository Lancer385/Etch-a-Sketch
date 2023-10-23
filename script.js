function makeGrid(n){
    let counter = 0;    
    for (i = 0; i <= (n**2 + n); i++){
        const nth = n + 1;
        let div = document.createElement("div");
        container.appendChild(div);
        if (i == counter){
            counter += nth;
            continue; // this will skip every (nth + 1) div
        }
        div.setAttribute("class", "grid");
        div.style.boxSizing = "border-box";
    }
    const nodeList = document.querySelectorAll(".grid");

    let gridWidth = container.clientWidth / Math.sqrt(nodeList.length);
    let gridHeight = container.clientHeight / Math.sqrt(nodeList.length);

    nodeList.forEach((node) => {
        node.style.width = `${gridWidth}px`;
        node.style.height = `${gridHeight}px`;
        node.addEventListener("mouseover", ()=>{
            node.style.backgroundColor = "black";
        })
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const container = document.querySelector("#gridBox");
makeGrid(16)


const gridBoxes = document.querySelector("#gridBox");

let value = document.querySelector("input");
let view = document.querySelector("span");
let update = () =>  view.innerText = `${value.value} x ${value.value}`;
value.addEventListener("input", update);
update();

const sizeAdjust = document.querySelector(".adjust");
sizeAdjust.addEventListener("click", ()=>{
    removeAllChildNodes(gridBoxes);
    makeGrid(parseInt(view.innerText));
})

const deleteColor = document.querySelector(".delete");
deleteColor.addEventListener("click", () => {
    location.reload();
})
