/* eslint-disable @typescript-eslint/no-shadow */
import ChordLibrary from "@/components/ChordLibrary";
import { chordSetting, typeArr } from "@/components/ChordLibrary/config";
import { indexModel } from "@/models";
import { Dialog } from "@antmjs/vantui";
import { Picker, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

function SettingModal() {
  const [chord, setChord] = useState([0, 0]);
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

  const onCancel = () => {
    indexModel.actions.update({ chordVisible: false });
  };

  const content = (
    <View className="relative py-4">
      <ChordLibrary chord={chord}></ChordLibrary>
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
