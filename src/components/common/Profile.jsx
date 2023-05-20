import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
	const [selectedItem, setSelectedItem] = useState('orders');

	// Test data - Array of orders
	const orders = [
		{
			id: 1,
			image: 'placeholder1.jpg',
			orderNumber: '12345678',
			shippingDate: '15th May 2023',
			total: '75.00€',
			status: 'Em processamento',
		},
		{
			id: 2,
			image: 'placeholder2.jpg',
			orderNumber: '87654321',
			shippingDate: '20th May 2023',
			total: '100.00€',
			status: 'Concluído',
		},

	];

	const handleMenuItemClick = (item) => {
		setSelectedItem(item);
	};

	return (
		<div className="profile-container">
			<div className="profile-header">
				<h1>Minha conta</h1>
			</div>
			<div className="profile-content">
				<div className="profile-sidebar">
					<div className="profile-username">
						<p>Yo, mekié Username</p>
					</div>
					<ul className="profile-menu">
						<li className={`profile-menu-item ${selectedItem === 'orders' ? 'active' : ''}`}>
							<button
								className="profile-menu-link"
								onClick={() => handleMenuItemClick('orders')}
							>
								<i className="fas fa-box"></i>Encomendas
								{selectedItem === 'orders' && <i className="fas fa-chevron-right profile-menu-arrow"></i>}
							</button>
						</li>
						<li className={`profile-menu-item ${selectedItem === 'personalData' ? 'active' : ''}`}>
							<button
								className="profile-menu-link"
								onClick={() => handleMenuItemClick('personalData')}
							>
								<i className="fas fa-user"></i>Dados Pessoais
								{selectedItem === 'personalData' && <i className="fas fa-chevron-right profile-menu-arrow"></i>}
							</button>
						</li>
						<li className={`profile-menu-item ${selectedItem === 'changePassword' ? 'active' : ''}`}>
							<button
								className="profile-menu-link"
								onClick={() => handleMenuItemClick('changePassword')}
							>
								<i className="fas fa-lock"></i>Mudar a Pass
								{selectedItem === 'changePassword' && <i className="fas fa-chevron-right profile-menu-arrow"></i>}
							</button>
						</li>
						<li className={`profile-menu-item ${selectedItem === 'logout' ? 'active' : ''}`}>
							<button
								className="profile-menu-link"
								onClick={() => handleMenuItemClick('logout')}
							>
								<i className="fas fa-sign-out-alt"></i>Sair
								{selectedItem === 'logout' && <i className="fas fa-chevron-right profile-menu-arrow"></i>}
							</button>
						</li>
					</ul>
				</div>
				<div className="profile-main">
					{selectedItem === 'orders' && (
						<section>
							<h2>Encomendas</h2>
							<div className="order-items">
								{orders.map((order) => (
									<div className="order-item" key={order.id}>
										<img
											src={order.image}
											alt="Item"
											className="order-item-image"
										/>
										<button className="order-item-button">Ver encomenda</button>
										<div className="order-details">
											<p>Número da Encomenda: {order.orderNumber}</p>
											<hr />
											<p>Data de Expedição: {order.shippingDate}</p>
											<hr />
											<p>Total: {order.total}</p>
											<hr />
											<p>Estado: <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span></p>
										</div>
									</div>
								))}
							</div>
						</section>
					)}

				</div>
			</div>
		</div>
	);
};

export default Profile;
