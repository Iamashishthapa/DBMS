import React, { Component } from 'react';
import {connect} from 'react-redux';
import './get.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as actions from '../../store/actions/index';
import Block from '../../component/blockLayout/block';

class Try extends Component{
    componentDidMount(){
        this.props.onInitData();
    }
    render(){
  return (
    <div className='try'>
        <Block data={this.props.data} got={this.props.got} islogged={this.props.islogged}/>
    </div>
    )}
}
const mapStateToProps=(state)=>{
    return{
        data:state.get.resp,
        got:state.get.got,
        islogged:state.islogged.islogged
    };
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onInitData:()=>dispatch(actions.importItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Try);
