import React from 'react';
import {Link} from "react-router-dom";


export const Cart = ({cart}) => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11];
    let total = 0;
    return (
        <div className={"container"}>
            <div className="cart-container">
                <div className="cart-header">
                    <h2 className={"cart-title"}> My cart </h2>
                    <Link className="btn btn-go-back"> Continue Shopping </Link>
                </div>
                <div className="cart-body">
                    <table>
                        <thead>
                            <tr>
                                <th> Product </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Total </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cart && cart.map((item, index) => {
                                total += item.price;
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="cart-item-image">
                                                <img src={item.image[0].url} alt="" height={"100px"}/>
                                                {item.name}
                                            </div>
                                        </td>
                                        <td> ${item.price} </td>
                                        <td><select name="" id="">
                                            {
                                                arr.map((num) => {
                                                    return <option value={num}> {num} </option>
                                                })
                                            }
                                        </select> </td>
                                        <td> ${item.price} </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <div className="cart-footer">
                    <p> Total: ${total} </p>
                    <button className={"btn btn-primary"}> Checkout </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;