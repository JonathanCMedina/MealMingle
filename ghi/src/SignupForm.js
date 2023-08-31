import React, {useEffect, useState} from 'react';

const SignupForm = () => {
    const [full_name, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');


    return (
        <div className='signup'>
            <form className='signup-form flex-col'>
                <h1 className='text-3xl'>Sign up</h1>
                <div className='field flex flex-col'>
                    <label className='mt-2'>Full Name</label>
                    <input 
                        type='name'
                        placeholder='Enter full name'
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                        className='input border'
                        required
                    />
                </div>
                <div className='field flex flex-col'>
                    <label className='mt-2'>Username</label>
                    <input 
                        type='text'
                        placeholder='Choose a username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input border'
                        required
                    />
                </div>
                <div className='field flex flex-col'>
                    <label className='mt-2'>Email Address</label>
                    <input 
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input border'
                        required
                    />
                </div>
                <div className='field flex flex-col'>
                    <label className='mt-2'>Password</label>
                    <input 
                        type='password'
                        placeholder='Create Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input border'
                        required
                    />
                </div>
                <div className='field flex flex-col'>
                    <label className='mt-2'>Password Confirmation</label>
                    <input 
                        type='password'
                        placeholder='Confirm Password'
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className='input border'
                        required
                    />
                </div>

            </form>

        </div>
    )

}

export default SignupForm