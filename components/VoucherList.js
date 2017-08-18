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

			    		<Col sm={12} style={{padding:"0"}}>
			    			<div style={{overflow:"hidden", "position":"relative", "width":"100%"}}>
							    <div style={{width:"50%",float:"right"}}>
							    	<div style={{padding:"10px"}}>
							    		<div>{this.state.selectedChild.props.selectableText}</div>
							    		<div style={{clear:"both"}}>
							    			Nominal <br />
							    			<select style={{width:"100%"}}>
							    				<option class="product-li none" value="" disabled="" id="product_empty_nominal" selected="">Pilih Produk</option>
							    				<option class="product-li" value="1109" selected="selected">33 Shell</option>
							    				<option class="product-li" value="1108">66 Shell</option>
							    				<option class="product-li" value="1107">165 Shell</option>
							    				<option class="product-li" value="1106">330 Shell</option>
							    				<option class="product-li" value="1105">1.000 Cash</option>
							    				<option class="product-li" value="1104">2.000 Cash</option>
							    				<option class="product-li" value="1103">5.000 Cash</option>
							    				<option class="product-li" value="1102">10.000 Cash</option>
							    			</select>
							    		</div>
								    	<div style={{clear:"both", width:"100%"}}>
								    		<div style={{width:"50%", float:"left" }}>
								    			Harga <br />
								    			Rp 8000 <strike>not yet available!</strike>
								    		</div>
								    		<div style={{width:"50%", float:"right" }}> 
								    			<input type="checkbox" name="vehicle" value="Bike" />
								    			Bayar Instan <br/>
								    			<button>Beli</button> 
								    		</div>
							    		</div>
								    </div>
							    </div>
							    <div style={{height:"100%",position:"absolute",top:"0",right:"50%",width:"50%"}}>
							    	<div style={{left:"-10%", position:"absolute", width:"100%", height:"100%",backgroundImage:this.state.selectedChild.props.selectableColor, transform:" skew(-20deg,0)"}}>&nbsp;</div>
							    	<div style={{paddingTop:"10%", color:"white", fontSize:"16px",position:"absolute",width:"100%", height:"100%",textAlign:"center"}}>
							    		{this.state.selectedChild.props.title}
							    	</div>
							    </div>
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
	border : "solid 1px #42b549",
	marginTop : "20",
	marginLeft : "0",
	paddingLeft : "0",
	paddingRight : "0",
	marginRight : "0",
	color : "#515151",
	borderRadius : '5px',
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
	boxSizing: "border-box"
}


VoucherList.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default VoucherList 
