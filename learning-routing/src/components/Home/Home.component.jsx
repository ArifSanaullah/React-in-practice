import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            Home <Link to="/About">About</Link>
        </div>
    )
}
