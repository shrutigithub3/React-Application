import {  AppBar,  Toolbar ,IconButton, Typography ,Stack,Button,Menu,MenuItem,Drawer,Box,Card,CardMedia,CardActions,Grid,Paper,Link} from '@mui/material'
import Container from "@mui/material/Container";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
export const Footer = () => {
return(
    <Paper  sx={{ marginTop: 5, bottom: 0 }} component="footer" square variant="outlined">
              <Container maxWidth="lg">
                  <Box
                      sx={{
                          flexGrow: 1,
                          justifyContent: "center",
                          display: "flex",
                          my:1
                         
                      }}
                  >
                  </Box>

                  <Box
                      sx={{
                          flexGrow: 1,
                          justifyContent: "center",
                          display: "flex",
                          mb:1
                      }}
                  >
                      <Typography variant="caption" color="inherit">
                          Copyright ©2023. [] Limited
                      </Typography>
                  </Box>
                 
              </Container>
          </Paper>
  )}