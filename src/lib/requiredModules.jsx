import { webpack } from "replugged";
import * as Utils from "./utils.jsx";
export const NavBarClasses = Object.assign(
  {},
  webpack.getByProps("listItem"),
  webpack.getByProps("tree", "scroller"),
  webpack.getByProps("guilds", "base"),
);
export const AuthenticationStore = webpack.getModule(
  (m) => Utils.isObject(m?.exports) && Object.values(m.exports).some((m) => m?.getToken),
);

export const DiscordNative = webpack.getByProps("clipboard", "process");

export const LoginFormUtils = webpack.getModule((m) => m?.exports?.gO?.toString().includes("div"));

export const { default: ConfirmationModal } = webpack.getBySource("ConfirmModal");

export const LoginUtils = webpack.getByProps("login", "logout");
