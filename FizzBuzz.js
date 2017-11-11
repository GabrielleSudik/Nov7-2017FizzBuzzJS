var printMe = document.getElementById("something");

var myButton = document.getElementById("btn");

var results = fizzBuzz();

myButton.onclick = function () {
    printMe.innerHTML = results;
}

function fizzBuzz() {

    var returnValue = "";

    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {

            returnValue += "FizzBuzz";
        }
        else if (i % 3 === 0) {

            returnValue += "Fizz";
        }
        else if (i % 5 === 0) {

            returnValue += "Buzz";
        }
        else {

            returnValue += i;

        }
        returnValue += "<br/>"
    }
    return returnValue;
}
