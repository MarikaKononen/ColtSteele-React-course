class Machine extends React.Component {
	render() {
		const {s1, s2, s3} = this.props;
		const isWinner = (s1 === s2) && (s2 === s3);
		const fruits = {fontSize: '50px', textAlign: 'center'}
		const text = {fontSize: '50px', textAlign: 'center'}
	
		return (
			<div className="Machine">
				<p style={fruits}>{ s1 } { s2 } { s3 }</p>
				<p className={isWinner ? 'Machine-win' : 'Machine-lose' }>
				   { isWinner ? 'You win!' : 'You lose!' }
				</p>
			</div>
		)
	}
}