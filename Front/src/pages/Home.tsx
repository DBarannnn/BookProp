import { Link } from "react-router-dom"
import "./Home.css"

export default function Home(){
    return(
        <>
            <img src="/src/assets/home-house.png" className="house-img"></img>
            <div className="about-info-container">
                <ul className="about-info">
                    <li>
                        <h2>About us</h2>
                        <p>Welcome to BookProp, your trusted gateway to the world of real estate.
                        Founded with a vision to simplify property transactions and empower
                        individuals to make informed real estate decisions, BookProp has grown 
                        to become a beacon of trust, innovation, and expertise in the industry.
                        </p>
                    </li>

                    <li>
                        <h2>Our story</h2>
                        <p>BookProp was founded in 2023 by a team of passionate real estate enthusiasts
                        who saw a need for a modern, user-friendly platform that caters to the diverse
                        needs of property buyers, sellers, and renters. Since then, we have been on a
                        relentless journey to redefine the real estate experience for our valued users.
                        </p>
                    </li>

                    <li>
                        <h2>Our mission</h2>
                        <p>At BookProp, our mission is clear: to provide a seamless and enjoyable real
                        estate journey for everyone. Whether you're a first-time homebuyer, an experienced
                        investor, or a property owner looking to sell or rent, we are committed to being your
                        trusted partner throughout the process. We believe that finding, buying, or selling a
                        property should be an exciting and rewarding experience, and our platform is designed
                        to make that vision a reality.
                        </p>
                    </li>
                </ul>

                <h2 className="options-header">LETS JUMP RIGHT IN</h2>
                <div className="options-container">
                        <div className="option-container rent">
                            <img src="/src/assets/rent.png"></img>
                            <p className="option-text">Find a convenient place and apartment which satisfies all your needs</p>
                            <Link to="/rent" className="option-wrapper">
                            <p>Rent now</p>
                            </Link>
                        </div>

                        <div className="option-container buy">
                            <img src="/src/assets/buy.png"></img>
                            <p className="option-text">Find a convenient place and apartment which satisfies all your needs</p>
                            <Link to="/buy" className="option-wrapper">
                            <p>Buy now</p>
                            </Link>
                        </div>

                        <div className="option-container sell">
                            <img src="/src/assets/sell.png"></img>
                            <p className="option-text">Find a convenient place and apartment which satisfies all your needs</p>
                            <Link to="/sell" className="option-wrapper">
                            <p>Sell now</p>
                            </Link>
                        </div>

                    </div>

                    <hr className="home-separator"></hr>

            </div>
                
            
        </>
    )
}