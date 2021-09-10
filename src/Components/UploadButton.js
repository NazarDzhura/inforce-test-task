import React from "react";
import Button from "@material-ui/core/Button";

export default function UploadButton(props) {
    const onChange = props.onChange

    return (
        <div>
            <input
                onChange={onChange}
                accept="image/*"
                id="contained-button-file"
                multiple
                hidden
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" fullWidth>
                    Upload image
                </Button>
            </label>
        </div>
    );
}