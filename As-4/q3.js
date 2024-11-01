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
