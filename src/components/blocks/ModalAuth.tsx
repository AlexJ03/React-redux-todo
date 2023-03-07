import {Box, Modal, Tabs, Tab, TextField, Button} from "@mui/material";
import React from "react";
import TabPanel from "./TabPanel";
import {styles_modal_auth} from "../../styles";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {closeModalAuth} from "../../features/ModalAuthSlice";
import {createUser, signIn} from "../../firebase";

const ModalAuth = () => {
    const modalAuth = useAppSelector(state => state.modalAuth);
    const dispatch = useAppDispatch();

    const [value, setValue] = React.useState(modalAuth.tab);

    React.useEffect(() => {
        setValue(modalAuth.tab)
    }, [modalAuth.tab]);

    const [dataUser, setDataUser] = React.useState({
        email: "",
        password: ""
    });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const register = async () => {
        const { email, password } = dataUser;

        if ((email.length > 0) && (password.length > 0)) {
            await createUser(email, password);
        } else {
            alert("Error register");
        }

        setDataUser({email: "", password: ""});
        dispatch(closeModalAuth());
    };

    const login = async () => {
        const { email, password } = dataUser;

        if ((email.length > 0) && (password.length > 0)) {
            await signIn(email, password);
        } else {
            alert("Error login");
        }

        setDataUser({email: "", password: ""});
        dispatch(closeModalAuth());
    };

    return (
        <Modal
            open={modalAuth.open}
            onClose={() => dispatch(closeModalAuth())}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles_modal_auth}>

                <Box sx={ { width: "100%" } }>

                    <Tabs textColor="primary" indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Регистрация" />
                        <Tab label="Вход" />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        <Box sx={ { display: { xs: "block", sm: "flex" }, justifyContent: "space-between", alignItems: "center" } }>
                            <TextField sx={ { width: "100%", margin: { xs: "0 0 5px 0", sm: "0 10px 0 0", md: "0 20px 0 0" } } } value={dataUser.email} onChange={(e) => setDataUser({...dataUser, email: e.target.value})} label="Email" variant="outlined" />
                            <TextField type="password" sx={ { width: "100%" } } value={dataUser.password} onChange={(e) => setDataUser({...dataUser, password: e.target.value})} label="Пароль" variant="outlined" />
                        </Box>

                        <Button variant="contained" sx={ { width: "100%", marginTop: "20px" } } onClick={register}>Зарегистрироваться</Button>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box sx={ { display: { xs: "block", sm: "flex" }, justifyContent: "space-between", alignItems: "center" } }>
                            <TextField sx={ { width: "100%", margin: { xs: "0 0 5px 0", sm: "0 10px 0 0", md: "0 20px 0 0" } } } value={dataUser.email} onChange={(e) => setDataUser({...dataUser, email: e.target.value})} label="Email" variant="outlined" />
                            <TextField type="password" sx={ { width: "100%" } } value={dataUser.password} onChange={(e) => setDataUser({...dataUser, password: e.target.value})} label="Пароль" variant="outlined" />
                        </Box>
                        <Button variant="contained" sx={ { width: "100%", marginTop: "20px" } } onClick={login}>Войти</Button>
                    </TabPanel>

                </Box>
            </Box>
        </Modal>
    )
}

export default ModalAuth;