const usernameField = document.getElementById("userName");
const emailField = document.getElementById("inputEmail3");
const genderField = document.getElementById("selectGender");
const statusField = document.querySelector('input[name="gridRadios"]:checked');
const handleData = () => {
  console.log(
    usernameField.value,
    emailField.value,
    genderField.value,
    statusField.value
  );
};
export default handleData;
