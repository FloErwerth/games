import {Button} from "@mui/material";
import {useState} from "react";
import {TextFieldWithDelete} from "../TextFieldWithDelete/TextFieldWithDelete";

interface JoinRoomContent {
    onCancel: () => void;
}
export const JoinRoomContent = ({onCancel}: JoinRoomContent) => {
    const [name, setName]= useState("");
    const [raumId, setRaumId]= useState("");

    return <div className="join-room">
        <TextFieldWithDelete className="room-modal-text-fields" size="small" label="Dein Name" setValue={setName} value={name} variant="outlined" />
        <TextFieldWithDelete className="room-modal-text-fields" size="small" label="Raum-ID" setValue={setRaumId} value={raumId} variant="outlined" />
        <Button onClick={onCancel}>Abbrechen</Button>
    </div>
}