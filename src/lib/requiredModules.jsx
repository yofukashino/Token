import { webpack } from "replugged";

export const NavBarClasses = Object.assign(
  {},
  webpack.getByProps("listItem"),
  webpack.getByProps("tree", "scroller"),
  webpack.getByProps("guilds", "base"),
);

export const AuthenticationStore = webpack.getByProps("getToken", "getLoginStatus");

export const DiscordNative = webpack.getByProps("clipboard", "process");

export const AuthBoxUtils = {
  module: webpack.getBySource(/\.joiningAsAvatar.*\.joiningAsUsername/),
  get Buttons() {
    return webpack.getExportsForProps(this.module, ["Colors", "Looks", "Sizes"]);
  },
};

export const ConfirmationModalModule = webpack.getBySource("ConfirmModal");

export const ConfirmationModal = webpack.getFunctionBySource(
  ConfirmationModalModule,
  "confirmButtonColor",
);

export const LoginUtils = webpack.getByProps("login", "logout");
