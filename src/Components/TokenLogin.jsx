import { common, components } from "replugged";
import { AuthBoxUtils, ConfirmationModal, LoginUtils } from "../lib/requiredModules.jsx";
const { modal } = common;
const { Button, TextInput } = components;
export const openTokenLoginForm = () =>
  modal.openModal((props) => (
    <ConfirmationModal
      {...{
        header: "Login With Token",
        confirmButtonColor: Button.Colors.BRAND,
        confirmText: "Login",
        cancelText: null,
        onConfirm: () => LoginUtils.loginToken(props.token),
        onCancel: null,
        ...props,
      }}>
      <TextInput
        {...{
          onChange: (value) => {
            props.token = value;
          },
          value: null,
          disabled: false,
          placeholder: "Token to Login With.",
        }}></TextInput>
    </ConfirmationModal>
  ));
export const TokenLoginLink = (
  <AuthBoxUtils.Buttons
    {...{
      color: AuthBoxUtils.Buttons.Colors.LINK,
      look: AuthBoxUtils.Buttons.Looks.LINK,
      className: "token-login",
      onClick: () => {
        openTokenLoginForm();
      },
    }}>
    Login With Token
  </AuthBoxUtils.Buttons>
);
