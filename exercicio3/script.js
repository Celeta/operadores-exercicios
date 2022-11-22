// Parte 1

const operacao1 = 5 > 20 && 5 < 2
console.log (operacao1)

const operacao2 = 5 === 5 || 5 === "5"
console.log (operacao2)

const operacao3 = !20 > 50
console.log (operacao3)

const operacao4 = !20 > 50 || 50 > 70
console.log (operacao4)

// Parte 2

//1

const salarioFixo = 2000
const auxilioCreche = 45.50

let resp1
resp1 = salarioFixo + auxilioCreche
console.log (resp1)

//2

let vendasJan = 5784.50
let comissao = 0.1
let comissaoJan = vendasJan * comissao
console.log (comissaoJan)

//3

let salarioTotalJan = resp1 + comissaoJan
let inss = 0.05
let descontoInssJan = salarioTotalJan * inss
let totalJan = salarioTotalJan - descontoInssJan
console.log ("Total Janeiro:", totalJan.toFixed(2))


//4

//fev
let vendasFev = 3418.41
let comissaoFev = vendasFev * comissao

let salarioTotalFev = resp1 + comissaoFev

let descontoInssFev = salarioTotalFev * inss
let totalFev = salarioTotalFev - descontoInssFev
console.log("Total Fevereiro:", totalFev.toFixed(2))


//mar

let vendasMar = 4124.10
let comissaoMar = vendasMar * comissao

let salarioTotalMar = resp1 + comissaoMar

let descontoInssMar = salarioTotalMar * inss
let totalMar = salarioTotalMar - descontoInssMar
console.log("Total Março:", totalMar.toFixed(2))


//abr

let vendasAbr = 1874
let comissaoAbr = vendasAbr * comissao

let salarioTotalAbr = resp1 + comissaoAbr

let descontoInssAbr = salarioTotalAbr * inss
let totalAbr = salarioTotalAbr - descontoInssAbr
console.log("Total Abril:", totalAbr.toFixed(2))


//mai

let vendasMai = 7000
let comissaoMai = vendasMai * comissao

let salarioTotalMai = resp1 + comissaoMai

let descontoInssMai = salarioTotalMai * inss
let totalMai = salarioTotalMai - descontoInssMai
console.log("Total Mai:", totalMai.toFixed(2))


//jun

let vendasJun = 9450
let comissaoJun = vendasJun * comissao

let salarioTotalJun = resp1 + comissaoJun

let descontoInssJun = salarioTotalJun * inss
let totalJun = salarioTotalJun - descontoInssJun
console.log("Total Junho:", totalJun.toFixed(2))


//5

let mediaSalarial

mediaSalarial = ((totalJan + totalFev + totalMar + totalAbr + totalMai + totalJun)/6)
console.log("A média salarial é de:", mediaSalarial.toFixed(2))












