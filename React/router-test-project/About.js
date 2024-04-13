import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Introduction</h1>
            <p>This projext is to use the REACT ROUTER.</p>
            <p>Query String: {location.search} </p>
        </div>
    );
};

export default About;