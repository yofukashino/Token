import { common, components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index.jsx";
const { SwitchItem } = components;
const { React } = common;
import { defaultSettings } from "../lib/consts.jsx";
export const registerSettings = () => {
  for (const [key, value] of Object.entries(defaultSettings)) {
    if (SettingValues.has(key)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, value);
    SettingValues.set(key, value);
  }
};

export const Settings = () => {
  return (
    <div>
      <SwitchItem
        note="Get a confirmation/error toast when copying your token."
        {...util.useSetting(SettingValues, "defaultSettings")}>
        Pop-up/Toast
      </SwitchItem>
    </div>
  );
};
