import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		navigate('/profile');
	};

	return (
		<div className="login">
			<form className="form" onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="username" className="form-label">Tag</label>
					<input type="text" className="form-control" id="username" name="username" placeholder="O teu username"/>
				</div>
				<div className="form-group">
					<label htmlFor="password" className="form-label">Pass</label>
					<input type="password" className="form-control" id="password" name="password" placeholder="A tua password" />
				</div>
				<div className="form-group form-check">
					<label className="form-check-label checkbox-label" htmlFor="remember">
						<input type="checkbox" className="form-check-input checkbox-input" id="remember" name="remember" />
						Lembrar Login
					</label>
				</div>
				<div className="login-button-container">
					<Link to="/register" className="btn btn-register">Regista-te!</Link>
					<button type="submit" className="btn btn-primary">Loga-te!</button>
				</div>
			</form>
		</div>


	);
};

export default Login;
