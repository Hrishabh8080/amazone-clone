import React from 'react'
import './css/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            <strong>
                                Subtotal ({cart.length} items) :
                                 {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                        This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparater={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
