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
    // (
    function fun()
{
  
    outputScreen.value = outputScreen.value+ "(";
}
   // )
function func()
{
  
    outputScreen.value = outputScreen.value+ ")";
} // sin 
 function sin()
 {
  outputScreen.value=Math.sin(outputScreen.value)
 }
 // cos
 function cos()
 {
  outputScreen.value=Math.cos(outputScreen.value)
 }
   // tan
 function tan()
 {
  outputScreen.value=Math.tan(outputScreen.value)
 }
   // .
  function  myFun()
  {
    if(outputScreen.value[outputScreen.value.length-1] !='.')
    outputScreen.value=outputScreen.value+ "."
  }
  function  myFunc()
  {
    if(outputScreen.value[outputScreen.value.length-1] !='/')
    outputScreen.value=outputScreen.value+ "/"
  }