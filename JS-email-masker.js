** start of script.js **

const maskEmail=(email)=>{

//this will store the email service
let provider= email.slice(email.indexOf("@"));

//this will take the email user
let userName= email.slice(0,email.indexOf("@"));

// this will obfuscate the username
const maskedUser= userName[0] + '*'.repeat(userName.length - 2)+userName.slice(-1);

const maskedEmail= maskedUser+provider
return maskedEmail


}


let email="apple.pie@example.com"
console.log(maskEmail(email))

** end of script.js **

