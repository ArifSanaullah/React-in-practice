import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            About <Link to="/">Home</Link><Link to="/Greeting/:name">Greeting</Link>
        </div>
    )
}
