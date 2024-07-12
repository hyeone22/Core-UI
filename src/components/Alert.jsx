import { CAlert, CButton } from "@coreui/react";
import { useState } from "react";

function Alert() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CAlert
        color="primary"
        dismissible
        visible={visible}
        onClose={() => setVisible(false)}
      >
        A simple primary alert—check it out!
      </CAlert>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Show live alert
      </CButton>
    </>
  );
}

export default Alert;
