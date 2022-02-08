import {Grid} from '@mui/material';

const Footer = () => (
    <>
        <Grid mt={5} direction="row" container style={{backgroundColor: 'Black', color: 'white'}}>
        <Grid m={1} xs={3} item container direction="column">
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
        </Grid>
        <Grid m={1} xs={3} item container direction="column">
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
        </Grid>
        <Grid m={1} xs={3} item container direction="column">
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
        </Grid>
        <Grid container justifyContent="center" m="2"><i>Footer comes here...</i></Grid>
        </Grid>
    </>
);

export default Footer;