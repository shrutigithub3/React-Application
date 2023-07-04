import React from "react";
import {
  Box,
  Stack,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./style.css";

const CartDesign = () => {
    
  return (
    <>
      <div id="wrapper">
        <div id="inner_child1">
          <div className="cartpage">
            <Stack className="stack">
              <div className="head">
                <h2 className="h2">Your Shopping Bag</h2>
                <ul className="shiporpick">
                  <li className="list1">Ship My Order </li>
                  <li className="list2">Pickup In Store</li>
                </ul>
              </div>
            </Stack>
          </div>
          <Card className="list">
            <CardMedia
              className="cardlist"
              component="img"
              image="https://m.media-amazon.com/images/I/51UrJ9Dh75S._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
              alt="unsplash image"
            />
            <CardContent className="product-profile-data">
              <Typography className="data1">Book</Typography>
              <Typography className="data2">Comic Book For Kids</Typography>
              <Typography className="data3">$100</Typography>

              <ul className="ul1">
                <li className="li1">
                  <Typography>
                    <a href="/" className="btn">
                      Remove
                    </a>
                  </Typography>
                </li>
                <li className="li2">
                  <Typography>
                    <a href="/" className="btn">
                      Move to Wishlist
                    </a>
                  </Typography>
                </li>
                <li className="li3">
                  <Typography>
                    <a href="/" className="btn">
                      Save For Later
                    </a>
                  </Typography>
                </li>
              </ul>
            </CardContent>
            <CardActions className="cardaction">
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography>1</Typography>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div className="inner_child2">
          <div className="sticky-summary" id="sticky-summary">
            <div className="cart-total">
              <div className="cart-total-head">
                <h3 className="cart-total-title">Summary</h3>
              </div>
              <div className="cart-total-body">
                <div id="js-cartFinancialSummary">
                  <div className="cart-total-body">
                    <ul className="cart-summary">
                      <li className="cart-summary-item">
                        <span className="label">Amount </span>
                        <span className="value">$100</span>
                      </li>

                      <li className="cart-summary-item highlighted">
                        <span className="label">Net Payable</span>
                        <span className="value">$100</span>
                      </li>
                    </ul>

                    <div className="checkout-bottom"></div>
                  </div>
                </div>
              </div>
              <div className="cart-total-foot">
                <div className="cart-action">
                  <button className="btn btn-brand btn-block" type="button">
                    Checkout{" "}
                  </button>
                  <a className="link-underline" href="/">
                    Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDesign;
