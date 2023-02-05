/* eslint-disable @typescript-eslint/no-shadow */
import { indexModel } from "@/models";
import { createInterval, removeInterval } from "@/utils/interval";
import { Button, Dialog, Slider } from "@antmjs/vantui";
import { Picker, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import a from "./sound.mp3";

const beatArr = new Array(12).fill(0).map((item, index) => index + 1);
let glitterRecord = -1;

function SettingModal() {
  const [ctx1, setCtx1] = useState<Taro.InnerAudioContext | null>(null);
  const [bpm, setBpm] = useState(120);
  const [beat, setBeat] = useState(3);
  const [glitter, setGlitter] = useState(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { metronomeVisible } = useSelector(indexModel.selector);

  useEffect(() => {
    // @ts-ignore
    const innerAudioContext1 = Taro.createInnerAudioContext({
      useWebAudioImplement: true,
    });
    innerAudioContext1.src = a;
    setCtx1(innerAudioContext1);
  }, []);

  const onCancel = () => {
    indexModel.actions.update({ metronomeVisible: false });
  };

  const handleGlitter = () => {
    setGlitter(glitterRecord);
    setTimeout(() => {
      setGlitter(-1);
    }, (500 * 120 * 0.5) / bpm);
  };

  const loop = () => {
    createInterval(() => {
      ctx1?.play();
      if (glitterRecord < beat) {
        glitterRecord++;
      } else {
        glitterRecord = 0;
      }
      handleGlitter();
    }, (500 * 120) / bpm);
  };

  const clearLoop = () => {
    removeInterval();
  };

  const onPlayingBpmChange = () => {
    if (isPlaying) {
      clearLoop();
      loop();
    }
  };

  const content = (
    <View className="relative px-4 py-4">
      <Picker
        className="py-2"
        value={beat}
        range={beatArr}
        onChange={(e) => {
          setBeat(Number(e.detail.value));
        }}
      >
        <View className="text-center">
          {new Array(beat + 1).fill(0).map((_item, index) => (
            <View
              key={`${new Date().getTime()}_${index}`}
              className={`w-1 h-2 mx-1 inline-block ${
                glitter === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></View>
          ))}
        </View>
      </Picker>
      <View className="text-center my-2">{bpm} BPM</View>
      <View className="flex items-center mt-4 mb-6">
        <View
          className="at-icon at-icon-subtract w-4 h-4 text-center"
          style="line-height:1rem;"
          onClick={() => {
            setBpm((val) => val - 1);
            onPlayingBpmChange();
          }}
        ></View>
        <View style="width:calc(100% - 2rem);">
          <Slider
            min={40}
            max={220}
            value={bpm}
            onDrag={(e) => {
              setBpm(e.detail.value);
              onPlayingBpmChange();
            }}
            onChange={(e) => {
              setBpm(e.detail);
              onPlayingBpmChange();
            }}
          ></Slider>
        </View>
        <View
          className="at-icon at-icon-add w-4 h-4 text-center"
          style="line-height:1rem;"
          onClick={() => {
            setBpm((val) => val + 1);
            onPlayingBpmChange();
          }}
        ></View>
      </View>
      <Button
        type={isPlaying ? "danger" : "info"}
        block
        onClick={() => {
          if (isPlaying) {
            clearLoop();
          } else {
            ctx1?.play();
            glitterRecord = 0;
            handleGlitter();
            loop();
          }
          setIsPlaying((val) => !val);
        }}
      >
        {!isPlaying ? "开始" : "停止"}
      </Button>
    </View>
  );

  return (
    <Dialog
      title="节拍器"
      show={metronomeVisible}
      onClose={onCancel}
      confirmButtonText="关闭"
    >
      {content}
    </Dialog>
  );
}

export default SettingModal;
