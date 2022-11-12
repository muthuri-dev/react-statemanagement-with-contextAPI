import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import BookContextProvider from "../contexts/book.context";


const Home = () => {
    return ( 
        <div style={{display:'flex',alignItems:'center'}}>
        <BookContextProvider>
            <Grid container direction='column'>
                <Grid item><Navbar/></Grid>
                <Grid item>kenne</Grid>
            </Grid>
        </BookContextProvider>
        </div>
     );
}
 
export default Home;