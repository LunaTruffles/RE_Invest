import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProperty, editProperty } from '../redux/actions'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { defaultMarker } from "./map/marker";
import { popupContent, popupText } from "./map/popup";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import KeyIcon from '@mui/icons-material/Key';
import Popover from '@mui/material/Popover';
import '../css/App.css';



const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function Property(props) {
  const { property } = props;
  const [editMode, setEditMode] = useState(false)
  const [deal, setDeal] = useState(property.deal)
  const [latitude] = useState(property.latitude)
  const [longitude] = useState(property.longitude)
  const [anchorEl, setAnchorEl] = useState('');
  const center = [latitude, longitude];

  const dispatch = useDispatch()

  const capRate = ((deal.income / deal.price) * 100).toFixed(2)
  const perSf = (deal.price / deal.sf).toFixed(2)
  const perUnit = (deal.price / deal.units).toFixed(2)
  const eCapRate = ((deal.exitIncome / deal.exitPrice) * 100).toFixed(2)
  const ePerSf = (deal.exitPrice / deal.exitSf).toFixed(2)
  const ePerUnit = (deal.exitPrice / deal.exitUnits).toFixed(2)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  const deleteItem = (id) => {
    dispatch(deleteProperty(id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editProperty(property.id, deal.plan))
    setEditMode(false)
  }

  return (
    <Box     
    display="flex" 
    alignItems="center"
    justifyContent="center"
    >
        <Box 
        sx={{
          width: 300
        }}>
        <Box key={property.id} sx={{ 
          paddingTop:7, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',}}>
          <Box sx = {{height: 175, width: 300 }}>
          <MapContainer style={{ width: "300px", height: "175px" }} center={center} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} icon={defaultMarker}>
            <Popup className="request-popup">
              <div style={popupContent}>
                <span style={popupText}>
                {deal.address}, {deal.zipcode} 
                </span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
          </Box>
            <Card sx={{ width: 300 }}> 
             <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="property">
                <CorporateFareIcon fontSize='medium' />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
              </IconButton>
            }
            title={deal.name}
            // subheader={DATEEEEEEEEE (needs to be added)}
          />
        <CardContent>
          <Grid container>
            <Grid item xs >
              {deal.address}
              <br></br>
              {deal.city}, {deal.usState}, {deal.zipcode}
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item xs sx={{ paddingLeft:2 }}>
              {deal.propertyType}
              <br></br>
              Size: {deal.sf}sf
              <br></br>
              Unit(s): {deal.units}
            </Grid>
          </Grid>
        <TableContainer sx={{ width: 270 }}>
          <Table aria-label="spanning table">
            <TableBody>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>${deal.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Income (NOI)</TableCell>
                  <TableCell>${deal.income}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cap Rate                    
                    <KeyIcon
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    />
                    <Popover
                    id="mouse-over-popover"
                    sx={{
                    pointerEvents: 'none',
                    width: 490
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                    >
                    <Typography variant="caption" sx={{ p: 1 }}>
                    Capitalization Rate
                    <br></br>
                    This measure is computed based on the net income which the property is expected to generate and is calculated by dividing net operating income by property asset value and is expressed as a percentage. It is used to estimate the investor's potential return on their investment in the real estate market.
                    </Typography>
                    </Popover></TableCell>
                  <TableCell>{capRate}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$/sf</TableCell>
                  <TableCell>${perSf}/sf</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$/Unit</TableCell>
                  <TableCell>${perUnit}/unit</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>    
    
        <br></br>
    
        <Typography variant="h6" gutterBottom component="div" sx={{ paddingLeft:10.5 }}>
            Exit Plan
          </Typography>

          <Grid container>
            <Grid item xs sx={{ paddingLeft:2 }} >
            Size: {deal.exiSf}sf
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item xs sx={{ paddingLeft:2 }}>
              Unit(s): {deal.exitUnits}
            </Grid>
          </Grid>
    
        <TableContainer sx={{ width: 250 }}>
          <Table aria-label="spanning table">
            <TableBody>
                <TableRow>
                  <TableCell>Exit price </TableCell>
                  <TableCell>${deal.exitPrice}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> Exit (NOI)</TableCell>
                  <TableCell>${deal.exitIncome}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Exit Cap</TableCell>
                  <TableCell>{eCapRate}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Exit $/sf</TableCell>
                  <TableCell>${ePerSf}/sf</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Exit $/Unit</TableCell>
                  <TableCell>${ePerUnit}/unit</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br></br>
        <Typography variant="body2" gutterBottom sx={{ paddingLeft:2} }>
            Plan: {deal.plan}
          </Typography>
          <br></br>
    
          
            { editMode ? (
            <div>
              <form onSubmit={handleSubmit}>
              <FormControl fullWidth sx={{ mx: 'auto', width: 245, p: 1.65,  m: 0 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Plan of Execution</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={deal.plan} 
                        onChange={e => setDeal({...deal, plan: e.target.value})} 
                        variant="outlined"
                        startAdornment={<InputAdornment position="start"> </InputAdornment>}
                        label="Plan"
                        type="text" 
                        multiline
                        rows={4}
                    />
                </FormControl>
                <Box sx={{ paddingLeft:14 }}>
                  <button>💾</button>
                </Box>
              </form>
            </div>
          ) : (
            <Box sx={{ paddingLeft:12 }}>
              {property.plan}
              <button onClick={() => setEditMode(true)}>✏️</button>
              <button onClick={() => deleteItem(property.id)}>🗑</button>
              </Box>
          )}
          
            </CardContent>
          </Card>
        </Box>
      </Box>
  </Box>
  )
}

 