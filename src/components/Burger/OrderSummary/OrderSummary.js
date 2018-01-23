import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {    
    
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btntype="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btntype="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;

// for debugging purposes
// class OrderSummary extends Component {    
//     render () {
//         const ingredientSummary = Object.keys(this.props.ingredients)
//         .map(igKey => {
//             return (
//                 <li key={igKey}>
//                     <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
//                 </li>
//             );
//         });

//         return (
//             <Aux>
//                 <h3>Your Order</h3>
//                 <p>Ingredients:</p>
//                 <ul>
//                     {ingredientSummary}
//                 </ul>
//                 <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
//                 <p>Continue to Checkout?</p>
//                 <Button btntype="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
//                 <Button btntype="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
//             </Aux>
//         );
//     }
// }

// export default OrderSummary;