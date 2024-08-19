import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";

export default function SelectCity({ selectedCity, setSelectedCity }) {
  const handleCityChange = (event) => {
    const cityObject = availableCities.find((city) => {
      return city.apiName === event.target.value;
    });
    setSelectedCity(cityObject);
  };

  const availableCities = [
    {
      displayName: "القاهره",
      apiName: "Cairo",
    },
    {
      displayName: "الجيزه",
      apiName: "Giza",
    },
    {
      displayName: "الاسكندريه",
      apiName: "Alexandria",
    },
    {
      displayName: "السويس",
      apiName: "Suez",
    },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="center"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      <FormControl
        sx={{
          width: "30%",
        }}
      >
        <InputLabel id="demo-simple-select-label">المدينه</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity.apiName}
          label="Age"
          onChange={handleCityChange}
        >
          {availableCities.map((city) => {
            return (
              <MenuItem value={city.apiName} key={city.apiName}>
                {city.displayName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
}
