const colors = ["green","red","rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

console.log(color.textContent);

btn.addEventListener("click",()=>{
    let change = colors[getRandom()];
    color.textContent = change;
    document.body.style.backgroundColor = change;
})

function getRandom()
{
    let num = Math.floor(Math.random()*4);
    return num;
}


