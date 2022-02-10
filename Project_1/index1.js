const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];





const btn = document.getElementById("btn")
const color = document.querySelector(".color")

console.log(color.textContent);

btn.addEventListener("click",()=>{
    let change = getRandom();
    color.textContent = change;
    document.body.style.backgroundColor = change;
})

function getRandom()
{
    let ans = "#";
    for(let i =0;i<6;i++)
    {
       
        let num = Math.floor(Math.random()* hex.length);
        ans += hex[num];
   
    }
    return ans;
}
