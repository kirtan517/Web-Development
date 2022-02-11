
let value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");

let count =0;

btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.id == "decrease")
        {
            count--;
        }
        else if(e.target.id == "increase")
        {
            count++;
        }
        else
        {
            count = 0;
        }

        if(count < 0)
        {
            value.style.color = "red";
        }
        else
        {
            value.style.color = "green"
        }

        value.textContent = count;
        value.style.width = (count.toString().length) + "ch";
        value.style.animation = "build 1s steps(" + count.toString().length + ")" + "blink1 0.5s step-end infinite alternate;"
        // console.log(value.style);
    })
})