let btnOrder = document.getElementsByClassName("order-elements")[0]

btnOrder.addEventListener("click", (_) => {
    let stringText = document.getElementById("stringText")
    let result = document.getElementById("result")

    if(!!stringText.value){
        let ps = document.getElementsByClassName("result-text")
        if(!!ps.length){
            let numItems = ps.length
            for(let i = 0; i < numItems; i++){
                ps[0].remove()
            }
        }

        let myString = generateAlphabeticByGroup(stringText.value)
        myString.split('\n').map(txt => {
            let p = document.createElement("p");
            p.classList.add("result-text")
            p.textContent = txt
            result.appendChild(p)
        })
    }
})