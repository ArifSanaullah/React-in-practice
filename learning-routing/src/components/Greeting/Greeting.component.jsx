import React from 'react'
import { useParams } from "react-router-dom";

export default function Greeting() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            Hello {params.name}
        </div>
    )
}
