import React, { useContext } from 'react'
import { UserContext } from '../components/UserContext'

export default function New() {
    const { user } = useContext(UserContext)
    
    return (
        <div>
            <div>
                <h1>Hello</h1>
                {user ? (
                    <>
                        <p>Welcome, {user.name}!</p>
                        <p>Your email is: {user.email}</p>
                    </>
                ) : (
                    <p>Please log in to see your details.</p>
                )}
            </div>
        </div>
    )
}