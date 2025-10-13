import { types } from "replugged";
import type Util from "replugged/dist/renderer/util";
import type { Store } from "replugged/dist/renderer/modules/common/flux";
import type { WebpackChunkGlobal } from "replugged/dist/types";

export namespace Types {
  export import DefaultTypes = types;
  export type ReactTree = Util.Tree & React.ReactElement;
  export interface LoginUtils {
    login: DefaultTypes.UnknownFunction;
    loginToken: (token: string) => void;
    logout: DefaultTypes.UnknownFunction;
  }

  export interface AuthenticationStore extends Store {
    getToken: () => string;
  }
  export interface Modules {
    Proxy: Exclude<Modules, "Proxy" | "loadModules">;
    loadModules?: () => Promise<void>;
    AuthenticationStore?: AuthenticationStore;
    WebAuth?: DefaultTypes.ObjectExports & Record<string, DefaultTypes.AnyFunction>;
    LoginUtils?: LoginUtils;
  }
}
export default Types;

declare global {
  export const webpackChunkdiscord_app: WebpackChunkGlobal;

  export const DiscordNative: {
    clipboard: {
      copy: (content: string) => void;
    };
  };
}
