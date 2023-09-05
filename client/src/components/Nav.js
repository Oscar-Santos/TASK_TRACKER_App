import { Link } from "react-router-dom"

import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Nav(){
    const  { logout } = useLogout()
    const { user } = useAuthContext()


    const handleClick = () => {
        logout()
    }

    return (
        <div className="nav">

 
            <Link to="/about">
                <div>About </div>
            </Link>

            <Link to="/home">
                <div>Task Tracker </div>
            </Link>

            <nav>
                {user && (
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
                )}
                {!user && (
                <div>
                    <Link to="/login">
                        Login 
                    </Link>

                    <Link to="/signup">
                        Signup 
                    </Link>
                </div>
                )}
            </nav>
            

        </div>
    )
}