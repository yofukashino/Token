import Types from "@Types";

export default [
  {
    find: '("discodo")',
    warn: false,
    replacements: [
      {
        match: /\.tutorialContainer(?!onContextMenu:)/,
        replace: (prefix: string) =>
          `${prefix},onContextMenu:(e)=>replugged.webpack.wpRequire("HomeContext")?.open(e)`,
      },
    ],
  },
  {
    find: ".mainLoginContainer",
    replacements: [
      {
        match: /state.login,autoFocus:!\i,required:!0}\)/,
        replace: (prefix: string) => `${prefix},$exports._getTokenLogin?.()`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
