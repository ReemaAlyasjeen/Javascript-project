let outputScreen = document.getElementById("output-screen");
function display(num)
{
  
    outputScreen.value = outputScreen.value+ num;
}

    // clear 
    
    function Clear() {
      outputScreen.value = ''
    }

    // delete 
    function  Del()
    {
      outputScreen.value=outputScreen.value.slice(0,-1)
    }
    // Calculate
    function Calculate()
    {
      outputScreen.value=eval(outputScreen.value)
    }
    
    function fun()
{
  
    outputScreen.value = outputScreen.value+ "(";
}
function func()
{
  
    outputScreen.value = outputScreen.value+ ")";
}
 function sin()
 {
  outputScreen.value=Math.sin(outputScreen.value)
 }
 function cos()
 {
  outputScreen.value=Math.cos(outputScreen.value)
 }
 function tan()
 {
  outputScreen.value=Math.tan(outputScreen.value)
 }
   