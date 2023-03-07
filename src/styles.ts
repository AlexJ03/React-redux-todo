import { grey } from "@mui/material/colors";

export const styles_modal_auth = {
    position: 'absolute' as 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: "95%",
        sm: 500,
        md: 700
    },
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: "10px"
};

export const styles_modal_create_task = {
    position: 'absolute' as 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: "95%",
        sm: 500,
        md: 700
    },
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: "10px"
};

export const styles_modal_create_group = {
    position: 'absolute' as 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: "95%",
        sm: 500,
        md: 700
    },
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: "10px"
};

export const styles_task = {
    width: "500px",
    height: "100px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: grey[200],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: "10px"
}