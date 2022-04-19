import React,{Component} from 'react';
import axios from 'axios';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import './update.css';


class update extends Component{
    state={
        id:null,
        name:null,
        description:null,
        price:null,
        tag:null,
        got:"false"
    }
    handler1=(event)=>{
        this.setState({name:event.target.value})
    }
    handler2 =(event)=>{
        this.setState({description:event.target.value})
    }
    handler3 =(event)=>{
        this.setState({id:event.target.value})
    }
    handler4 =(event)=>{
        this.setState({price:event.target.value})
    }
    handler5 =(event)=>{
        this.setState({tag:event.target.value})
    }
    handler6 =(event)=>{
        this.setState({stock:event.target.value})
    }
    
    btnClicked1=(e)=>{
        e.preventDefault();
        const id=this.state.id;
        const data={id};
        axios.post('http://localhost:3001/finditem',data)
        .then(resp=>{
            if(resp.data.length){
            this.setState({
            name:resp.data[0].item_name,
            description:resp.data[0].item_description,
            price:resp.data[0].price,
            tag:resp.data[0].tag,
            stock:resp.data[0].stock,
            got:"true"})}
            if(!resp.data.length){
                this.setState({got:"error"})
            }
        })
        }
    
        btnClicked2=(e)=>{
            e.preventDefault();
            const id=this.state.id;
            const  name=this.state.name;
            const description=this.state.description;
            const  price=this.state.price;
            const  tag=this.state.tag;
            const stock=this.state.stock
            const data={id,name,description,price,tag,stock};
            axios.post('http://localhost:3001/deletepost',data)
            .then(setTimeout(()=>axios.post('http://localhost:3001/updatepost',data),1000))
            .then(setTimeout(()=>this.props.onInitData(),1000))
        }
    render(){
        var show=null;
        if(this.state.got==="true"){
            show=<div><input type='text' value={this.state.name} onChange={this.handler1}></input>
            <input type='text'  value={this.state.description} onChange={this.handler2}></input>
            <input type='text' onChange={this.handler4} value={this.state.price}></input>
            <input type='text' onChange={this.handler5} value={this.state.tag}></input>
            <input type='number' onChange={this.handler6} value={this.state.stock}></input>
            <p><button onClick={this.btnClicked2}>Update</button></p>
            </div>
        }
        else if(this.state.got==="error"){
            show=<div>ITEM NOT FOUND</div>
        }
        return(
            <div className='main'>
                <div className="updatebox">
                <input type='number' onChange={this.handler3}></input>
                <button onClick={this.btnClicked1}>Find</button>
                {show}
            </div>
            {console.log(this.props)}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        data:state.resp,
        got:state.got
    };
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onInitData:()=>dispatch(actions.importItems())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(update);