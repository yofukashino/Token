import { webpack } from "replugged";
import * as Types from "../types";
export const NavBarClasses = Object.assign(
  {},
  webpack.getByProps("listItem"),
  webpack.getByProps("tree", "scroller"),
  webpack.getByProps("guilds", "base"),
) as unknown as Types.NavBarClasses;
export const AuthenticationStore = webpack.getByProps(
  "getToken",
  "getLoginStatus",
) as unknown as Types.AuthenticationStore;

export const DiscordNative = webpack.getByProps(
  "clipboard",
  "process",
) as unknown as Types.DiscordNative;

export const AuthBoxUtils = {
  module: webpack.getBySource(/\.joiningAsAvatar.*\.joiningAsUsername/) as unknown as Record<
    string,
    Types.DefaultTypes.AnyFunction
  >,
  get Buttons() {
    return webpack.getExportsForProps(this.module, [
      "Colors",
      "Looks",
      "Sizes",
    ]) as unknown as Types.AuthBoxUtilsButtons;
  },
};

export const ConfirmationModalModule = webpack.getBySource(
  "ConfirmModal",
) as unknown as Types.DefaultTypes.ObjectExports;

export const ConfirmationModal = webpack.getFunctionBySource(
  "confirmButtonColor",
  ConfirmationModalModule,
) as unknown as Types.ComponentClass;

export const LoginUtils = webpack.getByProps("login", "logout") as unknown as Types.LoginUtils;
