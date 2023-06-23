import "./styles.css";
import {Avatar, Link} from "@mui/material";
import controller from "./controller_regenbogen.jpg";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

export const Header = () => {

    const navigate = useNavigate();
    const handleAboutClick = useCallback(() => {
        navigate("/about");
    }, []);

    const handleIconClick = useCallback(() => {
        navigate("/");
    }, []);

    return <div className="header">
        <Avatar className="header-icon" onClick={handleIconClick} src={controller} />
        <div className="header-group"><Link className="header-link" underline="hover" href="https://www.pietsmiet.de">Pietsmiet.de</Link>
            <Link className="header-link" underline="hover" onClick={handleAboutClick}>Über den Entwickler</Link></div>
    </div>
}