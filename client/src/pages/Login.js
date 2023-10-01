import React from 'react';

export default function LoginPage() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    {/* Label for the email input field */}
                    <label htmlFor="email">Email:</label>
                    {/* Email input field */}
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    {/* Label for the password input field */}
                    <label htmlFor="password">Password:</label>
                    {/* Password input field */}
                    <input type="password" id="password" name="password" required />
                </div>
                {/* Submit button for logging in */}
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
