let a = ""
let b = ""
let sign = "" //знак операції
let finish = false

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."] //коли будемо натискати кнопки, будемо перевіряти що натиснуто
const action = ["-", "+", "X", "/"]

//дісплей калькулятора
const output = document.querySelector(".calc-screen p")

function clearAll() {
  let a = ""
  let b = ""
  let sign = "" //знак операції
  let finish = false
  output.textContent = 0
}
document.querySelector(".ac").onclick = clearAll

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return // перевіряэмо, чи натиснули саме на кнопку, а не в корпус калькулятора
  if (event.target.classList.contains("ac")) return //натиснута AC

  output.textContent = "" // очистка екрана
  const key = event.target.textContent //маємо натиснуту кнопку

  //натиснуто 0-9 чи .
  if (digit.includes(key)) {
    //наповнюється змінна а
    if (b === "" && sign === "") {
      a += key
      // console.log(a, b, sign)
      output.textContent = a
    } else if (a !== "" && b !== "" && finish) {
    }
    //записуємо в змінну b, якщо був натиснут sign
    else {
      b += key
      output.textContent = a
    }
    console.table(a, b, sign)
    return
  }
  //натиснуто + - / *
  if (action.includes(key)) {
    sign = key
    output.textContent = sign
    console.table(a, b, sign)
    return
  }
  // натиснуто =
  if (key === "=") {
    switch (sign) {
      case "+":
        a = +a + +b // a,b є строки, щоб не було конкатенації ми їх плюсуємо та заносимо в змінну а
        break
      case "-":
        a = a - b
        break
      case "X":
        a = a * b
        break
      case "/":
        a = a / b
        break
    }
    finish = true
    output.textContent = a
    console.table(a, b, sign)
  }
}
