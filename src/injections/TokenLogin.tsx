import { util, webpack } from "replugged";
import { PluginInjector } from "@this";
import { WebAuth } from "@lib/RequiredModules";
import TokenLoginLink from "@components/TokenLogin";
import Types from "@Types";

const loader = webpack.getFunctionKeyBySource(WebAuth, ".authBoxExpanded");

PluginInjector.before(WebAuth, loader, (args: [Types.ReactTree]) => {
  const [props] = args;
  const container = util.findInReactTree(props, (c: Types.ReactTree) =>
    c?.props?.children?.some?.((m) => m?.props?.onClick?.toString()?.includes(".forgotPassword")),
  ) as Types.ReactTree;
  if (!container) return args;
  console.log(container?.props?.children);
  const FPLIndex = container?.props?.children.findIndex((m) =>
    m?.props?.onChange?.toString()?.includes("loginPrefix:"),
  );
  const FPL = container?.props?.children.splice(FPLIndex, 1);
  if (!container?.props?.children.some((c) => c?.props?.className === "yofukashino-token"))
    container?.props?.children?.splice(FPLIndex, 0, FPL, <TokenLoginLink />);
  return args;
});
