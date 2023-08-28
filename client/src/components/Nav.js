import { Link } from "react-router-dom"

export default function Nav(){

    return (
        <div className="nav">

            <Link to="/about">
                <div>About </div>
            </Link>

            <Link to="/home">
                <div>Home </div>
            </Link>


            <Link to="/documentation">
                <div>Documentation Page </div>
            </Link>

        </div>
    )
}