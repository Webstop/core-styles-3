
  function myFunction() {
    // get the OUTER html of the element you want to copy
    var text = document.getElementById('icon').outerHTML;

    // put that outerHTML into another textbox for copying
    var tempTextbox = document.getElementById('copyingText');
    tempTextbox.value = text;

    tempTextbox.focus();
    tempTextbox.select();
    
    document.execCommand("Copy");
  }

