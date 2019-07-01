import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header'
import Title from './components/Title';
import BodySection from './components/Body/BodySection'
import Footer from './components/Layout/Footer'
import Sidebar from './components/pages/sidebar'
import TShirt from './components/pages/tshirt'
import  './styles/app.css'

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
  flexGrow: 1,
  
},
item:{
  margin:"1rem",

}
});


function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className={styles.root}>
      <Grid container spacing={5}>
          <Grid item   className={styles.item} xs={2} xl={2}>
            <Sidebar />
          </Grid>
          <Grid   className={styles.item} item xs={6}>
            <TShirt />
          </Grid>
          </Grid>
      {/* <Title/>
      <BodySection/>
      <Footer/> */}
     </div>
    </div>
  );
}

export default App;
