import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	}
	//sets state back to undefined(false) after modal is triggered
	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }))
	};
	deleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}))
	};
	//when you click what should I do this picks an option for modal
	handlePick = () => {
		const randomNumber = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNumber];
		this.setState(() => ({ selectedOption: option }));
	}
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item'
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists'
		}
		this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({ options }));
			}
		} catch (e) {
			//do nothing
		}


	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	};
	componentWillUnmount() {
		console.log('conponent will unmount')
	}

	render() {
		//layout rendering
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header subtitle={subtitle} />
				<div className='container'>
					<Action
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className='widget'>
					<Options
						options={this.state.options}
						deleteOptions={this.deleteOptions}
						handleDeleteOption={this.handleDeleteOption}
					/>
					<AddOption
						handleAddOption={this.handleAddOption}
					/>
					</div>
					<OptionModal
						selectedOption={this.state.selectedOption}
						handleClearSelectedOption={this.handleClearSelectedOption}
					/>
				</div>
			</div>
		)
	}
}
export default IndecisionApp;