import { util } from "replugged";
import { SwitchItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = () => {
  return (
    <div>
      <SwitchItem
        note="Get a confirmation/error toast when copying your token."
        {...util.useSetting(SettingValues, "showToast", defaultSettings.showToast)}>
        Pop-up/Toast
      </SwitchItem>
    </div>
  );
};
