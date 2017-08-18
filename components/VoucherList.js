import React, { PropTypes } from 'react'
import VoucherButton from './../components/VoucherButton'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

class VoucherList extends React.Component {
	constructor(props) {
		super(props)
		// default value
		this.state = {
			selected: false,
			selectedChild: {props:{selectableText:"", options:"",prices:"", priceBeforeDiscount:""}},
			checkboxInstan: false,
			price:"1.000",
			priceBeforeDiscount:"1.100",
			option:0
		}
	}

	callbackChild(child){
		if(this.state.selected){
			this.state.selectedChild.setState({selected:false})			
		}
		this.setState({
			selectedChild:child, 
			selected:true,
			price:child.props.prices.split("|")[0],
			priceBeforeDiscount:child.props.priceBeforeDiscount.split("|")[0]
		})
	}

	renderSelect(){
		return(		
			<select style={{width:"100%", height:"36px", fontSize:"16px"}} onChange={(event,data) => {
				let value = event.target.value
				this.setState({
					option:value,
					price:this.state.selectedChild.props.prices.split("|")[value],
					priceBeforeDiscount:this.state.selectedChild.props.priceBeforeDiscount.split("|")[value]
				})
			}} value={this.state.option}>
				{this.state.selectedChild.props.options.split("|").map((item, index) => (
					<option value={index} key={index}>{item}</option>
				))}
			</select>
		)
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
							options					="33 Shell|66 Shell|165 Shell|330 Shell|1.000 Cash|2.000 Cash|5.000 Cash|10.000 Cash"
							prices 					="10.000|20.000|21.000|48.000|95.000|10.000|20.000|48.000|95.000"
							priceBeforeDiscount		="10.500|21.000|50.500|100.000|21.000|50.500|100.0000"
							callback={this.callbackChild.bind(this)}
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/steam_249px_123px.png" 
							title="Steam Wallet"
							selectableColor=" -webkit-linear-gradient(top, rgb(19, 130, 179), rgb(20, 73, 124))"
							selectableText="Steam Wallet yang digunakan untuk top up game-game di Steam ataupun membeli game terbaru dari Steam. Adapun game-game top dari Steam adalah : DotA2, Counter Strike : Global Offensive, PlayerUnknown's BattleGround, Team Fortress, GTA V, dan masi banyak lagi."
							options="6.000|12.000|45.000|60.000|90.000|120.000|250.000|400.000|600.000"
							prices="8.000|16.000|54.000|72.000|108.000|144.000|300.000|481.000|721.000"
							priceBeforeDiscount="8.500|18.000|57.000|76.000|113.500|151.500|315.000|505.500|757.500"
							callback={this.callbackChild.bind(this)}
						/>
					</Row>
					<Row style={{overflow : "hidden", border : "solid 1px #42b549", marginTop : "20px", marginLeft : "0", paddingLeft : "0", paddingRight : "0", marginRight : "0", color : "#515151",borderRadius : '5px', display: this.state.selected ?'block':'none'}}>
			    		<Col sm={12} style={{padding:"0", lineHeight:"17.1px"}}>
			    			<div style={{overflow:"hidden", "position":"relative", "width":"100%"}}>
							    <div style={{width:"50%",float:"right",}}>
							    	<div style={{padding:"10px"}}>
							    		<div style={{fontSize:"12px"}}>
							    			{this.state.selectedChild.props.selectableText}
							    		</div>
							    		<div style={{clear:"both", paddingTop:"18px"}}>
							    			<span style={{color:"#888", fontSize:"13px"}}>Nominal</span> <br />
							    			{this.renderSelect()}
							    		</div>
								    	<div style={{clear:"both", width:"100%", paddingTop:"18px"	}}>
								    		<div style={{width:"50%", float:"left" }}>
								    			<span style={{color:"#888", fontSize:"13px"}}>Harga</span> <br />
								    			<span style={{color:"red", fontSize:"20px", fontWeight:"bold"}}>Rp {this.state.price}</span> <strike>Rp {this.state.priceBeforeDiscount}!</strike>
								    			<br />
								    			<br />
								    			<br />
								    		</div>
								    		<div style={{width:"50%", float:"right" }}> 
								    			<input type="checkbox" checked={this.state.checkboxInstan} onChange={() => {this.setState({checkboxInstan:!this.state.checkboxInstan})}}/>
								    			Bayar Instan <br/>
								    			<button style={{backgroundColor:"#ff5722",color:"white", width:"100%", border: 0, fontSize: "16px", borderRadius:"2px", padding:"10px"}}>{this.state.checkboxInstan?"Bayar":"Beli"}</button> 
								    		</div>
							    		</div>
								    </div>
							    </div>
							    <div style={{height:"100%",position:"absolute",top:"0",right:"50%",width:"50%"}}>
							    	<div style={{left:"-15%", position:"absolute", width:"100%", height:"100%",backgroundImage:this.state.selectedChild.props.selectableColor, transform:" skew(-20deg,0)"}}>&nbsp;</div>
							    	<div style={{paddingTop:"0%", color:"white", fontSize:"16px",position:"absolute",width:"100%", height:"100%",textAlign:"center"}}>
							    		<img src={this.state.selectedChild.props.image} /> <br/>
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
	overflow : "hidden", border : "solid 1px #42b549", marginTop : "20px", marginLeft : "0", paddingLeft : "0", paddingRight : "0", marginRight : "0", color : "#515151",borderRadius : '5px',
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
