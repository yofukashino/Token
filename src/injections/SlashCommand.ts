import { PluginInjectorUtils, PluginLogger } from "@this";
import { AuthenticationStore } from "@lib/RequiredModules";
import Types from "@Types";

PluginInjectorUtils.registerSlashCommand({
  name: "token",
  description: "Slash command to get token",
  options: [
    {
      name: "send",
      displayName: "send",
      description: "Share the token publicly in chat",
      type: Types.DefaultTypes.ApplicationCommandOptionType.Boolean,
      required: false,
    },
  ],
  executor: (interaction) => {
    try {
      const send = interaction.getValue("send", false);
      const result = AuthenticationStore?.getToken?.();

      if (!result) {
        PluginLogger.error(`Whoops! I couldn't find your token.`);
        return {
          send: false,
          result: "Whoops! I couldn't find your token.",
        };
      }

      return {
        send,
        result,
      };
    } catch (error) {
      PluginLogger.error(error);
      return {
        send: false,
        result: error,
      };
    }
  },
});
