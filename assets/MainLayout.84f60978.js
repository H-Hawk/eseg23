import{r as C,m as me,o as G,p as W,k as D,q as Me,u as Pe,h as T,g as j,v as be,i as oe,x as Q,y as ie,c as f,w as k,z as nt,A as ye,B as Qe,C as lt,D as He,E as at,R as ot,G as ke,H as it,I as rt,Q as ae,J as we,K as ut,L as st,M as ct,N as dt,O as ft,P as ne,a as vt,j as re,S as ue,U as _e,V as U,W as ht,n as gt,f as M,X as bt,Y as mt,Z as yt,_ as X}from"./index.f4d69efd.js";import{u as wt}from"./use-key-composition.83756727.js";import{u as ve,a as ze,g as _t,b as Tt,c as qt,d as he}from"./position-engine.dec26382.js";import{r as xt,Q as Ct}from"./QSelect.2bfc263e.js";import{u as $t}from"./timer.7a715ed7.js";import{u as Be}from"./vue-i18n.runtime.esm-bundler.0eed9e53.js";import"./use-dark.ad0b3c4d.js";function St(){const e=C(!me.value);return e.value===!1&&G(()=>{e.value=!0}),e}const Ee=typeof ResizeObserver!="undefined",Ie=Ee===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var J=W({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:b}){let o=null,n,t={width:-1,height:-1};function v(d){d===!0||e.debounce===0||e.debounce==="0"?h():o===null&&(o=setTimeout(h,e.debounce))}function h(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:d,offsetHeight:s}=n;(d!==t.width||s!==t.height)&&(t={width:d,height:s},b("resize",t))}}const{proxy:w}=j();if(Ee===!0){let d;const s=q=>{n=w.$el.parentNode,n?(d=new ResizeObserver(v),d.observe(n),h()):q!==!0&&Pe(()=>{s(!0)})};return G(()=>{s()}),D(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():n&&d.unobserve(n))}),Me}else{let q=function(){o!==null&&(clearTimeout(o),o=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",v,be.passive),s=void 0)},p=function(){q(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",v,be.passive),h())};const d=St();let s;return G(()=>{Pe(()=>{n=w.$el,n&&p()})}),D(q),w.trigger=v,()=>{if(d.value===!0)return T("object",{style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:p})}}}}),Rt=W({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:o}){const{proxy:{$q:n}}=j(),t=oe(ie,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const v=C(parseInt(e.heightHint,10)),h=C(!0),w=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),d=f(()=>{if(e.modelValue!==!0)return 0;if(w.value===!0)return h.value===!0?v.value:0;const c=v.value-t.scroll.value.position;return c>0?c:0}),s=f(()=>e.modelValue!==!0||w.value===!0&&h.value!==!0),q=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const c=t.rows.value.top,r={};return c[0]==="l"&&t.left.space===!0&&(r[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),c[2]==="r"&&t.right.space===!0&&(r[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),r});function m(c,r){t.update("header",c,r)}function $(c,r){c.value!==r&&(c.value=r)}function S({height:c}){$(v,c),m("size",c)}function B(c){q.value===!0&&$(h,!0),o("focusin",c)}k(()=>e.modelValue,c=>{m("space",c),$(h,!0),t.animate()}),k(d,c=>{m("offset",c)}),k(()=>e.reveal,c=>{c===!1&&$(h,e.modelValue)}),k(h,c=>{t.animate(),o("reveal",c)}),k(t.scroll,c=>{e.reveal===!0&&$(h,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const V={};return t.instances.header=V,e.modelValue===!0&&m("size",v.value),m("space",e.modelValue),m("offset",d.value),D(()=>{t.instances.header===V&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const c=nt(b.default,[]);return e.elevated===!0&&c.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(T(J,{debounce:0,onResize:S})),T("header",{class:p.value,style:z.value,onFocusin:B},c)}}}),Lt=W({name:"QPageContainer",setup(e,{slots:b}){const{proxy:{$q:o}}=j(),n=oe(ie,Q);if(n===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;ye(lt,!0);const t=f(()=>{const v={};return n.header.space===!0&&(v.paddingTop=`${n.header.size}px`),n.right.space===!0&&(v[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(v.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(v[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),v});return()=>T("div",{class:"q-page-container",style:t.value},Qe(b.default))}});let pt=0;const Pt=["click","keydown"],kt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${pt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function zt(e,b,o,n){const t=oe(He,Q);if(t===Q)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Q;const{proxy:v}=j(),h=C(null),w=C(null),d=C(null),s=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),q=f(()=>t.currentModel.value===e.name),p=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(q.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(n!==void 0?n.linkClass.value:"")),z=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=f(()=>e.disable===!0||t.hasFocus.value===!0||q.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function $(r,u){if(u!==!0&&h.value!==null&&h.value.focus(),e.disable===!0){n!==void 0&&n.hasRouterLink.value===!0&&ke(r);return}if(n===void 0){t.updateModel({name:e.name}),o("click",r);return}if(n.hasRouterLink.value===!0){const a=(y={})=>{let P;const A=y.to===void 0||ut(y.to,e.to)===!0?t.avoidRouteWatcher=wt():null;return n.navigateToRouterLink(r,{...y,returnRouterError:!0}).catch(H=>{P=H}).then(H=>{if(A===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,P===void 0&&(H===void 0||H.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),y.returnRouterError===!0)return P!==void 0?Promise.reject(P):H})};o("click",r,a),r.defaultPrevented!==!0&&a();return}o("click",r)}function S(r){it(r,[13,32])?$(r,!0):rt(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&t.onKbdNavigate(r.keyCode,v.$el)===!0&&ke(r),o("keydown",r)}function B(){const r=t.tabProps.value.narrowIndicator,u=[],a=T("div",{ref:d,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&u.push(T(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&u.push(T("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&u.push(e.alertIcon!==void 0?T(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):T("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&u.push(a);const y=[T("div",{class:"q-focus-helper",tabindex:-1,ref:h}),T("div",{class:z.value},we(b.default,u))];return r===!1&&y.push(a),y}const V={name:f(()=>e.name),rootRef:w,tabIndicatorRef:d,routeData:n};D(()=>{t.unregisterTab(V)}),G(()=>{t.registerTab(V)});function c(r,u){const a={ref:w,class:p.value,tabindex:m.value,role:"tab","aria-selected":q.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:$,onKeydown:S,...u};return at(T(r,a,B()),[[ot,s.value]])}return{renderTab:c,$tabs:t}}var le=W({name:"QRouteTab",props:{...st,...kt},emits:Pt,setup(e,{slots:b,emit:o}){const n=ct({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:v}=zt(e,b,o,{exact:f(()=>e.exact),...n});return k(()=>`${e.name} | ${e.exact} | ${(n.resolvedLink.value||{}).href}`,()=>{v.verifyRouteModel()}),()=>t(n.linkTag.value,n.linkAttrs.value)}});function Bt(e,b,o){const n=o===!0?["left","right"]:["top","bottom"];return`absolute-${b===!0?n[0]:n[1]}${e?` text-${e}`:""}`}const It=["left","center","right","justify"];var Vt=W({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>It.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:b,emit:o}){const{proxy:n}=j(),{$q:t}=n,{registerTick:v}=ve(),{registerTick:h}=ve(),{registerTick:w}=ve(),{registerTimeout:d,removeTimeout:s}=ze(),{registerTimeout:q,removeTimeout:p}=ze(),z=C(null),m=C(null),$=C(e.modelValue),S=C(!1),B=C(!0),V=C(!1),c=C(!1),r=[],u=C(0),a=C(!1);let y=null,P=null,A;const H=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Bt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Fe=f(()=>{const l=u.value,i=$.value;for(let g=0;g<l;g++)if(r[g].name.value===i)return!0;return!1}),Oe=f(()=>`q-tabs__content--align-${S.value===!0?"left":c.value===!0?"justify":e.align}`),De=f(()=>`q-tabs row no-wrap items-center q-tabs--${S.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),We=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Oe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Y=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Z=f(()=>e.vertical!==!0&&t.lang.rtl===!0),se=f(()=>xt===!1&&Z.value===!0);k(Z,K),k(()=>e.modelValue,l=>{ce({name:l,setCurrent:!0,skipEmit:!0})}),k(()=>e.outsideArrows,ee);function ce({name:l,setCurrent:i,skipEmit:g}){$.value!==l&&(g!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",l),(i===!0||e["onUpdate:modelValue"]===void 0)&&(je($.value,l),$.value=l))}function ee(){v(()=>{Te({width:z.value.offsetWidth,height:z.value.offsetHeight})})}function Te(l){if(Y.value===void 0||m.value===null)return;const i=l[Y.value.container],g=Math.min(m.value[Y.value.scroll],Array.prototype.reduce.call(m.value.children,(L,x)=>L+(x[Y.value.content]||0),0)),R=i>0&&g>i;S.value=R,R===!0&&h(K),c.value=i<parseInt(e.breakpoint,10)}function je(l,i){const g=l!=null&&l!==""?r.find(L=>L.name.value===l):null,R=i!=null&&i!==""?r.find(L=>L.name.value===i):null;if(g&&R){const L=g.tabIndicatorRef.value,x=R.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),L.style.transition="none",L.style.transform="none",x.style.transition="none",x.style.transform="none";const _=L.getBoundingClientRect(),I=x.getBoundingClientRect();x.style.transform=e.vertical===!0?`translate3d(0,${_.top-I.top}px,0) scale3d(1,${I.height?_.height/I.height:1},1)`:`translate3d(${_.left-I.left}px,0,0) scale3d(${I.width?_.width/I.width:1},1,1)`,w(()=>{y=setTimeout(()=>{y=null,x.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",x.style.transform="none"},70)})}R&&S.value===!0&&N(R.rootRef.value)}function N(l){const{left:i,width:g,top:R,height:L}=m.value.getBoundingClientRect(),x=l.getBoundingClientRect();let _=e.vertical===!0?x.top-R:x.left-i;if(_<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(_),K();return}_+=e.vertical===!0?x.height-L:x.width-g,_>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(_),K())}function K(){const l=m.value;if(l===null)return;const i=l.getBoundingClientRect(),g=e.vertical===!0?l.scrollTop:Math.abs(l.scrollLeft);Z.value===!0?(B.value=Math.ceil(g+i.width)<l.scrollWidth-1,V.value=g>0):(B.value=g>0,V.value=e.vertical===!0?Math.ceil(g+i.height)<l.scrollHeight:Math.ceil(g+i.width)<l.scrollWidth)}function qe(l){P!==null&&clearInterval(P),P=setInterval(()=>{Ue(l)===!0&&F()},5)}function xe(){qe(se.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ce(){qe(se.value===!0?0:Number.MAX_SAFE_INTEGER)}function F(){P!==null&&(clearInterval(P),P=null)}function Ne(l,i){const g=Array.prototype.filter.call(m.value.children,I=>I===i||I.matches&&I.matches(".q-tab.q-focusable")===!0),R=g.length;if(R===0)return;if(l===36)return N(g[0]),g[0].focus(),!0;if(l===35)return N(g[R-1]),g[R-1].focus(),!0;const L=l===(e.vertical===!0?38:37),x=l===(e.vertical===!0?40:39),_=L===!0?-1:x===!0?1:void 0;if(_!==void 0){const I=Z.value===!0?-1:1,E=g.indexOf(i)+_*I;return E>=0&&E<R&&(N(g[E]),g[E].focus({preventScroll:!0})),!0}}const Ke=f(()=>se.value===!0?{get:l=>Math.abs(l.scrollLeft),set:(l,i)=>{l.scrollLeft=-i}}:e.vertical===!0?{get:l=>l.scrollTop,set:(l,i)=>{l.scrollTop=i}}:{get:l=>l.scrollLeft,set:(l,i)=>{l.scrollLeft=i}});function Ue(l){const i=m.value,{get:g,set:R}=Ke.value;let L=!1,x=g(i);const _=l<x?-1:1;return x+=_*5,x<0?(L=!0,x=0):(_===-1&&x<=l||_===1&&x>=l)&&(L=!0,x=l),R(i,x),K(),L}function $e(l,i){for(const g in l)if(l[g]!==i[g])return!1;return!0}function Ge(){let l=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const g=r.filter(_=>_.routeData!==void 0&&_.routeData.hasRouterLink.value===!0),{hash:R,query:L}=n.$route,x=Object.keys(L).length;for(const _ of g){const I=_.routeData.exact.value===!0;if(_.routeData[I===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:E,query:de,matched:et,href:tt}=_.routeData.resolvedLink.value,fe=Object.keys(de).length;if(I===!0){if(E!==R||fe!==x||$e(L,de)===!1)continue;l=_.name.value;break}if(E!==""&&E!==R||fe!==0&&$e(de,L)===!1)continue;const O={matchedLen:et.length,queryDiff:x-fe,hrefLen:tt.length-E.length};if(O.matchedLen>i.matchedLen){l=_.name.value,i=O;continue}else if(O.matchedLen!==i.matchedLen)continue;if(O.queryDiff<i.queryDiff)l=_.name.value,i=O;else if(O.queryDiff!==i.queryDiff)continue;O.hrefLen>i.hrefLen&&(l=_.name.value,i=O)}l===null&&r.some(_=>_.routeData===void 0&&_.name.value===$.value)===!0||ce({name:l,setCurrent:!0})}function Xe(l){if(s(),a.value!==!0&&z.value!==null&&l.target&&typeof l.target.closest=="function"){const i=l.target.closest(".q-tab");i&&z.value.contains(i)===!0&&(a.value=!0,S.value===!0&&N(i))}}function Je(){d(()=>{a.value=!1},30)}function te(){Re.avoidRouteWatcher===!1?q(Ge):p()}function Se(){if(A===void 0){const l=k(()=>n.$route.fullPath,te);A=()=>{l(),A=void 0}}}function Ye(l){r.push(l),u.value++,ee(),l.routeData===void 0||n.$route===void 0?q(()=>{if(S.value===!0){const i=$.value,g=i!=null&&i!==""?r.find(R=>R.name.value===i):null;g&&N(g.rootRef.value)}}):(Se(),l.routeData.hasRouterLink.value===!0&&te())}function Ze(l){r.splice(r.indexOf(l),1),u.value--,ee(),A!==void 0&&l.routeData!==void 0&&(r.every(i=>i.routeData===void 0)===!0&&A(),te())}const Re={currentModel:$,tabProps:H,hasFocus:a,hasActiveTab:Fe,registerTab:Ye,unregisterTab:Ze,verifyRouteModel:te,updateModel:ce,onKbdNavigate:Ne,avoidRouteWatcher:!1};ye(He,Re);function Le(){y!==null&&clearTimeout(y),F(),A!==void 0&&A()}let pe;return D(Le),dt(()=>{pe=A!==void 0,Le()}),ft(()=>{pe===!0&&Se(),ee()}),()=>T("div",{ref:z,class:De.value,role:"tablist",onFocusin:Xe,onFocusout:Je},[T(J,{onResize:Te}),T("div",{ref:m,class:We.value,onScroll:K},Qe(b.default)),T(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:xe,onTouchstartPassive:xe,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F}),T(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(V.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:F,onMouseleavePassive:F,onTouchendPassive:F})])}}),At=W({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:o}){const{proxy:{$q:n}}=j(),t=oe(ie,Q);if(t===Q)return console.error("QFooter needs to be child of QLayout"),Q;const v=C(parseInt(e.heightHint,10)),h=C(!0),w=C(me.value===!0||t.isContainer.value===!0?0:window.innerHeight),d=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),s=f(()=>t.isContainer.value===!0?t.containerHeight.value:w.value),q=f(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return h.value===!0?v.value:0;const a=t.scroll.value.position+s.value+v.value-t.height.value;return a>0?a:0}),p=f(()=>e.modelValue!==!0||d.value===!0&&h.value!==!0),z=f(()=>e.modelValue===!0&&p.value===!0&&e.reveal===!0),m=f(()=>"q-footer q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(p.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(d.value!==!0?" hidden":""):"")),$=f(()=>{const a=t.rows.value.bottom,y={};return a[0]==="l"&&t.left.space===!0&&(y[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(y[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),y});function S(a,y){t.update("footer",a,y)}function B(a,y){a.value!==y&&(a.value=y)}function V({height:a}){B(v,a),S("size",a)}function c(){if(e.reveal!==!0)return;const{direction:a,position:y,inflectionPoint:P}=t.scroll.value;B(h,a==="up"||y-P<100||t.height.value-s.value-y-v.value<300)}function r(a){z.value===!0&&B(h,!0),o("focusin",a)}k(()=>e.modelValue,a=>{S("space",a),B(h,!0),t.animate()}),k(q,a=>{S("offset",a)}),k(()=>e.reveal,a=>{a===!1&&B(h,e.modelValue)}),k(h,a=>{t.animate(),o("reveal",a)}),k([v,t.scroll,t.height],c),k(()=>n.screen.height,a=>{t.isContainer.value!==!0&&B(w,a)});const u={};return t.instances.footer=u,e.modelValue===!0&&S("size",v.value),S("space",e.modelValue),S("offset",q.value),D(()=>{t.instances.footer===u&&(t.instances.footer=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const a=we(b.default,[T(J,{debounce:0,onResize:V})]);return e.elevated===!0&&a.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:m.value,style:$.value,onFocusin:r},a)}}});const{passive:Ve}=be,Mt=["both","horizontal","vertical"];var Qt=W({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Mt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:b}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,v;k(()=>e.scrollTarget,()=>{d(),w()});function h(){n!==null&&n();const p=Math.max(0,Tt(t)),z=qt(t),m={top:p-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const $=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:p,left:z},o.directionChanged=o.direction!==$,o.delta=m,o.directionChanged===!0&&(o.direction=$,o.inflectionPoint=o.position),b("scroll",{...o})}function w(){t=_t(v,e.scrollTarget),t.addEventListener("scroll",s,Ve),s(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",s,Ve),t=void 0)}function s(p){if(p===!0||e.debounce===0||e.debounce==="0")h();else if(n===null){const[z,m]=e.debounce?[setTimeout(h,e.debounce),clearTimeout]:[requestAnimationFrame(h),cancelAnimationFrame];n=()=>{m(z),n=null}}}const{proxy:q}=j();return k(()=>q.$q.lang.rtl,h),G(()=>{v=q.$el.parentNode,w()}),D(()=>{n!==null&&n(),d()}),Object.assign(q,{trigger:s,getPosition:()=>o}),Me}}),Ht=W({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:b,emit:o}){const{proxy:{$q:n}}=j(),t=C(null),v=C(n.screen.height),h=C(e.container===!0?0:n.screen.width),w=C({position:0,direction:"down",inflectionPoint:0}),d=C(0),s=C(me.value===!0?0:he()),q=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),z=f(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),m=f(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function $(u){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:u.position.top,direction:u.direction,directionChanged:u.directionChanged,inflectionPoint:u.inflectionPoint.top,delta:u.delta.top};w.value=a,e.onScroll!==void 0&&o("scroll",a)}}function S(u){const{height:a,width:y}=u;let P=!1;v.value!==a&&(P=!0,v.value=a,e.onScrollHeight!==void 0&&o("scrollHeight",a),V()),h.value!==y&&(P=!0,h.value=y),P===!0&&e.onResize!==void 0&&o("resize",u)}function B({height:u}){d.value!==u&&(d.value=u,V())}function V(){if(e.container===!0){const u=v.value>d.value?he():0;s.value!==u&&(s.value=u)}}let c=null;const r={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:v,containerHeight:d,scrollbarWidth:s,totalWidth:f(()=>h.value+s.value),rows:f(()=>{const u=e.view.toLowerCase().split(" ");return{top:u[0].split(""),middle:u[1].split(""),bottom:u[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:w,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(u,a,y){r[u][a]=y}};if(ye(ie,r),he()>0){let y=function(){u=null,a.classList.remove("hide-scrollbar")},P=function(){if(u===null){if(a.scrollHeight>n.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(u);u=setTimeout(y,300)},A=function(H){u!==null&&H==="remove"&&(clearTimeout(u),y()),window[`${H}EventListener`]("resize",P)},u=null;const a=document.body;k(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),vt(()=>{A("remove")})}return()=>{const u=we(b.default,[T(Qt,{onScroll:$}),T(J,{onResize:S})]),a=T("div",{class:q.value,style:p.value,ref:e.container===!0?void 0:t,tabindex:-1},u);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:t},[T(J,{onResize:B}),T("div",{class:"absolute-full",style:z.value},[T("div",{class:"scroll",style:m.value},[a])])]):a}}});const Et={class:"flex row no-wrap justify-center text-center"},Ft=re({__name:"TimerComp",setup(e){const b=$t(),o=C(0);let n;G(()=>{n=setInterval(()=>{const w=new Date;o.value=Math.ceil(w.getTime()/1e3)-b.get_start_timestamp()},1e3)}),D(()=>{clearInterval(n)});const t=f(()=>b.given_time-(b.timer_started&&!isNaN(o.value)?o.value:0)),v=f(()=>t.value<0),h=f(()=>{let w=t.value,d="";v.value&&(d="-",w=-1*w);const s=Math.floor(w/60),q=w%60,p=String(q).padStart(2,"0");return`${d} ${s}:${p}`});return(w,d)=>(ue(),_e("div",Et,[U("div",{class:gt((v.value?"text-red-6":"")+" "+(w.$q.screen.gt.sm?"text-h3":"text-h4")),style:{margin:"32px 0"}},ht(h.value),3)]))}}),Ot={style:{color:"white"}},ge="lang",Dt=re({__name:"LangSwitcher",setup(e){const{t:b,tm:o}=Be(),{locale:n}=Be({useScope:"global"}),t=C({label:b(ge+"."+n.value),langKey:n.value}),v=Object.keys(o(ge)),h=f(()=>v.map(d=>({label:b(ge+"."+d),langKey:d})));function w(){n.value=t.value.langKey}return(d,s)=>(ue(),_e("div",Ot,[M(Ct,{modelValue:t.value,"onUpdate:modelValue":[s[0]||(s[0]=q=>t.value=q),s[1]||(s[1]=q=>w())],options:h.value,label:d.$t("general.home.language"),"transition-show":"jump-up","transition-hide":"jump-up",filled:"",class:"q-mx-md",style:{width:"115px"},"label-color":"white",dark:"","options-dark":!1,"bg-color":"blue-10"},null,8,["modelValue","options","label"])]))}}),Wt={style:{width:"147px",height:"56px","text-align":"center"}},Ae="general.home.fullscreen.",jt=re({__name:"FullscreenToggle",setup(e){return(b,o)=>(ue(),_e("div",Wt,[M(bt,{onClick:o[0]||(o[0]=n=>b.$q.fullscreen.toggle()),color:"blue-10",label:b.$q.fullscreen.isActive?b.$t(Ae+"out"):b.$t(Ae+"in"),style:{width:"115px",height:"56px"}},null,8,["label"])]))}}),Nt={class:"row justify-between items-center content-center no-wrap"},Kt={class:"text-center",style:{padding:"0 16px",margin:"0 auto","max-width":"800px"}},tn=re({__name:"MainLayout",setup(e){return(b,o)=>{const n=mt("router-view");return ue(),yt(Ht,{view:"hHh lpR fFf"},{default:X(()=>[M(Rt,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:X(()=>[U("div",Nt,[U("div",null,[M(jt)]),U("div",null,[M(Ft)]),U("div",null,[M(Dt)])])]),_:1}),M(Lt,null,{default:X(()=>[U("div",Kt,[M(n)])]),_:1}),M(At,{elevated:"",class:"bg-grey-8 text-white"},{default:X(()=>[M(Vt,{align:"center"},{default:X(()=>[M(le,{to:"/",label:b.$t("general.navigation.home"),icon:"home"},null,8,["label"]),M(le,{to:"/card",label:b.$t("general.navigation.code"),icon:"extension"},null,8,["label"]),M(le,{to:"/hint",label:b.$t("general.navigation.hint"),icon:"lightbulb"},null,8,["label"]),M(le,{to:"/final_report",label:b.$t("general.navigation.finalReport"),icon:"key"},null,8,["label"])]),_:1})]),_:1})]),_:1})}}});export{tn as default};
