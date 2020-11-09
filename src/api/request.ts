import * as Api from "./api";
import * as Inter from "./inter.d";

//request.ts 获取header头 返回值是RequestHeader类型
const getRequestHeader = (): Inter.RequestHeader => {
  let token: string = uni.getStorageSync("token");
  return token
    ? {
        "content-type": "application/x-www-form-urlencoded",
        token: token
      }
    : {
        "content-type": "application/x-www-form-urlencoded"
      };
};

// 使用默认参数，当数据不传入指定字段时替代
const NormalRquestData: Inter.RequestBase = {
  url: Api.DOMAIN, // 默认请求地址
  method: "GET", // 默认get请求
  header: {
    // 默认使用的header头
    "content-type": "application/x-www-form-urlencoded",
    token: ""
  },
  data: {}, // 默认没有参数，传入空对象
  loading: true, //默认开启loading层
  mask: true, //请求时不需要点击
  title: "数据加载中", //loading提示文字
  failToast: false // 一般我们会处理相应业务逻辑，就不直接提示阻断流程
};
const $http = (reqData: Partial<Inter.RequestBase>): Promise<any> => {
  // 将不存在的参数字段使用默认值进行替换
  let req: Inter.RequestBase = { ...NormalRquestData, ...reqData };
  //返回Promise
  return new Promise((resolve, reject) => {
    //检测是否开启loading层 是否打开msak
    if (req.loading)
      uni.showLoading({
        title: req.title ? req.title : "数据加载中..."
      });
    uni.request({
      url: req.url,
      method: req.method,
      data: req.data,
      header: req.header,
      success: res => {
        if (res.statusCode === 200) {
          resolve(res.data); // 成功
        } else {
          // 如果失败 检测是否直接提示信息
          if (req.failToast) uni.showToast({ title: "网络不好，请求失败！" });
          reject(res); // 失败
        }
      },
      fail: err => {
        // 如果失败 检测是否直接提示信息
        if (req.failToast) uni.showToast({ title: "网络不好，请求失败！" });
        reject(err);
      },
      complete: com => {
        // 请求结束 关闭loading层
        if (req.loading) uni.hideLoading();
      }
    });
  });
};

// 调用封装方法 返回promise对象 得到获取到的数据
export const getTopics = (): Promise<any> => {
  return $http({
    url: Api.topics,
    method: "GET"
  });
};
