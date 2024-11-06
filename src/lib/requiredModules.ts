import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.AuthenticationStore ??=
    webpack.getByStoreName<Types.AuthenticationStore>("AuthenticationStore");

  Modules.WebAuth ??= await webpack
    .waitForModule<Types.WebAuth>(webpack.filters.bySource(".joiningAsAvatar,"), { timeout: 10000 })
    .catch(() => {
      throw new Error("Failed To Find WebAuth Module");
    });

  Modules.LoginUtils ??= await webpack
    .waitForProps<Types.LoginUtils>(["login", "logout"], { timeout: 10000 })
    .catch(() => {
      throw new Error("Failed To Find LoginUtils Module");
    });
};

export default Modules;
