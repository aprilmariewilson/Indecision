import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
<Modal
//opens when selected option is thruthy
isOpen={!!props.selectedOption}
//this gets rid of modal when you click background
onRequestClose={props.handleClearSelectedOption}
//label of modal
contentLabel="selected Option"
//shutting down modal
closeTimeoutMS={500}
className='modal'
//div contents
>

<h3 className='modal__title'> Selected Option</h3>
{props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
<button className='button'onClick={props.handleClearSelectedOption}>Okay</button>
</Modal>
);
export default OptionModal;