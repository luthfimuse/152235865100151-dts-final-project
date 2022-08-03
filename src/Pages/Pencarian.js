import React, { useCallback, useRef } from "react";
import { useEffect, useState } from "react";

import Layout from "../Components/Layout";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Divider, TextField } from "@mui/material";

import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [search, setSearch] = useSearchParams();
  const keyword_ = useRef('')

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleData = useCallback(async () => {
    let keyword = search.get("keyword");

    let url =
      "https://masak-apa-tomorisakura.vercel.app/api/recipes-length/?limit=9";
    //kalo ada keyword
    if (keyword) {
      url = `https://masak-apa-tomorisakura.vercel.app/api/search/?q=${keyword}`;
    }


    setLoading(true)
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    setData(results.results);
    setLoading(false);
  }, [search]);

  const handleChange = (event) => {
    event.preventDefault();    
    setLoading(true)
    setSearch({
      keyword: keyword_.current.value,
    });
  };

  useEffect(() => {
    let subscribe = true;
    if(subscribe){
        handleData()
    }

    return () => {
        subscribe = false
    }

  }, [handleData]);

  return (
    <>
      <Layout>
        <Container sx={{ mb: 20 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ pb: 2 }}>
              <Typography sx={{ textAlign: "center" }} variant="h4">
                <b>Pencarian</b>
              </Typography>
              <Divider sx={{ pt: 2 }} />
            </Grid>
            <Grid sx={{ pb: 2 }}>
              
              <form onSubmit={handleChange}>
                <TextField
                inputRef = {
                    keyword_
                }
                id="outlined-basic"
                label="Ketik Pencarian Lalu Tekan Enter..."
                variant="outlined"
                fullWidth
              />
              </form>
              
            </Grid>

            {loading && <div>Loading...</div>}
            { !loading && data.length > 0 &&
               (
                <div>
                  <Grid container spacing={2}>
                    {data.map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          xl={4}
                          sx={{ p: 2 }}
                          key={index}
                        >
                          <Card>
                            <CardMedia
                              component="img"
                              height="140"
                              image={item.thumb}
                              alt={item.title}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="button"
                                component="div"
                              >
                                <b> {item.title}</b>
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Waktu : {item.times}
                              </Typography>
                              <Typography variant="body2">
                                Porsi : {item.serving}
                              </Typography>
                              <Typography gutterBottom variant="body2">
                                Tingkat : {item.difficulty}
                              </Typography>
                              
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </div>
              
            )}
            { !loading && data.length === 0 && <div>Data TIdak Ditemukan</div>}
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
