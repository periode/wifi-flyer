let stage = -1
let yes, no, why
let question, text
let skipDuration = 3000

let questions = [
    'We can detect whether you are eligible for fast WiFi by just taking a glimpse at this pretty face of yours.'
]

let texts = [
    'Please allow camera access.'
]

let start = (_evt) => {
    _evt.target.style.display = "none"

    yes = document.getElementById("btn-yes")
    no = document.getElementById("btn-no")
    why = document.getElementById("btn-why")

    question = document.getElementById('question')
    text = document.getElementById('text')

    yes.style.display = "block"
    no.style.display = "block"
    why.style.display = "none"

    stage++

    question.innerText = questions[stage]
    text.innerText = texts[stage]
}

let agree = () => {
    stage++
    switch (stage) {
        case 1:
            showButtons(false)
            question.innerText = "Great! Please accept."
            text.innerText = ""

            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }).then(() => {
                question.innerText = "Thanks! We've taken a picture and we've determined your eligibility. You can travel through Berlin zones A-B-C."
                setTimeout(agree, skipDuration)
            }).catch(() => {
                question.innerText = "We're sorry to hear you'd rather skip this opportunity to travel for cheap!"
                setTimeout(agree, skipDuration)
            })
            break;
        case 2:
            showButtons(true)
            question.innerText = "In accordance with the recent measures (Berlin Sicherheitsgestetz §11.9, §11.10, §12.1), we would like to request your cooperation with ensuring the safety of all passengers."
            text.innerText = "Please enable your microphone throughout the duration of your travel. This page will remain open in the background and you can go back to browsing your usual content."

            break;

        case 3:
            showButtons(false)
            navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
                question.innerText = "Thanks! You're making a safer trip for all."
                setTimeout(agree, skipDuration)
            }).catch(() => {
                question.innerText = "We're sorry to hear you'd rather skip this opportunity to travel safely!"
                setTimeout(agree, skipDuration)
            })
            break;
        case 4:
            showButtons(true)
            question.innerText = "Last but not least! Would you like to invite friends to participate in this program?"
            text.innerText = "We'll use our social scanning technology to determine which friends of yours are eligible."
            break;

        case 5:
            showButtons(false)
            question.innerText = "Thank you for your cooperation."
            text.innerText = "Downloading contacts..."
            setTimeout(agree, skipDuration)
            break;
        case 6:
            question.innerText = "You have reached the end of the registration process!\n\nUnfortunately, our restults indicate we cannot assist you further."
            text.innerText = ""
            yes.style.display = "none"
            no.style.display = "none"
            why.style.display = "block"
            break;
        default:
            console.log("default reached");
            break;
    }
}

let deny = () => {
    stage++
    switch (stage) {
        case 1:
            showButtons(false)
            question.innerText = "Due to safety concerns, the registration process will proceed nonetheless."

            navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } }).then(() => {
                question.innerText = "Thanks! We've taken a picture and we've determined your eligibility. You can travel through Berlin zones A-B-C."
                setTimeout(agree, 1000)
            }).catch(() => {
                question.innerText = "We're sorry to hear you'd rather skip this opportunity to travel for cheap!"
                setTimeout(agree, skipDuration)
            })
            break;
        case 2:
            showButtons(true)
            question.innerText = "In accordance with the recent measures (Berlin Sicherheitsgestetz §11.9, §11.10, §12.1), we would like to request your cooperation with ensuring the safety of all passengers."
            text.innerText = "Please enable your microphone throughout the duration of your travel. This page will remain open in the background and you can go back to browsing your usual content."
            break;
        case 3:
            showButtons(false)
            question.innerText = "Active microphones reduce assault rates by 12% compared to the daily average. We encourage you to help keep your commute safe."

            navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
                question.innerText = "Thanks! You're making a safer trip for all."
                setTimeout(agree, 1000)
            }).catch(() => {
                question.innerText = "We're sorry to hear you'd rather skip this opportunity to travel safely!"
                setTimeout(agree, skipDuration)
            })
            break;
        case 4:
            showButtons(true)
            question.innerText = "Last but not least! Would you like to invite friends to participate in this program?"
            text.innerText = "We'll use our social scanning technology to determine which friends of yours are eligible."
            break;
        case 5:
            showButtons(false)
            question.innerText = "Your choice has been recorded."
            text.innerText = "Downloading contacts..."
            setTimeout(agree, skipDuration)
            break;
        case 6:
            question.innerText = "You have reached the end of the registration process!\n\nUnfortunately, our restults indicate we cannot assist you further."
            text.innerText = ""
            yes.style.display = "none"
            no.style.display = "none"
            why.style.display = "block"
            break;
        default:
            console.log("default reached");
            break;
    }
}

let explain = () => {
    document.querySelector('main').style.backgroundColor = "transparent"
    question.innerText = "Does that seem unfair and intrusive?\n\nThese kinds of technologies might end up becoming reality."
    text.innerText = "Face recognition, voice recognition and contact pruning are used extensively at the European Union border. Some of the companies selling these technologies want to have them implemented in places like metro stations as well."
    why.innerText = "What can I do?"
    why.onclick = act
}

let act = () => {
    question.innerText = "One framework for regulating these uses is the EU AI Act. It is currently being discussed at the EU Parliament."
    text.innerText = "Contact your MP to let them know that AI surveillance technologies shouldn't be allowed."
    why.style.display = "none"
}

let showButtons = (_show) => {
    yes.style.display = _show ? "block" : "none"
    no.style.display = _show ? "block" : "none"
}