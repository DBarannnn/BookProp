import {Form} from "react-router-dom"
import "./Place.css" 

// const [images, setImages] = useState([])  

export async function action({request} : {request: Request}){
    const formData = await request.formData()
    console.log(formData.getAll("images"))
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
            style={{display: "none"}}
            id="fileInput"
            multiple
            />
            <label htmlFor="fileInput" className="upload-btn">
                <h2>Upload your photos</h2>
                <img src="/src/assets/upload.svg" className="upload-img"/>
            </label>
            <input type="text" name="rooms" className="form-input" placeholder="Number of rooms"/>
            <input type="text" name="price" className="form-input" placeholder="Price"/>
            <input type="text" name="squares" className="form-input" placeholder="Squares"/>
            <select name="propType" placeholder="Property type">
                <option value="" disabled selected hidden>Property type</option>
                <option value="flat">Flat</option>
                <option value="house">House</option>
            </select>
            <select name="adType" placeholder="Property type">
                <option value="" disabled selected hidden>Advertisement type</option>
                <option value="flat">Flat</option>
                <option value="house">House</option>
            </select>

        <button>Submit</button>
        </Form>
    )
}