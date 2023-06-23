import {Dialog, IconButton} from "@mui/material";
import {Cancel} from "@mui/icons-material";
import "./styles.css";
import {PropsWithChildren} from "react";

interface ModalProps extends PropsWithChildren {
    open: boolean;
    onClose: () => void;
    headerText?: string;
}
export const Modal = ({open, onClose, children, headerText}: ModalProps) => {
    return <Dialog open={open}>
        <div className="modal-wrapper">
            <div className="modal-header"><div>{headerText}</div><IconButton onClick={onClose}><Cancel /></IconButton></div>
            {children}</div>
    </Dialog>
}