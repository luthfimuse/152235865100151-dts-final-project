import React from 'react'

import Layout from '../Components/Layout';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Divider, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';

const Index = () => {

    return (
        <>
            <Layout >
                < Container sx={{ mb: 20 }}>
                
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid   sx={{ pb:2 }}>
                            <Typography sx={{ textAlign:'center' }} variant="h4">
                                <b>Request Resep</b>
                            </Typography>
                            <Divider sx={{ pt:2 }}/>
                        </Grid>

                        <Paper sx={{
                            p: 2,
                            textAlign:'center',
                            maxWidth:600,
                            margin: 'auto',
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                        >
                            < Box >
                                <Container>
                                <Grid sx={{ pt:2, pb: 2 }}>
                                    <form>
                                        <TextField
                                        id="outlined-basic"
                                        label="Masukkan Makanan Yang Anda Request...."
                                        variant="outlined"
                                        fullWidth
                                        />

                                        <Grid sx={{ pt: 2, textAlign:'center' }}>
                                            <Button variant="contained" size="medium" >
                                                <b>Submit</b>
                                            </Button>
                                        </Grid>

                                    </form>
                                </Grid>
                            </Container>
                            </Box>
                        </Paper>
                        <br></br>
                        <Paper sx={{
                            p: 2,
                            textAlign:'center',
                            maxWidth:600,
                            margin: 'auto',
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                        >
                            < Container >
                                <Typography sx={{ textAlign:'center' }} variant="h6">
                                    <b>List Request Resep Anda</b>
                                </Typography>
                                <Divider sx={{ pt:2 }}/>

                            </Container>
                        </Paper>
                        
                    </Box>
                    
                </Container>
            </Layout>
        </>
    )
}

export default Index