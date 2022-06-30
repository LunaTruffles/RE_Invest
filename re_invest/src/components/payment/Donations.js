import React, {useState} from 'react'
import StripeContainer from './StripeContainer'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Donations() {
    const [showItem, setShowItem ] = useState(false)

  return (
    <Box     
    display="flex" 
    alignItems="center"
    justifyContent="center"
    >
        {showItem ? 
          <Box 
            sx={{
              width: 350
            }}>
              <StripeContainer />
          </Box>
        : <> 
        <Box 
          sx={{
            width: 160
          }}>
        <Button 
        variant="contained"  
        sx={{ marginTop: 2, marginBottom: 2, width: 160 }}
        disabled>$10.00</Button>
        <br></br>  <br></br> 
        <img src="https://media.giphy.com/media/ovW7ypiJI8Ypy/giphy.gif" alt='MONEY PLEEEEEEEEEEEASE'/> 
        <Button 
        onClick={() => setShowItem(true)} 
        variant="contained" 
        color="success" 
        type='submit'
        sx={{ marginTop: 2, marginBottom: 2, width: 160 }} 
                >Give Sam Money</Button> 
        </Box>
        </>}
    </Box>

  )
}
