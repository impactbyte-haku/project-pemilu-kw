const content = document.getElementById('content')

const dataCandidates = [
  {
    id: 1,
    name: 'Jokowi Amin',
    result: 1
  },
  {
    id: 2,
    name: 'Prabowo Sandi',
    result: 1
  },
  {
    id: 3,
    name: 'Nurhadi Aldo',
    result: 100
  }
]

const displayCandidates = () => {
  content.innerHTML = ''

  dataCandidates.forEach(candidate => {
    const { id, name, result } = candidate

    content.innerHTML += `
    <section id="candidate-${id}">
      <h1>${id}. ${name}</h1>
      <button id="vote-${id}">
        Vote ${name}
      </button>
      <span>Result: ${result}</span>
    </section>`
  })
}

const addEventListeners = () => {
  dataCandidates.forEach((candidate, index) => {
    const { id, name, result } = candidate

    document.getElementById(`vote-${id}`).addEventListener('click', function() {
      dataCandidates[index].result += 1
      displayCandidates()
      addEventListeners()
    })
  })
}

displayCandidates()
addEventListeners()
