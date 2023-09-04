import { Link } from "react-router-dom"

export default function Nav(){

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