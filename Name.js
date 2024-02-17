var personName = '';
personName = prompt('what is your name') || '';
var lowerCase = personName.toLowerCase();
var upperCase = personName.toUpperCase();
var titleCase = personName.split('').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join('');
if (personName !== null && personName !== '') {
    alert("hello ".concat(personName, ", here are your name in:\n    LowerCase: ").concat(lowerCase, "\n    UpperCase: ").concat(upperCase, "\n    TitleCase: ").concat(titleCase, " "));
}
else {
    alert('please fill your name!');
}
