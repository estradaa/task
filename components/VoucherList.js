import React, { PropTypes } from 'react'
import VoucherButton from './../components/VoucherButton'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

class VoucherList extends React.Component {
	constructor(props) {
		super(props)
		// default value
		this.state = {
			selected: false,
			selectedChild: {props:{selectableText:""}}
		}
	}

	callbackChild(child){
		console.log(child)
		if(this.state.selected){
			this.state.selectedChild.setState({selected:false})			
		}
		this.setState({selectedChild:child, selected:true})
	}

	render() {
		return (
			<div>
				<div style={css}>
				<Container>
					<Row>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/moba_249px_123px.png" 
							title="Garena "
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
							callback={this.callbackChild.bind(this)}
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/steam_249px_123px.png" 
							title="Steam"
							selectableColor=" -webkit-linear-gradient(top, rgb(19, 130, 179), rgb(20, 73, 124))"
							selectableText="Steam Wallet yang digunakan untuk top up game-game di Steam ataupun membeli game terbaru dari Steam. Adapun game-game top dari Steam adalah : DotA2, Counter Strike : Global Offensive, PlayerUnknown's BattleGround, Team Fortress, GTA V, dan masi banyak lagi."
							callback={this.callbackChild.bind(this)}
						/>
					</Row>
					<Row style={outerSelectedBox}>

			    		<Col sm={6} style={heightSimilar}>
			    			hadsfg
			    		</Col>

						<Col sm={6}>

							<div  style={{display: "inline", position:"absolut", backgroundImage : this.state.selectedChild.props.selectableColor}}>
								<div>
									{this.state.selectedChild.props.selectableText}
								</div>
								<div><button onClick={() => {alert('Buy button not implemented')}}>Beli</button></div>
							</div>
						</Col>

					</Row>
				</Container>
				</div>
			</div>
		)
	}
}

let heightSimilar = {
	background:"green",
    height: "100%",
    width: "50%",
    position: "relative",
    right: "0",
    top: "0"
}

let outerSelectedBox = {
	overflow : "hidden",
	padding : "-30px",
	border : "solid 1px #42b549",
	paddingTop : "20",
	paddingBottom : "20",
	marginTop : "20",
	marginLeft : "0",
	marginRight : "0",
	color : "#515151",
	borderRadius : '5px',
}

let outerSelectedBox2 = {
	overflow: "hidden",
    position: "relative",
    width: "100%"
}

let selectedImg = {
	position : "relative",
	float: "left",
	top : 80,
	left : 0
}

let css = {
	fontFamily : 'open sans,sans-serif',
	fontSize : '12px',
}

let selectedBox = {
	paddingTop:'100%',
	marginLeft:"-10%",
	transform : "matrix(1, 0, -0.36397, 1, -30, 0)",
	backgroundImage : " -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))",
}

VoucherList.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default VoucherList 
