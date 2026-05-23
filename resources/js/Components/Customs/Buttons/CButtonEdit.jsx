import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const CButtonEdit = ({
    size = "medium",
    variant = "contained",
    startIcon = <EditIcon />,
    children = "Edit",
    sx,
    ...props
}) => {
    return (
        <Button
            size={size}
            variant={variant}
            startIcon={startIcon}
            sx={{ m: 1, ...sx }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CButtonEdit;
