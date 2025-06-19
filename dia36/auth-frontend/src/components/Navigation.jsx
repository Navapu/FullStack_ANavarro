import { NavLink} from "react-router";
export const Navigation = () => {
    return (
        <header className="flex items-center text-center justify-center">
            <nav>
                <ul className="flex gap-5">
                    <li><NavLink to="/">Landing</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}