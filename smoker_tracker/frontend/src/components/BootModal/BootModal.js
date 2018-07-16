import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap';
// import TimePicker from 'material-ui/TimePicker';

const BootModal = props =>
	<div>
	  <Button color="danger" onClick={props.toggle}>Cancel</Button>
	  <Modal isOpen={props.modal} toggle={props.toggle}>
	    <ModalHeader toggle={props.toggle}>Create New Column</ModalHeader>
	    <ModalBody>
				<Label>New Column</Label>
				
	    </ModalBody>
	    <ModalFooter>
				<Button color="primary" data-add="true" onClick={props.toggle}>Create</Button>
				<Button 
					color="secondary"
					onClick={props.toggle}>
					Cancel
				</Button>
	    </ModalFooter>
	  </Modal>
	</div>

export default BootModal