import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        navigate('/articles', { replace: true });
    };
        
    return (
        <div>
            <header style={{background: 'lightgray', padding: 16, fontsize: 24}}>
                HEADER
                <button onClick={goBack}> GO BACK </button>
                <button onClick={goArticles}> Aricle LIST </button>  
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};
export default Layout;