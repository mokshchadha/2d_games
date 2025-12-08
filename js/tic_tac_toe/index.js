let currentPlayer = "X" // this will toggle on tile click
function createGrid() {
    const grid = document.getElementById("grid");
    grid.className = "grid" 
    
    for(let i = 0; i < 3; i++){
        const row = generateRow(i)
        grid.append(row)
    }
    const body = document.querySelector("body")
    body.appendChild(grid)
}

function generateRow(rowId){
    const currentRow = document.createElement("div")
    currentRow.id = `rowId_${rowId}`
    currentRow.className = "row"  // ⭐ Add this line!
    
    for(let i = 0; i < 3; i++) {
        currentRow.appendChild(generateTile(rowId, i))
    }
    return currentRow
}

function generateTile(rowId, idx) {
    const tileId = `tile_${rowId}_${idx}`
    const div = document.createElement("div")
    div.id = tileId
    div.className = 'clickable-tile'
    div.addEventListener("click", ()=>onclickTile(tileId))
    return div
}

function onclickReset(){
    console.log("on click reset")
    window.location.reload()
}

function onclickTile(id) {
    console.log(id)
    const tile = document.getElementById(id)
    if(tile.innerText === ""){
        // fill some value
        tile.innerText = currentPlayer
        currentPlayer = currentPlayer === "X" ? "0" : "X"
    }
   setTimeout(()=>{
     if(patternIsFormed()){
        const winner = currentPlayer === "X" ? "Player 2 with 0" : "Player 1 with X"
        alert(`User ${winner} has won`)
    }
   } ,10)
}

function patternIsFormed(){
    const grid = document.getElementById("grid")
    // pattern is straight -- row matched
    const rows = [0, 1, 2]
    for(const idx of rows){
        const values = valuesOfRow(idx)
        if(values.every(e => e==="X") || values.every(e => e=== "0")) 
            return true
    }
    // pattern is straight -- column matched
    for(const idx of rows){
        const values = valueOfColumn(idx)
        if(values.every(e => e==="X") || values.every(e => e=== "0")) 
            return true
    }
    return isDiagonalPattern()
}

function valueOfColumn(columnIdx) {
    let tileValues = []
    for(let i =0 ; i< 3; i++){
        const id = `tile_${i}_${columnIdx}`
        console.log(id)
        const element = document.getElementById(id)
        tileValues.push(element.innerText)
    }
    console.log({tileValues})
    return tileValues
}

function isDiagonalPattern(){
    const valuesOfIdx = idx => document.getElementById(`tile_${idx}`).innerText

    const diagonal1 = [`0_0`, '1_1', '2_2'].map(valuesOfIdx)
    const diagonal2 = [`2_0`, '1_1', '0_2'].map(valuesOfIdx)
    console.log({diagonal2})
    if(diagonal1.every(e => e === "X") || diagonal1.every(e => e === "0"))
        return true
    if(diagonal2.every(e => e === "X") || diagonal2.every(e => e === "0"))
        return true

    return false
}

function valuesOfRow(rowIdx){
    let tileValues = []
    for(let i =0 ; i < 3; i++){
        const id = `tile_${rowIdx}_${i}`
        const element = document.getElementById(id)
        tileValues.push(element.innerText)
    }
   
    return tileValues
}

function main() {
    const resetButton = document.getElementById("reset_btn")
    resetButton.addEventListener("click", onclickReset)
    createGrid()
}

main()