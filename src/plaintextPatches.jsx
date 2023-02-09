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
  {
    find: "object,objectType",
    replacements: [
      {
        match: /([A-Za-z]+\()(e)(\)\{)([A-Za-z]+\([^)]*\))/gm,
        replace: `$1$2$3 console.log($2);
        $4`,
      },
    ],
  },
];
