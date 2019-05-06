

class Machine extends React.Component {
	render() {
		
		return (
			<div>
				<h1>Test</h1>
				<p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
				
				<p>{this.props.s1 === 3 && this.props.s1 === 3 && this.props.s1 === 3 
					? 'You win!' : 'You lose!'}</p>
				
			</div>
		)
	}
}