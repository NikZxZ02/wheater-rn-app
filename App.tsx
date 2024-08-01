import WheaterScreen from "@/pages/Wheater/wheater-screen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <WheaterScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
