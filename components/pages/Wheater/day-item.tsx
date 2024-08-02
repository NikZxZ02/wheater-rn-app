import { View, Text } from "react-native";

export default function DayItems() {
  return (
    <View className="flex items-center justify-center  w-full h-32 rounded-md">
      <View className="items-center">
        <Text className="text-3xl pb-3 font-bold">Nueva York</Text>
        <Text className="text-5xl font-extralight">20°</Text>
        <Text className="text-lg">Soleado</Text>
      </View>
    </View>
  );
}
