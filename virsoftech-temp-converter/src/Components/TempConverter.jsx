import React, { useState } from "react";
import { TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import { TemperatureCelsius, TemperatureFahrenheit } from "@mui/icons-material";

function TemperatureConverter() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("celsius");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleScaleChange = (event) => {
    setScale(event.target.value);
  };

  const convertToCelsius = () => {
    if (isNaN(temperature)) {
      setError("Please enter a valid number");
      setResult("");
      return;
    }
    setError("");
    if (scale === "fahrenheit") {
      const celsius = ((parseFloat(temperature) - 32) * 5) / 9;
      setResult(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
      setResult("");
    }
  };

  const convertToFahrenheit = () => {
    if (isNaN(temperature)) {
      setError("Please enter a valid number");
      setResult("");
      return;
    }
    setError("");
    if (scale === "celsius") {
      const fahrenheit = (parseFloat(temperature) * 9) / 5 + 32;
      setResult(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else {
      setResult("");
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom mt={20}>
        Temperature Converter
      </Typography>
      <div>
        <TextField
          label="Enter temperature"
          variant="outlined"
          type="text"
          value={temperature}
          onChange={handleTemperatureChange}
        />
        <br />
        <br />
        <FormControl variant="outlined">
          <InputLabel>Scale</InputLabel>
          <Select value={scale} onChange={handleScaleChange} label="Scale">
            <MenuItem value="celsius">
               Celsius
            </MenuItem>
            <MenuItem value="fahrenheit">
             Fahrenheit
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <br />
        <Button variant="contained" onClick={convertToCelsius}>
          Convert to Celsius
        </Button>
        <Button variant="contained" onClick={convertToFahrenheit} sx={{ml:1}}>
          Convert to Fahrenheit
        </Button>
      </div>
      <div>
        <br />
        {error && <Typography variant="h5" color="error">{error}</Typography>}
        {result && <Typography variant="h5">{result}</Typography>}
      </div>
    </div>
  );
}

export default TemperatureConverter;
