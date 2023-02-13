import { Injector, Logger, settings, webpack } from "replugged";

import { defaultSettings } from "./lib/consts.jsx";

import { registerSettings } from "./Components/Settings.jsx";

export const PluginLogger = Logger.plugin("DevTools");

export const PluginInjector = new Injector();

export const SettingValues = await settings.init("Tharki.Token", defaultSettings);

import { AuthBoxUtils } from "./lib/requiredModules.jsx";

import { TokenMenuItem } from "./Components/MenuItem.jsx";

import { TokenLoginLink } from "./Components/TokenLogin.jsx";

import { HBCM } from "./lib/HomeButtonContextMenuApi.jsx";

const addTokenLogin = () => {
  const functionKeyToPatch = webpack.getFunctionKeyBySource(
    AuthBoxUtils.module,
    /function.*n.*[^)]*.*\(\)\.block,.*[A-Za-z]+.*\}/,
  );
  PluginInjector.before(AuthBoxUtils.module, functionKeyToPatch, ([args]) => {
    const ForgotPasswordLink = args?.children?.find(
      (m) => m?.props?.children == "Forgot your password?",
    );
    if (!ForgotPasswordLink) return;
    const FPLIndex = args.children.indexOf(ForgotPasswordLink);
    args.children.splice(FPLIndex + 1, 0, TokenLoginLink);
  });
};

export const start = () => {
  registerSettings();
  HBCM.addItem("Token", TokenMenuItem);
  addTokenLogin();
};

export const stop = () => {
  HBCM.removeItem("Token");
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings.jsx";
