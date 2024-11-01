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
