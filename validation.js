const getId = (id) => document.getElementById(id);
const inputData =[...document.getElementsByClassName('input')];
const nameCheck = /[a-zA-Z]+/;
const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passCheck = /(?=^.{6,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
const disabledState = 'disabled';

function test(userData) {
  if ((nameCheck.test(userData.name)) &&
    (emailCheck.test(userData.email)) &&
    (passCheck.test(userData.password))) {
    getId('sendData').classList.remove(disabledState);
  } else{
    getId('sendData').classList.add(disabledState)
  }
}

const validation = {
    init: () => {
      inputData.forEach(element => {
            element.onchange = () => {
              const name = getId('name').value;
              const email = getId('email').value;
              const password = getId('password').value;
              
              test({name, email, password});
            };
          });
    }
}

export default validation;