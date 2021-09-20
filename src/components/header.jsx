import React, { Component } from 'react';
import Card from './card' ;
// *****content *****
//  header
//  description
// author email

// ***** actions ********************************
// switch account 



class Header extends React.Component {

    styles = {
        width:  '700px',
        borderRadius:'8px',
        backgroundColor: '#fff',
        padding  : '15px',
        margin: '8px',
    }
  
    render() { 
        const {data} = this.props ; 
            const {header  ,description , auth_mail} = data ; 
        return <div style = {this.styles}>
                   <h1> {header} </h1>
                   <p>{description}</p>
                   <hr style= {{width:'500px'}}/>

                   <p>{auth_mail}  <a href='#'>Switch account</a></p>
                   <p style= {{color : 'red'}}> * Required</p>

        </div>;
    }
}
 
export default Header;