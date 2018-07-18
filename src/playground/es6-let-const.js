// const fullName = 'Jane Doe';
// let firstName ;

// if(fullName){
// 	firstName = fullName.split(' ')[0];
// };
// const nameChange = (fullName) => {
// 	fullName.split(' ')[0];
// };
//console.log(nameChange('mike smith'));
// const nameChange = (fullName) => fullName.split('')[0];

//console.log(nameChange('mike smith'));
const add = (a, b) => {
	return a + b;
};
console.log(add(5, 6));

const user = {
	name: 'april',
	cities: ['slc', 'logan', 'spanish fork'],
	printsPlacesLived() {
		return this.cities.map((city) => this.name + 'has lived in ' + city)
	}
};
const multiplier = {
	numbers:[2,3,4,5,6],
	multiplyBy: 2,
	multiply(){
		return this.numbers.map((number)=> this.multiplyBy * number)
	}
};

let count = 0;

const addOne = () => {
	count++;
renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {

	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();