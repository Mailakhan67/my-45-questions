//let message = "hello world";
//console.log(message);
var personName = '';
personName = prompt("what is your name?") || ':';
if (personName !== null && personName !== '') {
    alert("hello ".concat(personName, ",would you like to learn some python today?"));
}
else {
    alert('You have to fill your name!');
}
