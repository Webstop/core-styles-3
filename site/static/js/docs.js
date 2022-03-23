
  // function myFunction() {
  //   // get the OUTER html of the element you want to copy
  //   var text = document.getElementById('icon').outerHTML;
  //
  //   // put that outerHTML into another textbox for copying
  //   var tempTextbox = document.getElementById('copyingText');
  //   tempTextbox.value = text;
  //
  //   tempTextbox.focus();
  //   tempTextbox.select();
  //
  //   document.execCommand("Copy");
  // }

  // function itemSearch() {
  //   // Declare variables
  //   let input, filter, ul, li, a, i, txtValue;
  //   let searchFields = document.getElementsByClassName('search-input');
  //   input = document.getElementById('search-input');
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById("myUL");
  //   li = ul.getElementsByTagName('li');
  //
  //   // Loop through all list items, and hide those who don't match the search query
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // }






  // Insert copy to clipboard button before .highlight
  var btnHtml = '<div class="wsg-clipboard"><button class="btn-clipboard btn btn-secondary btn-sm" title="Copy to clipboard"><i class="fad fa-cut"></i> Copy</button></div>'
  document.querySelectorAll('div.highlight')
    .forEach(function (element) {
      element.insertAdjacentHTML('afterbegin', btnHtml)
    })

  document.querySelectorAll('.btn-clipboard')
    .forEach(function (btn) {
      var tooltipBtn = new bootstrap.Tooltip(btn)

      btn.addEventListener('mouseleave', function () {
        // Explicitly hide tooltip, since after clicking it remains
        // focused (as it's a button), so tooltip would otherwise
        // remain visible until focus is moved away
        tooltipBtn.hide()
      })
    })

  var clipboard = new ClipboardJS('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (e) {
    var tooltipBtn = bootstrap.Tooltip.getInstance(e.trigger)

    e.trigger.setAttribute('data-bs-original-title', 'Copied!')
    tooltipBtn.show()

    e.trigger.setAttribute('data-bs-original-title', 'Copy to clipboard')
    e.clearSelection()
  })

  clipboard.on('error', function (e) {
    var modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    var fallbackMsg = 'Press ' + modifierKey + 'C to copy'
    var tooltipBtn = bootstrap.Tooltip.getInstance(e.trigger)

    e.trigger.setAttribute('data-bs-original-title', fallbackMsg)
    tooltipBtn.show()

    e.trigger.setAttribute('data-bs-original-title', 'Copy to clipboard')
  })
