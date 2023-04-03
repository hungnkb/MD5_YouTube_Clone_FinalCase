import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Upload } from '../../upload/Upload';

export const ModalUpload = (props) => {

    return (
        <>
            <Modal  show={props.setShow[0]} onHide={props.handleClose}
                    {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Upload
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Upload />
                </Modal.Body>
                <Modal.Footer>
                    <Button   variant="danger" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*<Modal show={props.setShow[0]} onHide={props.handleClose} >*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>Upload</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        <Upload />*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button   variant="danger" onClick={props.handleClose}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*        <Button variant="primary" onClick={props.handleClose}>*/}
            {/*            Save Changes*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
        </>
    )
}