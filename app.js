
var firstName = prompt("Enter your first Name");
var lastName = prompt("Enter your last Name");
var fullName = firstName + lastName;
alert ("Welcome to our website" +" " + fullName);


var str = prompt("Enter Your Favorite Mobile Phone Model");
var numchar = str.length;
document.write("My favourite phone is" + " " + str);
document.write("<br>");
document.write("Length of string:" + numchar);


var str =("Pakistani") ;
document.write ("String:Pakistani")
document.write("<br>")
document.write ( "index of 'n':" + " " +str.indexOf('n'));


var text = "Hello World";
var indexNum = text.lastIndexOf("l");
document.write("String:"+ text)
document.write("<br>")
document.write("Last index of 'l':" + indexNum)


var a = "Pakistani";
document.write("string:" + a);
document.write("<br>")
document.write( "character at index 3 :" + a.charAt(3))


var firstName = prompt ("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
alert("Welcome to our website"+ " " + firstName + lastName)


var text = "Hyderabad";
var indexNum = text.indexOf("Hyderabad");
var firstText= text.slice(0,indexNum);
var replacingtext = 'Islamabad';
var thirdtext = text.slice(indexNum + 9);
document.write("City:" + text);
document.write("<br>")
document.write( "After replacement :" +firstText+replacingtext+thirdtext);


var para = "Ali and Sams are best friends.They play cricket and football together";
var para1 = para.replace(/and/g,"&")
document.write(para1)


var first = "peanuts";
var nuts = "PEANUTS";
var nuts = nuts.toUpperCase()
document.write("User" + " " + "input :" + first)
document.write("<br>")
document.write("Upper" + " " + "case:" +nuts);

var num = 3.45214;
var round = Math.round(num);
var round2 = Math.floor(num);
var round3 = Math.ceil(num);
document.write("number:" + num);
document.write("<br>");
document.write("round off value:" + round);
document.write("<br>");
document.write("floor value:" + round2);
document.write("<br>");
document.write("ceil value:" + round3);


var num = -2.673;
var round = Math.round(num);
var round2 = Math.floor(num);
var round3 = Math.ceil(num);
document.write("number:" + num);
document.write("<br>");
document.write("round off value:" + round);
document.write("<br>");
document.write("floor value:" + round2);
document.write("<br>");
document.write("ceil value:" + round3);
math method end
Date method start


var a = new Date();
document.write(a);


var month = ["January","February" ,"March", "April","May","June","July","August","September","October","November","December"];
var m = new Date();
var now = month[m.getMonth]
var end = month[m.getMonth()];
document.write("Current month:" + end);




var a = new Date ();
var b = a.getTime();
var c = a.getMinutes();
document.write("Current Date:"+a);
document.write("<br>");
document.write("Elapsed milliseconds since January 1 , 1970:" +b/(1000));
document.write("<br>");
document.write("Elapsed minutes since January 1 , 1970:" +b/(1000*60*60));


var a = new Date(prompt("Enter Your Hours"));
var b = a.getHours();
if(a > 12){
    document.write("Its AM");
}else{
    document.write("Its PM")
}




function telldate() {
    var now = new Date();
    document.write(now)
    }
    telldate()


function start() {
   var firstName = "Hunaina";
   var lastName = "Arif";
   document.write("Welome to oue website" + " " + firstName + lastName)
}
 start()

function sumOfSquares(num) {
    var i;

    for (i=0,i<=num,i++){
        var sum=0;
        var i = i*i;
        sum = i;
}
     document.write("The sum of squares for numbers up to and including " +num+ "is " +sum+ ) ;
}
var num = parseInt(prompt("Enter a number:"));
sumOfSquares(num);


var number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}


else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

document.write(capital_letter("Development"));

function area( a,  b, c);
void main()
{
   var S = (a+b+c)/2.0;

  var  ar = sqrt(S*(S-a)*(S-b)*(S-c));

}
area(a,b,c);


function main(chem,urdu,phy){
    var total = 300;
    var marks = chem + urdu + phy;
    var perc = marks / total * 100;
}
    
main (50,70,68);

   

