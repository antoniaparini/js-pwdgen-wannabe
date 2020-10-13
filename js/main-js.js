// JAVASCRIPT INSTRUCTIONS

//Get data Name from user
var userName = prompt ('Quale è il tuo nome?');

//Get data Surname from user
var userSurname = prompt ('Quale è il tuo cognome?');

//Get data Fav colour from user
var userFavcolour = prompt ('Quale è il tuo colore preferito?');

//Get data Name, Surname, Fav colour from user
var userPwd = userName + userSurname + userFavcolour + '19';

//Output
document.getElementById("userName").innerHTML = userName + userSurname;
document.getElementById('userFavcolour').innerHTML = userFavcolour;
document.getElementById('userPwd').innerHTML = userPwd;
