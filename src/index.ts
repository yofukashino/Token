import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import { registerSettings } from "./Components/Settings";
import "./style.css";
export const PluginLogger = Logger.plugin("Token");
export const PluginInjector = new Injector();
export const PluginInjectorUtils = PluginInjector.utils;
export const SettingValues = await settings.init("dev.tharki.Token", defaultSettings);
import TokenMenuItem from "./Components/MenuItem";
import HBCM from "./lib/HomeButtonContextMenuApi";
import applyInjections from "./patches/index";

export const start = (): void => {
  registerSettings();
  HBCM.addItem("Token", TokenMenuItem);
  applyInjections();
};

export const stop = (): void => {
  HBCM.removeItem("Token");
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
