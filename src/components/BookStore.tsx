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
  Divider,
  CardContent,
  Paper,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addItem, removeFromCart } from "../redux/BookRedux/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Footer } from "./Footer";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type Image = {
  id: number;
  url: string;
  alt: string;
  quantity: number;
  price: number;
};

export const BookStore = () => {
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
      id: 1,
      url: "../1.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 2,
      url: "../2.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 3,
      url: "../3.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 4,
      url: "../4.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 5,
      url: "../5.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 6,
      url: "../6.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 7,
      url: "../7.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 8,
      url: "../8.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 9,
      url: "../9.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 10,
      url: "../10.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 11,
      url: "../11.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
    {
      id: 12,
      url: "../12.jpg",
      alt: "unsplash image",
      quantity: 1,
      price: 100,
    },
  ];
  const Items = useSelector((state: any) => state.cart.items);
  const Count = useSelector((state: any) => state.cart.count);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  const items = useSelector((state: any) => state.items);

  console.log(Items);
  const dispatch = useDispatch();

  const handleClick1 = (image: any) => {
    setIsDrawerOpen(true);
    dispatch(addItem(image));
  };
  const handleChange = () => {
    setIsDrawerOpen(true);
    setIsAddedToCart(true);
    {
      isAddedToCart && (
        <Stack>
          <Typography variant="h2">Thankyou!!</Typography>
        </Stack>
      );
    }
  };
  const handleClose1 = () => {
    setIsDrawerOpen(false);
  };
  const handleClick2 = (image: any) => {
    dispatch(removeFromCart(image));
  };

  return (
    <>
    <div id="wrapper">
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Stack className="header" direction="row">
          <IconButton>
            <Typography variant="h5" className="title">Items</Typography>
            <AddShoppingCartIcon />
            <Badge badgeContent={(Count)}></Badge>
          </IconButton>
          <IconButton onClick={handleClose1} >
            <CloseIcon/>
            </IconButton>
          </Stack>
      
          <div id="inner_child1">
          <Stack spacing={2} mt={1} ml={1}>
            {Items.map((image: any) => {
              return (
                <>

          <Card className="list">
            <CardMedia
              className="cardlist"
              component="img"
              image={image.url}
              alt={image.alt}
            />
            <CardContent className="product-profile-data">
              <Typography className="data1">Book</Typography>
              <Typography className="data2">Comic Book</Typography>
              <Typography className="data3">$100</Typography>

              <ul className="ul1">
                <li className="li1">
                  <Typography className="btn" onClick={() => handleClick2(image)}>
                      Remove
                  
                  </Typography>
                </li>
              </ul>
            </CardContent>
            <CardActions className="cardaction">
              <IconButton className="remove">
                <RemoveCircleOutlineIcon  />
              </IconButton>
              <Typography>{image.quantity}</Typography>
              <IconButton className="add">
                <AddCircleOutlineIcon />
              </IconButton>
            </CardActions>
          </Card>
                  
                  
                </>
              );
            })}
          </Stack></div>
          
          <div className="inner_child2">
          <div className="cart-total-body">
                    <ul className="cart-summary">
                      <li className="cart-summary-item">
                        <span className="label">Amount </span>
                        <span className="value">${totalPrice}</span>
                      </li>

                      <li className="cart-summary-item highlighted">
                        <span className="label">Net Payable</span>
                        <span className="value">${totalPrice}</span>
                      </li>
                    </ul>
                    
                    <Button className="button1" variant="contained" href="/Main/EndPage">Buy</Button>
                    {/* <Typography className="skbtn"><a className="a"href="/Main/EndPage">Buy</a></Typography> */}
                        </div></div>
          
      </Drawer>
      <Grid container spacing={1} mx={1} my={1}>
        <Grid item xs={3}>
          <Stack className="cartStack" ml={6}>
            {images.map((image: any) => {
              return (
                <>
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
                      <Stack>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          endIcon={<AddShoppingCartIcon />}
                          onClick={() => handleClick1(image)}
                        >
                          Add to cart
                        </Button>
                      </Stack>
                    </CardActions>
                  </Card>
                </>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
      </div>
    </>
   
  )};