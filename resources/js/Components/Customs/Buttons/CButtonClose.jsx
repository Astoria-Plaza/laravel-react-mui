import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const CButtonClose = ({
    size = "medium",
    variant = "text",
    color = "closeText",
    startIcon = <CloseIcon />,
    children = "Close",
    sx,
    ...props
}) => {
    return (
        <Button
            size={size}
            variant={variant}
            startIcon={startIcon}
            color={color}
            sx={{ m: 1, ...sx }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CButtonClose;
