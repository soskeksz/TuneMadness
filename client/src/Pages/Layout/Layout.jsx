import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return(
        <div className="Layout">
            <nav>
                <ul>
                    <li className="grow">
                    <Link to="/">Tunez</Link>
                    </li>
                    <li>
                        <Link to="/create">
                            Add a tune
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Layout;