import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';

const markdown = `# Milkdown Vanilla Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vanilla Typescript**.`

console.log('do the thing');

Editor
  .make()
  .config(ctx => {
    ctx.set(rootCtx, '#markdown-example')
    ctx.set(defaultValueCtx, markdown)
  })
  .use(commonmark)
  .create();
