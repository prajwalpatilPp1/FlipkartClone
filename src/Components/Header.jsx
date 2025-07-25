import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { Box, Button } from '@mui/material';
import Search from './Search';
                    
import CustomButtons from './CustomButtons';
  
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
   margin-left: 12%;
   font-style: italic;
   line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
`;

const PlusImage = styled('img')({
    width: 10,
    marginLeft: 4,
    height: 10,
})




const CustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;
`
function Header() {
    const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";


    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png'
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component >
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" color='#FFE500'>Plus</Box>
                        </SubHeading>

                        <PlusImage src={subURL} alt="" />
                    </Box>

                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
                
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;
