import { View, Text } from "react-native";
import DayItems from "./day-item";
import WheaterDays from "./wheater-days";

export default function WheaterScreen() {
  return (
    <View className="items-center p-5">
      <DayItems/>
      <WheaterDays/>
    </View>
  );
}
