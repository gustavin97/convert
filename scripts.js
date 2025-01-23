//cotação das moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08


// obtendo os elementos do formulario


const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// manipulando o input amount para receber somente numeros !

amount.addEventListener("input", () => {

const hasCharactersRegex = /\D+/g

  amount.value = amount.value.replace(hasCharactersRegex, "")

})

// capturando o evento de submit do formulario (enviar).

form.onsubmit = (event) =>{
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
      case "EUR":
        convertCurrency( amount.value, EUR, "€")
        break
        case "GBP":
          convertCurrency(amount.value, GBP, "£")
          break
  }  
}

//função para criar a moeda.

function convertCurrency(amount, price, symbol){
 try {
//exibindo a cotação da moeda selicionada
description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

// fazendo a multiplicação dos valores das moedas. 
let total= amount * price

//formatar o valor total.
total = formatCurrencyBRL(total).replace("R$", "")

//exibindo o resultado dos valores desejados peplo usuario.
result.textContent = `${total} Reais `

  //exibe o resultado da clase.
  footer.classList.add("show-result")
  
 } catch (error) {
  console.log(error)

  //remove a clase 
  footer.classList.remove("show-result")
  
 }

}


// formata a moeda em real br
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL",
  })

}