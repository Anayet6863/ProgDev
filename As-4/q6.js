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
