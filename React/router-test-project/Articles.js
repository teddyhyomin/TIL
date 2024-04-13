import { Link } from "react-router-dom";

const Articles = () => {
    return (
        <ul>
            <li>
                <Link to="/articles/1">ARTICLE 1</Link>
            </li>
            <li>
                <Link to="/articles/2">ARTICLE 2</Link>
            </li>
            <li>
                <Link to="/articles/3">ARTICLE 3</Link>
            </li>
        </ul>
    )
}

export default Articles;