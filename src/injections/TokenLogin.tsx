import { util, webpack } from "replugged";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import { TokenLoginLink } from "../Components/TokenLogin";
import Types from "../types";
export default (): void => {
  const { WebAuth } = Modules;
  const loader = webpack.getFunctionKeyBySource(WebAuth, ".authBoxExpanded") as "default";
  PluginInjector.before(WebAuth, loader, (args) => {
    const [props] = args;
    const container = util.findInReactTree(props, (c: Types.ReactTree) =>
      c?.props?.children?.some?.((m) =>
        m?.props?.onClick?.toString()?.includes("Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER"),
      ),
    ) as Types.ReactTree;
    if (!container) return args;
    const FPLIndex = container?.props?.children.findIndex((m) =>
      m?.props?.onClick?.toString()?.includes("Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER"),
    );
    if (!container?.props?.children.some((c) => c?.props?.className === "token-login"))
      container?.props?.children?.splice(FPLIndex + 1, 0, <TokenLoginLink />);
    return args;
  });
};
