
import { Outlet } from "react-router-dom"

export default function Layout(){
    return (
        <>
            <header>
                <p>Header goes here</p>
            </header>
            <Outlet/>
        </>
    )
}