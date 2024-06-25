import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
export const PluginLogger = Logger.plugin("Token");
export const PluginInjector = new Injector();
export const PluginInjectorUtils = PluginInjector.utils;
export const SettingValues = await settings.init("dev.tharki.Token", defaultSettings);
import Settings from "./Components/Settings";
import TokenMenuItem from "./Components/MenuItem";
import HBCM from "./lib/HomeButtonContextMenuApi";
import Injections from "./injections";

export const start = (): void => {
  Settings.registerSettings();
  HBCM.getAPI().addItem("Token", TokenMenuItem);
  void Injections.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  HBCM.getAPI().removeItem("Token");
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
