import {Button} from "@mui/material";
import {useState} from "react";
import {TextFieldWithAdornment} from "../TextFieldWithAdornment/TextFieldWithAdornment";
import {ClickableDelteIcon} from "../ClickableIcons/ClickableDeleteIcon";

interface JoinRoomContent {
    onCancel: () => void;
}
export const JoinRoomContent = ({onCancel}: JoinRoomContent) => {
    const [name, setName]= useState("");
    const [raumId, setRaumId]= useState("");

    return <div className="join-room">
        <TextFieldWithAdornment Icon={<ClickableDelteIcon onClick={() => setName("")} />} className="room-modal-text-fields" size="small" label="Dein Name" setValue={setName} value={name} variant="outlined" />
        <TextFieldWithAdornment Icon={<ClickableDelteIcon onClick={() => setRaumId("")} />} className="room-modal-text-fields" size="small" label="Raum-ID" setValue={setRaumId} value={raumId} variant="outlined" />
        <Button onClick={onCancel}>Abbrechen</Button>
    </div>
}