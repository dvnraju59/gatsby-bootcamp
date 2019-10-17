import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
            <Layout>
            <h1>About us</h1>
            <p>please contact us through <Link to='/contact'>Contact page</Link> </p>
            </Layout>
    )
}

export default AboutPage