import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";

function PrayerCard({ prayerName, prayerTime, prayerImage }) {
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
      <CardMedia
        component="img"
        height="140"
        image={prayerImage}
        alt="prayer time"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prayerName}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {prayerTime}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function PrayersCards({ selectedCity, timings, setTimings }) {
  const getTimings = async () => {
    const response = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=Egypt&city=${selectedCity.apiName}`
    );
    setTimings(response.data.data.timings);
  };

  useEffect(() => {
    getTimings();
  }, [selectedCity]);

  const prayers = [
    {
      name: "الفجر",
      time: timings.Fajr,
      image:
        "https://wepik.com/api/image/ai/9a07baa7-b49b-4f6b-99fb-2d2b908800c2",
    },
    {
      name: "الظهر",
      time: timings.Dhuhr,
      image:
        "https://wepik.com/api/image/ai/9a07bb45-6a42-4145-b6aa-2470408a2921",
    },
    {
      name: "العصر",
      time: timings.Asr,
      image:
        "https://wepik.com/api/image/ai/9a07bb90-1edc-410f-a29a-d260a7751acf",
    },
    {
      name: "المغرب",
      time: timings.Maghrib,
      image:
        "https://wepik.com/api/image/ai/9a07bbe3-4dd1-43b4-942e-1b2597d4e1b5",
    },
    {
      name: "العشاء",
      time: timings.Isha,
      image:
        "https://wepik.com/api/image/ai/9a07bc25-1200-4873-8743-1c370e9eff4d",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {prayers.map((prayer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <PrayerCard
              prayerName={prayer.name}
              prayerTime={prayer.time}
              prayerImage={prayer.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
