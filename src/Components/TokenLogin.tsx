import { React, modal } from "replugged/common";
import { Button, Flex, Modal, Text, TextInput } from "replugged/components";
import { LoginUtils } from "@lib/RequiredModules";

import "./TokenLogin.css";

export const TokenLoginForm = ({ transitionState, onClose }): React.ReactElement => {
  const [token, setToken] = React.useState<string>(null);
  const handleLogin = (): void => {
    if (!token) return;
    LoginUtils.loginToken(token);
    onClose();
  };
  return (
    <Modal.ModalRoot size="small" transitionState={transitionState}>
      <Modal.ModalHeader>
        <div>
          <Flex justify={Flex.Justify.BETWEEN} align={Flex.Align.CENTER}>
            <Text variant="heading-lg/semibold" tag="h1">
              Login With Token
            </Text>
            <Modal.ModalCloseButton onClick={onClose} />
          </Flex>
          <Text variant="text-md/normal" color="text-secondary" style={{ width: "85%" }}>
            Instant login with a token! Great for power users, risky if mishandled.
          </Text>
        </div>
      </Modal.ModalHeader>
      <Modal.ModalContent className="login-with-content">
        <TextInput
          value={token}
          required={false}
          placeholder="Enter your user token"
          onChange={(value) => setToken(value)}
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
export default (): React.ReactElement => {
  return (
    <Flex justify={Flex.Justify.BETWEEN}>
      <Button
        color={Button.Colors.LINK}
        look={Button.Looks.LINK}
        size={Button.Sizes.MIN}
        className="token-login-button"
        onClick={() => modal.openModal((props) => <TokenLoginForm {...props} />)}>
        Login With Token
      </Button>
    </Flex>
  );
};
