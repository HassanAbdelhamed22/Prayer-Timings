import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CssBaseline, Divider } from "@mui/material";
import PrayersCards from "../PrayersCards/PrayersCards";
import SelectCity from "../SelectCity/SelectCity";
import moment from "moment";
import "moment/dist/locale/ar-kw";


moment.locale("ar");

export default function MainContent() {
  const [selectedCity, setSelectedCity] = useState({
    displayName: "القاهره",
    apiName: "Cairo",
  });

  const [remainingTimeState, setRemainingTimeState] = useState("");

  const [today, setToday] = useState("");

  const [timings, setTimings] = useState({
    Fajr: "04:09",
    Dhuhr: "12:57",
    Asr: "16:32",
    Maghrib: "19:59",
    Isha: "21:33",
  });

  const [nextPrayerIndex, setNextPrayerIndex] = useState(2);

  const prayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الضهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Maghrib", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setupCounterDownTimer();
    }, 1000);

    const theDayNow = moment();
    setToday(theDayNow.format("MMMM Do YYYY | h:mm"));

    return () => {
      clearInterval(interval);
    };
  }, [timings]);

  const setupCounterDownTimer = () => {
    const momentNow = moment();

    let prayerIndex = 0;

    if (
      momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Maghrib"], "hh:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings["Maghrib"], "hh:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
    ) {
      prayerIndex = 4;
    } else {
      prayerIndex = 0;
    }
    setNextPrayerIndex(prayerIndex);

    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = timings[nextPrayerObject.key];
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");

    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    if (remainingTime > 0) {
      const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);

      const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
        moment("00:00:00", "hh:mm:ss")
      );
      const totalDifference = midnightDiff + fajrToMidnightDiff;

      remainingTime = totalDifference;
    }

    const durationRemainingTime = moment.duration(remainingTime);

    setRemainingTimeState(
      `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
    );
  };

  return (
    <>
      {/* Start Top Row */}
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div>
            <h2> {today}</h2>
            <h1>{selectedCity.displayName}</h1>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div>
            <h2>متبقي حتي صلاه {prayersArray[nextPrayerIndex].displayName}</h2>
            <h1>{remainingTimeState}</h1>
          </div>
        </Grid>
      </Grid>
      {/* End Top Row */}

      <Divider style={{ borderColor: "white", opacity: "0.1" }}></Divider>

      {/* Start Prayers Cards */}
      <div>
        <PrayersCards
          selectedCity={selectedCity}
          timings={timings}
          setTimings={setTimings}
        ></PrayersCards>
      </div>
      {/* End Prayers Cards */}

      <SelectCity
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      ></SelectCity>
    </>
  );
}
