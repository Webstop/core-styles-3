"use strict";

(() => {

function getConfig(textarea){
  let content = textarea.value;
  let toolbarAttr = textarea.getAttribute('data-editor-toolbar');
  let toolbarItems = [
    ['heading', 'bold', 'italic'],
    ['ul', 'ol', 'indent', 'outdent'],
    ['hr', 'table', 'image', 'link']
  ]

  // Standard is the default and therefore isn't checked
  if(toolbarAttr === 'basic' || textarea.hasAttribute('data-editor-toolbar-basic')) {
    toolbarItems = [
      ['heading', 'bold', 'italic', 'link']
    ]
  } else if(toolbarAttr === 'full' || textarea.hasAttribute('data-editor-toolbar-full')) {
    toolbarItems = [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock']
    ]
  }

  console.log('Textarea Value in getConfig:');
  console.log(content);

  return {
    content: content,
    toolbarItems: toolbarItems,
    initialEditType: 'wysiwyg'
  }
}


// The editor won't work directly on a textarea, for progressive enhancement using a
// textarea is the ideal. So we use a textarea, hide it, and place the content from
// our text editor into the textarea on form submit. The following method creates
// the div the editor will live in .
function addElement(textarea, config) {
  // create a new div element
  let div = document.createElement("pre");
  // copy over CSS classes
  if (textarea.hasAttribute('class')) {
    let cssClasses = textarea.getAttribute('class').split(" ");
    cssClasses.forEach((cssClass) => {
      div.classList.add(cssClass);
    });
  }


  // Set overflow behavior
  // div.style.overflow = "auto";
  // set the height, if there is a rows attribute
  // div.style.height = 'auto'; // reset the height
  if (textarea.hasAttribute('rows')) {
    let rows = textarea.getAttribute('rows');
    let pixels = rows * 24; // 24 pixels per row
    div.style.minHeight = pixels + 'px';
  }
  div.textContent = textarea.value;
  // Place the new div right after the textarea
  textarea.insertAdjacentElement('afterend', div);
  textarea.style.display = "none";

  let pre = document.createElement("pre");
  pre.textContent = textarea.value;
  div.insertAdjacentElement('afterend', pre);

  console.log('trying pre.textContent as pre');

  return div;
}

// function registerToolbar(editor){
//   document.getElementById('editor-toolbar-strong').addEventListener('click', () => {
//     editor.chain().focus().toggleBold().run();
//   });
// }

// Data Attribute DSL
let editors = document.querySelectorAll("[data-markdown-editor]");
const Editor = toastui.Editor;

editors.forEach((textarea) => {
  console.log('Found a Markdown Editor');
  let config = getConfig(textarea);
  let div = addElement(textarea);
  let form = textarea.closest('form');

  console.log('config.content:', config.content);
  console.log(config.content);

  let editor = new Editor({
    el: div,
    //content: '# foobar',//config.content,
    toolbarItems: config.toolbarItems,
    initialEditType: config.initialEditType
  });

  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    textarea.value = editor.getMarkdown();
    console.log('Submit Textarea:');
    console.log(textarea.value);
    //form.submit();


    // Log a message to the console when the form is submitted
    console.log('Form submitted!');
  });

  editor.getMarkdown();

});

})();


// ...
// const editor = await Editor.make()
//   .config(menuDefaultConfig)
//   .config(() => {
//     ctx.set(rootCtx, document.querySelector('#app'))
//   })
//   .use(menu)
//   .create()

// // Step 1: Select the textarea with the attribute data-markdown-editor
// const textarea = document.querySelector('textarea[data-markdown-editor]');
//
// if (textarea) {
//   // Step 2: Traverse up the DOM tree to find the parent form
//   const form = textarea.closest('form');
//
//   if (form) {
//     // Step 3: Add a submit event listener to the form
//     form.addEventListener('submit', function(event) {
//       // Prevent the default form submission behavior
//       event.preventDefault();
//       textarea.value = editor.getMarkdown();
//       console.log('Textarea:');
//       console.log(textarea.value);
//       textarea.submit();
//
//       // Log a message to the console when the form is submitted
//       console.log('Form submitted!');
//     });
//   }
// }
