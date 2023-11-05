import { util } from "replugged";
import { PluginInjector } from "../index";
import { LocaleManager, WebAuth } from "../lib/requiredModules";
import { TokenLoginLink } from "../Components/TokenLogin";
export default (): void => {
  PluginInjector.before(WebAuth, "default", (args) => {
    console.log(args);
    const [props] = args;
    const container = util.findInReactTree(props, (c) =>
      c?.children?.some?.((m) => m?.props?.children == LocaleManager.Messages.FORGOT_PASSWORD),
    );
    if (!container) return;
    const FPLIndex = container.children.findIndex(
      (m) => m?.props?.children == LocaleManager.Messages.FORGOT_PASSWORD,
    );
    container.children.splice(FPLIndex + 1, 0, TokenLoginLink);
    return args;
  });
};
