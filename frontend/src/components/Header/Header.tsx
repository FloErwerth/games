import "./styles.css";
import {Avatar, Button, Link} from "@mui/material";
import controller from "./controller_regenbogen.jpg";
import {useNavigate} from "react-router-dom";
import {useCallback, useState} from "react";
import {AuthenticationModal} from "../AuthenticationModals/AuthenticationModal";
import {useAppDispatch, useAppSelector} from "../../store";
import {getIsLoggedIn} from "../../store/selectors/authSelectors";
import {logout} from "../../firebase";
import {setIsLoggedIn, setUserId} from "../../store/reducers/auth";
import {UserMenu} from "./UserMenu/UserMenu";

export const Header = () => {
    const [showAuth, setShowAuth] = useState(false);
    const isLoggedIn = useAppSelector(getIsLoggedIn);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleAboutClick = useCallback(() => {
        navigate("/about");
    }, []);

    const handleIconClick = useCallback(() => {
        navigate("/");
    }, []);

    const logoutFromStore = useCallback(() => {
        dispatch(setUserId(""));
        dispatch(setIsLoggedIn(false));
        navigate("/")
    }, [])

    const handleLoginLogout = useCallback(() => {
        if(!isLoggedIn) {
            setShowAuth(true);
        } else {
            logout().then().catch().finally(() => {
                logoutFromStore();
            });
        }
    }, [isLoggedIn])

    const handleLoginClose = useCallback(() => {
        setShowAuth(false);
    }, [])

    return <div className="header">
        <Avatar className="header-icon" onClick={handleIconClick} src={controller} />
        <div className="header-group">
            <Link className="header-link" underline="hover" href="https://www.pietsmiet.de">Pietsmiet.de</Link>
            <Link className="header-link" underline="hover" onClick={handleAboutClick}>Über den Entwickler</Link>
            {isLoggedIn ? <UserMenu onHandleLogout={handleLoginLogout} /> : <Button onClick={handleLoginLogout}>Login</Button>}
        </div>
        <AuthenticationModal onClose={handleLoginClose} open={showAuth} />
    </div>
}