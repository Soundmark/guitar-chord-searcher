import { findLastIndex } from "@/utils/lastIndex";
import { Icon } from "@antmjs/vantui";
import { View } from "@tarojs/components";
import { useEffect, useMemo, useState } from "react";
import { ChordSetting, chordSetting, typeArr } from "./config";

type Target = ChordSetting[string][string];

interface P {
  chord: number[];
}

function ChordLibrary({ chord }: P) {
  const [firstTab, setFirstTab] = useState(1);
  const [target, setTarget] = useState<Target | null>(null);

  const range = useMemo(() => {
    const range1 = Object.keys(chordSetting);
    return [range1, typeArr];
  }, []);

  useEffect(() => {
    const _target = chordSetting[range[0][chord[0]]][range[1][chord[1]]];
    if (!_target) return;
    setFirstTab(_target.firstTab);
    setTarget(_target);
  }, [chord, range]);

  return (
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
          {new Array(4).fill(0).map((_, index) => {
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
    </View>
  );
}

export default ChordLibrary;
