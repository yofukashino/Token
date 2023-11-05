import { util } from "replugged";
import { PluginInjector } from "../index";
import { LocaleManager, WebAuth } from "../lib/requiredModules";
import { TokenLoginLink } from "../Components/TokenLogin";
import Types from "../types";
export default (): void => {
  PluginInjector.before(WebAuth, "default", (args) => {
    console.log(args);
    const [props] = args;
    const container = util.findInReactTree(props, (c: Types.Tree & React.ReactElement) =>
      c?.props?.children?.some?.(
        (m) => m?.props?.children == LocaleManager.Messages.FORGOT_PASSWORD,
      ),
    ) as Types.Tree & React.ReactElement;
    if (!container) return;
    const FPLIndex = container?.props?.children.findIndex(
      (m) => m?.props?.children == LocaleManager.Messages.FORGOT_PASSWORD,
    );
    container?.props?.children?.splice(FPLIndex + 1, 0, TokenLoginLink);
    return args;
  });
};
