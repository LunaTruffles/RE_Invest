import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProperty } from '../redux/actions'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01a2cf43cemsh944b37fc43d030ap17586ajsn7ce2e2c8c6d5',
		'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
	}
};

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default function InputDeal() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [deal, setDeal] = useState({})
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
   await fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${deal.address}%2C%20${deal.city}%2C%20${deal.usState}&language=en`, options)
  .then(response => response.json())
  .then(response => {
    setLatitude( response.results[0].geometry.location.lat)
    setLongitude (response.results[0].geometry.location.lng)
    });
     if (latitude !== 0 && longitude !== 0){
    dispatch(addProperty(deal, latitude, longitude))
     }

  }

  return (
    <Box     
    display="flex" 
    alignItems="center"
    justifyContent="center"
    >
    <Box sx={{ maxWidth: 320, marginTop: 7 }}  >

        <form noValidate autoComplete="off" onSubmit={handleSubmit}> 

            <ColorButton variant="contained" sx={{ marginTop: 2, marginBottom: 2, width: 320 }} disabled>
            - Input your deal -
            </ColorButton>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.name} 
                    onChange={e => setDeal({...deal, name: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="Name"
                    type="text" 
                />
            </FormControl>   

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Property Type</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.propertyType} 
                    onChange={e => setDeal({...deal, propertyType: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="Property Type"
                    type="text" 
                />
            </FormControl>   

            <br></br>
            
            <FormControl fullWidth sx={{ mx: 'auto', width: 280, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Address</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.address} 
                    onChange={e => setDeal({...deal, address: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="Address"
                    type="text" 
                />
            </FormControl>  

            <br></br>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">City</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.city} 
                    onChange={e => setDeal({...deal, city: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="City"
                    type="text" 
                />
            </FormControl>        

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">US State</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.usState} 
                    onChange={e => setDeal({...deal, usState: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="US State"
                    type="text" 
                />
            </FormControl>                  

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Zipcode</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.zipcode} 
                    onChange={e => setDeal({...deal, zipcode: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="Zipcode"
                    type="number" 
                />
            </FormControl>                    

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.price} 
                    onChange={e => setDeal({...deal, price: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Price"
                    type="number" 
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Income</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.income} 
                    onChange={e => setDeal({...deal, income: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Income"
                    type="number"  
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">SF</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.sf} 
                    onChange={e => setDeal({...deal, sf: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                    endAdornment={<InputAdornment position="end">sf</InputAdornment>}
                    label="SF"
                    type="number"  
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Units</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.units} 
                    onChange={e => setDeal({...deal, units: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                    endAdornment={<InputAdornment position="end">units</InputAdornment>}
                    label="Units"
                    type="number" 
                />
            </FormControl>

            <ColorButton variant="contained" sx={{ marginTop: 2, marginBottom: 2, width: 320 }} disabled>
            - Exit Plan -
            </ColorButton>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Exit Price</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.exitPrice} 
                    onChange={e => setDeal({...deal, exitPrice: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Exit Price"
                    type="number" 
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Exit Income</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.exitIncome} 
                    onChange={e => setDeal({...deal, exitIncome: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Exit Income"
                    type="number" 
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Exit SF</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.exitSf} 
                    onChange={e => setDeal({...deal, exitSf: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                    endAdornment={<InputAdornment position="end">sf</InputAdornment>}
                    label="Exit SF"
                    type="number" 
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 130, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Exit Units</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.exitUnits} 
                    onChange={e => setDeal({...deal, exitUnits: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                    endAdornment={<InputAdornment position="end">units</InputAdornment>}
                    label="Exit Units"
                    type="number" 
                />
            </FormControl>

            <FormControl fullWidth sx={{ mx: 'auto', width: 275, p: 1.65,  m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Plan of Execution</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={deal.plan} 
                    onChange={e => setDeal({...deal, plan: e.target.value})}
                    variant="outlined"
                    startAdornment={<InputAdornment position="start"> </InputAdornment>}
                    endAdornment={<InputAdornment position="end"></InputAdornment>}
                    label="Plan"
                    type="text" 
                    multiline
                    rows={4}
                />
            </FormControl>


            <br></br>
                <Button 
                variant="contained" 
                color="success" 
                type='submit'
                sx={{ marginTop: 2, marginBottom: 2, width: 320 }} 
                >
                    Add
                </Button>
        </form>
    </Box>
    </Box>
  )
}
