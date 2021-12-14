// login.js 通过post请求返回一个登录结果

export default [
  {
    url: "/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "操作成功",
        token: "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImY1N2U3OWI0LWNmZTMtNGMxZS1iNjI2LWRlM2UxMTNkYjBkOSJ9.nfRBs-hhP9fuHf9Aozz8VzPpQ44e4nCKMivg27pRth3BvxvVOyav0Ec6vI_KlUOuCnJLU2RebdmzkA584GdXtw"
      };
    }
  }
]