import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () =>{
    return (
            <Layout>
                <h1>Hello!</h1>
                <h2>I'm DVNRaju from Hyderabad</h2>
                <p>Need a developer? <Link to='contact'>click to contact</Link></p>
            </Layout>
    )
}

export default IndexPage
