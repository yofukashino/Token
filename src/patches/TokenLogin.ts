import { util } from "replugged";
import { PluginInjector } from "../index";
import { WebAuth } from "../lib/requiredModules";
import { TokenLoginLink } from "../Components/TokenLogin";
import Types from "../types";
export default (): void => {
  PluginInjector.before(WebAuth, "default", (args) => {
    const [props] = args;
    const container = util.findInReactTree(props, (c: Types.ReactTree) =>
      c?.props?.children?.some?.((m) =>
        m?.props?.onClick?.toString()?.includes("Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER"),
      ),
    ) as Types.ReactTree;
    if (!container) return;
    const FPLIndex = container?.props?.children.findIndex((m) =>
      m?.props?.onClick?.toString()?.includes("Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER"),
    );
    if (!container?.props?.children.some((c) => c?.props?.className === "token-login"))
      container?.props?.children?.splice(FPLIndex + 1, 0, TokenLoginLink);
    return args;
  });
};
