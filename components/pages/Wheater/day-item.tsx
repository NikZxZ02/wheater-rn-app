import { View, Text } from "react-native";

export default function DayItems() {
  return (
    <View className="flex items-center justify-center bg-slate-200 border-2 w-40 h-24 rounded-md">
      <View>
        <Text className="text-5xl">20°</Text>
        <Text className="text-lg">Soleado</Text>
      </View>
    </View>
  );
}
