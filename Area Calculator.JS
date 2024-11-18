var choice = prompt("Welcome to Area Calculator\n Please enter your choice\n 1.Area Of Rectangle \n 2.Area of Scalene Triangle \n 3.Area of Circle \n 4.Area of Paralellogram \n 5.Area of square \n 6.Area of Rhombus \n 7.Area of Isosceles Triangle")
if (choice=="1"){
  var l = prompt("Enter the length")
  var b = prompt("Enter the breadth")
  var result = Number(l)*Number(b)
  alert("The area is " +result)
}
if (choice=="2"){
    var b = prompt("Enter the base")
    var h = prompt("Enter the height")
    var result= 0.5*Number(b)*Number(h)
    alert("The area is " +result)
}
if (choice=="3"){
    var r = prompt("Enter the radius")
    var result = 3.14*Number(r^2)
    alert("The area is " +result)
}
if (choice=="4"){
    var b = prompt("Enter the base")
    var h = prompt("Enter the height")
    var result = Number(b)*Number(h)
    alert("The area is " +result)
}
if (choice=="5"){
    var s = prompt("Enter the side")
    var result = Number(s*s)
    alert("The area is " +result)
}
if (choice=="6"){
    var d1 = prompt("Enter first diagonal")
    var d2 = prompt("Enter second diagonal")
    var result = 0.5*Number(d1)*Number(d2)
    alert("The area is " +result)
}
if (choice=="7"){
    var a = prompt("Enter side a")
    var b = prompt("Enter side b")
    var c = prompt("Enter side c")
    var sp = (Number(a)+Number(b)+Number(c))/2
    var result = (Number(sp)*(Number(sp)-Number(a))*(Number(sp)-Number(b))*(Number(sp)-Number(c)))**0.5
    alert("The area is " +result)
}