import { View, Text } from "react-native";
import DayItems from "./day-item";
import WheaterDays from "./wheater-days";
import { apiCities, apiKey, apiUrl } from "@/constants/api";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
//import * as Location from 'expo-location';;

export default function WheaterScreen() {
  const [ubication, setUbication] = useState(null);

  const obtainData = () => {
    fetch(`${apiCities}?q=London&limit=5&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const getActualPosition = async () =>{
   
  }

  useEffect(() => {
    //getActualPosition();
    console.log(apiCities, apiKey);
    //obtainData();
  });

  return (
    <View className="bg-gradient-to-t from-purple-500 to-blue-500 items-center p-6 h-full">
      <Link href={"/cities"}>Ir</Link>
      <DayItems />
      <WheaterDays />
    </View>
  );
}
