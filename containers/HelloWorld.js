import { connect } from 'react-redux'
import { HELLO_WORLD } from './../actions'
import VoucherList from './../components/VoucherList'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.helloWorld.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: HELLO_WORLD })
    }
  }
}

const HelloWorld = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoucherList)

export default HelloWorld
