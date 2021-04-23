function Message({ alertType, messageBody }) {
    return <div className={alertType}>{messageBody}</div>
}

export const CartReducer = (state, action) => {
    let { shoppingCart, quantity, totalPrice } = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQuantity;
    let message;

    switch (action.type) {
        // add item into the cart 
        case 'ADD':
            const check = shoppingCart.find(cart => cart.id === action.id);
            if (check) {
                message = <Message alertType="alert alert-warning" messageBody="Ce produit existe déjà dans votre panier, vous pouvez y ajuster sa quantité!" />
                return { shoppingCart: [...shoppingCart], quantity, totalPrice, message: message };
            }
            else {
                product = action.products.find(product => product.id === action.id);
                product['quantity'] = 1;
                updatedQuantity = quantity + 1;
                updatedPrice = totalPrice + product.price;
                message = <Message alertType="alert alert-success" messageBody="Le produit est bien rajouté dans votre panier!" />
                return { shoppingCart: [product, ...shoppingCart], quantity: updatedQuantity, totalPrice: updatedPrice, message: message };
            }
            break;

        // delete item from the cart 
        case 'DEL':
            const filtered = shoppingCart.filter(cart => cart.id !== action.id);
            product = shoppingCart.find(cart => cart.id === action.id);
            updatedPrice = totalPrice - product.price * product.quantity;
            updatedQuantity = quantity - product.quantity;
            message = <Message alertType="alert alert-danger" messageBody="Le produit est bien supprimé du panier!" />
            return { shoppingCart: [...filtered], quantity: updatedQuantity, totalPrice: updatedPrice, message: message }
            break;

        // update the number of items: increase
        case 'INC':
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            product.quantity += 1;
            quantity += 1;
            totalPrice += product.price;
            shoppingCart[index] = product;
            return { shoppingCart: [...shoppingCart], quantity: quantity, totalPrice: totalPrice, message: '' }
            break;

        // update the number of items: decrease
        case 'DEC':
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            if (product.quantity > 1) {
                product.quantity = product.quantity - 1;
                updatedPrice = totalPrice - product.price;
                updatedQuantity = quantity - 1;
                shoppingCart[index] = product;
                return { shoppingCart: [...shoppingCart], quantity: updatedQuantity, totalPrice: updatedPrice, message: '' };
            }
            else {
                message = <Message alertType="alert alert-warning" messageBody="La quantité choisie ne doit pas être inférieure à 1" />
                return { shoppingCart: [...shoppingCart], quantity: quantity, totalPrice: totalPrice, message: message }
            }
            break;

        // if not event 
        case 'EMPTY':
            return { shoppingCart: [], quantity: 0, totalPrice: 0, message: '' }
            break;

        default:
            return state;
    }
}
