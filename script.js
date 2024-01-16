let count = 10;
let root = document.createElement("div");
root.id = "root";
root.classList.add("root-div")
document.body.append(root)
const timeFunction = (count,cFun) => {
    setTimeout(() => {
        let root = document.getElementById("root");
        root.innerHTML = count;
        if(count !== "<span class='orange'>Happy</span> <span class='blue'>Independance</span> <span class='green'>Day</span>"){
            console.log(count)

            if(count === 1) {
                count = "<span class='orange'>Happy</span> <span class='blue'>Independance</span> <span class='green'>Day</span>";
            }else{
                count = count - 1;
            }
            // count = count === 1 ? "Happy Independance day" : count -1 ;
            cFun(count,cFun)
        }
    },1000)
}

timeFunction(count,timeFunction);
