
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"navigationBar":{},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"英语练习","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.8.4","entryPagePath":"pages/login","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#000","selectedColor":"#DC143C","borderStyle":"black","blurEffect":"none","fontSize":"15px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#fff","list":[{"text":"首页","pagePath":"pages/home","iconPath":"/static/icons/home.png","selectedIconPath":"/static/icons/home-selected.png"},{"text":"英语练习","pagePath":"pages/exercise/index","iconPath":"/static/icons/text.png","selectedIconPath":"/static/icons/text-selected.png"},{"text":"文章管理","pagePath":"pages/essay_control/index","iconPath":"/static/icons/control.png","selectedIconPath":"/static/icons/control-selected.png"},{"text":"我的","pagePath":"pages/user_control/index","iconPath":"/static/icons/user.png","selectedIconPath":"/static/icons/user-selected.png"}],"selectedIndex":0,"shown":true},"fallbackLocale":"zh-Hans","locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/login","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"titleText":"登录","type":"default"},"isNVue":false}},{"path":"pages/register","meta":{"navigationBar":{"titleText":"注册","type":"default"},"isNVue":false}},{"path":"pages/home","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"首页","type":"default"},"isNVue":false}},{"path":"pages/essay_control/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"文章管理","type":"default"},"isNVue":false}},{"path":"pages/exercise/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"英语练习","type":"default"},"isNVue":false}},{"path":"pages/user_control/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"navigationBar":{"titleText":"我的","type":"default"},"isNVue":false}},{"path":"pages/exercise/ninegrid","meta":{"navigationBar":{"style":"custom","type":"default","autoBackButton":false},"isNVue":false}},{"path":"pages/exercise/blank","meta":{"navigationBar":{"style":"custom","type":"default","autoBackButton":false},"isNVue":false}},{"path":"pages/user_control/user_info","meta":{"navigationBar":{"titleText":"个人信息","type":"default"},"isNVue":false}},{"path":"pages/user_control/change_password","meta":{"navigationBar":{"titleText":"修改密码","type":"default"},"isNVue":false}},{"path":"pages/essay_control/select_word","meta":{"navigationBar":{"titleText":"句子选词","type":"default"},"isNVue":false}},{"path":"pages/essay_control/sentence_audio","meta":{"navigationBar":{"titleText":"句子音频","type":"default"},"isNVue":false}},{"path":"pages/user_control/avatar","meta":{"navigationBar":{"titleText":"头像修改","type":"default"},"isNVue":false}},{"path":"pages/user_control/my_score/index","meta":{"navigationBar":{"titleText":"我的成绩","type":"default"},"isNVue":false}},{"path":"pages/user_control/my_score/detail","meta":{"navigationBar":{"titleText":"答题详情","type":"default"},"isNVue":false}},{"path":"pages/user_control/change_info","meta":{"navigationBar":{"style":"custom","type":"default","autoBackButton":false},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  