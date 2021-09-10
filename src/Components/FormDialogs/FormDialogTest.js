import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import {Form} from "react-bootstrap";
import UploadButton from "../UploadButton";

export default function FormDialogTest() { //Form dialog with image upload button instead of url text field
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [data, setData] = useState({
        name: "",
        description: "",
        count: "",
        color: "",
        weight: "",
        image: {}
    })

    const url = "https://6135dcd860d2900017c3c1c0.mockapi.io/api/v1/products?page=1&limit=20";

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            description: data.description,
            count: data.count,
            color: data.color,
            weight: data.weight,
            image: data.image
        })
            .then(res => {
                document.location.reload();
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        setData({
            name: "",
            description: "",
            count: "",
            color: "",
            weight: "",
            image: {}
        })
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function fileUploadHandler(e) {
        setData({...data, image: e.target.files[0]})
        console.log(data)
    }

    const style = {
        marginBottom: 10,
        marginTop: 10
    };

    return (
        <div>
            <Button className="shadow-2xl btn-green" variant="contained" color="primary" onClick={handleClickOpen}>
                Add new product
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <Form onSubmit={(e) => submit(e)}>
                    <DialogTitle id="form-dialog-title">Add new product</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please, describe the product you want to add.
                        </DialogContentText>
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.name}
                            style={style}
                            // autoFocus
                            margin="dense"
                            id="name"
                            label="Product name"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.description}
                            style={style}
                            id="description"
                            label="Product Description"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.count}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="count"
                            label="Count"
                            type="number"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.color}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="color"
                            label="Color"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => handle(e)}
                            value={data.weight}
                            style={style}
                            margin="dense"
                            variant="outlined"
                            id="weight"
                            label="Weight in grams"
                            type="number"
                            fullWidth
                        />
                        <UploadButton onChange={e => fileUploadHandler(e)}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary" type="submit">
                            Add product
                        </Button>

                    </DialogActions>
                </Form>
            </Dialog>
        </div>
    );
}