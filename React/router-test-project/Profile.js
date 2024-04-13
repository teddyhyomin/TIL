import { useParams } from "react-router-dom";

const data = {
    neomuhwa: {
        name: 'Teddy Kim',
        description: 'learning React developer'
    },
    theodor: {
        name: 'theodore roosevelt',
        description: 'USA president'
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1> USER PROFILE </h1>
            {profile ? (
                <div>
                    <h2> {profile.name} </h2>
                    <p> {profile.description} </p>
                </div>
            ) : (
                <p> IT IS NOT EXISTED PROFILE.</p>
            )}
        </div>
    );
};

export default Profile;