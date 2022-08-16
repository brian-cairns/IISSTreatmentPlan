let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSTreatmentPlan'
console.log('form: ' + formName)
let newForm = {}
newForm.goals = []
let submitted = 0
let additional = 0

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
  document.getElementById('showClientName').innerHTML = newForm.clientName;
  document.getElementById('showClientName1').innerHTML = newForm.clientName
  })
  
let address = document.querySelector('input#address')
address.addEventListener('change', (e) => {
	newForm.address = e.target.value;
  console.log(newForm.address);
})

let city = document.querySelector('input#city')
city.addEventListener('change', (e) => {
	newForm.city = e.target.value;
  console.log(newForm.city);
})

let state = document.querySelector('input#state')
state.addEventListener('change', (e) => {
	newForm.state = e.target.value;
  console.log(newForm.state);
})

let zip = document.querySelector('input#zip')
zip.addEventListener('change', (e) => {
	newForm.zip = e.target.value;
  console.log(newForm.zip);
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
  console.log(newForm.phone);
})

let email = document.querySelector('input#email')
email.addEventListener('change', (e) => {
	newForm.email = e.target.value;
  console.log(newForm.email);
})

let dob = document.querySelector('input#dob')
dob.addEventListener('change', (e) => {
	newForm.dob = e.target.value;
  console.log(newForm.dob);
  document.getElementById('showClientDOB').innerHTML = newForm.dob;
  document.getElementById('showClientDOB1').innerHTML = newForm.dob;
})

let familyTrainerName = document.querySelector('input#familyTrainerName')
familyTrainerName.addEventListener('change', (e) => {
	newForm.familyTrainerName = e.target.value;
  console.log(newForm.familyTrainerName);
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
    console.log(newForm.annual)
    })

let threeMonth = document.querySelector('input#threeMonth')
threeMonth.addEventListener('change', (e) => {
    if (newForm.threeMonth) {
        newForm.threeMonth = ''
        document.getElementById('threeMonth').checked = false
    } else {
        newForm.threeMonth = 'threeMonth'
        newForm.annual = ''
        document.getElementById('annual').checked = false
    }
    console.log(newForm.threeMonth)
})
    
let background = document.querySelector('input#background')
background.addEventListener('change', (e) => {
    newForm.background = e.target.value;
    console.log(newForm.background)
    })

class Goal {
    constructor(goalName, strengths, needs, objectives, interventions, responsiblePersonTimeline, progress, notes) {
        this.goalName = goalName;
        this.strengths = strengths;
        this.needs = needs;
        this.objectives = objectives;
        this.interventions = interventions;
        this.responsiblePersonTimeline = responsiblePersonTimeline;
        this.progress = progress
        this.notes = notes
    }
}

async function getCurrentGoal(goal) {
    goal.goalName = document.getElementById('mainGoal').value
    goal.strengths = document.getElementById('strengths').value;
    goal.needs = document.getElementById('needs').value;
    goal.objectives = await getObjectives
    goal.interventions = document.getElementById('interventions').value;
    goal.responsiblePersonTimeline = await getResponsiblePersonTimeline;
    goal.progress = await getProgress
    goal.notes = document.getElementById('notes').value;
    return goal
}

getObjectives = new Promise ((resolve) => {
    let objectives = []
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`goal${i}`) == '') {
            i = 4;
            return objectives
        } else {objectives.push(document.getElementById(`goal${i}`).value)}
    }
    resolve(objectives)
})

getResponsiblePersonTimeline = new Promise ((resolve) => {
    let responsiblePersonTimeline = []
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`responsiblePersonTimelineItem${i}`) == '') {
            i = 4;
            return responsiblePersonTimeline
        } else {responsiblePersonTimeline.push(document.getElementById(`responsiblePersonTimelineItem${i}`).value)}
    }
    resolve(responsiblePersonTimeline)
})

getProgress = new Promise ((resolve) => {
    let progress = ''
    if (document.getElementById('achieved').checked) { progress = 'achieved' }
    if (document.getElementById('discontinued').checked) { progress = 'discontinued' } else { progress = 'on-going' }
    resolve(progress)
})

document.getElementById('submitCurrentGoal').addEventListener("click", async (event) => {
    goal = new Goal;
    console.log(goal)
    goal = await getCurrentGoal(goal)
    console.log(`I am the the completed goal: ${goal}`)
    newForm.goals.push(goal)
    submitted++
    document.getElementById('submissionResponse').innerHTML = "Successfully Submitted"
})

document.getElementById('createNewGoal').addEventListener("click", async (event) => {
    if (submitted <= additional) {
        document.getElementById('submissionResponse').innerHTML = "You need to submit a goal before continuing"
        return
    }
    document.getElementById('submissionResponse').innerHTML = " "
    additional++
    clearGoals()
    return
})

function showError() {
    return document.getElementById('submitError').style.display='block'
}

function clearGoals() {
    document.getElementById('mainGoal').value = '';
    document.getElementById('strengths').value = '';
    document.getElementById('needs').value = '';
    for (let i = 1; i < 4; i++) {
        document.getElementById(`goal${i}`).value = ''
        document.getElementById(`responsiblePersonTimelineItem${i}`).value = ''
    }
    document.getElementById('interventions').value = ''
    document.getElementById('achieved').checked = false;
    document.getElementById('ongoing').checked = false;
    document.getElementById('discontinued').checked = false;
    document.getElementById('notes').value = ''
}

document.getElementById('submit').addEventListener("click", async (event) => {
   // familyTreatmentPlan = document.getElementById('agreeFamilyTreatmentPlan').checked ? "agree" : "disagree"
   // autismSupportTreatmentPlan = document.getElementById('agreeISST').checked ? "agree" : "disagree";
   // newForm.caregiverName = document.getElementById('caregiverName').value;
   // newForm.staffMemberName = document.getElementById('staffName').value;
   // newForm.familyTreatmentPlan = familyTreatmentPlan;
   // newForm.autismSupportTreatmentPlan = autismSupportTreatmentPlan;
    //if (document.getElementById('acceptReceiveCopy').checked) { newForm.copyOfPlan = 'accept' }
    //if (document.getElementById('hardCopyReceiveCopy').checked) { newForm.copyOfPlan = 'hard copy' }
    //if (document.getElementById('electronicReceiveCopy').checked) { newForm.copyOfPlan = 'electronic' }
    //if (document.getElementById('disagreeReceiveCopy').checked) { newForm.copyOfPlan = 'disagree' }
    console.log(newForm)
    submitForm(newForm, formName)
})

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
