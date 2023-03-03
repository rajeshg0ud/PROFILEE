

let SaveEl= document.getElementById("Save-El")
let CountEl = document.getElementById("Count-El")
let Count=0;

function Increment(){
                
                CountEl.textContent=Count++
        

}
function Save(){
        let CountStr= Count + " - "

        SaveEl.textContent += CountStr
        
        CountEl.innerText=Count=0
}

