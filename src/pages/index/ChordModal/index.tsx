/* eslint-disable @typescript-eslint/no-shadow */
import { indexModel } from "@/models";
import { findLastIndex } from "@/utils/lastIndex";
import { Dialog, Icon } from "@antmjs/vantui";
import { Picker, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ChordSetting, chordSetting, typeArr } from "./config";

type Target = ChordSetting[string][string];

function SettingModal() {
  const [chord, setChord] = useState([0, 0]);
  const [firstTab, setFirstTab] = useState(1);
  const [target, setTarget] = useState<Target | null>(null);
  const [ctx, setCtx] = useState<Taro.CanvasContext | null>(null);
  const { chordVisible } = useSelector(indexModel.selector);

  const range = useMemo(() => {
    const range1 = Object.keys(chordSetting);
    return [range1, typeArr];
  }, []);

  const drawBG = (ctx: Taro.CanvasContext, width: number, height: number) => {
    const xDiff = (width - 25) / 5;
    const yDiff = (height - 20) / 5;
    ctx.beginPath();
    // ctx.setLineWidth(2);
    ctx.rect(15, 15, width - 25, height - 20);
    for (let i = 1; i <= 4; i++) {
      ctx.moveTo(15 + i * xDiff, 15);
      ctx.lineTo(15 + i * xDiff, height - 20 + 15);
      ctx.moveTo(15, 15 + i * yDiff);
      ctx.lineTo(width - 25 + 15, 15 + i * yDiff);
    }
    ctx.stroke();
  };

  // useEffect(() => {
  //   if (ctx) {
  //     const canvas = (ctx as any).canvas;
  //     const width = canvas.width;
  //     const height = canvas.height;
  //     const xDiff = (width - 25) / 5;
  //     const yDiff = (height - 20) / 5;

  //     // ctx.setFillStyle("black");
  //     drawBG(ctx, width, height);

  //     const target = chordSetting[range[0][chord[0]]][range[1][chord[1]]];
  //     if (!target) return;
  //     setFirstTab(target.firstTab);

  //     if (target.finger) {
  //       for (let i = 1; i <= 4; i++) {
  //         if (target.finger.filter((item) => item === i).length > 1) {
  //           const x = target.finger.findIndex((item) => item === i)! + 1;
  //           const span = findLastIndex(target.finger, i) - x + 2;
  //           const y = target.chords[x - 1];
  //           const xPos = 15 + (x - 1) * xDiff;
  //           const yPos = 15 + y * yDiff - 0.5 * yDiff;
  //           ctx.beginPath();
  //           // ctx.setLineWidth(4);
  //           ctx.moveTo(xPos, yPos);
  //           ctx.lineTo(xPos + (span - 1) * xDiff, yPos);
  //           ctx.stroke();
  //           // ctx.setLineWidth(2);
  //         }
  //       }
  //     }

  //     target.chords.forEach((item, index) => {
  //       const xPos = 15 + index * xDiff;
  //       if (item === -1) {
  //         ctx.beginPath();
  //         ctx.moveTo(xPos - 3, 2);
  //         ctx.lineTo(xPos + 3, 8);
  //         ctx.moveTo(xPos - 3, 8);
  //         ctx.lineTo(xPos + 3, 2);
  //         ctx.stroke();
  //       } else if (item === 0) {
  //         ctx.beginPath();
  //         ctx.moveTo(xPos + 3, 5);
  //         ctx.arc(xPos, 5, 3, 0, 2 * Math.PI);
  //         ctx.stroke();
  //       } else {
  //         const yPos = 15 + item * yDiff - 0.5 * yDiff;
  //         ctx.beginPath();
  //         ctx.moveTo(xPos + 6, yPos);
  //         ctx.arc(xPos, yPos, 6, 0, 2 * Math.PI);
  //         ctx.fill();
  //         if (target.finger?.[index]) {
  //           ctx.beginPath();
  //           // ctx.setFillStyle("white");
  //           ctx.font = "9px sans-serif";
  //           ctx.fillText(target.finger[index].toString(), xPos - 2.5, yPos + 3);
  //           // ctx.setFillStyle("black");
  //         }
  //       }
  //     });

  //     // ctx.draw();
  //   }
  // }, [ctx, chord, range]);

  useEffect(() => {
    const target = chordSetting[range[0][chord[0]]][range[1][chord[1]]];
    if (!target) return;
    setFirstTab(target.firstTab);
    setTarget(target);
  }, [chord, range]);

  const onCancel = () => {
    indexModel.actions.update({ chordVisible: false });
  };

  const content = (
    <View className="relative py-4">
      <View className="absolute left-28 top-4">{firstTab}</View>
      {/* <Canvas className="w-24 h-24 mx-auto" id="canvas" type="2d"></Canvas> */}
      <View className="w-24 h-24 mx-auto my-1">
        <View className="h-full w-full relative">
          <View className="absolute -top-3 w-full">
            {target?.chords.map((item, index) =>
              item > 0 ? null : (
                <Icon
                  key={index}
                  name={item === 0 ? "circle" : "cross"}
                  size="0.5rem"
                  className="transform -translate-x-1/2"
                  style={`position:absolute;font-weight:bolder;left:${
                    index * 1.2
                  }rem;`}
                ></Icon>
              )
            )}
          </View>
          {new Array(6).fill(0).map((item, index) => {
            return (
              <View
                key={`${index}`}
                className="w-[0.2rem] h-full absolute bg-black transform -translate-x-1/2"
                style={`left:${index * 1.2}rem;`}
              ></View>
            );
          })}
          {new Array(6).fill(0).map((item, index) => {
            return (
              <View
                key={index}
                className="h-[0.2rem] absolute bg-black transform -translate-y-1/2"
                style={`top:${
                  index * 1.2
                }rem;width:calc(100% + 0.2rem);left:-0.1rem;`}
              ></View>
            );
          })}
          {new Array(4).fill(0).map((item, index) => {
            if (!target) return null;
            const i = index + 1;
            if (target.finger.filter((item) => item === i).length > 1) {
              const x = target.finger.findIndex((item) => item === i)! + 1;
              const span = findLastIndex(target.finger, i) - x + 2;
              const y = target.chords[x - 1];
              return (
                <View
                  key={index}
                  className="h-[0.3rem] bg-black absolute transform -translate-y-1/2"
                  style={`width:${(span - 1) * 1.2}rem;top:${
                    (y - 1) * 1.2 + 0.6
                  }rem;left:${(x - 1) * 1.2 - 0.1}rem;`}
                ></View>
              );
            }
            return null;
          })}
          {target?.chords.map((item, index) => {
            if (item <= 0) return null;
            return (
              <View
                key={index}
                className="bg-black rounded-full w-[0.6rem] h-[0.6rem] absolute transform -translate-x-1/2 -translate-y-1/2"
                style={`left:${index * 1.2}rem;top:${
                  (item - 1) * 1.2 + 0.6
                }rem;`}
              >
                <View className="text-white transform scale-50 h-full w-full text-center font-bold leading-[0.5rem]">
                  {target.finger[index]}
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View className="text-center">
        <Picker
          mode="multiSelector"
          range={range}
          value={chord}
          onChange={(e) => {
            setChord(e.detail.value);
          }}
          className="inline-block my-2"
        >
          <View className="inline-block w-20 border border-solid mx-1 rounded-sm px-1">
            {range[0][chord[0]]}
          </View>
          <View className="inline-block w-20 border border-solid mx-1 rounded-sm px-1">
            {range[1][chord[1]]}
          </View>
        </Picker>
      </View>
    </View>
  );

  return (
    <Dialog
      title="查和弦"
      show={chordVisible}
      onClose={onCancel}
      confirmButtonText="关闭"
    >
      {content}
    </Dialog>
  );
}

export default SettingModal;
