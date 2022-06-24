export default [
  {
    url: "/home/list",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "操作成功",
        data: []
      };
    }
  }
];
