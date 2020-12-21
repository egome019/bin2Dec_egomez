const inputField = document.getElementById("inputField");
const list = document.getElementById("dynamic");

const button = document.querySelector("button");


button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("hello");
    convert();
})

const convert = () => {
    const number = inputField.value;
    const numArr = number.split("");
    console.log(numArr);
    const numList = document.createElement("ul");
    for (let index = 0; index < numArr.length; index++) {
        const binary = parseInt(numArr[index], 10);
        list.innerHTML = binary;
        
        // const li = document.createElement("li");
        // numList.appendChild(li);
        // list.appendChild(numList);
    }

}