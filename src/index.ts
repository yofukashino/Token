import { Injector, Logger, settings, webpack } from "replugged";

import { defaultSettings } from "./lib/consts";

import { registerSettings } from "./Components/Settings";

export const PluginLogger = Logger.plugin("DevTools");

export const PluginInjector = new Injector();

export const SettingValues = await settings.init("Tharki.Token", defaultSettings);

import { AuthBoxUtils } from "./lib/requiredModules";

import { TokenMenuItem } from "./Components/MenuItem";

import { TokenLoginLink } from "./Components/TokenLogin";

import { HBCM } from "./lib/HomeButtonContextMenuApi";

const addTokenLogin = (): void => {
  const functionKeyToPatch = webpack.getFunctionKeyBySource(
    AuthBoxUtils.module,
    /function.*n.*[^)]*.*\(\)\.block,.*[A-Za-z]+.*\}/,
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

export const start = (): void => {
  registerSettings();
  HBCM.addItem("Token", TokenMenuItem);
  addTokenLogin();
};

export const stop = (): void => {
  HBCM.removeItem("Token");
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
