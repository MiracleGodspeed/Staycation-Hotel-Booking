import React, { useContext, Component } from 'react';
import {CartContext} from "../../Context/CartContext"

let user = JSON.parse(localStorage.getItem("staycation_user"));

export default class Cart extends Component {

 render(){
    //  console.log(this.context, "Context")
     const {resolveCart, username, role, cart, item, cart_count} = this.context;
    return(
        <div>
            <h4>Total Item : {cart_count}</h4>
            <h4>Usrer : {username}</h4>
            <br/>
            {/* <h4>Total Price : 0{contextValue}</h4> */}
        </div>
    )
 }
}
Cart.contextType = CartContext;