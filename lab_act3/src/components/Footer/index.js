import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export default function Footer() {
    return (
        <Grid component="footer" container spacing={2} alignItems="center" sx={{
            p: 3,
            backgroundColor: '#e8e4c9'
        }}>
            <Grid item xs={12} md={4}>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h4">
                        Welcome to Brber
                    </Typography>
                    <Typography variant="body" sx={{ pr: 6 }}>
                        Fugiat eu eu tempor fugiat nostrud nulla ipsum culpa id irure duis. In aute commodo velit nostrud qui est occaecat. 
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant="h6">
                    Link A
                </Typography>
                <Stack direction="column" component="li" spacing={2}>
                <Typography variant="a">
                        Link 1
                    </Typography>
                    <Typography variant="a">
                        Link 2
                    </Typography>
                    <Typography variant="a">
                        Link 3
                    </Typography>
                    <Typography variant="a">
                        Link 4
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant="h6">
                    Link B
                </Typography>
                <Stack direction="column" component="li" spacing={2}>
                <Typography variant="a">
                        Link 1
                    </Typography>
                    <Typography variant="a">
                        Link 2
                    </Typography>
                    <Typography variant="a">
                        Link 3
                    </Typography>
                    <Typography variant="a">
                        Link 4
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant="h6">
                    Link C
                </Typography>
                <Stack direction="column" component="li" spacing={2}>
                    <Typography variant="a">
                        Link 1
                    </Typography>
                    <Typography variant="a">
                        Link 2
                    </Typography>
                    <Typography variant="a">
                        Link 3
                    </Typography>
                    <Typography variant="a">
                        Link 4
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant="h6">
                    Link D
                </Typography>
                <Stack direction="column" component="li" spacing={2}>
                    <Typography variant="a">
                        Link 1
                    </Typography>
                    <Typography variant="a">
                        Link 2
                    </Typography>
                    <Typography variant="a">
                        Link 3
                    </Typography>
                    <Typography variant="a">
                        Link 4
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
}