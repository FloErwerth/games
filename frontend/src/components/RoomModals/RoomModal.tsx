import {Button} from "@mui/material";
import {useState} from "react";
import {CreateRoomContent} from "./CreateRoomContent";
import {JoinRoomContent} from "./JoinRoomContent";
import "./styles.css";
import {Modal} from "../Modal/Modal";

interface RoomModalProps {
    open: boolean;
    onClose: () => void;
}
const ModalContent = () => {
    const [createRoom, setCreateRoom]= useState<boolean | undefined>(undefined);
    if(createRoom === undefined) {
        return <div><p>Bitte wähle, ob Du einen <b>Raum erstellen</b> oder einem <b>Raum beitreten</b> möchtest</p>
        <div>
            <Button onClick={() => setCreateRoom(true)}>Raum erstellen</Button>
            <Button onClick={() => setCreateRoom(false)}>Raum beitreten</Button></div>
        </div>
    } else if(createRoom) {
        return <CreateRoomContent onCancel={() => setCreateRoom(undefined)}/>
    } else {
        return <JoinRoomContent onCancel={() => setCreateRoom(undefined)}/>
    }
}

export const RoomModal = ({open, onClose}: RoomModalProps) => {
    return <Modal open={open} onClose={onClose} headerText="Spieleraum">
            <ModalContent />
    </Modal>
}