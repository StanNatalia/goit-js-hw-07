
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
    const valueInput = nameInput.value.trim();
    nameOutput.textContent = valueInput ? valueInput : "Anonymous"; 
})



