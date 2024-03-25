import { modal as ModalUtils, React } from "replugged/common";
import { Button, Modal, Text, TextInput } from "replugged/components";
import { LoginUtils, WebAuth } from "../lib/requiredModules";
export const TokenLoginForm = (props) => {
  const [token, setToken] = React.useState(null);
  const handleLogin = () => {
    if (!token) return;
    LoginUtils.loginToken(token);
    props.onClose();
  };
  return (
    <Modal.ModalRoot className="login-with-token" size="small" {...props}>
      <Modal.ModalHeader className="token-login-header">
        <Text tag="h3">Login With Token</Text>
        <Modal.ModalCloseButton onClick={props.onClose} className="token-login-close" />
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <TextInput
          value={token}
          required={false}
          placeholder="Token to Login With."
          onChange={(value) => setToken(value)}
          style={{ marginBottom: "10px" }}
        />
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <Button disabled={!token} color={Button.Colors.BRAND} onClick={handleLogin}>
          Login
        </Button>
      </Modal.ModalFooter>
    </Modal.ModalRoot>
  );
};
export const TokenLoginLink = (
  <WebAuth.Button
    color={WebAuth.Button.Colors.LINK}
    look={WebAuth.Button.Looks.LINK}
    className="token-login"
    onClick={() => ModalUtils.openModal((props) => <TokenLoginForm {...props} />)}>
    Login With Token
  </WebAuth.Button>
);
