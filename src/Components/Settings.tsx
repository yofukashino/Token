import { util } from "replugged";
import { Switch } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";

export const registerSettings = (): void => {
  type DefaultSettings = typeof DefaultSettings;
  type key = keyof DefaultSettings;
  type value = DefaultSettings[key];

  for (const key in DefaultSettings) {
    if (SettingValues.has(key as key)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${DefaultSettings[key]}.`);
    SettingValues.set(key as key, DefaultSettings[key] as value);
  }
};

export const Settings = (): React.ReactElement => {
  return (
    <Switch
      label={"Pop-up/Toast"}
      description="Get a confirmation/error toast when copying your token."
      {...util.useSetting(SettingValues, "showToast", DefaultSettings.showToast)}
    />
  );
};

export default { registerSettings, Settings };
