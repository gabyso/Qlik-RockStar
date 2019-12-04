import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorModal extends React.Component {
  state = { show: true }
  render() {
    
    return (
      <React.Fragment>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{`ERROR: ${this.props.errorMessage}`}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      );
    }
  }

  export default ErrorModal;