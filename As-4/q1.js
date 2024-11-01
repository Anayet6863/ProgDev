function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || (expenses > income)) {
        return "Invalid Input";
    }
    else {
        let differcnce = income - expenses;
        return differcnce * 0.20;
    }
}

function sendNotification(email) {
    let p = email.indexOf("@");
    if (p == -1) {
        return "Invalid Email";
    }
    else {
        let arr = email.split("@");
        let userName = arr[0];
        let domainName = arr[1];
        return userName + " sent you an email from " + domainName;

    }
}

function checkDigitsInName(name) {
    if (typeof name === "string") {
        let checked = false;
        for (let i = 0; i < name.length; i++) {
           
            if (name[i] >= "0" && name[i] <= "9") {
                checked = true;
                break;
            }
        }
        return checked;
    }
    else {
        return "Invalid Input"
    }
}

function calculateFinalScore(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
        return "Invalid Input";
    }
    else {
        var totalNumber;
        if (obj.isFFamily) {
            totalNumber = obj.testScore + obj.schoolGrade + 20;
        }
        else {
            totalNumber = obj.testScore + obj.schoolGrade;
        }

    }

    if (totalNumber >= 80) {
        return true;
    }
    else {
        return false;
    }

}

function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
        const l = waitingTimes.length;
        let sum = 0, avarage;
        for (let i = 0; i < l; i++) {
            sum += waitingTimes[i];
        }
        avarage = Math.round(sum / l);
        let totalTime = (serialNumber - l - 1) * avarage;
        return totalTime;
    }
    else {
        return "Invalid Input";
    }
}

