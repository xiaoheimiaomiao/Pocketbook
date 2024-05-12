import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="bg-blue-600">
      <Text className="text-6xl">Hello world!0000555009</Text>
      <Button>444</Button>
    </View>
  );
}
