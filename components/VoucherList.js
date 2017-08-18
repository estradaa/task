import React, { PropTypes } from 'react'
import VoucherButton from './../components/VoucherButton'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

class VoucherList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: false
		}
	}

	render() {
		return (
			<div>
				<h1>{ this.props.message }</h1>
				<button onClick={this.props.onClick}>Click</button>
				<div style={css}>
				<Container>
					<Row>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/steam_249px_123px.png" 
							title="Steam Wallet"
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/battlenet_249px_123px.png" 
							title="Battlenet"
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/steam_249px_123px.png" 
							title="Steam Wallet"
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/battlenet_249px_123px.png" 
							title="Battlenet"
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/battlenet_249px_123px.png" 
							title="Battlenet"
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
						/>
						<VoucherButton 
							image="https://ecs7.tokopedia.net/img/recharge/operator/battlenet_249px_123px.png" 
							title="Battlenet"
							selectableColor=" -webkit-linear-gradient(top, rgb(197, 159, 250), rgb(82, 39, 138))"
							selectableText="Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati."
						/>
					</Row>
					<Row style={outerSelectedBox}>
			    		<Col sm={4}>
							<div style={selectedBox}>&nbsp;</div>
			    		</Col>
						<div style={selectedImg}> 
							<img src="https://ecs7.tokopedia.net/img/recharge/operator/battlenet_249px_123px.png" />
						</div>
						<Col sm={6}>
							<div>
								Nikmati serunya main Mobile MobA favoritmu di mana saja dengan grafis HD dan animasi yang keren. Pilih Hero favoritmu dari kumpulan Hero unik dan mainkan dengan kontrol yang responsif. Mobile Arena adalah multiplayer 5v5 action game battle arena, yang dibuat dengan sangat memperhatikan fairness dan balance, sehingga kemenangan hanya dapat diraih dengan skill dari seorang gamer sejati.
							</div>
							<div><button onClick={() => {alert('Buy button not implemented')}}>Beli</button></div>
						</Col>
					</Row>
				</Container>
				</div>
			</div>
		)
	}
}

let outerSelectedBox = {
	overflow : "hidden",
	borderStyle : "dashed"
}

let selectedImg = {
	position : "absolute",
	top : 80,
	left : -20
}

let css = {
	fontFamily : 'open sans,sans-serif',
	fontSize : '12px'
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
