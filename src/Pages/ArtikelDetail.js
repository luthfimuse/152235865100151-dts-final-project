import React, { useCallback } from 'react'
import {
    useEffect,
    useState
} from 'react';

import Layout from '../Components/Layout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { Badge, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Index = () => {

    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const handleData = useCallback(async () => {

        const response = await fetch(`https://masak-apa-tomorisakura.vercel.app/api/article/makanan-gaya-hidup/${id}`)
        const results = await response.json()
        console.log(results)
        setData(results.results)
        setLoading(false)
    }, [id])

    useEffect(() => {
        let subscribe = true;

        if (subscribe) {
            handleData()
        }

        return () => {
            subscribe = false;
        }
    }, [handleData])

    return (
        <>
            <Layout >
                < Container sx={{ mb: 20 }}>
                
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid   sx={{ pb:2 }}>
                            <Typography sx={{ textAlign:'center' }} variant="h4">
                                <b>Detail Artikel</b>
                            </Typography>
                            <Divider sx={{ pt:2 }}/>
                        </Grid>

                        {loading ? <div>Loading...</div> : ( 
                        data &&

                        <div>

                            <Paper sx={{
                                p: 2,
                                margin: 'auto',
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                            >
                            <Grid container spacing={2}>
                                <Grid item className='text-center'>
                                    <ButtonBase sx={{ width: '100%' }}>
                                        <Img alt="complex" src={data.thumb} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.title} 
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Author : <Badge color="primary" badgeContent={data.author} sx={{ pl:3 }}></Badge>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tanggal Publish : {data.date_published}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', pt:2}}>
                                        {data.description }
                                    </Typography>

                                    </Grid>
                                    
                                </Grid>
                                    
                                </Grid>
                            </Grid>


                            </Paper>

                        </div>
                        )} 
                    </Box>
                    
                </Container>
            </Layout>
        </>
    )
}

export default Index