import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { AuthBoxUtilsModule, LocaleManager } from "../lib/requiredModules";
import { TokenLoginLink } from "../Components/TokenLogin";
import * as Types from "../types";
export const patchTokenLogin = (): void => {
  const functionKeyToPatch = webpack.getFunctionKeyBySource<string>(
    AuthBoxUtilsModule as string,
    /function\(\w+\){(.*|\n).*block,.*?\}\)}/,
  );
  PluginInjector.before(AuthBoxUtilsModule as Types.GenericModule, functionKeyToPatch, ([args]) => {
    const ForgotPasswordLink = args?.children?.find(
      (m) => m?.props?.children == LocaleManager.Messages.FORGOT_PASSWORD,
    );
    if (!ForgotPasswordLink) return;
    const FPLIndex = args.children.indexOf(ForgotPasswordLink) as number;
    args.children.splice(FPLIndex + 1, 0, TokenLoginLink);
  });
};
