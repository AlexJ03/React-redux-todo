import {grey, red} from "@mui/material/colors";

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
    width: {
        xs: "350px",
        sm: "500px",
        md: "700px"
    },
    height: "100px",
    border: `1px solid ${grey[400]}`,
    borderRadius: "10px",
    backgroundColor: "white",
    transition: "0.3s",
    cursor: "pointer",
    display: "flex",
    marginBottom: "10px",
    justifyContent: "space-between",
    alignItems: "center",
    px: {
        xs: "10px",
        sm: "15px",
        md: "25px"
    },
    "&:hover": {
        boxShadow: `3px 10px 10px 10px ${grey[300]}`,
        transform: "translate(0, -10px)",
        backgroundColor: grey[100]
    }
}

export const styles_group = {
    width: {
        xs: "370px",
        sm: "550px",
        md: "900px"
    },
    backgroundColor: red[500],
    borderRadius: "10px",
    color: "white",
    height: "100px",
    cursor: "pointer",
    transition: "0.3s",
    mx: "5px",
    "&:hover": {
        backgroundColor: red[400]
    }
}