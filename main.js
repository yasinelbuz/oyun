


for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++){
        const button = document.createElement("button");
        button.textContent = i + 1
        document.body.appendChild(button)
    }

}