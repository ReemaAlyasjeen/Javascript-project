let outputScreen = document.getElementById("output-screen");
function display(num)
{
    outputScreen.value =+num;
}

    // clear 
    
    function Clear() {
      outputScreen.value = ''
    }
    
    // delete
    
    function del() {
      outputScreen.value = outputScreen.value
    }