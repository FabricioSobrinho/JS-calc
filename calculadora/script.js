let res = document.getElementById("res")

function add(n) {
  res.value += n
}
const clear = () => {
  //Limpa o visor da Calculadora
  res.value = ""
}
function equal() {
  res.value = eval(res.value)
}

document.addEventListener("keyup", (pressKey) => {
  const key = pressKey.key
  // Verifica se a tecla pressionada é um número de 0 a 9
  if (key >= 0 || key <= 9) {
    add(key)
  } else if (key == "Backspace") {
    res.value = res.value.slice(0, -1)
  } else if (key == "Enter") {
    res.value = eval(res.value.slice(0, -1))
  }
})

let clearTab = document.getElementById("clear")
clearTab.addEventListener("click", clear)

const equalRes = document.querySelector("#equal")
equalRes.addEventListener("click", equal)

let theme = document.getElementById("switch")
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})
