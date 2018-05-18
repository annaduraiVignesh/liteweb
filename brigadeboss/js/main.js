/* var x, y, z;  // Declare 3 variables
x = 5;        // Assign the value 5 to x
y = 6;        // Assign the value 6 to y
z = x + y;
console.log(z);
alert(z); 
*/
/*
var input = prompt("enter number");
var a = ["a", "b", "c"];
var o = [];
*/


/*
function test(z) {
    var i;
    for (i = 0; i <= z; i++) {
        console.log(i);
    }
}
*/


/*a.forEach(function (c) {
    console.log(c + 1);

    o.push(c);
    console.log(o);
});*/
var o = [];

function test2() {
    var im = document.getElementById("MyID1");
    im.classList.toggle("MyID");
    im.classList.toggle("card3");
    im.querrySelector(".card3").toggle;
    for (var i = 0; i <= 3; i++) {
        console.log(i);
        document.getElementById('txt').value = o;
    }
}
/*var th = function jktvs(name, age) {
    //    this.name = name;
    //    this.age= age;
    alert("The Age is ",age);
}*/





function calc_add() {
    // Addition
    var val1 = parseInt(document.getElementById("val1").value);
    var val2 = parseInt(document.getElementById("val2").value);
    var val = val1 + val2;
    document.getElementById('val3').value = val;
}


function chart_check() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 50) {

        new Chart(document.getElementById("myChart"), {
            type: 'doughnut',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: [2478, 5267, 734, 784, 433]
        }
      ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    } else {
        document.getElementById("myChart").className = "";
    }
}

// TABS

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen");

//END OF TABS

/*//prototype inheritance

function animal(name){
    
    this.name = name;
    this.dog = function()
    { 

        console.log("Hey, Iam a dog", name);
    };
}

function cat(name){
    
    this.name = name;
    var age = 10;
    this.cat = function()
    {
 
        console.log("I am a CAT", name,age);
    };
    
}

animal.prototype = new cat("rusty");

var main_animal = new animal("alam");    

main_animal.dog();
main_animal.cat();*/

// Prototyp test

var Person = function(fn,ln){
    this.fn= fn,
    this.ln= ln
}

Person.prototype.fullName= function(){
        console.log(this.fn + this.ln);
}
Person.prototype.age=29;

var ninjas = new Person('an','s');
console.log(ninjas.fullName());

console.log(Person.prototype.age);




//Function return function
year = [1999, 1990, 1989, 1996];

function calc(yr, fn) {
    var yrArr = [];
    for (var i = 0; i <= yr.length; i++) {
        yrArr.push(fn(yr[i]));
    }
    return yrArr;

}

function age_calc(el) {
    return 2018 - el;

}
var ages = calc(year, age_calc);
console.log(ages);

//BACKBONE TEST
var backModel = Backbone.Model.extend({
    f_name: 'FnameA',
    l_name: "LnameB",
    param_name: function(){
    console.log("test");
    }
    
})

var test_model = new backModel();
//$('document').ready()

$( document ).ready(function() {
    console.log( "ready!" );
    test_model.param_name();
    console.log(test_model.f_name);
    
});

// JS CLASS
class pet  {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    
    getInfo(){
        console.log("this name is "+ this.name +" and its age is "+ this.age);
    }
    
}

var pets = new pet('rusty',2);
console.log(pet);
console.log(pets.getInfo());


// Call, Bind , apply

//CALL
var call_test = {
    'car':'ford', 'tyre_size': 33,
     calcyr: function(){
        console.log("Name of the Car is "+ this.car + " and tyre size is " + this.tyre_size);
    }
}

var joy = call_test;
joy.calcyr();

var jcob = {
    'car': 'MustangGT',
    'tyre_size': 50
}

joy.calcyr.call(jcob);


//APPLY


var jane = {
    'car': 'BMW',
    'tyre_size':22,    
}


joy.calcyr.apply(jane);


// class 
var test = class pet{
constructor(name,age){
this.name = name;
this.age = age;
}
oto(){
console.log("Name is "+this.name +" AGe is "+ this.age );
}
}
var dog = new test('Rusty',2);
console.log(dog.age);
console.log(dog.oto());

var test1 = class cat extends test{
constructor(name,age,habit){
super(name,age);
this.habit= habit;
 }
meow(){
console.log(this.name+" Im Cat"+" and my habit is "+ this.habit);
}
oto(){
super.oto();
console.log(this.name+" ! Im Cat"+" and im in super meth");
}

}

var cat_ex = new test1("Rage",2,"Roaming");
cat_ex.meow();
cat_ex.oto();

test.prototype.constructor.animal_age=2;
console.log("This is prototyped age of cat "+test1.animal_age);



