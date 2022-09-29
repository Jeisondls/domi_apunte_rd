
const formulario = document.querySelector("#formulario")
let sumaDePuntos = 0

formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault()
    let jugador1 = document.querySelector("#jugador-1").value
    let jugador2 = document.querySelector("#jugador-2").value

    let total1 = document.getElementById('total1')
    total1.textContent = `${jugador1}`
    let total2 = document.getElementById('total2')
    total2.textContent = `${jugador2}`
}



