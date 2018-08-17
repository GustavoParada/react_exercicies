import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'


class Field extends Component {

    handleChange(event) {
        this.setState({ value: this.props.changeValue })
    }

    render() {
        return (
            < div >
                <label>{this.props.value}</label> <br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div >
        )
    }
}

function MapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function MapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)

}

export default connect(MapStateToProps, MapDispatchToProps)(Field)
