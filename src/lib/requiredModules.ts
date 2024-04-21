import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.AuthenticationStore ??= await webpack.waitForProps<Types.AuthenticationStore>(
    "getToken",
    "getLoginStatus",
  );

  Modules.WebAuth ??= await webpack.waitForProps<Types.WebAuth>("IncompatibleBrowser");

  Modules.LoginUtils ??= await webpack.waitForProps<Types.LoginUtils>("login", "logout");
};

export default Modules;
