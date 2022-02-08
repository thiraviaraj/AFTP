import { Outlet, Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Timeline from '@mui/icons-material/Timeline';
import MoreIcon from '@mui/icons-material/MoreVert';
import {DataArray, Cloud, Chat, AccountTree, DesignServices} from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Footer from '../Footer';

const Search = styled('div')(({ theme }: any) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }: any) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const DrawerHeader = styled('div')(({ theme }: any) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
}));
export default function Header() {
    const [isMainMenuOpen, toggleDrawer] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>TODO: In progress</MenuItem>
            {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    title="Timeline"
                    aria-label="Timeline"
                    color="inherit"
                >
                    <Badge color="error">
                        <Timeline />
                    </Badge>
                </IconButton>
                <p>Timeline</p>
            </MenuItem>
        </Menu>
    );

    const openDrawer = () => {
        toggleDrawer(true);
    }
    const location = useLocation();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={openDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link className='noLinkStyle' to="/StartPage">Accion Freshers Training Program</Link>
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <p><i>Last Updated: 08 Feb 2022</i></p>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                title='Timeline'
                                aria-label="Timeline"
                                color="inherit"
                            >
                                <Badge color="warning">
                                <Link className='noLinkStyle' to="/TimelinePage"><Timeline /></Link>
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
                <Drawer
                    variant="temporary"
                    open={isMainMenuOpen}
                    onClose={() => toggleDrawer(false)}
                >
                    <DrawerHeader>
                        <IconButton onClick={() => toggleDrawer(false)}>
                            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {[{title: 'Data Structures & Algorithm', link: '/dataStructure', img: 'https://miro.medium.com/max/1400/0*UVG1F-0kLAEWAT3k', desc: 'A data structure is a named location that can be used to store and organize data. And, an algorithm is a collection of steps to solve a particular problem.'}, {title: 'Design Patterns', link: '/DesignPattern', img: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ebdnqnmv3qqc16jzlkzs.jpg', desc: 'Design pattern is a general repeatable solution to a commonly occurring problem in software design.'}, {title: 'Project Management Essentials', link: '/ProjectEssentials', img: 'https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2019/02/How_to_Build_Use_Project_Plan_Template_1.jpg', desc: ' Developer tools, Editors, designers, and debuggers to develop for any platform.'}, {title: 'Communication & Soft-Skills', link: '/SoftSkills', img: 'https://brooksgroup.com/wp-content/uploads/2020/08/soft_skills.jpg', desc: 'Soft skills include interpersonal (people) skills, communication skills, listening skills, time management, and empathy, among others'}, {title: 'Architecture & Cloud Overview', link: '/CloudOverview', img: 'https://hackersandslackers-cdn.storage.googleapis.com/2020/12/gcp_series_redo-3.png', desc: 'cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence'}, {title: 'Final Assessment', link: '', img: 'https://3.bp.blogspot.com/-D15CgX2pfa0/XEryOQs3exI/AAAAAAAAFUQ/A-psGxC-EHkLpKF-Rz6W-8pIA04qGUxLgCLcBGAs/s1600/writing.jpg', desc: 'Last activity you must complete to enter into a project'}].map((item, index) => (
                            <ListItem button key={item.title}>
                                {
                                (index === 0) && <ListItemIcon>
                                     <DataArray />
                                </ListItemIcon>
                                }
                                {
                                (index === 1) && <ListItemIcon>
                                     <DesignServices />
                                </ListItemIcon>
                                }
                                {
                                (index === 2) && <ListItemIcon>
                                     <AccountTree />
                                </ListItemIcon>
                                }
                                {
                                (index === 3) && <ListItemIcon>
                                     <Chat />
                                </ListItemIcon>
                                }
                                {
                                (index === 4) && <ListItemIcon>
                                     <Cloud />
                                </ListItemIcon>
                                }
                                { item.link &&
                                <Link className='noLinkStyle'
          to={item.link}
        >
                                <ListItemText primary={item.title} />
                                </Link>
                                }
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Contact Trainer', 'Contact HR'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                   <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
            <Grid style={{minHeight: '50vh'}} mx={2}>
            <Grid mt={2}>
            <Breadcrumbs aria-label="breadcrumb">
            
        <Link
        className='noLinkStyle'
          to="/StartPage"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        {location.pathname.length > 1 && <Link
        className='noLinkStyle'
          to="#"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {location.pathname.substring(1, location.pathname.length)}
        </Link>}
        
       
      </Breadcrumbs>
      </Grid>
                <Outlet></Outlet></Grid>
            
            {/* <Footer></Footer> */}
        </div>
    );
}