import React, { useCallback, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./style.css";

import { useAppDispatch } from "../../store";
import { setUserName } from "../../store/reducers/auth";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const [name, setName] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSetName = useCallback((value: string) => {
        if (name.length < 15) {
            setName(value);
        }
    }, []);

    const handleConfirmName = useCallback(() => {
        if (name.length > 0) {
            dispatch(setUserName(name));
            navigate("/generalTopic");
        }
    }, [name]);

    return (
        <>
            <h1>50 Fragen Online</h1>
            <div>Hier kannst Du Fragen beantworten, die auch den Jungs von Pietsmiet gestellt wurden</div>
            <p>Um zu beginnen brauchen wir einen Spitznamen von Dir</p>
            <TextField size="small" placeholder="Dein Spitzname" onChange={(e) => handleSetName(e.target.value)} />
            <Button onClick={handleConfirmName}>Spitznamen bestätigen</Button>
        </>
    );
};
