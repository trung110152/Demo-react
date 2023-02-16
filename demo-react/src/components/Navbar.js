import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <h1>
                <Link to={'/'}>Home</Link>
                <br/>
                <Link to={'/Admin'}>Admin</Link>
            </h1>
        </>
    )
}