import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

export default function Nav(){
    const  { logout } = useLogout()

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

            {/* <Link to="/documentation">
                <div>Documentation Page </div>
            </Link> */}
            <nav>
                <div>
                    <button onClick={handleClick}>Log out</button>
                </div>
                <div>
                    <Link to="/login">
                        Login 
                    </Link>

                    <Link to="/signup">
                        Signup 
                    </Link>
                </div>
            </nav>
            

        </div>
    )
}