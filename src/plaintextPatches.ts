import * as Types from "./types";
export default [
  {
    find: "Messages.DISCODO_DISABLED",
    replacements: [
      {
        match: /},(children.+?"friends-list")/,
        replace: `},onContextMenu: HomeButtonContextMenuApi?.openContextMenu,$1`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
