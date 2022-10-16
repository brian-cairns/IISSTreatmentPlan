let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSTreatmentPlan'
console.log('form: ' + formName)
let newForm = {}
newForm.goals = []
let buttons = []
let goalBlocks = []
let createNewButtons = []
let achieved = []
let discontinued = []
let ongoing = []
let goalCriteria = []
let criteriaEntries = []

//Create class
class Goal {
    constructor(goalName, strengths, needs, objectives, interventions, data, responsible, progress, completionCriteria, criteriaProgress) {
      this.goalName = goalName;
      this.strengths = strengths;
      this.needs = needs;
      this.objectives = objectives;
      this.interventions = interventions;
      this.data = data
      this.responsible = responsible;
      this.progress = progress
      this.completionCriteria = completionCriteria
      this.criteriaProgress = criteriaProgress
    }
}

//Set up bulk event listeners
for (let i = 1; i < 4; i++) {
  goalBlocks[i+1] = document.getElementById(`goalBlock${i + 1}`)
  createNewButtons[i] = document.getElementById(`createNewGoal${i}`)
  achieved[i] = document.getElementById(`achieved${i}`)
  discontinued[i] = document.getElementById(`discontinued${i}`)
  ongoing[i] = document.getElementById(`ongoing${i}`)
  goalBlocks[i+1].style.display = 'none'
  createNewButtons[i].addEventListener('click', () => {
    goalBlocks[i+1].style.display = 'block'
  })
  createNewButtons[i].style.display = 'none'

}

for (let i = 1; i < 13; i++) {
  criteriaEntries[i] = document.querySelector(`input#criteriaEntry${i}`)
  criteriaEntries[i].value = ' '
  goalCriteria[i] = document.getElementById(`goalCriteria${i}`)
  criteriaEntries[i].addEventListener('change', (e) => {
    document.getElementById(`criteria${i}`).innerText = e.target.value
  })
}

for (let i = 1; i < 5; i++) {
  buttons[i] = document.getElementById(`submitGoal${i}`)
  buttons[i].addEventListener('click', () => {
    let goal = new Goal()
    goal.goalName = document.getElementById(`IISSGoal${i}`)
    goal.strengths = document.getElementById(`strengths${i}`)
    goal.needs = document.getElementById(`needs${i}`)
    goal.objectives = document.getElementById(`objectives${i}`)
    goal.interventions = document.getElementById(`interventions${i}`)
    goal.data = document.getElementById(`data${i}`)
    achieved[i].checked ? goal.status = 'achieved' : discontinued[i] ? goal.status = 'discontinued' : goal.status = 'ongoing'
    goal.criteriaProgress = getCriteriaProgress((i - 1) * 3)
    newForm.goals.push(goal)
    if (i < 4) { createNewButtons[i].style.display = 'inline' }
  })
}

function getCriteriaProgress(j) {
  let progress = []
  for (let i = j; i < j + 3; i++) {
    let criteria = ''
    goalCriteria[i+1].checked ? criteria = document.getElementById(`criteria${i+1}`).innerText : ' '
    progress.push(criteria)
  }
  return progress
}

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  document.getElementById('showClientName').innerHTML = newForm.clientName;
  })
  
let address = document.querySelector('input#address')
address.addEventListener('change', (e) => {
	newForm.address = e.target.value;
})

let city = document.querySelector('input#city')
city.addEventListener('change', (e) => {
	newForm.city = e.target.value;
})

let state = document.querySelector('input#state')
state.addEventListener('change', (e) => {
	newForm.state = e.target.value;
})

let zip = document.querySelector('input#zip')
zip.addEventListener('change', (e) => {
	newForm.zip = e.target.value;
})

let start = document.querySelector('input#start')
start.addEventListener('change', (e) => {
	newForm.start = e.target.value;
  console.log(newForm.start);
})

let end = document.querySelector('input#end')
end.addEventListener('change', (e) => {
	newForm.end = e.target.value;
  console.log(newForm.end);
})

let sixMonthReview = document.querySelector('input#sixMonthReview')
sixMonthReview.addEventListener('change', (e) => {
	newForm.sixMonthReview = e.target.value;
  console.log(newForm.sixMonthReview);
})

let phone = document.querySelector('input#phone')
phone.addEventListener('change', (e) => {
	newForm.phone = e.target.value;
})

let email = document.querySelector('input#email')
email.addEventListener('change', (e) => {
	newForm.email = e.target.value;
})

let dob = document.querySelector('input#dob')
dob.addEventListener('change', (e) => {
	newForm.dob = e.target.value;
  document.getElementById('clientDobFlag').innerHTML = newForm.dob;
})

let familyTrainerName = document.querySelector('input#familyTrainerName')
familyTrainerName.addEventListener('change', (e) => {
	newForm.familyTrainerName = e.target.value;
})

let intakeDate = document.querySelector('input#intakeDate')
intakeDate.addEventListener('change', (e) => { 
  newForm.intakeDate = e.target.value;
})


let annual = document.querySelector('input#annual')
annual.addEventListener('change', (e) => { 
    if (newForm.annual) {
        newForm.annual = ''
        document.getElementById('annual').checked = false
    } else {
        newForm.annual = 'annual'
        newForm.threeMonths = ''
        document.getElementById('threeMonth').checked = false
    }
    })

let threeMonth = document.querySelector('input#threeMonth')
threeMonth.addEventListener('change', (e) => {
    if (newForm.threeMonth) {
        newForm.threeMonth = ''
        document.getElementById('threeMonth').checked = false
    } else {
        newForm.threeMonth = 'sixMonth'
        newForm.annual = ''
        document.getElementById('annual').checked = false
    }
})
    
let background = document.getElementById('background')
background.addEventListener('change', (e) => {
  newForm.background = e.target.value;
})

let accept = document.getElementById('acceptReceiveCopy')
let hardCopy = document.getElementById('hardCopyReceiveCopy')
let electronic = document.getElementById('electronicReceiveCopy')
let disagree = document.getElementById('disagreeReceiveCopy')


document.getElementById('submit').addEventListener("click", (event) => {
  document.getElementById('agreeFamilyTreatmentPlan').checked ? newForm.familyTreatmentPlan = 'agree':  newForm.familyTreatmentPlan = 'disagree'
  document.getElementById('disagreeFamilyTreatmentPlan').checked ? newForm.familyTreatmentPlan = 'disagree':  newForm.familyTreatmentPlan = 'agree'
  document.getElementById('agreeISST').checked ? newForm.IISSTreatmentPlan = 'agree':  newForm.IISSPlan = 'disagree'
  document.getElementById('disagreeISST').checked ? newForm.IISSTreatmentPlan = 'disagree' : newForm.IISSPlan = 'agree'
  newForm.copyAccepted = getCopyOption()
  submitForm(newForm, formName)
})

function getCopyOption() {
  let option = ''
  accept.checked ? option = 'accepted' : hardCopy.checked ? option = 'hard copy' : electronic.checked ? option = 'electronic' : option = 'disagree'
  return option
}


let printForm = document.getElementById('printToPDF')
printForm.style.display = 'none'

document.getElementById('submit').addEventListener("click", async (event) => {
  submitForm(newForm, formName)
})

async function submitForm(data, form) {
  const document = {
    'form': form,
    'data': data
  }
  console.log(document)
  fetch('https://pffm.azurewebsites.net/form', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(document)
  })
    .then(response => response.json())
    .then(data => respond(data)) 
    .catch((err) => showError(err))
}

function respond(data) {
  let id = data.key
  if (id) {
    showSuccess(id)
    let name = newForm.clientName	  
    sendNotification(id, name, 'individual', 'not urgent')
    sendNotification(id, newForm.familyTrainerName, 'individual', 'not urgent')
    sendNotification(id, 'admin', 'individual', 'not urgent')
  } else {
    showError(data.error)
  }
}

function showSuccess(formId) {
  document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
  printForm.style.display = 'inline';
  printForm.addEventListener('click', (e) => {
  location.href = `phoenix-freedom-foundation-backend.webflow.io/completed-forms/IISS-treatment-plan?id=${id}`
  })
}


function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}

async function sendNotification(id, recipient, type, priority) {
  let message = `You have a new <br/><a href=phoenix-freedom-foundation-backend.webflow.io/completed-forms/iiss-treatment-plan?id=${id}>Educational Consultation Summary</a>`
  console.log(message)
  const url = 'https://pffm.azurewebsites.net/notices'
  let notification = {
    'name': recipient,
    'notice': message,
    'type': type,
    'priority': priority
  }
  const header = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
  }
  
  fetch(url, {
    method: "POST",
    headers: header,
    body: JSON.stringify(notification)
  })
    .then(() => console.log('notice sent'))
    .catch(console.error)
}
