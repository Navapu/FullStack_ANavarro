import { Outlet, NavLink } from "react-router";

const PrivateLayout = () => {
    return ( 
        <div>
            <h3>Layout of private zone</h3>

            <nav>
                <ul>
                    <li><NavLink to="/dashboard" end>Dashboard</NavLink></li>
                    <li><NavLink to="/dashboard/config">Config</NavLink></li>
                    <li><NavLink to="/dashboard/logout">Logout</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
     );
}
 
export default PrivateLayout;