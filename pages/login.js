import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

export default function LoginScreen() {
    return (
        <Layout title="Login">
            <from className="mx-auto max-w-screen-md">
                <h1 className="text-x1 mb-4">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="w-full" id="email" autoFocus />
                </div>
                <div className="mb-4">
                    <labal htmlFor="password">Password</labal>
                    <input type="password" className="w-full" id="password" autoFocus />
                </div>
                <div className="mb-4">
                    <button className="primary-button">Login</button>
                </div>
                <div className="mb-4">
                    Don&apos;t have an account? &nbsp;
                    <Link href="register">Register</Link>
                </div>
            </from>
        </Layout>
    )
}