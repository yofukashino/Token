import { common, components } from "replugged";
import { AuthBoxUtils, LoginUtils } from "../lib/requiredModules";
const { React, modal: ModalUtils } = common;
const {
  Button,
  Modal: { ModalRoot, ModalHeader, ModalContent, ModalCloseButton, ModalFooter },
  Text,
  TextInput,
} = components;
export const TokenLoginForm = (props) => {
  const [token, setToken] = React.useState(null);
  const handleLogin = () => {
    if (!Boolean(token)) return;
    LoginUtils.loginToken(token);

    props.onClose();
  };
  return (
    <ModalRoot {...{ className: "login-with-token", size: "small", ...props }}>
      <ModalHeader
        {...{
          className: "token-login-header",
        }}>
        <Text
          {...{
            tag: "h3",
          }}>
          Login With Token
        </Text>
        <ModalCloseButton
          {...{
            onClick: props.onClose,
            style: {
              position: "absolute",
              right: "0px",
            },
          }}
        />
      </ModalHeader>
      <ModalContent>
        <TextInput
          {...{
            value: token,
            required: false,
            placeholder: "Token to Login With.",
            onChange: (value) => setToken(value),
            style: { marginBottom: "10px" },
          }}
        />
      </ModalContent>
      <ModalFooter>
        <Button
          {...{
            color: Button.Colors.BRAND,
            onClick: handleLogin,
          }}>
          Login
        </Button>
      </ModalFooter>
    </ModalRoot>
  );
};
export const TokenLoginLink = (
  <AuthBoxUtils.Buttons
    {...{
      color: AuthBoxUtils.Buttons.Colors.LINK,
      look: AuthBoxUtils.Buttons.Looks.LINK,
      className: "token-login",
      onClick: () => ModalUtils.openModal((props) => <TokenLoginForm {...props} />),
    }}>
    Login With Token
  </AuthBoxUtils.Buttons>
);
