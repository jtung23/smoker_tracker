import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label} from 'reactstrap';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimePicker from 'material-ui/TimePicker';

const BootModal = props =>
	<div>
	  <Button color="danger" onClick={props.toggle}>Cancel</Button>
	  <Modal isOpen={props.modal} toggle={props.toggle}>
	    <ModalHeader toggle={props.toggle}>Create New Time Column</ModalHeader>
	    <ModalBody>
				<Label>New Time</Label>
				<TimePicker
					format="24hr"
					autoOk={true}
					name="newTime"
					onChange={props.handleTimeChange}
					id="newTime"
				/>
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