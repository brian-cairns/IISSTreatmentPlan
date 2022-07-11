let submit = document.getElementById('submit')
console.log(submit)
const formName = 'IISSTreatmentPlan'
console.log('form: ' + formName)
let newForm = {}
let submitted = 0
let additional = 0

let clientName = document.querySelector('input#clientName')
clientName.addEventListener('change', (e) => {
	console.log('changed')
	newForm.clientName = e.target.value;
  console.log(newForm.clientName);
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
})

let familyTrainerName = document.querySelector('input#familyTrainerName')
familyTrainerName.addEventListener('change', (e) => {
	newForm.familyTrainerName = e.target.value;
  console.log(newForm.familyTrainerName);
})

let annual = document.querySelector('annual')
annual.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.annual)
    })

let threeMonth = document.querySelector('threeMonth')
threeMonth.addEventListener('change', (e) => {
    newForm.treatmentPlanDuration = e.target.value;
    console.log(newForm.threeMonth)
})
    
let background = document.querySelector('background')
background.addEventListener('change', (e) => {
    newForm.background = e.target.value;
    console.log(newForm.background)
    })

document.getElementById('showClientName').innerHTML = newForm.clientName;
document.getElementById('showClientDOB').innerHTML = newForm.dob;

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
    goal.needs = document.getElementById('needs'), value;
    goal.objectives = await getObjectives()
    goal.interventions = document.getElementById('interventions').value;
    goal.responsiblePersonTimeline = await getResponsiblePersonTimeline();
    goal.progress = await getProgress()
    goal.notes = document.getElementById('notes').value;
}

async function getObjectives() {
    let objectives = []
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`goal${i}`) == '') {
            i = 4;
            return objectives
        } else {objectives.push(document.getElementById(`goal${i}`).value)}
    }
    return objectives
}

async function getResponsiblePersonTimeline() {
    let responsiblePersonTimeline = []
    for (let i = 1; i < 4; i++) {
        if (document.getElementById(`responsiblePersonTimelineItem${i}`) == '') {
            i = 4;
            return responsiblePersonTimeline
        } else {responsiblePersonTimeline.push(document.getElementById(`responsiblePersonTimelineItem${i}`).value)}
    }
    return responsiblePersonTimeline
}

async function getProgress() {
    let progress = ''
    if (document.getElementById('achieved').isChecked) { progress = 'achieved' }
    if (document.getElementById('discontinued'), isChecked) { progress = 'discontinued' } else { progress = 'on-going' }
    return progress
}

document.getElementById('submitCurrentGoal').addEventListener("click", async (event) => {
    goal = new Goal;
    goal = await getCurrentGoal(goal)
    newForm.goals.push(goal)
    submitted++
    document.getElementById('submitError').style.display='none'
})

document.getElementById('createNewGoal').addEventListener("click", async (event) => {
    if (submitted <= additional) {
        showError()
        return
    }
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
        document.getElementById(`responsiblePersonTimeline${i}`).value = ''
    }
    document.getElementById('interventions').value = ''
    document.getElementById('achieved').isChecked = false;
    document.getElementById('ongoing').isChecked = false;
    document.getElementById('discontinued').isChecked = false;
    document.getElementById('notes').value = ''
}

document.getElementById('showClientName').innerHTML = newForm.clientName
document.getElementById('showClientDOB').innerHTML = newForm.dob;

function getFamilyTreatmentPlan() {
    if (document.getElementById('agreeFamilyTreatmentPlan').isChecked) { return 'agree' }
    else {return 'disagree'}
}

function getAutismSupportTreatmentPlan() {
    if (document.getElementById('agreeISST').isChecked) { return 'agree' }
    else {return 'disagree'}    
}

function copyOfPlan() {
    if (document.getElementById('acceptReceiveCopy').isChecked) { return 'accept' }
    if (document.getElementById('hardCopyReceiveCopy').isChecked) { return 'hard copy' }
    if (document.getElementById('electronicReceiveCopy').isChecked) { return 'electronic' }
    else { return 'disagree' }
}

document.getElementById('submit').addEventListener("click", async (event) => {
    familyTreatmentPlan = await getFamilyTreatmentPlan();
    autismSupportTreatmentPlan = await getAutismSupportTreatmentPlan();
    copyOfPlan = await getCopyOfPlan()
    newForm.caregiverName = document.getElementById('caregiverName').value;
    newForm.staffMemberName = document.getElementById('staffName').value;
    newForm.familyTreatmentPlan = familyTreatmentPlan;
    newForm.autismSupportTreatmentPlan = autismSupportTreatmentPlan;
    newForm.copyOfPlan = copyOfPlan;
    submitForm(newForm, 'consultationFeeSummary')
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
    .then((response) => {
      if (response.status == 200) {
      showSuccess()
      } else {
        showError(response.body)
      }
    })
    .catch((err) => showError(err))
}


function showSuccess() {
    document.getElementById('returnMessage').innerHTML = 'Form has been successfully submitted'
}

function showError(err) {
    console.error
    document.getElementById('returnMessage').innerHTML = `An error occurred when submitting this form, which was ${err}. Please contact the administrator for help.`
}