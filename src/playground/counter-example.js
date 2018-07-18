class Counter extends React.Component {
	constructor(props){
		super(props);
		this.addOne = this.addOne.bind(this);
		this.minusOne = this.minusOne.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			count: 0
		};
	}

	ComponentDidMount(){
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);

		if (!isNAN(count)){
			this.setState(()=>({count}));
		}
	};

ComponentDidUpdate(prevProps,prevState){

	if (prevState.count !== this.state.count){
		localStorage.setItem('count', this.state.count);

	}
}
	addOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count +1
			};
		});
	};
	minusOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count -1
			};
		});
	};
	reset(){
		this.setState(() => {
			return {
				count: 0
			};
		});
	};
	
	render(){
		return (
			<div>
			<h1>Count: {this.state.count} </h1>
			<button onClick={this.addOne}>+1</button>
			<button onClick={this.minusOne}>-1</button>
 			<button onClick={this.reset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = ()=> {
// 	count++;
// 	renderCounterApp();
// };const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// const reset = ()=> {
// 	count = 0;
// 	resetCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={reset}>reset</button>
// 		</div>
// 	);
// 	REACTdom.RENDER(TEMPLATEtWO, appRoot);
// };

// renderCounterApp(); 