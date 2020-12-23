const inputField = document.getElementById("inputField");
const list = document.getElementById("dynamic");

const button = document.querySelector("button");

const handleChange = () => {
    const number = inputField.value;
    number.split("").map((digit) => {
        if (digit !== "1" && digit !== "0") {
            alert("Binary numbers only have 1s or 0s, please use any combination of 1s and 0s.");
        }
    })
}


button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("hello");
    inputField.oninput = handleChange();
    convert();
})

const convert = () => {
    const number = inputField.value;
    const binary = parseInt(number, 2);
    const numList = document.createElement("ul");
    const li = document.createElement("li");
    list.appendChild(numList);
    numList.appendChild(li);
    return li.innerHTML = binary;

}