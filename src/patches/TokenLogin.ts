import { webpack } from "replugged";
import { PluginInjector } from "../index";
import { AuthBoxUtils } from "../lib/requiredModules";
import { TokenLoginLink } from "../Components/TokenLogin";
export const patchTokenLogin = (): void => {
  const functionKeyToPatch = webpack.getFunctionKeyBySource<string>(
    AuthBoxUtils.module,
    /function\(\w+\){(.*|\n).*block,.*?\}\)}/,
  );
  PluginInjector.before(AuthBoxUtils.module, functionKeyToPatch, ([args]) => {
    const ForgotPasswordLink = args?.children?.find(
      (m) => m?.props?.children == "Forgot your password?",
    );
    if (!ForgotPasswordLink) return;
    const FPLIndex = args.children.indexOf(ForgotPasswordLink) as number;
    args.children.splice(FPLIndex + 1, 0, TokenLoginLink);
  });
};
