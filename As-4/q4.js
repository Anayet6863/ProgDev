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

