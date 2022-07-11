let getUsername = () => document.getElementById('username').value;
let getPassword = () => document.getElementById('password').value;

let verifyData = () => {
  let result = getUsername() && getPassword();
  return result ? true : false;
}

let returnErrorMessage = () => {
  return result = verifyData() ?
    alert('Sucesso!') : 
    alert('Algo está errado')
}

let verifyAndSendMessage = () => {
  verifyData();
  returnErrorMessage();
}

let returnUserData = () => {
  if (verifyData()) {
    UserData = [];
    UserData.push('');

    const arrayUserData = UserData.map(() => ({
      username: getUsername(), 
      password: getPassword() 
    }));

    return arrayUserData[0];
  }

  return null;
}

let saveUserData = () => {
  verifyAndSendMessage();

  return returnUserData();
}

let buttonPressed = () => {
  console.log(saveUserData());
}