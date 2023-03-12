import { indexModel } from "@/models";
import { Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dealChordData } from "./utils";

interface TextValue {
  type: "chord" | "text";
  value: string | string[];
}

function Index() {
  const { chordUrl } = useSelector(indexModel.selector);
  const [text, setText] = useState<TextValue[]>([]);

  useEffect(() => {
    if (chordUrl) {
      Taro.showLoading({ title: "加载中，等一哈~" });
      Taro.request({
        // url: "https://tabs.ultimate-guitar.com/tab/linkin-park/leave-out-all-the-rest-chords-520958",
        url: chordUrl,
        success: (res) => {
          Taro.hideLoading();
          if (res.data) {
            const data = dealChordData(res.data);

            if (data) {
              setText(
                data.split("\\r\\n").map((item) => {
                  if (item.includes("[ch]")) {
                    return {
                      type: "chord",
                      value: item.split(/\[\/*ch\]/).filter(Boolean),
                    };
                  }
                  return {
                    type: "text",
                    value: item,
                  };
                })
              );
            }
          }
        },
        fail: () => {
          Taro.hideLoading();
        },
      });
    }
  }, [chordUrl]);

  return (
    <View className="h-full w-full overflow-auto">
      {text.map((item, index) => (
        <View
          key={index}
          className="py-1 text-base flex px-2 whitespace-nowrap w-max"
        >
          {item.type === "chord" ? (
            (item.value as string[]).map((ele, i) => {
              if (!ele.match(/^\w/)) {
                return (
                  <Text space="ensp" key={i}>
                    {ele}
                  </Text>
                );
              }
              return (
                <View
                  key={i}
                  className="bg-slate-200"
                  onClick={(e) => {
                    console.log(e);
                  }}
                >
                  {ele}
                </View>
              );
            })
          ) : (
            <Text space="nbsp">{item.value}</Text>
          )}
        </View>
      ))}
      <View className="h-8"></View>
    </View>
  );
}

export default Index;
