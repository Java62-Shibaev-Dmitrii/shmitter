import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import './App.css'
import {useState} from "react";

function App() {
    const [user, setUser] = useState({
        avatar:'https://gravatar.com/avatar/000?d=initials',
        name: 'User Name',
        }
    );

    const [stats, setStats] = useState({
        followers: 42,
        following: 12,
    })

    return (
        <div className={"app"}>
            <Navigation user={user}/>
            <Body user={user} stats={stats}/>
        </div>
    );
};

export default App;