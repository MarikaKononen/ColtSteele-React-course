

function getMood(){
    const moods = ['Angry', 'Hyngry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    
	render() {
		return (
            <div>
                <img src='./aaa.png' />
                <h1>My Current Mood is: {getMood()}</h1>
                <img src="https://images.unsplash.com/flagged/photo-1556669546-b1f29875df1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
            </div>
        )
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));