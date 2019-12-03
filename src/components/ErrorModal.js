import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { closeError } from '../actions';

import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorModal extends React.Component {
  render() {
    const show = this.props.errorMessage ? true : false;
    return (
      <React.Fragment>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{`ERROR: ${this.props.errorMessage}`}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.closeError}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = ({ errorMessage }) => { 
    return { errorMessage }; 
  };

  export default connect(mapStateToProps, { closeError })(ErrorModal);