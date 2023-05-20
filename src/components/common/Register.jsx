import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
	const handleRegister = (e) => {
		e.preventDefault();
		// Handle registration logic here
	};

	return (
		<div className="register-container">
			<form className="register-form" onSubmit={handleRegister}>
				<div className="register-form-group">
					<label htmlFor="firstName" className="register-form-label">
						Tag
					</label>
					<input type="text" className="register-form-control" id="firstName" name="firstName" placeholder="Escolhe o teu username" />
				</div>

				<div className="register-form-group">
					<label htmlFor="password" className="register-form-label">
						Palavra-passe
					</label>
					<input type="password" className="register-form-control" id="password" name="password" placeholder="Escolhe a tua pass"/>
				</div>
				<div className="register-form-group">
					<label htmlFor="repeatPassword" className="register-form-label" >
						Repita a Palavra Passe
					</label>
					<input type="password" className="register-form-control" id="repeatPassword" name="repeatPassword" placeholder="Repete a tua pass"/>
				</div>
				<div className="register-button-container">
					<Link to="/login" className="register-btn register-btn-login">
						Loga-te!
					</Link>
					<button type="submit" className="register-btn register-btn-primary">
						Regista-te!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
