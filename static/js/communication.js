/*
   *
   * @客户端通信
   *
   * @params requesttype
   * {
   *   0 : 客户端首页调用c++回调获取token,
   *   2 : 进入房间,
   *   5 : 房间内调用c++回调获取token,
   *   9 : 学习力测评,
   *   10: 退出登录,
   *   11: 设备测试,
   *   12: 调用C++上传课件
   *   13: 进入官网
   *   14: 密码修改成功重新登录
   *   15: 刷新
   *   16: 意见反馈
   *   17: 技术支持接入
   *   18: 远程协助
   * }
   *
   * */

  const requestid = (location.hash == '#/upload')?5:0,
        args = '{"requesttype" : '+ requestid +', "jscallback" : "callback"}';

  // 调用QC客户端
  function sendData(command) {
    QCefClient.invokeMethod("callClientFun",command);
    if (typeof(QCefClient) == 'undefined') {
      return;
    }
    QCefClient.addEventListener("callback", callback);
    QCefClient.addEventListener("uploadCallback", uploadCallback);
    QCefClient.addEventListener("refreshCallback", refreshCallback);
    QCefClient.addEventListener("enterCallback", enterCallback);
  };
  sendData(args);

  // 调用QC客户端回调
  // function callback(args) {
  //   let response = args["args"];
  //   let res = JSON.parse(response),
  //     token = res.token,
  //     id = res.role,
  //     isFirst = res.isFirst,
  //     user = res.username;
  //   sessionStorage.setItem("token", token);
  //   sessionStorage.setItem("id", id);
  //   sessionStorage.setItem("user", user);
  //   if(isFirst === undefined){
  //     isFirst = false;
  //   }
  //   sessionStorage.setItem("isFirst", isFirst);
  //   if(isFirst){ // 首次登录强制修改密码
  //     window.location.hash = '#/changePassword';
  //   }
  // };


  // 客户端调用上传过程回调
  function uploadCallback(res){
    return window._client_user_web_methods_.uploadProgess(res);
  }

  // 客户端调用进入教师回调
  function enterCallback(res){
    return window._client_user_web_methods_.enterProgess(res);
  }


  // 客户端调用刷新回调
  function refreshCallback(res){
    return window._client_user_web_methods_.refresh(res);
  }


  // 复制
  function copyText () {
    return window._client_user_web_methods_.copyText();
  }


