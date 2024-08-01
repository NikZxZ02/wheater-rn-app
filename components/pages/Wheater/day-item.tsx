import { View, Text } from "react-native";

export default function DayItems() {
  return (
    <View className="flex items-center justify-center  w-full h-32 rounded-md">
      <View>
        <Text className="text-3xl pb-3">Puren</Text>
        <Text className="text-5xl font-extrabold">20°</Text>
        <Text className="text-lg">Soleado</Text>
      </View>
    </View>
  );
}
