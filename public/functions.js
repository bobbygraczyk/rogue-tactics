let type;  
let cells = document.getElementsByClassName("game_cell");
let demo = document.getElementsByClassName("demo")[0];
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = ((e) => {
    let elem = e.target.parentElement;
    if (elem.classList.contains("select")) {
        type = elem.classList[2];
        demo.className = "game_cell"
        demo.classList.add(type, "demo")
        console.log(type);
    } else {
        elem.className = "game_cell"
        elem.classList.add(type)

        console.log(elem)
    }
    })
}