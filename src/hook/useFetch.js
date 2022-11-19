import axios from "axios";
import { useEffect, useState } from "react";

export  function useFetch(url){
  const [time, setTime] = useState({});
  const [temperature, setTemperature] = useState({});

  useEffect(() => {
    axios.get(url)
    .then(response=>{
      setTime(response.data.hourly.time)
      setTemperature(response.data.hourly.temperature_2m)
    })
  }, [] );
  return {time, temperature}
}
