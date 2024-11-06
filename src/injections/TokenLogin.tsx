import { util, webpack } from "replugged";
import { Flex } from "replugged/components";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import TokenLoginLink from "../Components/TokenLogin";
import Types from "../types";

export default (): void => {
  const { WebAuth } = Modules;
  const loader = webpack.getFunctionKeyBySource(WebAuth, ".authBoxExpanded") as "default";
  PluginInjector.before(WebAuth, loader, (args) => {
    const [props] = args;
    const container = util.findInReactTree(props, (c: Types.ReactTree) =>
      c?.props?.children?.some?.((m) => m?.props?.onClick?.toString()?.includes(".forgotPassword")),
    ) as Types.ReactTree;
    if (!container) return args;
    const FPLIndex = container?.props?.children.findIndex((m) =>
      m?.props?.onClick?.toString()?.includes(".forgotPassword"),
    );
    const FPL = container?.props?.children.splice(FPLIndex, 1);
    if (!container?.props?.children.some((c) => c?.props?.className === "yofukashino-token"))
      container?.props?.children?.splice(
        FPLIndex,
        0,
        <Flex direction={Flex.Direction.HORIZONTAL} justify={Flex.Justify.BETWEEN}>
          {FPL}
          <TokenLoginLink />
        </Flex>,
      );
    return args;
  });
};
