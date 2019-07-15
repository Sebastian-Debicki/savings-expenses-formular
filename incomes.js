const selectMonth = document.querySelector('#date-from')
const selectYear = document.querySelector('#date-to')
const containerIncomes = document.querySelector('#container-incomes')
const containerExpends = document.querySelector('#container-expends')
const totalIncomesSpan = document.querySelector('#total-incomes span')
const btnReload = document.querySelector('#btn-reload')

const formGoal = document.querySelector('#form-goal')
const goalMonth = document.querySelector('#goal-month span')
const goalLeft = document.querySelector('#goal-left span')
const inputGoal = document.querySelector('#input-goal')


const id = location.hash.substring(1)
const months = getData()
const month = months.find((month) => {
  return id === month.id
})

selectMonth.value = month.dateMonth
selectYear.value = month.dateYear

selectMonth.addEventListener('change', (e) => {
  month.dateMonth = e.target.value
  saveData(months)
})

selectYear.addEventListener('change', (e) => {
  month.dateYear = e.target.value
  saveData(months)
})


let totalIncomes = 0
const incomesArray = []

// create DOM elements for incomes
month.incomes.forEach((income, index) => {

  const incomeElement = document.createElement('tr')
  const name = document.createElement('td')
  const inputContainer = document.createElement('td')
  const inputIncomes = document.createElement('input')
  const textareaContainer = document.createElement('td')
  const textareaIncomes = document.createElement('textarea')

  name.classList.add('nameTable')

  inputIncomes.classList.add('text-center')
  inputIncomes.classList.add('form-control')
  inputIncomes.classList.add('moneyInput')
  inputIncomes.setAttribute('type', 'number')

  textareaIncomes.setAttribute('cols', '50')
  textareaIncomes.setAttribute('rows', '1')
  textareaIncomes.classList.add('form-control')

  containerIncomes.appendChild(incomeElement)
  incomeElement.appendChild(name)
  inputContainer.appendChild(inputIncomes)
  incomeElement.appendChild(inputContainer)
  textareaContainer.appendChild(textareaIncomes)
  incomeElement.appendChild(textareaContainer)

  name.textContent = income.name
  inputIncomes.value = income.money
  textareaIncomes.value = income.note

  inputIncomes.addEventListener('input', (e) => {
    income.money = e.target.value
    saveData(months)
  })

  textareaIncomes.addEventListener('input', (e) => {
    income.note = e.target.value
    saveData(months)
  })

  incomesArray.push(Number(income.money))
})


// Setup the total incomes
incomesArray.forEach((income, index) => {
  totalIncomes += incomesArray[index]
})

totalIncomesSpan.textContent = totalIncomes


btnReload.addEventListener('click', () => {
  location.reload()
})


formGoal.addEventListener('submit', (e) => {
  e.preventDefault()
  month.monthGoal = e.target.elements.inputGoal.value
  saveData(months)
  location.reload()
})
inputGoal.value = month.monthGoal

goalMonth.textContent = month.monthGoal


window.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    location.reload()
  }
})