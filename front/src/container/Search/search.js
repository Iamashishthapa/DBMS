import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Block from '../../component/blockLayout/block';

class search extends Component{
    state={
        search:null,
    };

    componentDidMount(){
        var data=this.props.location.search;
        var srh=data.slice(1,data.length);
        this.setState({search:srh});
        setTimeout(()=>{if(!this.props.got){
            this.props.onSearchData(this.state.search);
        }},1000)
    }
    render(){
        return(
            <div className="search">
                <Block data={this.props.data} got={this.props.got}/>
            </div>
        )
        }
        }

    const mapStateToProps=(state)=>{
        return{
            data:state.search.resp,
            got:state.search.got
        };
    }
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            onSearchData:(search)=>dispatch(actions.searchItem(search))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(search);