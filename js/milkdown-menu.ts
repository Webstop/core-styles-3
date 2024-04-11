import type { CmdKey } from "@milkdown/core";
// import { editorViewCtx, parserCtx } from "@milkdown/core";
// import { redoCommand, undoCommand } from "@milkdown/plugin-history";
import {
  toggleEmphasisCommand,
  toggleStrongCommand,
  wrapInBlockquoteCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from "@milkdown/preset-commonmark";
// import {
//   insertTableCommand,
//   toggleStrikethroughCommand,
// } from "@milkdown/preset-gfm";
import { callCommand } from "@milkdown/utils";
import { useMenu } from "./milkdown-use-menu";

const { loading, get } = useMenu(content, onChange);

function call<T>(command: CmdKey<T>, payload?: T) {
  return get()?.action(callCommand(command, payload));
}

const strongButton = document.getElementById('editor-toolbar-strong');
strongButton.addEventListener("click", (event) => { call(toggleStrongCommand.key); console.log('strong...') });

const emphasisButton = document.getElementById('editor-toolbar-emphasis');
emphasisButton.addEventListener("click", (event) => {
  call(toggleEmphasisCommand.key);
  console.log('Emphasis...');
});


// <Button
//   icon="format_bold"
//   onClick={() => call(toggleStrongCommand.key)}
// />
