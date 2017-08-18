import React from 'react'
import HelloWorld from './../containers/HelloWorld'

class App extends React.Component {
	render() {
		return (
			<div>
				<div style={{textAlign:"center"}}>
					<br />
					<br />
					<br />
					<br />
					~ header ~ 
				</div>
				<HelloWorld />
				<div style={{textAlign:"center"}}>
					<br />
					<br />
					<br />
					<br />
					~ footer ~ 
				</div>

			</div>
		)
	}
}

export default App