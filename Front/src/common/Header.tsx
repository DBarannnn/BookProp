
import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header(){
    return (
        <header className="app-header">
            <div className="links-container">
                <NavLink to="/buy">Buy</NavLink>
                <NavLink to="/rent">Rent</NavLink>
                <NavLink to="/sell">Sell</NavLink>
            </div>
            
            <NavLink to="/" className="links-container">
                <p className="brand-name">BookProp</p>
                <img src="/src/assets/home-logo.png"></img>
            </NavLink>

            <div className="links-container">
                <NavLink to="/">About</NavLink>
                <NavLink to="/signin">Sign in</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
            </div>

        </header>
        
    )
}