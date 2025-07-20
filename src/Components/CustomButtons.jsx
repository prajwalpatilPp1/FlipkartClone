import { styled } from "@mui/material"
import { Box, Button, Typography } from "@mui/material";
import {ShoppingCart} from '@mui/icons-material';
const Container = styled(Box)`
    display: flex;
`
const Wrapper = styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > Button ,& > p, & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
}

`
const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #FFFFFF;
    Transition: none;
    border-radius: 2px;
    box-shadow: none;
    text-transform: none;
    font-weight: bold;
    height: 32px;
    padding: 5p 50px;

`
const CustomButtons= ()=> {

   return (
    <Wrapper >
                    <LoginButton variant="contained" >Login</LoginButton>

                    <Typography style={{marginTop:3,width:135 }}>Become a seller</Typography>
                    <Typography style={{marginTop:3,with:135}}>More</Typography>

                    <Container>
                        <ShoppingCart />
                        <Typography>Cart</Typography>
                    </Container>
    </Wrapper>
   );
}

export default CustomButtons;