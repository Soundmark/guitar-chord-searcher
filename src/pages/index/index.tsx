import { indexModel } from "@/models";
import { Field, Icon } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useSelector } from "react-redux";
import ChordModal from "./ChordModal";
import "./index.less";
import MetronomeModal from "./MetronomeModal";

export default function Index() {
  const { searchValue } = useSelector(indexModel.selector);

  const buttonConfig = [
    {
      title: "节拍器",
      key: "节",
      onClick: () => {
        indexModel.actions.update({ metronomeVisible: true });
      },
    },
    {
      title: "查和弦",
      key: "弦",
      onClick: () => {
        indexModel.actions.update({ chordVisible: true });
      },
    },
    // {
    //   title: "功德机",
    //   key: "功",
    // },
    {
      title: "设置",
      key: "设",
      onClick: () => {
        indexModel.actions.update({ settingVisible: true });
      },
    },
  ];

  return (
    <View className="h-screen relative">
      <View className="absolute w-full top-1/2 transform -translate-y-28 transition-transform">
        <View className="text-center">
          <View className="at-icon at-icon-map-pin text-5xl text-yellow-500"></View>
        </View>
        <View className="index-search-bar border-solid border-black border rounded-full w-11/12 p-1 mx-auto my-4 flex items-center">
          <View className="w-8 h-8 rounded-full leading-8 text-center bg-yellow-700">
            中
          </View>
          <View style="width:calc(100% - 4.5rem);">
            <Field
              style="padding:0.5rem 0.7rem;"
              placeholder="输入搜索吉他谱"
              value={searchValue}
              onChange={(e) => {
                indexModel.actions.update({ searchValue: e.detail });
              }}
              onConfirm={() => {
                if (searchValue) {
                  Taro.navigateTo({ url: "/pages/List/index" });
                }
              }}
            ></Field>
          </View>
          <View
            className="w-8 h-8 text-center"
            onClick={() => {
              if (searchValue) {
                Taro.navigateTo({ url: "/pages/List/index" });
              }
            }}
          >
            <Icon
              name="search"
              className="rounded-full text-center mt-1"
              size="1.5rem"
            ></Icon>
          </View>
        </View>
        <View className="px-4">
          {buttonConfig.map((item) => (
            <View key={item.key} className="inline-block px-2">
              <View
                className="w-10 h-10 text-center leading-10 rounded-full bg-gray-700"
                onClick={item.onClick}
              >
                {item.key}
              </View>
              <View className="text-center my-1" style="font-size:0.5rem;">
                {item.title}
              </View>
            </View>
          ))}
        </View>
      </View>
      {/* <SettingModal></SettingModal> */}
      <ChordModal></ChordModal>
      <MetronomeModal></MetronomeModal>
    </View>
  );
}
