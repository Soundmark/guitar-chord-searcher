import { indexModel } from "@/models";
import { View } from "@tarojs/components";
import { useState } from "react";
import { AtInput } from "taro-ui";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/modal.scss";
import ChordModal from "./ChordModal";
import "./index.less";
import MetronomeModal from "./MetronomeModal";
import SettingModal from "./SettingModal";

export default function Index() {
  const [searchValue, setSearchValue] = useState("");
  const [searchBtnDisplay, setSearchBtnDisplay] = useState<
    "none" | "inline-block"
  >("none");

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
    <View className="h-full relative">
      <View className="absolute w-full top-1/2 transform -translate-y-28 transition-transform">
        <View className="text-center">
          <View className="at-icon at-icon-map-pin text-5xl text-yellow-500"></View>
        </View>
        <View className="index-search-bar border-solid border-black border rounded-full w-11/12 p-1 mx-auto my-4">
          <View className="inline-block w-8 h-8 rounded-full leading-8 text-center bg-yellow-700">
            中
          </View>
          <AtInput
            className="inline-block px-1"
            name="searchValue"
            value={searchValue}
            onChange={(val: string) => {
              setSearchValue(val);
            }}
            onFocus={() => {
              setSearchBtnDisplay("inline-block");
            }}
            onBlur={() => {
              setSearchBtnDisplay("none");
            }}
          ></AtInput>
          <View
            className="at-icon at-icon-search w-8 h-8 rounded-full text-center text-xl before:flex before:justify-center before:items-center before:h-full"
            style={`display:${searchBtnDisplay};vertical-align:top;`}
          ></View>
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
      <SettingModal></SettingModal>
      <ChordModal></ChordModal>
      <MetronomeModal></MetronomeModal>
    </View>
  );
}
