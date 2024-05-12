import { View, Text, Button, Icon } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
// import "./index.scss";
import { AtIcon, AtInput, AtForm } from "taro-ui";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  // const handleChange = (value: string) => {
  //   console.log(value);
  // };
  return (
    <View className="flex justify-center items-center bg-violet-400">
      <View className="flex justify-center w-80  mt-20 mb-20 bg-white rounded-lg shadow-xl ">
        <View className="flex flex-col m-4   ">
          <View className="flex flex-wrap gap-x-5 gap-y-2 justify-around">
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="camera" size="40"></AtIcon>
              <Text className=" mt-2">餐饮</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="bell" size="40"></AtIcon>
              <Text className=" mt-2">交通</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="credit-card" size="40"></AtIcon>
              <Text className=" mt-2">娱乐</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="shopping-cart" size="40"></AtIcon>
              <Text className=" mt-2">购物</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="home" size="40"></AtIcon>
              <Text className=" mt-2">住房</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="file-generic" size="40"></AtIcon>
              <Text className=" mt-2">学习</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="lock" size="40"></AtIcon>
              <Text className=" mt-2">医疗</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="iphone-x" size="40"></AtIcon>
              <Text className=" mt-2">通讯</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="download-cloud" size="40"></AtIcon>
              <Text className=" mt-2">收入</Text>
            </View>
            <View className="flex flex-col">
              {/* <View size="30" className="at-icon at-icon-sketch "></View> */}
              <AtIcon value="sketch" size="40"></AtIcon>
              <Text className=" mt-2">其他</Text>
            </View>
          </View>
          <View className="flex flex-col gap-y-3  mt-8">
            <Text className="">金额:</Text>
            <View className="border border-2 border-black rounded w-100% h-10 "></View>
            <Text className="">日期:</Text>
            <View className="border border-2 border-black rounded w-100% h-10 "></View>
            <Text className="">备注:</Text>
            <View className="border border-2 border-black rounded w-100% h-10 "></View>
          </View>
        </View>
      </View>
    </View>
  );
}
