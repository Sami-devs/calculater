let input1 = document.querySelector('.input1')
    let input2 = document.querySelector('.input2')
    let add = document.querySelector("#add")
    let sub = document.querySelector("#subtract")
    let multiply = document.querySelector("#multiply")
    let division = document.querySelector("#division")
    let para = document.querySelector("#para")
    let clear = document.querySelector("#button")
    




    add.addEventListener("click", () => {
        if (input1.value === "" || input2.value === "") {
            para.textContent = 'plx enter the Numbers'
        } else {
            para.textContent = Number(input1.value) + Number(input2.value)
        }

    })
    sub.addEventListener('click', () => {
        if (input1.value === "" || input2.value === "") {
            para.textContent = 'plx enter the Numbers'
        } else {
            if (Number(input2.value) > Number(input1.value)) {
                let temp = Number(input1.value)
                val1 = Number(input2.value)
                val2 = temp
                para.textContent = val1 - val2
            } else {
                para.textContent = Number(input1.value) - Number(input2.value)
            }
        }
    })
    multiply.addEventListener("click", () => {
         if (input1.value ==="" || input2.value ==="")   {
                para.textContent = 'plx enter the Numbers'
            }else{
        para.textContent = Number(input1.value) * Number(input2.value)
    }})
    division.addEventListener("click", () => {
         if (input1.value ==="" || input2.value ==="")   {
                para.textContent = 'plx enter the Numbers'
            }else{
                if (Number(input2.value) === 0) {
                    para.textContent = 'cannot divided by zero'
                }else{
        para.textContent = Number(input1.value) / Number(input2.value)
    }}})

    clear.addEventListener('click',()=>{
        input1.value = ''
        input2.value = ''
        para.textContent = ''
    })