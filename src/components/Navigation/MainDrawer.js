import React from 'react';
import {
    AppBar,
    CssBaseline,
    Drawer,
    Divider,
    Hidden,
    IconButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    MenuList,
    MenuItem,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    // zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainDrawer = (props) => {
    const { window, children } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const dataListOne = [
        {title: 'Головна', route: '/'},
        {title: 'Створити тест', route: '/quiz-creator'},
        {title: 'Шаблони тестів', route: '/quizList'},
        {title: 'Загальний доступ', route: '/publicStore'},
    ];

    const dataListTwo = [
        {title: 'Призначити тест', route: '/startQuiz'},
        {title: 'Оцінювання', route: '/rating'},
        {title: 'Вийти', route: '/logout'},
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    
      const drawer = (
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <MenuList>
            {dataListOne.map((item, index) => (
              <MenuItem button key={item.title} component={Link} to={item.route}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.title} />
              </MenuItem>
            ))}
          </MenuList>
          <Divider />
          <MenuList>
            {dataListTwo.map((item, index) => (
              <MenuItem button key={item.title} component={Link} to={item.route}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.title} />
              </MenuItem>
            ))}
          </MenuList>
          {/* <List>
            {['Головна', 'Створити тест', 'Шаблони тестів', 'Загальний доступ'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Призначити тест', 'Оцінювання', 'Вийти'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </div>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;
    return ( 
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Тестування
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
            </Hidden>
        </nav>
        <main className={classes.content}>
            <div className={classes.toolbar} />
                {children}
        </main>
    </div>
     );
}
 
export default MainDrawer;
