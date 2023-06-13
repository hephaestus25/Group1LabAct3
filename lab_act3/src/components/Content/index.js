import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function Content() {
    return (
        <Grid container alignItems="center" justifyContent='center' spacing={2} sx={{ backgroundColor: 'black' }}>
            <Grid item xs={12} md={8} sx={{
                backgroundImage: "url('./images/haircut7.jpg')",
                minHeight: 800
            }}>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography variant="h4" color="white" sx={{ p: 3 }}>
                    The Miracle
                </Typography>
                <Typography variant="h6" color="white" sx={{ p: 3 }}>
                    Ad qui tempor enim esse quis duis consectetur. Officia laborum proident occaecat consequat in velit ipsum. Irure id ullamco dolore quis pariatur sunt anim qui exercitation commodo velit consequat. Aute labore consequat minim sit sint occaecat sint minim reprehenderit in.
                </Typography>
            </Grid>
        </Grid>
    );
}