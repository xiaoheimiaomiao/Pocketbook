import { Button, View, Text } from "@tarojs/components";
import React from "react";
import { AtCard, AtIcon } from "taro-ui";

export default function Index() {
  return (
    <View className="">
      {/* <AtCard
        // note="小Tips"
        extra="2024-01-01"
        title="餐饮"
        thumb="http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
      >
        -20¥
      </AtCard> */}
      <View className="m-10 flex flex-col gap-y-4">
        <Text>2024年2月3日</Text>
        <View className="flex justify-around items-center w-100% bg-slate-100 rounded-lg h-14">
          <View className="flex justify-center items-center gap-x-2">
            <View>
              <AtIcon value="shopping-cart" size="40"></AtIcon>
            </View>
            <View className="flex flex-col">
              <Text>购物</Text>
              <Text className=" text-xs text-zinc-500">2月3日 12:09</Text>
            </View>
          </View>

          <View>
            <Text className=" text-red-600">-$ 20.00</Text>
          </View>
        </View>

        <View className="flex justify-around items-center w-100% bg-slate-100 rounded-lg h-14">
          <View className="flex justify-center items-center gap-x-2">
            <View>
              <AtIcon value="iphone-x" size="40"></AtIcon>
            </View>
            <View className="flex flex-col">
              <Text>交通</Text>
              <Text className=" text-xs text-zinc-500">2月3日 16:09</Text>
            </View>
          </View>

          <View>
            <Text className=" text-red-600">-$ 2.00</Text>
          </View>
        </View>
        <View className="flex justify-around items-center w-100% bg-slate-100 rounded-lg h-14">
          <View className="flex justify-center items-center gap-x-2">
            <View>
              <AtIcon value="sketch" size="40"></AtIcon>
            </View>
            <View className="flex flex-col">
              <Text>其他</Text>
              <Text className=" text-xs text-zinc-500">2月3日 19:09</Text>
            </View>
          </View>

          <View>
            <Text className=" text-red-600">-$ 19.00</Text>
          </View>
        </View>
        <Text>2024年2月2日</Text>
        <View className="flex justify-around items-center w-100% bg-slate-100 rounded-lg h-14">
          <View className="flex justify-center items-center gap-x-2">
            <View>
              <AtIcon value="shopping-cart" size="40"></AtIcon>
            </View>
            <View className="flex flex-col">
              <Text>购物</Text>
              <Text className=" text-xs text-zinc-500">2月3日 12:09</Text>
            </View>
          </View>

          <View>
            <Text className=" text-red-600">-$ 20.00</Text>
          </View>
        </View>

        <View className="flex justify-around items-center w-100% bg-slate-100 rounded-lg h-14">
          <View className="flex justify-center items-center gap-x-2">
            <View>
              <AtIcon value="iphone-x" size="40"></AtIcon>
            </View>
            <View className="flex flex-col">
              <Text>交通</Text>
              <Text className=" text-xs text-zinc-500">2月3日 16:09</Text>
            </View>
          </View>

          <View>
            <Text className=" text-red-600">-$ 2.00</Text>
          </View>
        </View>
        <View className="flex justify-around items-center w-100% bg-slate-100 rounded-lg h-14">
          <View className="flex justify-center items-center gap-x-2">
            <View>
              <AtIcon value="sketch" size="40"></AtIcon>
            </View>
            <View className="flex flex-col">
              <Text>其他</Text>
              <Text className=" text-xs text-zinc-500">2月3日 19:09</Text>
            </View>
          </View>

          <View>
            <Text className=" text-red-600">-$ 19.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
