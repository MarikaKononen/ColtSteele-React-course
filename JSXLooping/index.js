class App extends React.Component {
	render() {
		
		
		return (
			<div>
				<h1>My Friends</h1>
				<Friend
					name="Pekka"
					hobbies={['Fishing', 'Cooking', 'Singing']}
				/>

				<Friend
					name="Siiri"
					hobbies={['Dancing', 'Swimming', 'Drawing']}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));