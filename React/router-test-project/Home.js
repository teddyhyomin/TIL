import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <p>This is the first page displayed.</p>
            <ul>
                <li>
                    <Link to="/about"> INTRODUCTION </Link>
                </li>
                <li>
                    <Link to="/profiles/neomuhwa"> neomuhwa's PROFILE </Link>
                </li>
                <li>
                    <Link to="/profiles/theodor"> theodor's PROFILE </Link>
                </li>
                <li>
                    <Link to="/profiles/void"> NOT EXISTED PROFILE </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;