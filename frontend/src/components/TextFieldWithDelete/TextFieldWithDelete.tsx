import {Dispatch, useCallback} from "react";
import {IconButton, TextField, TextFieldProps} from "@mui/material";
import {Close} from "@mui/icons-material";
import "./styles.css";


interface ClickableDeleteIconProps {
    onClick: () => void;
}
const ClickableDelteIcon = ({onClick}: ClickableDeleteIconProps) => {
    return <IconButton onClick={onClick}><Close/></IconButton>
}

interface TextFieldWithDeleteProps extends TextFieldProps<"outlined"> {
    setValue: Dispatch<React.SetStateAction<string>>
}

export const TextFieldWithDelete = (props: TextFieldWithDeleteProps) => {
    const handleOnClick = useCallback(() => {
        props.setValue("");
    }, [props.setValue])

    return <TextField className="textfield" {...props} onChange={(e) => props.setValue(e.target.value)} InputProps={{endAdornment: <ClickableDelteIcon onClick={handleOnClick} />}}></TextField>
}