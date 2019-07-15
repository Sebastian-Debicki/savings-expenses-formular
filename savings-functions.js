// Get data from the local storage
const getData = () => {
  const monthsJSON = localStorage.getItem('months')
  if (monthsJSON !== null) {
    return JSON.parse(monthsJSON)
  } else {
    return []
  }
}

// Setup delete element function
const deteteElement = (id) => {
  const indexEl = months.findIndex((month) => {
    return month.id === id
  })

  if (indexEl > -1) {
    months.splice(indexEl, 1)
  }
}


// Render elements and filter 
const renderMonths = (months, filters) => {
  let filteredMounths = months.filter((month) => {
    return month.dateMonth.toLowerCase().includes(filters.searchDate) || month.dateYear.includes(filters.searchDate)
  })

  filteredMounths = filteredMounths.reverse()

  divContainer.innerHTML = ''

  filteredMounths.forEach((month) => {
    generateDOMelements(month)
  })
}


// Generate DOM elements
const generateDOMelements = (month) => {
  // Create div for text and button
  const divTitle = document.createElement('div')
  divContainer.appendChild(divTitle)
  divTitle.classList.add('m-1')

  // create text and link
  const dateTitle = document.createElement('a')
  dateTitle.setAttribute('href', `./notes.html#${month.id}`)
  dateTitle.classList.add('p-2')
  divTitle.appendChild(dateTitle)

  dateTitle.textContent = `${month.dateMonth} - ${month.dateYear}`

  // Create and setup the delete button
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('btn')
  deleteBtn.classList.add('btn-danger')
  deleteBtn.classList.add('py-1')
  divTitle.appendChild(deleteBtn)
  deleteBtn.textContent = 'x'

  deleteBtn.addEventListener('click', () => {
    deteteElement(month.id)
    renderMonths(months, filters)
    saveData(months)
  })

}

// Save data in the local storage
const saveData = (months) => {
  const monthsJSON = JSON.stringify(months)
  localStorage.setItem('months', monthsJSON)
}