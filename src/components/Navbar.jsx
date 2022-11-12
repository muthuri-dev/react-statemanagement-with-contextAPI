import { AppBar, Grid, Tab, Tabs, Toolbar,} from "@mui/material";
import { useState, useContext } from "react";
import { BookContext } from "../contexts/book.context";


const Navbar = () => {
    const{books}= useContext(BookContext);
    return ( 
        <>
        <AppBar sx={{backgroundColor:'darkgreen',width:'80%'}}>
            <Toolbar>
               <Grid container>
                <Grid item>
                 <Tabs textColor="inherit">
                    <Tab label='HOME'/>
                    <Tab label='HOME'/>
                 </Tabs>
                </Grid>
               </Grid>
            </Toolbar>
        </AppBar>
        </>
     );
}
 
export default Navbar;