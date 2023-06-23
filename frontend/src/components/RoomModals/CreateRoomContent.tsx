import {Button} from "@mui/material";
import {TextFieldWithAdornment} from "../TextFieldWithAdornment/TextFieldWithAdornment";
import {useCallback, useState} from "react";
import "./styles.css";
import {ClickableDelteIcon} from "../ClickableIcons/ClickableDeleteIcon";

interface CreateRoomContentProps {
    onCancel: () => void;
}
export const CreateRoomContent = ({onCancel}: CreateRoomContentProps) => {
    const [name, setName]= useState("");

    const handleCreateRoom = useCallback(() => {
        alert("Raum erstellt");
    }, [])

    return <div>
        <TextFieldWithAdornment Icon={<ClickableDelteIcon onClick={() => setName("")}/>} className="room-modal-text-fields" size="small" label="Dein Name" setValue={setName} value={name} variant="outlined" />
        <div><Button onClick={handleCreateRoom}>Raum erstellen</Button><Button onClick={onCancel}>Abbrechen</Button></div>
    </div>
}