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
import {Ctx} from "@milkdown/ctx";
import {editorViewCtx, schemaCtx} from "@milkdown/core";
import {DOMSerializer} from "@milkdown/prose/lib/model";
// import {useFeatureToggle} from "./milkdown-use-feature-toggle";

// export function getHTML() {
//   return (ctx: Ctx): string => {
//     const div = document.createElement('div')
//     const schema = ctx.get(schemaCtx)
//     const view = ctx.get(editorViewCtx)
//     const fragment = DOMSerializer.fromSchema(schema).serializeFragment(view.state.doc.content)
//
//     div.appendChild(fragment)
//
//     return div.innerHTML
//   }
// }

type FeatureToggle = {
  enableGFM: boolean;
  enableBlockHandle: boolean;
};

const defaultFeatureToggle: FeatureToggle = {
  enableGFM: true,
  enableBlockHandle: true,
};

export function milkdownMenu(){

  return ()=> {

    console.log('load menu code.');

    const useMenu = (
      defaultValue: string,
      onChange: (markdown: string) => void
    ) => {defaultFeatureToggle}

    const { loading, get } = useMenu(content, onChange);

    function call<T>(command: CmdKey<T>, payload?: T) {
      return get()?.action(callCommand(command, payload));
    }

    const h1b = document.getElementById('editor-toolbar-h1');
    h1b.addEventListener("click", (event) => { console.log('h1 button...');  });

    const strongButton = document.getElementById('editor-toolbar-strong');
    strongButton.addEventListener("click", (event) => { console.log('strong...'); call(toggleStrongCommand.key);  });

    const emphasisButton = document.getElementById('editor-toolbar-emphasis');
    emphasisButton.addEventListener("click", (event) => {
      console.log('Emphasis...');
      call(toggleEmphasisCommand.key);
    });
  }
}



// <Button
//   icon="format_bold"
//   onClick={() => call(toggleStrongCommand.key)}
// />
