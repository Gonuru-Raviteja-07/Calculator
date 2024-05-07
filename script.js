let display = "";

function fun(x) {
       if (x == 'AC') {
              display = "";
              document.getElementById("inputBox").value = display;
       }
       else if (x == 'DEL') {
              display = display.substring(0, display.length - 1)
              document.getElementById("inputBox").value = display;
       }
       else if (x == '=') {
              let result = eval(display);
              document.getElementById("inputBox").value = result;
       }
       else {
              display += x;
              document.getElementById("inputBox").value = display;
       }
}