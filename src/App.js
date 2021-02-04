import React, { Fragment, useState } from 'react'
import data from './data.json'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { AppBar, Container, FormControl, Grid, IconButton, Input, InputLabel, TextField, Toolbar, Typography } from '@material-ui/core';
import ListProducts from './Products/ListProducts';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
      search_product:{
          textAlign:'center',
          paddingTop:50
      }
  }));
  
export default function App() {
    const classes = useStyles();
    const [search,setSearch]=useState('');
    const [products,setProduct]=useState([])
    const hanldeChange =(e)=>{
        setSearch(e.target.value)
        setProduct(data.products)
     }
     const handleCLick =()=>{
      let fil = products.filter(item=>item.title.toUpperCase().includes(search.toUpperCase()));
       setProduct(fil)
     }

    return (
        <Fragment>
        <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" color="inherit">
            Egany
            </Typography>
        </Toolbar>
        </AppBar>
        <main>
            <Container>
            <div className={classes.search_product}>
                  <Typography variant="h3">Tìm Sản Phẩm Bạn Muốn</Typography>
            
             <FormControl variant="outlined" style={{width:'100%'}}>
              
              {/* <div style={{display:'flex',alignItems:'center'}}>
              <OutlinedInput style={{width:'100%'}} id="component-outlined" name="search" value={search} onChange={hanldeChange} label="Name" />
               
              </div> */}
              <Grid Container spacing={3}>
                    <Grid item md={12}>
                       <InputLabel htmlFor="component-outlined">Sản Phẩm</InputLabel>
                       <OutlinedInput style={{width:'100%'}} id="component-outlined" name="search" value={search} onChange={hanldeChange} label="Name" />
                    </Grid>
                    <Grid item md={12} style={{marginTop:20}}>
                    <Button variant="contained" size="large" color="primary" onClick={handleCLick} type="submit">Tìm sản phẩm</Button>
                    </Grid>
              </Grid>
               
            </FormControl>
              </div>

              <div className="product" style={{marginTop:80}}>
  
                <ListProducts products={products}/>
              </div>
            </Container>
        </main>
        </Fragment>
    )
}
