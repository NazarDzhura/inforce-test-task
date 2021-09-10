import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'
import {Divider, Grid, makeStyles, Paper} from "@material-ui/core";
import FormDialogUpdate from "../Components/FormDialogs/FormDialogUpdate";
import Comments from "../Components/Comments";

function Product(){
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 450,
            padding: theme.spacing(2),
            textAlign: 'left',
            paddingLeft: 25,
            fontSize: "1.2rem"
        },
    }));

    const classes = useStyles();

    const { id } = useParams()
    // You can create your own Mock API: https://mockapi.io/
    const url = `https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){
        content =
        <div className="container mx-auto pt-6 pl-10 pr-10 bg-gray-200 rounded" style={{minHeight: 1000}}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}><img
                        className="rounded"
                        src={product.data.image}
                        alt={product.data.name}
                        style={{float: "left"}}
                    /></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h1 className="text-2xl font-bold mb-3">
                            {product.data.name}
                        </h1>
                        <Divider />
                        <div className="pt-3">
                            Count: {product.data.count}
                        </div>
                        <div className="pt-1">
                            Description: {product.data.description}
                        </div>
                        <div className="pt-1">
                            Color: {product.data.color}
                        </div>
                        <div className="pt-1 pb-3">
                            Weight: {product.data.weight} g
                        </div>
                        <FormDialogUpdate product={product.data}/>
                    </Paper>
                </Grid>
                <Comments comments={product.data.comments} product={product.data}/>
            </Grid>
        </div>
    }

    return (
        <div className="container mx-auto">
            {content}
        </div>
    )
}

export default Product