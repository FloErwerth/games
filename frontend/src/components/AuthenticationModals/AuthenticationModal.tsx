import {useCallback, useMemo, useState} from "react";
import {Modal} from "../Modal/Modal";
import {Button, Link, TextField} from "@mui/material";
import {addFirebaseUser, FirebaseError, getStoredUserData, login, register} from "../../firebase";
import "./authStyles.css";
import {useAppDispatch} from "../../store";
import {setIsLoggedIn, setUserId, setUserName} from "../../store/reducers/auth";

interface AuthenticationModalProps {
    open: boolean;
    onClose: () => void;
}

export const AuthenticationModal = ({open, onClose}: AuthenticationModalProps) => {
    const [showLogin, setShowLogin] = useState(true);
    const [localUserName, setLocalUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const dispatch = useAppDispatch();
    const switchText = useMemo(() => !showLogin ? "Du hast bereits einen Account? Hier einloggen" : "Kein Account? Hier klicken und registrieren", [showLogin])
    const buttonText = useMemo(() => showLogin ? "Einloggen" : "Registrieren", [showLogin])

    const handleSetAuth = useCallback((userId: string, loggedIn: boolean) => {
        getStoredUserData(userId).then((data) => {
            if(data && data.userName) {
                dispatch(setUserName(data.userName));
            }
        })
        dispatch(setUserId(userId))
        dispatch(setIsLoggedIn(loggedIn));
        onClose();
    }, [])

    const handleClick = useCallback(() => {
        if (email && password) {
            if (showLogin) {
                login(email, password).then((credential) => {
                    handleSetAuth(credential.user.uid, true);
                }).catch((e: FirebaseError) => console.log(e.code));
            } else {
                if (password === secondPassword && localUserName) {
                    register(email, password).then((credential) => {
                        handleSetAuth(credential.user.uid, true);
                        addFirebaseUser(credential.user.uid, { userName: localUserName });
                    }).catch((e: FirebaseError) => console.log(e.code));
                } else {
                    if(password !== secondPassword) {
                        console.log("password dont match");
                    } else if(!localUserName) {
                        console.log("no username");
                    }
                }
            }
        }
    }, [localUserName, email, password, secondPassword, showLogin]);

    const handleSwitchBetweenLoginAndRegister = useCallback(() => {
        setShowLogin(!showLogin);
    }, [showLogin])

    const secondPasswordClasses = useMemo(() => {
        return showLogin ? "auth-hide" : ""
    }, [showLogin])

    return <Modal headerText={buttonText} onClose={onClose} open={open}>
        <div className="auth-modal-wrapper">
            <div className="auth-buttons">
                {!showLogin && <TextField size="small" onChange={(e) => setLocalUserName(e.target.value)} label="Anzeigename" />}
                <TextField size="small" onChange={(e) => setEmail(e.target.value)} label="E-Mail" />
                <TextField size="small" onChange={(e) => setPassword(e.target.value)} label="Passwort" />
                <TextField className={secondPasswordClasses} size="small"
                           onChange={(e) => setSecondPassword(e.target.value)} label="Passwort wiederholen" />
            </div>

            <Button size="small" variant="outlined" onClick={handleClick}>{buttonText}</Button>
            <Link className="auth-register-link" underline="hover"
                  onClick={handleSwitchBetweenLoginAndRegister}>{switchText}</Link>
        </div>
    </Modal>
}