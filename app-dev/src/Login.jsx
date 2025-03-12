import React, { useEffect, useRef } from 'react';
import './Login.css';

function Login() {
    const containerRef = useRef(null);
    const registerBtnRef = useRef(null);
    const loginBtnRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const registerBtn = registerBtnRef.current;
        const loginBtn = loginBtnRef.current;

        if (!container || !registerBtn || !loginBtn) return;

        const handleRegisterClick = () => {
            container.classList.add("active");
        };

        const handleLoginClick = () => {
            container.classList.remove("active");
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);

        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []);

    return (
        <div>
            <div className="container" id="container" ref={containerRef}>
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" onClick={(e) => e.preventDefault()} className="icon">
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
                            <a href="#" onClick={(e) => e.preventDefault()} className="icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" onClick={(e) => e.preventDefault()} className="icon">
                                <i className="fa-brands fa-google-plus-g"></i>
                            </a>
                            <a href="#" onClick={(e) => e.preventDefault()} className="icon">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#" onClick={(e) => e.preventDefault()}>Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to access all of the site features</p>
                            <button className="hidden" id="login" ref={loginBtnRef}>
                                Sign In
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello!</h1>
                            <p>Register with your personal details to access all of the site features</p>
                            <button className="hidden" id="register" ref={registerBtnRef}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
