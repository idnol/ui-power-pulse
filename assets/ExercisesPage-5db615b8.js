import{s as h,t as o,x as I,r as u,j as e,u as W,d as q,a as A,h as U,k as G,N as R,O as K}from"./index-4fc11676.js";import{T as _,N as H,I as J,a as Q,S as V,b as P,B as X,c as Y,d as Z,e as ee}from"./BasicModalWindow-912de25f.js";import{a as z}from"./ReusableStyles.styled-a9c275bb.js";import{B as te}from"./react-toastify.esm-ef683554.js";const re=h.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
    padding: 48px 16px;
    width: 335px;
    height: 788px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${o.breakpoint.md}) {
        padding: 48px 30px;
        width: 694px;
        height: 550px;
    }
`,ie=h.div`
    width: 270px;
    height: 226px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 12px;
    overflow: hidden;
    border: ${o.border.grey2};
    background: ${o.color.greySeven};
    img {
        width: 100%;
        height: 100%;
    }
`,ne=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 214px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    @media (min-width: ${o.breakpoint.md}) {
        margin-bottom: 0;
    }
`,oe=h.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 302px;
    height: 132px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    @media (min-width: ${o.breakpoint.md}) {
        margin-right: 0;
        width: 345px;
        height: 148px;
    }
`,ae=h.button`
    width: 151px;
    height: 42px;
    padding: 12px 32px;
    border-radius: 12px;
    border: none;
    margin-left: 0;
    color: ${o.color.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    cursor: pointer;
    background-color: ${o.color.orange};
    &:hover{
        background-color: ${o.color.orangeSecond};
    };
    @media (min-width: ${o.breakpoint.md}) {
        margin-right: 0;
        height: 52px;
        padding: 14px 32px;
        line-height: 1.5;
        margin: auto 0 0 auto;
    }
`,se=h.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`,le=h(z)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`,de=h.span`
    color: ${o.color.orange};
    font-size: 14px;
    line-height: 1.29;
`,ce=h.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${o.color.grey};
`;var N=typeof window>"u"?u.useEffect:u.useLayoutEffect,ue=({isPlaying:r,duration:t,startAt:i=0,updateInterval:n=0,onComplete:a,onUpdate:s})=>{let[l,m]=u.useState(i),x=u.useRef(0),f=u.useRef(i),y=u.useRef(i*-1e3),d=u.useRef(null),c=u.useRef(null),w=u.useRef(null),v=j=>{let g=j/1e3;if(c.current===null){c.current=g,d.current=requestAnimationFrame(v);return}let b=g-c.current,k=x.current+b;c.current=g,x.current=k;let T=f.current+(n===0?k:(k/n|0)*n),p=f.current+k,C=typeof t=="number"&&p>=t;m(C?t:T),C||(d.current=requestAnimationFrame(v))},$=()=>{d.current&&cancelAnimationFrame(d.current),w.current&&clearTimeout(w.current),c.current=null},S=u.useCallback(j=>{$(),x.current=0;let g=typeof j=="number"?j:i;f.current=g,m(g),r&&(d.current=requestAnimationFrame(v))},[r,i]);return N(()=>{if(s==null||s(l),t&&l>=t){y.current+=t*1e3;let{shouldRepeat:j=!1,delay:g=0,newStartAt:b}=(a==null?void 0:a(y.current/1e3))||{};j&&(w.current=setTimeout(()=>S(b),g*1e3))}},[l,t]),N(()=>(r&&(d.current=requestAnimationFrame(v)),$),[r,t,n]),{elapsedTime:l,reset:S}},pe=(r,t,i)=>{let n=r/2,a=t/2,s=n-a,l=2*s,m=i==="clockwise"?"1,0":"0,1",x=2*Math.PI*s;return{path:`m ${n},${a} a ${s},${s} 0 ${m} 0,${l} a ${s},${s} 0 ${m} 0,-${l}`,pathLength:x}},M=(r,t)=>r===0||r===t?0:typeof t=="number"?r-t:0,he=r=>({position:"relative",width:r,height:r}),me={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},D=(r,t,i,n,a)=>{if(n===0)return t;let s=(a?n-r:r)/n;return t+i*s},F=r=>{var t,i;return(i=(t=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,a,s,l)=>`#${a}${a}${s}${s}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:t.map(n=>parseInt(n,16)))!=null?i:[]},xe=(r,t)=>{var i;let{colors:n,colorsTime:a,isSmoothColorTransition:s=!0}=r;if(typeof n=="string")return n;let l=(i=a==null?void 0:a.findIndex((c,w)=>c>=t&&t>=a[w+1]))!=null?i:-1;if(!a||l===-1)return n[0];if(!s)return n[l];let m=a[l]-t,x=a[l]-a[l+1],f=F(n[l]),y=F(n[l+1]),d=!!r.isGrowing;return`rgb(${f.map((c,w)=>D(m,c,y[w]-c,x,d)|0).join(",")})`},ge=r=>{let{duration:t,initialRemainingTime:i,updateInterval:n,size:a=180,strokeWidth:s=12,trailStrokeWidth:l,isPlaying:m=!1,isGrowing:x=!1,rotation:f="clockwise",onComplete:y,onUpdate:d}=r,c=u.useRef(),w=Math.max(s,l??0),{path:v,pathLength:$}=pe(a,w,f),{elapsedTime:S}=ue({isPlaying:m,duration:t,startAt:M(t,i),updateInterval:n,onUpdate:typeof d=="function"?g=>{let b=Math.ceil(t-g);b!==c.current&&(c.current=b,d(b))}:void 0,onComplete:typeof y=="function"?g=>{var b;let{shouldRepeat:k,delay:T,newInitialRemainingTime:p}=(b=y(g))!=null?b:{};if(k)return{shouldRepeat:k,delay:T,newStartAt:M(t,p)}}:void 0}),j=t-S;return{elapsedTime:S,path:v,pathLength:$,remainingTime:Math.ceil(j),rotation:f,size:a,stroke:xe(r,j),strokeDashoffset:D(S,0,$,t,x),strokeWidth:s}},O=r=>{let{children:t,strokeLinecap:i,trailColor:n,trailStrokeWidth:a}=r,{path:s,pathLength:l,stroke:m,strokeDashoffset:x,remainingTime:f,elapsedTime:y,size:d,strokeWidth:c}=ge(r);return I.createElement("div",{style:he(d)},I.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:s,fill:"none",stroke:n??"#d9d9d9",strokeWidth:a??c}),I.createElement("path",{d:s,fill:"none",stroke:m,strokeLinecap:i??"round",strokeWidth:c,strokeDasharray:l,strokeDashoffset:x})),typeof t=="function"&&I.createElement("div",{style:me},t({remainingTime:f,elapsedTime:y,color:m})))};O.displayName="CountdownCircleTimer";const fe=h.li`
    padding: 12px 18px;
    width: 147px;
    height: 62px;
    border-radius: 12px;
    border: ${o.border.grey2};
    background: ${o.color.greySeven};
    @media (min-width: ${o.breakpoint.md}) {
        width: 168px;
        height: 70px;
    }
`,we=h.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${o.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${o.breakpoint.md}) {
        line-height: 1.5;
    }
`,be=h(z)`
    font-weight: 700;
    color: ${o.color.white}
`,B=({tittle:r,name:t})=>e.jsxs(fe,{children:[e.jsx(we,{children:r}),e.jsx(be,{children:t})]}),ye=r=>r.diary.error,je=({item:r={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"}})=>{const[t,i]=u.useState(!1),[n,a]=u.useState(0),s=u.useRef(180),[l,m]=u.useState(0),{name:x,target:f,bodyPart:y,equipment:d,gifUrl:c,burnedCalories:w,_id:v}=r,$=180,S=W(),j=q(ye);u.useEffect(()=>{let p=null;return t&&(p=setInterval(()=>{if(t){const E=$-(s.current-1);a(Math.round(E*w/$))}},1e3)),()=>{p&&clearInterval(p)}},[w,t]);const g=({remainingTime:p})=>{const C=Math.floor(p/60),E=p%60,L=E<10?`0${E}`:E;return`${C}:${L}`},b=()=>{i(!t)},k=()=>(m(p=>p+1),i(!1),{shouldRepeat:!1}),T=p=>{p.preventDefault();const C={exercise:v,time:$-s.current};S(U(C)),j&&te.error("Oops, something went wrong"),console.log(C)};return e.jsx("form",{onSubmit:T,children:e.jsxs(re,{children:[e.jsx(ie,{children:e.jsx("img",{src:c,alt:x})}),e.jsxs(ne,{children:[e.jsx(le,{children:"Time"}),e.jsx(O,{isPlaying:t,size:124,strokeWidth:4,trailColor:`${o.color.greySixth}`,duration:180,colors:`${o.color.orange}`,onComplete:k,children:({remainingTime:p})=>(s.current=p,g({remainingTime:p}))},l),e.jsx(se,{type:"button",onClick:()=>{b()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${o.color.orange}`,viewBox:"0 0 32 32",children:t?e.jsx("use",{href:`${A}#pause-btn`}):e.jsx("use",{href:`${A}#play-btn`})})}),e.jsxs(ce,{children:["Burned calories:"," ",e.jsx(de,{children:Math.round(n)})]})]}),e.jsxs(oe,{children:[e.jsx(B,{tittle:"Name",name:x}),e.jsx(B,{tittle:"Target",name:f}),e.jsx(B,{tittle:"Body Part",name:y}),e.jsx(B,{tittle:"Equipment",name:d})]}),e.jsx(ae,{type:"submit",children:"Add to diary"})]})})},$e=({item:r})=>{const[t,i]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:"workout"}),e.jsxs(H,{children:[e.jsx(J,{children:e.jsx("use",{href:`${A}#run-man-circle`})}),e.jsx(Q,{children:r.name})]}),e.jsxs(V,{children:[e.jsx(P,{text:"Burned calories:",val:r.burnedCalories}),e.jsx(P,{text:"Body part:",val:r.bodyPart}),e.jsx(P,{text:"Target:",val:r.target})]}),e.jsxs(X,{type:"button",onClick:()=>i(!0),children:[e.jsx(Y,{children:"Start"}),e.jsx(Z,{children:e.jsx("use",{href:`${A}#arrow`})})]}),t&&e.jsx(ee,{isOpen:t,onClose:()=>i(!1),children:e.jsx(je,{})})]})},ke=h.div`
  @media (min-width: ${o.breakpoint.xl}) {
    max-width: 850px;
    max-height: 487px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${o.color.greySixth};
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${o.color.orange};
      border-radius: 12px;
      height: 153px;
    }
  }
`,ve=h.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 335px));
  justify-content: center;
  grid-row-gap: 20px;

  max-width: 335px;

  margin: 0 auto;

  @media (min-width: ${o.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 700px;
  }

  @media (min-width: ${o.breakpoint.xl}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 405px));
    max-width: 826px;
  }
`,Se=h.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  max-width: 335px;
  width: 100%;

  border-radius: 12px;
  border: ${o.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${o.breakpoint.md}) {
  }

  @media (min-width: ${o.breakpoint.xl}) {
    max-width: 405px;
  }
`,Ce=()=>{const r=q(i=>i.exercises.items),t=W();return u.useEffect(()=>{t(G())},[t]),e.jsx(ke,{children:e.jsx(ve,{children:r.map((i,n)=>e.jsx(Se,{children:e.jsx($e,{item:i})},n))})})};function Ae(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"exercises"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(R,{to:"bodyparts",children:"Body parts"})}),e.jsx("li",{children:e.jsx(R,{to:"muscles",children:"Muscles"})}),e.jsx("li",{children:e.jsx(R,{to:"equipment",children:"Equipment"})})]}),e.jsx(Ce,{}),e.jsx(K,{})]})}export{Ae as default};
