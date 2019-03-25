var typeOfTriangle =  function() {
  var a = parseInt(document.getElementById('length1').value);
  var b = parseInt(document.getElementById('length2').value);
  var c = parseInt(document.getElementById('length3').value);

  if(a===b && b===c){
    alert("It is an equilateral triangle")
  }
  else if(a + b === c || a+c===b || c+b===a || a+b<c || a+c<b || c+b<a){
  alert("It is not a triangle.Please re-enter your values properly.If same result is seen, then the measurements given cannot form a geometric triangle.")
  }
    else if(a===b && a!==c || a===c && a!==b){
    alert("It is an isosceles triangle")
  }

    else if(a!==b || b!==c || a!==c){
    alert("It is a scalene triangle")
    }


else{}

  }
