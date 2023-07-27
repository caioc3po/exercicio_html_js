const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const form = document.getElementById("form-numeros")



form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Numero 1: " + numero1.value)
    console.log("Numero 2: " + numero2.value)

    if (numero1.value > numero2.value){
        const containerErro = document.querySelector(".error")
        containerErro.style.display = "none"

        const containerSucesso = document.querySelector(".sucess")
        containerSucesso.style.display = "block"

        form.addEventListener("keyup", function(e) {
            const containerSucesso = document.querySelector(".sucess")
            containerSucesso.style.display = "none"
        })



        numero1.value = ""
        numero2.value = ""
    }
    else {
        const containerErro = document.querySelector(".error")
        containerErro.style.display = "block"

        const containerSucesso = document.querySelector(".sucess")
        containerSucesso.style.display = "none"
    }
})