

class Machine extends React.Component {
	render() {
		function checkIsWin(s1,s2,s3 ){
			if (s1 === "🍇" && s2 === "🍇" && s3 === "🍇" ){
				return 'You win!';
			} else 
			return 'You lose!';
		}
		return (
			<div>
				<p>{ this.props.s1 } { this.props.s2 } { this.props.s3 }</p>
				<p>{ checkIsWin(this.props.s1, this.props.s2, this.props.s3) }</p>
			</div>
		)
	}
}