import React, { Component } from 'react';
import '../App.css' ;
//  onclick 
//  trigger clear selection to show
class Card extends React.Component {

    state ={
        selected  : false ,
    }
    styles = {
        width:  '700px',
        borderRadius:'8px',
        backgroundColor: '#fff',
        padding  : '15px',
        margin: '8px',
    }

    onClick =() => {
             const selected = true ; 
             this.setState({selected}) ;

    }
    render() { 
          
        const {content} = this.props ;
        return <div className='card' style = {this.styles}>
       <h4>{content.name}<span style = {{color : 'red'}}>{content.required === 'yes' ? ' *' : "" }</span> </h4>
       <p>{content.checkbox.required === 'no'? <input className = 'text' type = 'text' /> : content.checkbox.options.map(option => {return (
           <div className = 'options_listing'>
                <input  onClick = {this.onClick} type = 'radio' id={option} name={content.name} value={option} />
                <label for={option} > {option} </label>
                
            </div>
       )})}</p>
            <p className = 'clear' >{this.state.selected === true ? 'Clear Selected' : ''} </p>
        </div>;
    }
}
 
export default Card;

