import React, { useState } from 'react';
import { Component } from 'react';

export const CartContext = React.createContext();

// const [cart, setCart] = useState([]);
// export const CartProvider = (props) => {
//     return(
//         <CartContext.Provider value="Parsed Value">
//             {props.children }
//         </CartContext.Provider>
//     )
// }
let user = JSON.parse(localStorage.getItem("staycation_user"));
let init_count = JSON.parse(localStorage.getItem("cart_item"))

export class CartProvider extends Component{ 
    constructor(props) {
        super(props)
        this.state = {
          cart: [1, 2, 3],
          username:user?.data?.first_name,
          role: "admin",
          item:0,
          user_info: JSON.parse(localStorage.getItem("staycation_user")),
          cart_count: init_count != null ? init_count.length : 0,
          cart_username:[]

        }
      }

      resolveCart = () => {
        let parsedObject
          setTimeout(() => {
            let retrievedData = localStorage.getItem("booking_cart");
        console.log(retrievedData, "ret")

        parsedObject = JSON.parse(retrievedData);
        console.log(parsedObject, "parsed")
        let modifiedForStorage = JSON.stringify(parsedObject);
        console.log(modifiedForStorage, "mod")
        //let tt = localStorage.setItem("booking_cart", modifiedForStorage);
        this.setState({cart_username: parsedObject})
          console.log(this.state.cart_username, "COmp Cart")

          }, 1000)

      }

      clearCart = () => {
        localStorage.removeItem('booking_cart')
        this.resolveCart();
      }

      componentDidMount(){
        this.resolveCart();
      }
      render(){
          const {cart, username, role, item, cart_count, cart_username} = this.state; 
          const {resolveCart, clearCart} = this;
          return(
            <CartContext.Provider value={{
                username,
                role,
                resolveCart,
                item,
                cart,
                cart_count,
                cart_username,
                clearCart
            }}>
                {this.props.children }
            </CartContext.Provider>
          )
      }
}

export default CartProvider;