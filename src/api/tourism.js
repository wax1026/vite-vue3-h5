import request from "@/utils/request";

// 获取通用的配置
export const selectCommonDic = (params = {}, data) => {
  return request({
    url: "/JSCTO_SCENIC_COMFORT_MS/gateway/ms_scepassflow/api/selectCommonDic/multi",
    method: "POST",
    params,
    data
  });
};

// 获取通用的配置
export const queryPCPassFlow = (params = {}, data) => {
  return request({
    url: "/JSCTO_SCENIC_COMFORT_MS/gateway/ms_scepassflow/api/queryPCPassFlow",
    method: "GET",
    params,
    data
  });
};

// 景区详情
export const queryScenicScopeDetail = (params = {}, data) => {
  return request({
    url: `/JSCTO_SCENIC_COMFORT_MS/gateway/ms_scemanage/api/queryScenicScopeDetail/${params.id}`,
    method: "GET"
    // params,
    // data
  });
};
