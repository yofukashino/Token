import { webpack } from "replugged";
import Types from "../types";
export const NavBarClasses = Object.assign(
  {},
  webpack.getByProps("listItem"),
  webpack.getByProps("tree", "scroller"),
  webpack.getByProps("guilds", "base"),
) as Types.NavBarClasses;
export const AuthenticationStore = webpack.getByProps<Types.AuthenticationStore>(
  "getToken",
  "getLoginStatus",
);

export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");

export const LocaleManager = webpack.getByProps<Types.LocaleManager>("Messages", "_chosenLocale");

export const WebAuth = webpack.getByProps<Types.WebAuth>("IncompatibleBrowser");

export const LoginUtils = webpack.getByProps<Types.LoginUtils>("login", "logout");
