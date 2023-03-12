import { indexModel } from "@/models";
import { Search } from "@antmjs/vantui";
import { Loading } from "@antmjs/vantui/es/loading";
import "@antmjs/vantui/es/loading/index.less";
import { PowerScrollView } from "@antmjs/vantui/es/power-scroll-view";
import "@antmjs/vantui/es/power-scroll-view/index.less";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.less";
import { dealListData, getOgUrlInfo } from "./utils";

let page = 1;
// 处理重定向情况
let isRedirect = false;
let realTitle = "";

export default function Index() {
  const { searchValue } = useSelector(indexModel.selector);
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(true);

  const fetchData = () => {
    if (searchValue) {
      return new Promise((resolve, reject) => {
        setLoading(true);
        Taro.request({
          url: isRedirect
            ? `https://www.ultimate-guitar.com/search.php?order=myweight&page=${page}&spelling=${searchValue}&tab_type_group=text&title=${realTitle}&type%5B1%5D=300`
            : `https://www.ultimate-guitar.com/search.php?title=${searchValue}&page=${page}&type=300`,
          success: (res) => {
            const ogurlInfo = getOgUrlInfo(res.data);
            if (ogurlInfo.isRedirect) {
              isRedirect = true;
              realTitle = ogurlInfo.title;
            }
            const _list = dealListData(res.data);
            if (!_list?.length || _list.length < 50) {
              setIsFinished(true);
            }

            if (_list?.length) {
              if (page === 1) {
                setList(_list);
              } else {
                setList(list.concat(_list));
              }
            }
            setLoading(false);
            resolve(_list);
          },
          fail: () => {
            setLoading(false);
            reject();
          },
        });
      });
    }
  };

  useEffect(() => {
    setIsFinished(false);
    fetchData();
  }, []);

  const LoadingComp = (
    <View className="text-center">
      <Loading size="50rpx">正在查找，等一哈~</Loading>
    </View>
  );

  return (
    <View className="-p-List h-full overflow-y-auto">
      <Search
        value={searchValue}
        onChange={(e) => {
          indexModel.actions.update({ searchValue: e.detail });
        }}
        placeholder="输入搜索吉他谱"
        onSearch={() => {
          if (!searchValue) return;
          setIsFinished(false);
          setList([]);
          page = 1;
          isRedirect = false;
          realTitle = "";
          fetchData();
        }}
      ></Search>
      {loading && !list.length ? (
        LoadingComp
      ) : (
        <PowerScrollView
          style="height:calc(100% - 108rpx)"
          refresherEnabled={false}
          renderLoading={LoadingComp}
          finishedText="没有了，哎~"
          finished={isFinished}
          emptyDescription="没有找到，呜呜呜~"
          onScrollToLower={() => {
            if (!isFinished) {
              page++;
              return fetchData();
            }
          }}
        >
          {list.map((item, index) => (
            <View
              key={index}
              className="px-4 py-2 border-0 border-t border-solid border-gray-200"
              onClick={() => {
                indexModel.actions.update({ chordUrl: item.link });
                Taro.navigateTo({ url: "/pages/Chord/index" });
              }}
            >
              <View className="text-base">{item.song}</View>
              <View className="text-xs">artist: {item.artist}</View>
              <View className="w-20 text-xs">rate: {item.rate}</View>
            </View>
          ))}
        </PowerScrollView>
      )}
    </View>
  );
}
