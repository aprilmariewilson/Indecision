import React from 'react';
import Option from './Option';
const Options = (props) => (
	<div>
	<div className='widget-header'>
	<h3 className='widget-header__title'>Your Options</h3>
		<button 
		className='button button--link'
		onClick={props.deleteOptions}>
		Remove All
		</button>
		</div>
		<div>
		{props.options.length === 0 && <p className='widget__message'>You must first submit an option.</p>}

		{props.options.map((option, index) => (
			<Option
				key={option}
				optionText={option}
				count={index + 1}
				handleDeleteOption={props.handleDeleteOption}
			/>
		))}
		</div>
	</div>
);
export default Options;