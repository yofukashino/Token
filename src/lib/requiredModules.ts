import { webpack } from "replugged";
import Types from "../types";

export const AuthenticationStore = webpack.getByProps<Types.AuthenticationStore>(
  "getToken",
  "getLoginStatus",
);

export const WebAuth = webpack.getByProps<Types.WebAuth>("IncompatibleBrowser");

export const LoginUtils = webpack.getByProps<Types.LoginUtils>("login", "logout");
