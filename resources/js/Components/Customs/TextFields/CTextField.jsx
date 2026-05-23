import TextField from "@mui/material/TextField";

const CTextField = ({ children, ...props }) => (
    <TextField fullWidth size="small" variant="outlined" color="textField" {...props}>
        {children}
    </TextField>
);

export default CTextField;
