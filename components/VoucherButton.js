	import React, { PropTypes } from 'react'
	import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'
	import atrr from 'react-conditional-attribute'

	// Component responsible to displaying and act on single voucher button
	class VoucherButton extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				selected: false
			}
		}

		getStyle(){
			return this.state.selected ? cssSelected : css
		}

		componenDidMount(){
			console.log(this.props)
		}
		render() {
		return (
			<Col sm={2} onClick={() => {
					if(!this.state.selected){
						this.props.callback(this)
						this.setState({selected: !this.state.selected})
					}
			}}>
				<div style={this.getStyle()}>
					<img style={imgCss} src={this.props.image} />
					<center>
						{this.props.title}
					</center>
				</div>
			</Col>
		);
		}
	}

	let css = {
		backgroundColor : '#f4f4f4',
		border : '1px solid #c6c6c6',
		borderRadius : '5px',
		paddingTop: '20%',
		paddingBottom: '20%',
		cursor: 'pointer',
		userSelect: 'none'
	}

	let cssSelected = {
		color : '#515151',
		border : '1px solid rgb(66, 181, 73)',
		backgroundColor : 'white',
		borderRadius : '5px',
		paddingTop: '20%',
		paddingBottom: '20%',
		cursor: 'pointer',
		userSelect: 'none'
	}

	let imgCss = {
		width : "50%",
		margin: 'auto',
		display: 'block'
	}

	export default VoucherButton 
