import {Button} from "@mui/material";
import {TextFieldWithDelete} from "../TextFieldWithDelete/TextFieldWithDelete";
import {useCallback, useState} from "react";
import "./styles.css";

interface CreateRoomContentProps {
    onCancel: () => void;
}
export const CreateRoomContent = ({onCancel}: CreateRoomContentProps) => {
    const [name, setName]= useState("");

    const handleCreateRoom = useCallback(() => {
        alert("Raum erstellt");
    }, [])

    return <div>
        <TextFieldWithDelete className="room-modal-text-fields" size="small" label="Dein Name" setValue={setName} value={name} variant="outlined" />
        <div><Button onClick={handleCreateRoom}>Raum erstellen</Button><Button onClick={onCancel}>Abbrechen</Button></div>
    </div>
}