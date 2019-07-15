const formAddDate = document.querySelector('#form-add-date')
const searchInput = document.querySelector('#search-input')
const divContainer = document.querySelector('#container-months')

let months = getData()

const filters = {
  searchDate: ''
}


renderMonths(months, filters)


formAddDate.addEventListener('submit', (e) => {
  e.preventDefault()
  const id = uuidv4()

  if (e.target.elements.monthValue.value === 'Miesiąc' || e.target.elements.yearValue.value === 'Rok') {
    return
  }

  months.push({
    id: id,
    dateMonth: e.target.elements.monthValue.value,
    dateYear: e.target.elements.yearValue.value,
    monthGoal: 0,
    incomes: [{
        name: 'Praca regularna',
        money: 0,
        note: ''
      }, {
        name: 'Konta oszczędnościowe',
        money: 0,
        note: ''
      },
      {
        name: 'Inwestycje',
        money: 0,
        note: ''
      },
      {
        name: 'Pojedyńcze zlecenia',
        money: 0,
        note: ''
      },
      {
        name: 'Dofinansowania',
        money: 0,
        note: ''
      },
      {
        name: 'Inne',
        money: 0,
        note: ''
      }
    ],
    expenses: [{
        name: 'Ogólne opłaty(mieszkanie...)',
        money: 0,
        note: ''
      }, {
        name: 'Jedzenie',
        money: 0,
        note: ''
      },
      {
        name: 'Picie',
        money: 0,
        note: ''
      },
      {
        name: 'Benzyna',
        money: 0,
        note: ''
      },
      {
        name: 'Ubrania',
        money: 0,
        note: ''
      },
      {
        name: 'Lekarstwa, leczenie',
        money: 0,
        note: ''
      },
      {
        name: 'Kosmetyki',
        money: 0,
        note: ''
      },
      {
        name: 'Środki chemiczne',
        money: 0,
        note: ''
      },
      {
        name: 'Abonament',
        money: 0,
        note: ''
      },
      {
        name: 'Ubezpieczenia',
        money: 0,
        note: ''
      },
      {
        name: 'Auto(OC, AC, naprawy)',
        money: 0,
        note: ''
      },
      {
        name: 'Rozrywka(kino, restauracje...)',
        money: 0,
        note: ''
      },
      {
        name: 'Rodzina(prezenty...)',
        money: 0,
        note: ''
      },
      {
        name: 'Małe pojedyńcze zakupy',
        money: 0,
        note: ''
      },
      {
        name: 'Transport(bilety)',
        money: 0,
        note: ''
      },
      {
        name: 'Inne',
        money: 0,
        note: ''
      },
    ]
  })

  // location.assign(`/notes.html#${id}`)
  saveData(months)
  renderMonths(months, filters)
})


searchInput.addEventListener('input', (e) => {
  filters.searchDate = e.target.value
  renderMonths(months, filters)
  console.log(filters.searchDate)
})