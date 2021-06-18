const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit" , function (event)) {
event.preventDefault();
const password = form.getElementsById('password');
if (password.length < 4) {
  const errorMessage = 'Parola trebuie sa aiba cel putin 4 caractere';
  const p = document.createElement("p");
  p.textContent = errorMessage;
  document.insertBefore(p, password);
}
}