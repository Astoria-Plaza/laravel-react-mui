import { CContainer, CBoxContent } from "@/Components";
import { Typography, Alert } from "@mui/material";
import { CButtonAdd } from "@/Components";
import AddUserGroup from "./Actions/AddUserGroup";
import AlertTransaction from "@/Components/Utilities/AlertTransaction";

const UserGroupContent = ({ flash, errors }) => {
    return (
        <CBoxContent>
            <Typography variant="h4" gutterBottom>
                User Group Content
                <AddUserGroup sx={{ ml: 2 }} flash={flash} errors={errors} />
            </Typography>

            {/* Display flash messages if they exist */}
            {flash && <AlertTransaction flash={flash} />}

            <Typography variant="body1">
                This is the content area for User Groups. You can add forms,
                tables, or any other components related to user group management
                here.
            </Typography>
        </CBoxContent>
    );
};

export default UserGroupContent;
