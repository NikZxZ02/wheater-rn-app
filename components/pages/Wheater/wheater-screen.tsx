import { View, Text } from "react-native";
import DayItems from "./day-item";
import WheaterDays from "./wheater-days";
import { apiCities, apiKey, apiUrl } from "@/constants/api";
import { useEffect } from "react";

export default function WheaterScreen() {
  const obtainData = () => {
    fetch(`${apiCities}?q=London&limit=5&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(apiCities, apiKey);
    //obtainData();
  });

  return (
    <View className="items-center p-5">
      <DayItems />
      <WheaterDays />
    </View>
  );
}
