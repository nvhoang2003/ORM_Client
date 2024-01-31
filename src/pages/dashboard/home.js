import React from 'react'
import Image from 'next/image'
import menuData from '@/jsonData/menu.json'
import { Typography, Box, Card, Grid, Button, Stack, CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function home() {
  const [listIndex, setListIndex] = useState([]);
  const router = useRouter()

  useEffect(() => {
    setListIndex(menuData.data.index)
  }, [])

  return (
    <Box>
      <Typography variant="h3"> HOME </Typography>

      <div>
        {
          <Box className='mx-20'>
            {listIndex?.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography variant="p" className='font-bold blue-color'>{index + 1}. {item?.name}</Typography>
                  <Grid container spacing={2}>
                    {item?.menu.map((menu, ind) => {
                      let pathIcon = "/svg/" + menu.icon
                      return (
                        <Grid item key={ind} xs={3}>
                          <Button fullWidth variant="outlined" onClick={() => router.push(menu.path)}>
                            <Grid container spacing={0}>
                              <Grid item xs={3}>
                                <Image
                                  src={pathIcon}
                                  alt="Next.js Logo"
                                  width={110}
                                  height={110}
                                />
                              </Grid>
                              <Grid item xs={9}>
                                <CardContent sx={{ textAlign: 'left' }}>
                                  <p variant="p" className='font-bold blue-color un-uppercase'>{menu.name}</p>
                                  <p className='un-uppercase'>{menu.description}</p>
                                </CardContent>
                              </Grid>
                            </Grid>
                          </Button>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Box>
              )
            })}
          </Box>
        }
      </div>
    </Box>
  )
}
