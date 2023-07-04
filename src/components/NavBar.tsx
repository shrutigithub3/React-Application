import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Badge,
  Drawer,
  Card,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";


export const NavBar = () => {
  let navigate = useNavigate();

  const changeRoute = () => {
    let path = "/Main/Comic";
    navigate(path);
  };

  const changeRoute1 = () => {
    let path = "/Main/Mystery";
    navigate(path);
  };
  const changeRoute2 = () => {
    let path = "/Main/Horror";
    navigate(path);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [count, setCount] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(null);
  };
  const Count = useSelector((state: any) => state.cart.count);
  return (
    <AppBar color="primary" position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LibraryBooksIcon />
          {/* <MenuIcon/> */}
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Books Store
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : undefined}
            aria-haspop="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Products
          </Button>
          <IconButton size="large" edge="end" color="inherit" aria-label="logo">
            <Badge badgeContent={Count} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Stack>

        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={changeRoute}>Comic</MenuItem>
          <MenuItem onClick={changeRoute1}>Mystery</MenuItem>
          <MenuItem onClick={changeRoute2}>Horror</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
