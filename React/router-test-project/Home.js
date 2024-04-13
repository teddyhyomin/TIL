import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <p>This is the first page displayed.</p>
            <Link to="/about"> INTRODUCTION </Link>
        </div>
    );
};

export default Home;