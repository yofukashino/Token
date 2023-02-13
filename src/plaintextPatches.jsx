export default [
  {
    find: "Messages.DISCODO_DISABLED",
    replacements: [
      {
        match: /(className:.*\.[A-Za-z]+),(children.*"friends-list")/,
        replace: `$1,onContextMenu: HomeButtonContextMenuApi?.openContextMenu,$2`,
      },
    ],
  },
];
