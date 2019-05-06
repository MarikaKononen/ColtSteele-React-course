function drawFruit(){
	let fruitNum = Math.floor(Math.random() * 3) +1;
	if ( fruitNum === 1 ){
		return "🍒"
	} else if ( fruitNum === 2  ){
		return "🍊"
	} else return "🍇"

}

class App extends React.Component {
	render() {
		const s1 = drawFruit();
		const s2 = drawFruit();
		const s3 = drawFruit();
		
		return (
			<div>
				<h1>Slot Machines</h1>
				<Machine s1={s1}  s2={s2} s3={s3} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));