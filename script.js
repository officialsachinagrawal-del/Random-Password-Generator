// function password(){
//     let passLength = 20;
//     let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
//     let lowercase = "abcdefghijklmnopqrstuvwxyz";
//     let symbol    = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//     let number    = "123456789"
//     let allcharacter = uppercase + lowercase + symbol + number ;
//     let pass = "";

//     for(let i =0;i<passLength; i++){

//         pass += allcharacter.charAt(
//             Math.floor(Math.random() * allcharacter.length)
//         );
//     }
//     console.log(`My password is -> ` + pass)
// }
// password();



document.addEventListener("DOMContentLoaded", function() {

let input = document.getElementById("Password-length"); //taking input length of password
let Wbtn = document.getElementById("Weak-pass");
let Sbtn = document.getElementById("Strong-pass");
let SStrbtn = document.getElementById("Super-Str-pass");
let Fbtn = document.getElementById("Funny-pass");


class Password {
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
  lowercase = "abcdefghijklmnopqrstuvwxyz";
  symbol = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  number = "123456789";
  funny = ["admin","password","name","funny"];

  // constructor(uppercase,lowercase,symbol,number){
  //     this.uppercase = uppercase;
  //     this.lowercase = lowercase;
  //     this.number = number;
  //     this.symbol = symbol;

  // }

  StrongPassword() {
    let length = parseInt(input.value);
    let stPass = "";
    let strongAllCharacter = this.symbol + this.number;
    for (let i = 0; i < length; i++) {
      stPass += strongAllCharacter.charAt(
        Math.floor(Math.random() * strongAllCharacter.length)
      );
    }
    return stPass;
    // console.log(stPass);
  }
  WeakPassword() {
   let length = parseInt(input.value);
    let WPass = "";
    let WeakAllCharacter = this.uppercase + this.lowercase;
    for (let i = 0; i < length; i++) {
      WPass += WeakAllCharacter.charAt(
        Math.floor(Math.random() * WeakAllCharacter.length)
      );
    }
    // console.log(WPass);
    return WPass;
  }

  SuperStrongPassword() {

       let length = parseInt(input.value);
        let SuperStrPass = "";
        let SuperStrAllCharacter =this.uppercase + this.lowercase + this.symbol + this.number;
        for(let i =0;i<length ;i++){
             SuperStrPass += SuperStrAllCharacter.charAt(
            Math.floor(Math.random() * SuperStrAllCharacter.length)
            );

        }
        // console.log(SuperStrPass);
        return SuperStrPass;
  }
  FunnyPassword(funny) {
        let FunnyPass = "";
        let FunnyAllCharacter = this.funny;
        // for(let i =0;i<funny.length ;i++){
            // stPass += FunnyAllCharacter.charAt(
            // Math.floor(Math.random() * FunnyAllCharacter.length)
            // );

            let randomIndex = Math.floor(Math.random() * funny.length);
             FunnyPass += funny[randomIndex];
         

        
        // console.log(FunnyPass);
        return FunnyPass;
  }
}
let a = new Password();
Wbtn.addEventListener('click',()=>{
     let Weak_Password = a.WeakPassword();
     Wbtn.textContent = Weak_Password;



});
Sbtn.addEventListener('click',()=>{
    let Strong_Password = a.StrongPassword();
    Sbtn.textContent = Strong_Password;


});
SStrbtn.addEventListener('click',()=>{
     let Super_Strong_Password = a.SuperStrongPassword();
     SStrbtn.textContent = Super_Strong_Password;


});
Fbtn.addEventListener('click',()=>{
    a.FunnyPassword();


});




let buttons = document.querySelectorAll(".mode-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach(b => b.classList.remove("active"));
    
    // Add active class only to clicked button
    btn.classList.add("active");
    
    // Disable other buttons
    buttons.forEach(b => {
      b.disabled = b !== btn; // disable all except clicked one
    });
  });
});








})









// let b = new Password();
// console.log('strong password')
// a.StrongPassword(a.symbol, a.number);
// console.log("weak password")
// a.WeakPassword(a.uppercase,a.lowercase);
// console.log("Super Strong Password")
// a.SuperStrongPassword(a.uppercase, a.lowercase,a.symbol,a.number);
// console.log("funny Pasword")
// a.FunnyPassword(a.funny);
