import React, { useState } from "react";
import { Alert } from "react-bootstrap/Alert";
import { Button } from "react-bootstrap/Button";

function DismissiveAlert(props) {
  const [show, setShow] = useState(true);

  if (!props.addAction.action || !props.addAction.traits) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Fill in what made you feel good today and some traits, then try again.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default DismissiveAlert;
