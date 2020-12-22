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
    const binary = parseInt(number, 2);
    console.log(binary)
    const numList = document.createElement("ul");
    const li = document.createElement("li");
    list.appendChild(numList);
    numList.appendChild(li);
    return li.innerHTML = binary;

}