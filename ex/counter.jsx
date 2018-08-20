import React from 'react'

import { bindActionCreators } from 'redux'

import { inc, dec, stepChange } from './counterActions'
import { connect } from 'react-redux'

const Counter = (props) => (
    <div> '
        <h1>{props.counter.number}</h1>
        {console.log(props.counter.step)}
        <input onChange={props.stepChange} value={props.counter.step} />
        <button onClick={props.inc}> Inc </button>
        <button onClick={props.dec}> Dec </button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })

const mapDispatchToProps = dispatch => bindActionCreators({
    inc,
    dec,
    stepChange
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
