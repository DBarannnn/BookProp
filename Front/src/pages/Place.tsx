import React, { useState } from "react";
import {Form} from "react-router-dom"
import "./Place.css" 

// const [images, setImages] = useState([])  

export async function action({request} : {request: Request}){
    console.log(await request.blob())
    return "Hello"
}

export default function Place(){
    
    return (
        <Form 
        method="POST"
        className="place-form"
        replace
        >
            <input 
            type="file" 
            name="images"
            placeholder="Upload your property images"
            />
        <button>Submit</button>
        </Form>
    )
}