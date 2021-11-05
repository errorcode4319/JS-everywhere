import React, {useEffect} from 'react';
import styled from 'styled-components';

const SignUp = props => {
    useEffect(() => {
        document.title = 'Sign Up - Notedly';
    });

    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    required 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                />
                <label htmlFor="email">Email:</label>
                <input 
                    required 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUp;