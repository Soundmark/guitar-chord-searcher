import { indexModel } from "@/models";
import { Button, View } from "@tarojs/components";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
  AtSegmentedControl,
} from "taro-ui";
import "taro-ui/dist/style/components/segmented-control.scss";

function SettingModal() {
  const { settingVisible } = useSelector(indexModel.selector);
  const [fontSize, setFontSize] = useState(0);
  const [bgColor, setBgColor] = useState(0);

  const onCancel = () => {
    indexModel.actions.update({ settingVisible: false });
  };

  const content = (
    <View>
      <View className="flex mb-2">
        <View className="w-11 leading-6">字号：</View>
        <AtSegmentedControl
          values={["大", "中", "小"]}
          current={fontSize}
          onClick={(index) => {
            setFontSize(index);
          }}
        ></AtSegmentedControl>
      </View>
      <View className="flex">
        <View className="w-11 leading-6">背景：</View>
        <AtSegmentedControl
          values={["浅", "深"]}
          current={bgColor}
          onClick={(index) => {
            setBgColor(index);
          }}
        ></AtSegmentedControl>
      </View>
    </View>
  );

  return (
    <AtModal isOpened={settingVisible} closeOnClickOverlay={false}>
      <AtModalHeader>设置</AtModalHeader>
      <AtModalContent>{content}</AtModalContent>
      <AtModalAction>
        {" "}
        <Button onClick={onCancel}>取消</Button> <Button>确定</Button>{" "}
      </AtModalAction>
    </AtModal>
  );
}

export default SettingModal;
