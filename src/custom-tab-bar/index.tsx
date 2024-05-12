import React, { useState, useCallback } from "react";
import { CoverView, CoverImage } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

const Index = () => {
  const [state, setState] = useState({
    selected: 0,
    color: "#000000",
    selectedColor: "#DC143C",
    list: [
      {
        pagePath: "/index/index",
        text: "记录收支",
      },
      {
        pagePath: "pages/historyBill/index",
        // selectedIconPath: "../images/tabbar_cate_on.png",
        // iconPath: "../images/tabbar_cate.png",
        text: "历史账单1",
      },
      {
        pagePath: "../pages/Statistics/index",
        text: "统计",
      },
      {
        pagePath: "../pages/Homepage/index",
        text: "个人主页",
      },
    ],
  });

  const { list, selected, color, selectedColor } = state;

  const switchTab = useCallback(
    (index, url) => {
      setSelected(index);
      Taro.switchTab({ url });
    },
    [state]
  );

  const setSelected = useCallback((idx) => {
    setState((prevState) => ({ ...prevState, selected: idx }));
  }, []);

  return (
    <CoverView className="tab-bar">
      {list.map((item, index) => (
        <CoverView
          key={index}
          className="tab-bar-item"
          onClick={() => switchTab(index, item.pagePath)}
        >
          <CoverImage
            src={selected === index ? item.selectedIconPath : item.iconPath}
          />
          <CoverView
            style={{ color: selected === index ? selectedColor : color }}
          >
            {item.text}
          </CoverView>
        </CoverView>
      ))}

      {/* <AtTabBar fixed tabList={list} onClick={switchTab} current={0} /> */}
    </CoverView>
  );
};

export default Index;
