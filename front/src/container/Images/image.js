import React from 'react';

const image=(props)=>{
    var pic=require.context('../../assets/images', true);
    var img=pic('./'+props.name+'.jpg')
    return(
       <div className='image'><img src={img} alt='' width="300" height="160"></img></div>
    )
}

export default image;