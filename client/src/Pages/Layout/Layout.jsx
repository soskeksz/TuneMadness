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
                        <button>
                        <Link to="/create">
                            Add a tune
                        </Link>
                        </button>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Layout;