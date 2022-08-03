import React from 'react'
import {
    useEffect,
    useState
} from 'react';

import Layout from '../Components/Layout';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

const Index = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const handleData = async () => {

        const response = await fetch('https://masak-apa-tomorisakura.vercel.app/api/category/article/makanan-gaya-hidup')
        const results = await response.json()
        console.log(results)
        setData(results)
        setLoading(false)
    }

    useEffect(() => {
        let subscribe = true;

        if (subscribe) {
            handleData()
        }

        return () => {
            subscribe = false;
        }
    }, [])

    return (
        <>
            <Layout >
                < Container sx={{ mb: 20 }}>
                
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid   sx={{ pb:2 }}>
                            <Typography sx={{ textAlign:'center' }} variant="h4">
                                <b>Artikel</b>
                            </Typography>
                            <Divider sx={{ pt:2 }}/>
                        </Grid>

                        {loading ? <div>Loading...</div> : ( 
                        data &&

                        <div>

                            <Grid container spacing={2}>
                        {data.results.map((item, index) => {
                                return (

                                    <Grid item xs={12} md={4} xl={4} sx={{ p:2 }} key={index}>
                                    <Card >
                                        
                                        <CardContent>
                                            <Typography gutterBottom variant="button" component="div">
                                            <b> {item.key}</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.tags}
                                            </Typography>
                                            <Button sx={{ mt:1 }} variant="contained" size="small" href={`/artikel/detail/${item.key}`}>
                                                Selengkapnya...
                                            </Button>
                                        </CardContent>
                                    </Card>
                                    </Grid>
                                    
                                );
                            })}
                            </Grid> 
                        </div>
                        )} 
                    </Box>
                    
                </Container>
            </Layout>
        </>
    )
}

export default Index