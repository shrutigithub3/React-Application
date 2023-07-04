import {
    AppBar,
    Toolbar,
    IconButton,
    Stack,
    Button,
    Box,
    Drawer,
    Card,
    CardMedia,
    CardActions,
    Grid,
    Typography,
    Badge,
  } from "@mui/material";
  import React, { useState } from "react";
  import "./style.css";
  import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
  import { addItem } from "../redux/BookRedux/Action";
  import { useDispatch } from "react-redux";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
  
  type Image = {
    id:number;
    url: string;
    alt: string;
    quantity: number;
  };
  
  export const Store1 = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(null);
    };
  
    const images: Image[] = [
      {
        id:1,
        url: "../1.jpg",
        alt: "unsplash image",
        quantity:1,
      
      },
      {
        id:2,
        url: "../2.jpg",
        alt: "unsplash image",
        quantity:1,
      
      },
      {
        id:3,
        url: "../3.jpg",
        alt: "unsplash image",
        quantity:1,
    
      },
      {
        id:4,
        url: "../4.jpg",
        alt: "unsplash image",
        quantity:1,
       
      },
      {
        id:5,
        url: "../5.jpg",
        alt: "unsplash image",
        quantity:1,
     
      },
      {
        id:6,
        url: "../6.jpg",
        alt: "unsplash image",
        quantity:1,
    
      },
      {
        id:7,
        url: "../7.jpg",
        alt: "unsplash image",
        quantity:1,
     
      },
      {
        id:8,
        url: "../8.jpg",
        alt: "unsplash image",
        quantity:1,
     
      },
      {
        id:9,
        url: "../9.jpg",
        alt: "unsplash image",
        quantity:1,
    
      },
      {
        id:10,
        url: "../10.jpg",
        alt: "unsplash image",
        quantity:1,
      
      },
      {
        id:11,
        url: "../11.jpg",
        alt: "unsplash image",
        quantity:1,
        
      },
      {
        id:12,
        url: "../12.jpg",
        alt: "unsplash image",
        quantity:1,
        
      },
    ];
    const Items = useSelector((state: any) => state.cart.items);
  
    console.log(Items);
    const dispatch = useDispatch();
  
    const handleClick1 = (image: any) => {
      setIsDrawerOpen(true);
      dispatch(addItem(image));
    };
    const handleChange = () => {
      setIsAddedToCart(true);
    };
    return (
      <>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <IconButton>
            <Typography>Cart</Typography>
            <AddShoppingCartIcon />
          </IconButton>
          <Stack className="cartStack" direction="row" spacing={1}>
            {Items.map((image: any) => {
              return (
                <Card className="maincard">
                  <CardMedia
                    className="cardmedia"
                    component="img"
                    height="200px"
                    width="200px"
                    image={image.url}
                    alt={image.alt}
                  />
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      endIcon={<AddShoppingCartIcon />}
                      onClick={() => handleChange}
                    >
                      Buy
                    </Button>
                    {isAddedToCart && (
                        <Stack>
                          <Typography variant="h2">Thankyou!!</Typography>
                        </Stack>
                      )}
                    <Button
                    variant="outlined"
                    color="primary"
                    >Quantity({image.quantity})</Button>
                   
                  </CardActions>
                </Card>
              );
            })}
          </Stack>
        </Drawer>
        <Grid container spacing={2} mt={2} ml={2}>
          <Grid item xs={3}>
            <Stack className="cartStack" direction="row"spacing={5}>
              {images.map((image: any) => {
                return (
                  <Card className="maincard">
                    <CardMedia
                      className="cardmedia"
                      component="img"
                      height="200px"
                      width="200px"
                      image={image.url}
                      alt={image.alt}
                    />
                    <CardActions>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        endIcon={<AddShoppingCartIcon />}
                        onClick={() => handleClick1(image)}
                      >
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </>
    );
  };
  