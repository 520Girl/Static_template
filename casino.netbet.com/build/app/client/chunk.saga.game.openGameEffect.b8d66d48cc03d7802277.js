/*! chunkhash:b8d66d48cc03d7802277, name:saga.game.openGameEffect, filebase:chunk.saga.game.openGameEffect.b8d66d48cc03d7802277.js, query:, file:chunk.saga.game.openGameEffect.b8d66d48cc03d7802277.js */"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[23349],{17328:(e,_,l)=>{l.d(_,{t:()=>i});let i=function(e){return e.GAME_LOGIN="game-login",e.SEARCH_GAMES="search-games",e.SIGN_UP_PRESENTATION="sign-up-presentation",e.PROMOTION_TC="promotion-tc",e.PROMOTION_DETAILS="promotion-details",e.TC="tc",e.PRIVACY_POLICY="privacy-policy",e.PAY_PLAY_TC="pay_play_tc",e.PAY_PLAY_PRIVACY_POLICY="pay_play_privacy-policy",e.REGISTRATION="registration",e.LOGIN="login",e.FORGOT_PASSWORD="forgot_password",e.RESET_PASSWORD="reset_password",e.PAY_AND_PLAY="pay_and_play",e.GAME_INFO="game_info",e.USER_SETTINGS="user-settings",e.USER_WALLET="user-wallet",e.AVAILABLE_JACKPOTS="available-jackpots",e.JACKPOT_TC="jackpot-tc",e.TEST="test",e.AVAILABLE_OFFERS="available-offers",e.USER_ACCOUNT="user-account",e.USER_LIMITS="user-limits",e.LANGUAGE_SELECTION="language-selection",e.XTREME_PUSH_INBOX="xtreme-push-inbox",e.CONTINUE_PLAYING="continue_playing",e}({})},81662:(e,_,l)=>{l.r(_),l.d(_,{default:()=>D,openGameEffect:()=>M});var i=l(10354),t=l(8338),E=l(24970),a=l(32857),A=l(70136),n=l(48274),T=l(50300),O=l(55560),o=l(94943),y=l(32465),r=l(24602),I=l(48014),s=l(69272),S=l(14149),d=l(34955),L=l(25783),R=l(49156),C=l(22695),p=l(24767),N=l(46818),g=l(58314),u=l(63042),c=l(43743),P=l(17328);let M=(0,i.R)(t.r.OPEN_GAME,function(e){let{payload:{game_identifier:_,mode:l,source:i}}=e;return function*(){let e=yield(0,E.Ys)(),t=(0,n.Qb)(e),g=(0,T.eD)(e),M=(0,T.dE)(e),D=(0,T.p8)(e),G=(0,C.So)(e),f=(0,T.nh)(e),Y=(0,u.py)(e),U=(0,o.jq)(e),z=(0,r.Mj)(e,{flag:s.W.LOAD_MOBILE_IFRAME_GAMES}),m=(0,r.Mj)(e,{flag:s.W.LOTTO_DEV_FIXES}),h=(0,N.kc)(e,{game_identifier:_});if(h&&(yield(0,E.al)()),U){let _=(0,I.Cx)(e,{group:L.T.GAME,key:"you-can-only-resume-play-in-5min-as-per-the-german"});yield(0,E.gz)((0,a.i8)(d.T.INFO,{message:_})),yield(0,E.gz)((0,O.a8)()),yield(0,E.al)()}if(D){let _=(0,p.uW)(e),l=_?.name,i=[d.T.DENMARK_CPR_NUMBER,d.T.PRIVACY_POLICY,d.T.ACCESS_RESTRICTED_TO_VERSION,d.T.NG_MARKET_CLOSURE,d.T.UK_REGISTRATION_DEPOSIT_LIMIT,d.T.ACCEPT_TC,d.T.GERMANY_COM_RESTRICTION];-1===i.indexOf(l)&&(yield(0,E.gz)((0,a.AJ)(y.U.CLICKED)))}else yield(0,E.gz)((0,a.AJ)(y.U.CLICKED));yield(0,E.gz)((0,S.NX)(!1)),yield(0,E.gz)((0,S.zy)(i)),!g||z||M&&f||m&&D?t||R.s?(R.s||(yield(0,E.gz)((0,S.ok)(window.scrollY))),D&&(yield(0,E.gz)((0,A.Wr)(_,l,null,i))),m&&D&&(!D||G)||(yield(0,E.gz)((0,A.id)(_,l)))):(yield(0,E.gz)((0,S.hY)(window.location.pathname)),D||window.history.pushState(null,"",`/play/${_}`),yield(0,E.gz)((0,A.Wr)(_,l,null,i))):(yield(0,E.gz)((0,S.NN)(_)),t?(yield(0,E.gz)((0,S.s_)(l)),yield(0,E.gz)((0,A.wX)())):Y||(yield(0,E.gz)((0,c.Y)(P.t.GAME_LOGIN))))}()},g.A.THROTTLE,500),D=M},43743:(e,_,l)=>{l.d(_,{Y:()=>t,c:()=>E});var i=l(61892);let t=function(e){let _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:i.r.ADD_MODAL,payload:{name:e,details:_}}},E=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:i.r.CLOSE_CURRENT_MODAL,payload:{justClose:e}}}}}]);