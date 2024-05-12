export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/HistoryBill/index",
    "pages/Statistics/index",
    "pages/Homepage/index",
  ],
  tabBar: {
    list: [
      {
        // iconPath: "resource/latest.png",
        // selectedIconPath: "resource/lastest_on.png",
        pagePath: "pages/index/index",
        text: "记录收支",
      },
      {
        // iconPath: "resource/hotest.png",
        // selectedIconPath: "resource/hotest_on.png",
        pagePath: "pages/HistoryBill/index",
        text: "历史账单",
      },
      {
        // iconPath: "resource/node.png",
        // selectedIconPath: "resource/node_on.png",
        pagePath: "pages/Statistics/index",
        text: "统计",
      },
      {
        // iconPath: "resource/node.png",
        // selectedIconPath: "resource/node_on.png",
        pagePath: "pages/Homepage/index",
        text: "个人主页",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
