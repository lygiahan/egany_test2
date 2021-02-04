import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product';

export default function ListProducts(props) {
    let {products} =props;
    console.log('lisst',products);
    return (
        <Container>
            <h2> {products.length>0?'Tìm thấy '+ products.length + ' sản phẩm':'Không tìm thấy sản phẩm nào'}</h2>
            <Grid container spacing={3} style={{marginTop:30}}>
                
                {products.map((item,index)=>{
                    return <Product item={item} key={index}/>
                })}
            </Grid>
        </Container>
    )
}
