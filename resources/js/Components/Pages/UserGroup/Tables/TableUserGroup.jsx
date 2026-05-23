import { CDataGrid } from "@/Components";

const TableUserGroup = ({ flash, errors, search }) => {
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "code", headerName: "Code", width: 200 },
        { field: "description", headerName: "Description", width: 300 },
    ];

    return (
        <CDataGrid
            url="/user-groups"
            columns={columns}
            queryParams={{ search }}
        />
    );
};

export default TableUserGroup;
