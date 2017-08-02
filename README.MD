#react的学习
    react-native init FirstReact --version 0.44.3 //初始化需要指定版本,否则可能会出错
    cd FirstReact
    //运行ios react-native run-ios
#this.props.name 的一些使用
    Component 成分

#导入数据的时候需要加上./ 或者其他路径，不能单纯 ''这个会报错
    例如：./Demo1
#在ios 点击Command+D 可以选中 调试模式，chorme：  http://localhost:8081/debugger-ui
#export default 导出组件
#FlatList 循环数据
#SectionList 字母排序

#变量使用let 来进行定义

#使用启动页插件：在本来的项目中添加：
npm i react-native-app-intro --save
    githug 地址：https://github.com/FuYaoDe/react-native-app-intro
搜索框插件：
安装：npm install react-native-search-bar --save
#顶部导航条安装：
npm install react-native-scrollable-tab-view --save

疑难杂症:
一运行就报错 :react.children.only expected to receive a single react element child
    ##TabNavigator.Item 或者 TabBarIOS.Item 必须有且只有一个组件，说白了就是需要有子组件的存在，并且只存在一个

#发现一个很大RN插件的网址：
https://js.coach/react-native/react-native-voice?page=3