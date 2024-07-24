"use strict";

(() => {

  const pxPerRow = 24; // 24 pixels per row (a textarea row)
  const editorVersion = '3.2.2'; // Toast UI Editor Version Number

  function getConfig(textarea) {
    let pixels = 0;
    let content = textarea.value;
    let height = '300px';
    let mode = 'wysiwyg'; // Accepts `wysiwyg`, `markdown`, or `split-pane`.
    let previewStyle = 'tab'; // Accepts 'tab' or 'vertical'.
    let initialEditType = 'wysiwyg';
    let toolbarAttr = textarea.getAttribute('data-editor-toolbar');
    let toolbarItems = [
      ['heading', 'bold', 'italic'],
      ['ul', 'ol'],
      ['hr', 'table', 'image', 'link']
    ]

    // Standard is the default and therefore isn't checked
    if (toolbarAttr === 'basic') {
      toolbarItems = [
        ['heading', 'bold', 'italic', 'link']
      ]
    } else if (toolbarAttr === 'full') {
      toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol'],
        ['table', 'image', 'link'],
        ['code', 'codeblock']
      ]
    }

    console.log('Textarea Value in getConfig:');
    console.log(content);

    if (textarea.hasAttribute('data-editor-height')) {
      pixels = Number(textarea.getAttribute('data-editor-height'));

    } else if (textarea.hasAttribute('rows')) {
      let rows = Number(textarea.getAttribute('rows'));
      pixels = rows * pxPerRow; // 24 pixels per row
    }

    if (pixels >= 72) { // must have at least 3 rows
      pixels += 75; // for editor toolbar and chrome
      height = pixels+ 'px';
    }

    if (textarea.hasAttribute('data-editor-mode')) {
      mode = textarea.getAttribute('data-editor-mode')
      if (mode === 'wysiwyg') {
        // Same as default behavior
        initialEditType = 'wysiwyg';
        previewStyle = 'tab';
      } else if (mode === 'markdown') {
        initialEditType = 'markdown';
        previewStyle = 'tab';
      } else if (mode === 'split-pane') {
        initialEditType = 'markdown';
        previewStyle = 'vertical';
      }

    }

    return {
      height: height,
      content: content,
      toolbarItems: toolbarItems,
      previewStyle: previewStyle,
      initialEditType: initialEditType
    }
  }


  // The editor won't work directly on a textarea, for progressive enhancement using a
  // textarea is the ideal. So we use a textarea, hide it, and place the content from
  // our text editor into the textarea on form submit. The following method creates
  // the div the editor will live in .
  function addElement(textarea, config) {
    // create a new div element
    let div = document.createElement("div");
    // copy over CSS classes
    if (textarea.hasAttribute('class')) {
      let cssClasses = textarea.getAttribute('class').split(" ");
      cssClasses.forEach((cssClass) => {
        div.classList.add(cssClass);
      });
    }

    if (textarea.hasAttribute('rows')) {
      let rows = textarea.getAttribute('rows');
      let pixels = rows * pxPerRow; // 24 pixels per row
      div.style.minHeight = pixels + 'px';
    }
    textarea.insertAdjacentElement('afterend', div);
    textarea.style.display = "none";

    return div;
  }

  function enableEditor(textarea, Editor){
    let config = getConfig(textarea);
    let div = addElement(textarea);
    let form = textarea.closest('form');

    console.log('config.content:', config.content);
    console.log(config.content);

    let editor = new Editor({
      el: div,
      height: config.height,
      toolbarItems: config.toolbarItems,
      initialValue: textarea.value,
      initialEditType: config.initialEditType
    });

    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      textarea.value = editor.getMarkdown();
      console.log('Submit Textarea:');
      console.log(textarea.value);
      form.submit();


      // Log a message to the console when the form is submitted
      console.log('Form submitted!');
    });

    editor.getMarkdown();
  }


  // Data Attribute DSL
  let editors = document.querySelectorAll("[data-markdown-editor]");

  if (editors.length > 0) {

    // Here we dynamically load the CSS and Javascript files for Toast UI Editor.
    //
    // These files are quite large (js 539kb & css 165kb) and we don't use the editor on very
    // many web pages, so we only load the files when an editor is used. We load the files
    // programmatically with Javascript to save the developers the headache of needing to include
    // these files every time we use an editor. We only load the files once per page, even if
    // multiple editors are present.

    // Load Toast UI Editor Stylesheet
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = `https://uicdn.toast.com/editor/${editorVersion}/toastui-editor.min.css`;
    document.body.appendChild(stylesheet);

    // Load Toast UI Editor Javascript
    const script = document.createElement('script');
    script.src = `https://uicdn.toast.com/editor/${editorVersion}/toastui-editor-all.min.js`;

    // Wait for script to load before enabling editors
    script.onload = function () {
      const Editor = toastui.Editor;
      console.log("Toast UI Editor JS file has loaded.");
      editors.forEach((textarea) => {
        console.log('Found a Markdown Editor');
        enableEditor(textarea, Editor);
      });
    };

    // Append the script to the body of the document
    document.body.appendChild(script);
  }



})();
