import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Avatar, Box, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from "notistack";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const UpdateCourseRow = ({setCourseLists, courseLists, courseList, index,StyledTableRow,StyledTableCell}) => {
    const {teacherName,  teacherEmail, imageURL,couseName,hours,price,  teachingArea, socialUrl, serial, _id} = courseList;
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [openForDelete, setOpenForDelete] = React.useState(false);
    const {user, token} = useContext(AuthContext);


    const handleClickOpen = (courseList) => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleClickOpenForDelete = () => {
      setOpenForDelete(true);
    };
  
    const handleCloseForDelete= () => {
      setOpenForDelete(false);
    };

    const [imageUrls, setImageURL] = useState(null);
    const [socialUrlUpdate, setSocialUrlUpdate]=useState();
    const [nameUpdate, setNameUpdate]=useState();
    const [priceUpdate, setPriceUpdate]=useState();
    const [courseNameUpdate, setCourseNameUpdate]=useState();
    const [hoursUpdate, setHoursUpdate]=useState();
    const [teachinAreaUpdate, setTeachigAreaUpdate]=useState();


const handleEdit =(courseList)=>{
  handleClickOpen()
  setNameUpdate(courseList?.teacherName);
  setSocialUrlUpdate(courseList?.socialUrl);
  setPriceUpdate(courseList?.price);
  setCourseNameUpdate(courseList?.couseName);
  setHoursUpdate(courseList?.hours);
  setTeachigAreaUpdate(courseList?.teachingArea);
}


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b349a25b12d1cf8ea35b3bbbf5e43501');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/courseUpdate/${id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                imageUrls,
                nameUpdate,
                priceUpdate,
                hoursUpdate,
                courseNameUpdate,
                teachinAreaUpdate,
                socialUrlUpdate
                

            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.result?.modifiedCount) {
                     setOpen(false);
                     enqueueSnackbar("Update Success", { variant: 'success' }); 


                    }
             });

            handleClose()

    }


    const handleDelete = (id) => {
       fetch(`http://localhost:5000/courseUpdate/${id}`,{
          method:'DELETE',
          headers: {
              'authorization': `Bearer ${token}`,
              'content-type': 'application/json'
          }
      })
      .then(res=>res.json())
      .then(data=> {
          console.log(data);
          if(data.deletedCount){
            setCourseLists(courseLists?.filter((item)=> item?._id !== id))
              enqueueSnackbar("Delete  Success", { variant: 'error' }); 

          }
      })

  }

    return (
        <>
     <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {teacherName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
         {teacherEmail}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {couseName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {price}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
      
        <Button   onClick={() => handleEdit(courseList)}>
        <EditIcon/>
        </Button>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        <Button  onClick={handleClickOpenForDelete} >
        <DeleteIcon sx={{color:'red' }} />
</Button>
        </StyledTableCell>
      
     
  
        </StyledTableRow>


        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>

<h6>        Now update <span style={{color:"blue"}}>{teacherName}'s</span> course details
</h6>
        
<div>
    <Box sx={{mt:5, pb:3}}>
    <TextField
          id="standard-helperText"
          label="Name"
          defaultValue={nameUpdate}
           onChange={(e)=>setNameUpdate(e.target.value)}
           variant="standard"
           sx={{ml:5, mb:5}}
        />
        <TextField
          id="standard-helperText"
          label="Price"
          defaultValue={priceUpdate}
          onChange={(e)=>setPriceUpdate(e.target.value)}
            variant="standard"
           sx={{ml:5,mb:5}}
        />

 

<TextField 
          id="standard-helperText"
          label="hours"
          defaultValue={hoursUpdate}
          onChange={(e)=>setHoursUpdate(e.target.value)}

           variant="standard"
           sx={{ml:5,mb:5}}
        />

<TextField
          id="standard-helperText"
          label="couseName"
          defaultValue={courseNameUpdate}
          onChange={(e)=>setCourseNameUpdate(e.target.value)}

           variant="standard"
           sx={{ml:5,mb:5}}
        />

<TextField
          id="standard-helperText"
          label="teachingArea"
          defaultValue={teachinAreaUpdate}
          onChange={(e)=>setTeachigAreaUpdate(e.target.value)}

           variant="standard"
           sx={{ml:5,mb:5}}
        />


<TextField
          id="standard-helperText"
          label="social url"
          defaultValue={socialUrlUpdate}
          onChange={(e)=>setSocialUrlUpdate(e.target.value)}

           variant="standard"
           sx={{ml:5,mb:5}}
        />

 


 



<Box sx={{display:'flex'}}>
<TextField   id="standard-helperText" type="file"
sx={{ml:5}}
 required onChange={handleImageUpload} />

{
  imageUrls ?  <Avatar  sx={{ml:5,mb:2,  width: 56, height: 56}}  alt="Remy Sharp" src={imageUrls} /> :
  <Avatar  sx={{ml:5,mb:2,  width: 56, height: 56}}  alt="Remy Sharp" src={imageURL} />
}
</Box>
    </Box>
</div>
         
        
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus  onClick={()=>handleUpdate(_id)}>
            Save
          </Button>
          <Button   color="secondary"  onClick={handleClose}>
            cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>

      <Dialog
        open={openForDelete}
        onClose={handleCloseForDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete ?
        </DialogTitle>
      
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseForDelete}>No</Button>
          <Button variant="contained"   onClick={()=>handleDelete(_id)} autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
        </>
    );
};

export default UpdateCourseRow;