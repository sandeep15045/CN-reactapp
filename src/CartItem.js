import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
    }
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fonctSize:25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="cart-items-actions">
                        {/*Buttons*/} 
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/9758/9758171.png"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/5974/5974771.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4, //border-Radius we cant use
        background:'#cccc'
    }
}

export default CartItem;