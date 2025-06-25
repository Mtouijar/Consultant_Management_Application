import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const params = new URLSearchParams();
      params.append('username', email);
      params.append('password', password);
      const response = await axios.post(
        'http://localhost:8000/api/auth/login',
        params,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      const { access_token, role } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('role', role);
      if (role === 'admin') {
        navigate('/admin');
      } else {
        setError('Accès réservé aux administrateurs.');
      }
    } catch (err) {
      setError('Email ou mot de passe incorrect.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log('Password reset requested for:', resetEmail);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Connexion</h2>
        {error && <div className="error-message">{error}</div>}
        {!showForgotPassword ? (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Se connecter
            </button>
            <button
              type="button"
              className="forgot-password-link"
              onClick={() => setShowForgotPassword(true)}
            >
              Mot de passe oublié ?
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label htmlFor="resetEmail">Email</label>
              <input
                type="email"
                id="resetEmail"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="reset-button">
              Réinitialiser le mot de passe
            </button>
            <button
              type="button"
              className="back-to-login"
              onClick={() => setShowForgotPassword(false)}
            >
              Retour à la connexion
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login; 