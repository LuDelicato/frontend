import React, { useState } from 'react';
import './cart.css';

const Cart = () => {
	const [cartItems, setCartItems] = useState([
		{ id: 1, name: 'Item 1', price: 10, quantity: 1 },
		{ id: 2, name: 'Item 2', price: 15, quantity: 1 },
		{ id: 3, name: 'Item 3', price: 20, quantity: 1 },
	]);

	const handleRemoveItem = (itemId) => {
		setCartItems(cartItems.filter((item) => item.id !== itemId));
	};

	const handleIncrementQuantity = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const handleDecrementQuantity = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	const handleEmptyCart = () => {
		setCartItems([]);
	};

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className="cart">
			<div className="cart-header">
				<h2>A tua caixa</h2>
			</div>
			<div className="cart-items">
				{cartItems.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					cartItems.map((item) => (
						<div className="cart-item" key={item.id}>
							<img src="https://placehold.co/200x200/png" alt="Product" />
							<div className="item-details">
								<h3>{item.name}</h3>
								<p>preço unidade: {item.price}€</p>
								<p>quantidade: {item.quantity}</p>
								<div className="quantity-control">
									<button
										className="quantity-btn"
										onClick={() => handleDecrementQuantity(item.id)}
									>
										-
									</button>
									<div className="quantity-box">{item.quantity}</div>
									<button
										className="quantity-btn"
										onClick={() => handleIncrementQuantity(item.id)}
									>
										+
									</button>
								</div>
								<button
									className="remove-item"
									onClick={() => handleRemoveItem(item.id)}
								>
									Remover
								</button>
							</div>
						</div>
					))
				)}
			</div>
			<div className="cart-footer">
				<div className="subtotal">
					<h4>Total: {totalPrice}€</h4>
				</div>
				<div>
					<button className="empty-cart" onClick={handleEmptyCart}>
						Esvaziar a Caixa
					</button>
					<button className="checkout">Concluir Compra</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
