import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import Switch from '@mui/material/Switch';

// Importing 7-1 architechture sass files on main.scss
import '../SASS/main.scss';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const DetailPage = () => {
  return (

            <Box sx={{ flexGrow: 1 }}>

                <Grid className ='grid grid--container-grey'>

                    <Grid container className ='grid--container-white'>

                        <Stack className="main-container" spacing={3} direction='column'>

                            <Stack spacing={1} direction='column' className="heading" >
                                <div className='heading main--title-blue'>Basic Details</div>
                                <div className='heading sub--title-grey'>Adding Basic Details</div>
                            </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row1">
                                    <Stack spacing={1} direction="row" className="textfield-container row1--textfields-left">
                                        <TextField className='textfield__status textfield--outlined-primary small-textfield' id="outlined-basic" select label="Status" size='small' color='primary' fullWidth autoFocus/>  
                                        <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary medium1-textfield' required label="First Name" size='small' autoFocus variant="outlined" />
                                    </Stack>
                                    <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary large-textfield' required label="Last Name" size='small'  autoFocus variant="outlined" />
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row2">
                                    <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary large-textfield' label="Other Name" size='small' autoFocus variant="outlined" />
                                    <TextField className='textfield__status textfield--outlined-primary large-textfield' id="outlined-basic" select label="Gender" size='small' color='primary' required fullWidth autoFocus/>  
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row3">
                                    <TextField InputLabelProps={{ shrink: true }} className='textfield--outlined-primary large-textfield' required fullWidth label='Date of Birth' type="date" variant="outlined" size="small" />
                                    <TextField className='textfield__status textfield--outlined-primary large-textfield' id="outlined-basic" select label="Civil Status" size='small' color='primary' required fullWidth autoFocus/>
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row4">
                                    <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary large-textfield' required label="Language" size='small' autoFocus variant="outlined" />
                                    <TextField className='textfield__status textfield--outlined-primary large-textfield' id="outlined-basic" select label="Nationality" size='small' color='primary' required fullWidth autoFocus/>
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row1">
                                    <Stack spacing={1} direction="row" className="textfield-container row1--textfields-left">
                                        <TextField className='textfield__status textfield--outlined-primary small-textfield' id="outlined-basic" select label="Type" size='small' color='primary' fullWidth autoFocus/> 
                                        <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary medium2-textfield' required label="Identification Number" size='small' autoFocus variant="outlined" />
                                        <div className='notes--create-buttonRow'>
                                            <Button className="add-button" variant='outlined' size='large'> <AddIcon/> </Button>
                                        </div>
                                    </Stack>
                                </Stack>

                        </Stack>

                        <div className="seperator--line-grey"><hr/></div>

                        <Stack className="main-container" spacing={3} direction='column'>

                            <Stack spacing={1} direction='column' className="heading" >
                                <div className='heading main--title-blue'>Contact Details</div>
                                <div className='heading sub--title-grey'>Adding Contact Details</div>
                            </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row1">
                                    <Stack spacing={1} direction="row" className="textfield-container row1--textfields-left">
                                        <TextField className='textfield__status textfield--outlined-primary small-textfield' id="outlined-basic" select label="Type" size='small' color='primary' fullWidth autoFocus/> 
                                        <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary medium2-textfield' required label="Email" size='small' autoFocus variant="outlined" />
                                        <div className='notes--create-buttonRow'>
                                            <Button className="add-button" variant='outlined' size='large'> <AddIcon/> </Button>
                                        </div>
                                    </Stack>
                                    <Stack spacing={1} direction="row" className="textfield-container row1--textfields-left">
                                        <TextField className='textfield__status textfield--outlined-primary small-textfield' id="outlined-basic" select label="Type" size='small' color='primary' fullWidth autoFocus/> 
                                        <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary medium2-textfield' required label="Contact Number" size='small' autoFocus variant="outlined" />
                                        <div className='notes--create-buttonRow'>
                                            <Button className="add-button" variant='outlined' size='large'> <AddIcon/> </Button>
                                        </div>
                                    </Stack>
                                </Stack>

                                <Stack spacing={1} direction="row" className='address--button-box'>
                                    <Button variant="outlined" className='address--button-grey'><div className="address--button-text">ADD ADDRESS +</div></Button>
                                </Stack>

                        </Stack>

                        <div className="seperator--line-grey"><hr/></div>

                        <Stack className="main-container" spacing={3} direction='column'>

                            <Stack spacing={1} direction='column' className="heading" >
                                <div className='heading main--title-blue'>Other Details</div>
                                <div className='heading sub--title-grey'>Adding Other Details</div>
                            </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row2">
                                    <Stack spacing={4} direction='row' className='switch--action'>
                                        <FormGroup>
                                            <FormControlLabel control={<Switch defaultChecked />} label="System User" />
                                        </FormGroup>
                                    </Stack>
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row2">
                                    <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary large-textfield' required label="Employee Number" size='small' autoFocus variant="outlined" />
                                    <TextField className='textfield__status textfield--outlined-primary large-textfield' id="outlined-basic" select label="Emmployee Category" size='small' color='primary' required fullWidth autoFocus/>
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row2">
                                    <TextField className='textfield__status textfield--outlined-primary large-textfield' id="outlined-basic" select label="Department" size='small' color='primary' required fullWidth autoFocus/>
                                    <Stack spacing={4} direction='row'>
                                        <FormGroup>
                                            <FormControlLabel control={<Switch defaultChecked />} label="Action" />
                                        </FormGroup>
                                    </Stack>
                                </Stack>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row2">
                                    <TextField id="outlined-basic" color='primary' className='textfield--outlined-primary large-textfield' required label="Designation" size='small' autoFocus variant="outlined" />
                                    <TextField className='textfield__status textfield--outlined-primary large-textfield' id="outlined-basic" select label="Line Manager" size='small' color='primary' required fullWidth autoFocus/>
                                </Stack>

                        </Stack>

                        <div className="seperator--line-grey"><hr/></div>

                        <Stack className="main-container" spacing={3} direction='column'>

                            <Stack spacing={1} direction='column' className="heading" >
                                <div className='heading main--title-blue'>Additional Details</div>
                                <div className='heading sub--title-grey'>Adding Additional Details</div>
                            </Stack>

                                <Grid container spacing={2} className='upload--container-main'>
                                    <Grid className='upload--container-grey' xs={6}>
                                        <Stack spacing={0} direction='row' className="heading" >
                                            <div className="upload_logo">
                                                <UploadIcon className='upload--icon' fontSize='large'/>
                                            </div>
                                            <Stack spacing={0} direction='column' className='upload-section'>
                                                <div className='upload-section upload--title-main'>Chosse file to upload Photos</div>
                                                <div className='upload-section upload--title-sub'>Or drag and drop them here</div>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} className='upload--container-main'>
                                    <Grid className='upload--container-grey' xs={6}>
                                        <Stack spacing={0} direction='row' className="heading" >
                                            <div className="upload_logo">
                                                <UploadIcon className='upload--icon' fontSize='large'/>
                                            </div>
                                            <Stack spacing={0} direction='column' className='upload-section'>
                                                <div className='upload-section upload--title-main'>Chosse file to upload Photos</div>
                                                <div className='upload-section upload--title-sub'>Or drag and drop them here</div>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Stack spacing={15} direction="row" className="textfield-container base--textfields-row2">
                                    <TextField InputLabelProps={{ shrink: true }} className='textfield--outlined-primary large-textfield' required fullWidth label='Date of Birth' type="date" variant="outlined" size="small" />
                                </Stack>

                        </Stack>

                        <div className="seperator--line-grey"><hr/></div>

                        <Stack className="main-container" spacing={3} direction='column'>
                            <Stack spacing={2} className='button--group' direction="row">
                                <Button variant="contained" className='button--group-cancel'>CANCEL</Button>
                                <Button variant="contained" className='button--group-save'>SAVE</Button>
                            </Stack>
                        </Stack>

                    </Grid>

                </Grid>
            
            </Box>

  )
}
