import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';import React from 'react'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    card1:{
        fontSize:16,
        marginRight:20,
    },
    card2:{
        fontSize:25
    }
  });
export default function Product({item}) {
    const classes = useStyles();
    return (
        <Grid item  md={3} xs={12}>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image.src}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
         
          
          <Typography variant="body2" color="textSecondary" component="p">
                <span className="card1"> {item.variants[0].compare_at_price}đ</span> <span className={classes.card2}> {item.variants[0].price}đ</span> 
          </Typography>
          <Typography>
               <span>Trạng thái: </span> {item.variants[0].inventory_quantity <=0 ?
                <Button style={{textDecorationLine:'line-through',padding:0}} color="secondary">Hết hàng</Button>:
                'Mặt hàng còn '+ (item.variants[0].inventory_quantity )}
          </Typography>
          <Typography>
                {item.variants[0].inventory_quantity <=0 ? 
                <Button variant="contained" color="primary">Đặt hàng</Button>:
                <Button variant="contained" color="primary">Mua ngay</Button>}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
    )
}
