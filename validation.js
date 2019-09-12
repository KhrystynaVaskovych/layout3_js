const getId = (id) => document.getElementById(id);
const inputsArray = Array.from(document.getElementsByClassName('input'));
const nameCheck = /[a-zA-Z]+\s{1}[a-zA-Z]+/;
const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passCheck = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

function test(name, email, pass) {
  if ((nameCheck.test(name)) &&
    (emailCheck.test(email)) &&
    (passCheck.test(pass))) {
    getId('sendData').classList.remove('disabled');
  }
}

const validation = {
    init: () => {
        inputsArray.forEach((element) => {
            element.onchange = () => {
              const inputName = getId('name').value;
              const inputEmail = getId('email').value;
              const inputPass = getId('password').value;
          
              test(inputName, inputEmail, inputPass);
            };
          });
    }
}

export default validation;