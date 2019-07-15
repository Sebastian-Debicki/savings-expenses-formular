const totalExpendesSpan = document.querySelector('#total-expendes span')

const totalSavingsSpan = document.querySelector('#total-savings span')

let totalExpendes = 0
const expensesArray = []


// create DOM elements for expends
month.expenses.forEach((expense) => {

  const expenseElement = document.createElement('tr')
  const name = document.createElement('td')

  const inputContainer = document.createElement('td')
  const inputExpences = document.createElement('input')
  const textareaContainer = document.createElement('td')
  const textareaExpences = document.createElement('textarea')

  name.classList.add('nameTable')

  inputExpences.classList.add('text-center')
  inputExpences.classList.add('form-control')
  inputExpences.classList.add('moneyInput')
  inputExpences.setAttribute('type', 'number')

  textareaExpences.setAttribute('cols', '50')
  textareaExpences.setAttribute('rows', '1')
  textareaExpences.classList.add('form-control')

  containerExpends.appendChild(expenseElement)
  expenseElement.appendChild(name)
  inputContainer.appendChild(inputExpences)
  expenseElement.appendChild(inputContainer)
  textareaContainer.appendChild(textareaExpences)
  expenseElement.appendChild(textareaContainer)

  name.textContent = expense.name
  inputExpences.value = expense.money
  textareaExpences.value = expense.note

  inputExpences.addEventListener('input', (e) => {
    expense.money = e.target.value
    saveData(months)
  })

  textareaExpences.addEventListener('input', (e) => {
    expense.note = e.target.value
    saveData(months)
  })

  expensesArray.push(Number(expense.money))

})

// Setup the total Expenses
expensesArray.forEach((income, index) => {
  totalExpendes += expensesArray[index]
})

totalExpendesSpan.textContent = totalExpendes

const totalMonthSavings = totalIncomes - totalExpendes
const toReachGoal = month.monthGoal - totalMonthSavings

totalSavingsSpan.textContent = totalMonthSavings


if (toReachGoal > 0) {
  goalLeft.textContent = toReachGoal
}