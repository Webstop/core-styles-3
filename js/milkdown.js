import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { gfm } from '@milkdown/preset-gfm';
import { upload } from '@milkdown/plugin-upload';
import { menu, menuDefaultConfig } from '@milkdown-lab/plugin-menu'

// import './milkdown-menu';

// IIFE (Immediately Invoked Function Expression)
// (() => {

  function getConfig(textarea){
    let hasFeatures = textarea.hasAttribute('data-markdown-editor-features');
    let features = ['gfm', 'upload']
    if (hasFeatures) features = textarea.getAttribute('data-markdown-editor-features').split(" ");
    let config = {
      gfm: features.includes('gfm'),
      upload: features.includes('upload'),
      block: features.includes('block'),
      defaultValue: textarea.value
    }
    return config;
  }

  // Milkdown won't work directly on a textarea, for progressive enhancement using a
  // textarea is the ideal. So we use a textarea, hide it, and place the content from
  // our text editor into the textarea on form submit. The following method creates
  // the div the editor will live in .
  function addElement(textarea, config) {
    // create a new div element
    let div = document.createElement("div");
    // copy over CSS classes
    let cssClasses = textarea.getAttribute('class').split(" ");
    cssClasses.forEach((cssClass) => {
      div.classList.add(cssClass);
    });
    // Set overflow behavior
    div.style.overflow = "auto";
    // set the height, if there is a rows attribute
    div.style.height = 'auto'; // reset the height
    if (textarea.hasAttribute('rows')) {
      let rows = textarea.getAttribute('rows');
      let pixels = rows * 24; // 24 pixels per row
      div.style.height = pixels + 'px';
    }
    // Place the new div right after the textarea
    textarea.insertAdjacentElement('afterend', div);
    textarea.style.display = "none";
    return div;
  }

  // function registerToolbar(editor){
  //   document.getElementById('editor-toolbar-strong').addEventListener('click', () => {
  //     editor.chain().focus().toggleBold().run();
  //   });
  // }

  // Data Attribute DSL
  let editors = document.querySelectorAll("[data-markdown-editor]");

  editors.forEach((textarea) => {
    let config = getConfig(textarea);
    let div = addElement(textarea, config);
    let editor = Editor.make().config(ctx => {
      ctx.set(rootCtx, div)
      ctx.set(defaultValueCtx, config.defaultValue)
    }).use(commonmark).config(menuDefaultConfig).use(menu);
    if (config.gfm)    editor = editor.use(gfm);
    if (config.upload) editor = editor.use(upload);
    // if (config.block)  editor = editor.use(block);
    editor.create();
    //registerToolbar(editor);
  });

// })();


// ...
// const editor = await Editor.make()
//   .config(menuDefaultConfig)
//   .config(() => {
//     ctx.set(rootCtx, document.querySelector('#app'))
//   })
//   .use(menu)
//   .create()


