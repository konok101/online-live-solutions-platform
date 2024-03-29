import React, { useContext, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Grid , Alert} from "@mui/material";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

const MathModal = ({ openModal, handleModalClose, setRegSuccess }) => {
    const {user} = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    
    const [patientInfo, setpatientInfo] = useState();

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...patientInfo };
        newInfo[field] = value;
        setpatientInfo(newInfo);
    }

    const handlePatientSubmit = e => {

        // collect data
        const patientSubmit = {
            ...patientInfo,
        }
        // send to the server
        fetch('http://localhost:5000/courseSubmit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(patientSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    setSuccess(true);
                    handleModalClose();
                }
            });
        e.preventDefault();
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" style={{ textAlign: 'center' }} sx={{ m: 2 }} variant="h6" component="h2">
                            Online Tutor 
                        </Typography>
                        <Typography id="transition-modal-title" style={{ textAlign: 'center' }} sx={{ m: 2 }} variant="h6" component="h2">
                        Payment System <br/> Bkash: 01829832457 
                        </Typography>
                        
                        <form onSubmit={handlePatientSubmit}>
                            <TextField
                                id="outlined-required"
                                sx={{ width: '90%', m: 1 }}
                                label="Your Name"
                                name='Name'
                                onBlur={handleOnBlur}
                               
                                variant="outlined"
                                required
                            />


                            <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="Email"
                                name='email'
                                onBlur={handleOnBlur}
                                variant="outlined"
                                
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="Phone number"
                                name='phnNumber'
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                sx={{ width: '90%', m: 1 }}
                                label="TrxID"
                                name='TrxID'
                                required
                                onBlur={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-disabled"
                                sx={{ width: '90%', m: 1 }}
                                label="class"
                                type='class'
                                name='class'
                                onBlur={handleOnBlur}
                                // defaultValue={user.email}
                                variant="outlined"
                                required
                            />
                            <TextField
                                id="outlined-disabled"
                                sx={{ width: '90%', m: 1 }}
                                label="institution"
                                type='institution'
                                name='institution'
                                onBlur={handleOnBlur}
                                // defaultValue={user.email}
                                variant="outlined"
                                required
                            />
                            <Grid container justifyContent="center">
                                <Button type='submit' variant="contained"
                                    sx={{ m: 2 }}
                                    style={{ width: '8vw', backgroundColor: 'green', borderRadius: '5px' }}
                                >
                                    Submit</Button>
                            </Grid>

                        </form>
                        {success && <Alert severity="success"  >Add Event successfully!!! </Alert>}
                        <br></br>

                    </Box>
                </Fade>
            </Modal>
        </>
    );
};



export default MathModal;