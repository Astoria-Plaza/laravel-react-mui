import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

const CButtonSubmit = ({
    size = "medium",
    variant = "contained",
    loadingPosition = "start",
    startIcon = <SaveIcon />,
    children = "Save",
    sx,
    ...props
}) => {
    return (
        <Button
            type="submit"
            size={size}
            variant={variant}
            startIcon={startIcon}
            loadingPosition={loadingPosition}
            sx={{ m: 1, ...sx }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CButtonSubmit;
