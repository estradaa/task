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
			<Col sm={2} onClick={() => {this.setState({selected: !this.state.selected})}}>
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
		borderColor : '#c6c6c6',
		border : '1px',
		borderStyle : 'solid',
		borderRadius : '5px',
		paddingTop: '20%',
		paddingBottom: '20%',
		cursor: 'pointer',
		userSelect: 'none'
	}

	let cssSelected = {
		color : '#515151',
		backgroundColor : 'white',
		borderColor : 'rgb(66, 181, 73)',
		border : '1px',
		borderStyle : 'solid',
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
