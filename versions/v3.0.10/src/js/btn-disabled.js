"use strict";
// Disable buttons


const clickDisableButtons = document.querySelectorAll("[data-disable-on-click]");

clickDisableButtons.forEach(btn=>{
  btn.addEventListener('click', function(event){
    event.target.disabled  = true;
    event.target.innerHTML = 'Loading...';
    event.target.value     = 'Loading...';
  });
})

const submitDisableButtons = document.querySelectorAll("[data-disable-on-submit]");

submitDisableButtons.forEach(btn=>{
  btn.addEventListener('submit', function(event){
    event.target.disabled  = true;
    event.target.innerHTML = 'Loading...';
    event.target.value     = 'Loading...';
  });
})

