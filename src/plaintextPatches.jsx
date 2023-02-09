export default [
  {
    find: "Messages.DISCODO_DISABLED",
    replacements: [
      {
        match:
          /([A-Za-z]+\([^)]*\)\([^)]*\)\.[0-9A-Za-z]+),([A-Za-z]+:\([^)]*\)\([A-Za-z]+\.Z,\{[A-Za-z]+:[A-Za-z]+,[A-Za-z]+:"friends-list")/gm,
        replace: `$1,onContextMenu: (event) => HomeButtonContextMenuApi?.openContextMenu?.(event),$2`,
      },
    ],
  },
];
