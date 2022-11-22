/* eslint-disable @typescript-eslint/no-shadow */
import { indexModel } from "@/models";
import { findLastIndex } from "@/utils/lastIndex";
import { Button, Canvas, Picker, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from "taro-ui";
import "taro-ui/dist/style/components/segmented-control.scss";
import { chordSetting, typeArr } from "./config";

function SettingModal() {
  const [chord, setChord] = useState([0, 0]);
  const [firstTab, setFirstTab] = useState(1);
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
    ctx.setLineWidth(2);
    ctx.rect(15, 15, width - 25, height - 20);
    for (let i = 1; i <= 4; i++) {
      ctx.moveTo(15 + i * xDiff, 15);
      ctx.lineTo(15 + i * xDiff, height - 20 + 15);
      ctx.moveTo(15, 15 + i * yDiff);
      ctx.lineTo(width - 25 + 15, 15 + i * yDiff);
    }
    ctx.stroke();
  };

  useEffect(() => {
    setTimeout(() => {
      const _ctx = Taro.createCanvasContext("canvas");
      if (_ctx) {
        const canvas = (_ctx as any).canvas;
        const dpr = Taro.getSystemInfoSync().pixelRatio;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        _ctx.scale(dpr, dpr);
        setCtx(_ctx);
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (ctx) {
      const canvas = (ctx as any).canvas;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const xDiff = (width - 25) / 5;
      const yDiff = (height - 20) / 5;

      ctx.setFillStyle("black");
      drawBG(ctx, width, height);

      const target = chordSetting[range[0][chord[0]]][range[1][chord[1]]];
      if (!target) return;
      setFirstTab(target.firstTab);

      if (target.finger) {
        for (let i = 1; i <= 4; i++) {
          if (target.finger.filter((item) => item === i).length > 1) {
            const x = target.finger.findIndex((item) => item === i)! + 1;
            const span = findLastIndex(target.finger, i) - x + 2;
            const y = target.chords[x - 1];
            const xPos = 15 + (x - 1) * xDiff;
            const yPos = 15 + y * yDiff - 0.5 * yDiff;
            ctx.beginPath();
            ctx.setLineWidth(4);
            ctx.moveTo(xPos, yPos);
            ctx.lineTo(xPos + (span - 1) * xDiff, yPos);
            ctx.stroke();
            ctx.setLineWidth(2);
          }
        }
      }

      target.chords.forEach((item, index) => {
        const xPos = 15 + index * xDiff;
        if (item === -1) {
          ctx.beginPath();
          ctx.moveTo(xPos - 3, 2);
          ctx.lineTo(xPos + 3, 8);
          ctx.moveTo(xPos - 3, 8);
          ctx.lineTo(xPos + 3, 2);
          ctx.stroke();
        } else if (item === 0) {
          ctx.beginPath();
          ctx.moveTo(xPos + 3, 5);
          ctx.arc(xPos, 5, 3, 0, 2 * Math.PI);
          ctx.stroke();
        } else {
          const yPos = 15 + item * yDiff - 0.5 * yDiff;
          ctx.beginPath();
          ctx.moveTo(xPos + 6, yPos);
          ctx.arc(xPos, yPos, 6, 0, 2 * Math.PI);
          ctx.fill();
          if (target.finger?.[index]) {
            ctx.beginPath();
            ctx.setFillStyle("white");
            ctx.font = "9px sans-serif";
            ctx.fillText(target.finger[index].toString(), xPos - 2.5, yPos + 3);
            ctx.setFillStyle("black");
          }
        }
      });

      ctx.draw();
    }
  }, [ctx, chord, range]);

  const onCancel = () => {
    indexModel.actions.update({ chordVisible: false });
  };

  const content = (
    <View className="relative">
      <View className="absolute left-12 top-3">{firstTab}</View>
      <Canvas
        className="w-24 h-24 mx-auto"
        id="canvas"
        canvasId="canvas"
      ></Canvas>
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
          <View className="inline-block w-12 border border-solid mx-1 rounded-sm px-1">
            {range[0][chord[0]]}
          </View>
          <View className="inline-block w-12 border border-solid mx-1 rounded-sm px-1">
            {range[1][chord[1]]}
          </View>
        </Picker>
      </View>
    </View>
  );

  return (
    <AtModal isOpened={chordVisible} closeOnClickOverlay={false}>
      <AtModalHeader>查和弦</AtModalHeader>
      <AtModalContent>{content}</AtModalContent>
      <AtModalAction>
        {" "}
        <Button onClick={onCancel}>关闭</Button>{" "}
      </AtModalAction>
    </AtModal>
  );
}

export default SettingModal;
