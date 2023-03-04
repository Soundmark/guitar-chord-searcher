import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";

export default function Index() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    Taro.request({
      url: "https://www.ultimate-guitar.com/search.php?title=mika&page=1&type=300",
      success: (res) => {
        let data = res.data;
        let index = 1;
        while (data.match(/<article(?!\d)/)) {
          data = data
            .replace(/(<article)(?!\d)/, `$1${index}`)
            .replace(/(<\/article)>/, `$1${index}>`);
          index++;
        }
        const _list = data
          .match(/<article(\d+)(.|\n)*<\/article\1>/g)
          .map((item) => {
            if (!item.includes("CRD")) return null;
            return {
              artist: item.match(/(?<=<b>).*(?=<\/b>)/)[0],
              rate:
                item.match(
                  /(?<=<span class="ig-list--rating text-left">).*(?=<\/span>)/
                )?.[0] || 0,
              song: item
                .match(
                  /(?<=<a(.|\n)*class="js-link-song"(.|\n)*>\s*).*(?=\s*<\/a>)/
                )?.[0]
                ?.trim(),
              link: item.match(/(?<=<a(.|\n)*href=").*(?=")/)?.[0],
            };
          })
          .filter(Boolean);
        setList(_list);
      },
    });
  }, []);

  return (
    <View>
      {list.map((item, index) => (
        <View
          key={index}
          className="px-4 py-2 border-0 border-t border-solid border-gray-200"
        >
          <View className="text-base">{item.song}</View>
          <View className="text-xs">artist: {item.artist}</View>
          <View className="w-20 text-xs">rate: {item.rate}</View>
        </View>
      ))}
    </View>
  );
}
