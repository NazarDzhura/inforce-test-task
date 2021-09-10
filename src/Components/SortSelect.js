import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SortSelect(props) {
    const classes = useStyles();
    const [sortType, setSortType] = [props.sortType, props.setSortType]
    const handleChange = (event) => {
        setSortType(event.target.value);
    };

    return (
            <FormControl className={classes.formControl}>
                <Select
                    value={sortType}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value='asc'>Count asc</MenuItem>
                    <MenuItem value='desc'>Count desc</MenuItem>
                    <MenuItem value='a-z'>Name A-Z</MenuItem>
                    <MenuItem value='z-a'>Name Z-A</MenuItem>
                </Select>
                <FormHelperText>Sort by</FormHelperText>
            </FormControl>
    );
}