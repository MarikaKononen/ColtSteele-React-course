function drawNum(){
	return Math.floor(Math.random() * 3) +1;
}

class App extends React.Component {
	render() {
		const s1 = drawNum();
		const s2 = drawNum();
		const s3 = drawNum();
		return (
			<div>
				<h1>Slot Machines</h1>
				<Machine s1={s1}  s2={s2} s3={s3} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));