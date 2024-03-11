import{a as h,k as X,s as c,t as r,u as A,d as W,j as e,b as E,D as Y,E as J,F as Q,B as I,G as q,n as D,H as Z}from"./index-976443d8.js";import{M as ee,a as te,W as ie,S as re,T as ne,C as oe,b as se,V as ae,c as le,d as ce,B as de,e as he,f as pe,g as xe,N as me,I as ue,h as ge,i as fe,j as M,k as be,l as we,m as je,n as ke}from"./AddExerciseSuccess.styled-cac74241.js";import{a as V}from"./ReusableStyles.styled-7ca1bc7b.js";function ye(t){const[i,n]=h.useState([]);return h.useEffect(()=>{(async()=>{try{const o=await X.get(`http://localhost:3333/api/exercises/filters?filter=${t}`);n(o.data)}catch(o){console.error("Error fetching categories:",o)}})()},[t]),i}const $e=c.div`
  
`,ve=c.div`
  max-width: 335px;
  margin-right: auto;

  @media (min-width: ${r.breakpoint.md}) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`,Ce=c.div`
  display: flex;
  background-color: transparent;
`,Se=c.button`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${r.color.greyFifth};
  @media (min-width: ${r.breakpoint.md}) {
    margin-bottom: 16px;
  }
`,Ee=c.svg`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`,Te=c.span`
  font-size: 14px;
  line-height: 1.285;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${r.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.33;
  }
`,Be=c.h2`
  font-size: 24px;
  line-height: 1.16;
  max-width: 200px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (min-width: ${r.breakpoint.md}) {
    display: flex;
    justify-content: baseline;
    max-width: 200px;
    line-height: 1.375;
    font-size: 32px;
    margin-bottom: 64px;
  }
`,Le=c.ul`
  display: flex;
  width: 244px;
  height: 26px;
  gap: 28px;
  margin-bottom: 40px;

  @media (min-width: ${r.breakpoint.md}) {
    gap: 32px;
    margin-left: auto;
    width: 279px;
    height: 32px;
    margin-bottom: 0px;
  }
`,R=c.li`
  line-height: 1.285;
  font-size: 14px;

  @media (min-width: ${r.breakpoint.md}) {
    line-height: 1.5;
    height: 24px;
    font-size: 16px;
  }
`,F=c.span`
  text-decoration: none;
  position: relative;
  color: ${r.color.greyFifth};
  &.active {
    color: ${r.color.white};
    &:after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4px;
      background-color: ${r.color.orangeSecond};
      border-radius: 2px;
    }
  }
`;function Ie({onClick:t}){const i=A(),[n,s]=h.useState("Body parts"),o=W(x=>x.filter.exercisesFilter);h.useEffect(()=>{t(n)},[t,n]);const a=x=>{t(x),s(x)},l=()=>{i(Y())};return e.jsxs($e,{children:[e.jsx(Ce,{children:e.jsxs(Se,{onClick:l,children:[e.jsx(Ee,{children:e.jsx("use",{href:`${E}#arrow-left-ex`,style:{fill:"rgba(239, 237, 232, 0.4)"}})}),e.jsx(Te,{children:"back"})]})}),e.jsxs(ve,{children:[e.jsx(Be,{children:o===""?"Exercises":o}),e.jsxs(Le,{children:[e.jsx(R,{children:e.jsx(F,{className:n==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>{a("Body parts"),l()},children:"Body parts"})}),e.jsx(R,{children:e.jsx(F,{className:n==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>{a("Muscles"),l()},children:"Muscles"})}),e.jsx(R,{children:e.jsx(F,{className:n==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>{a("Equipment"),l()},children:"Equipment"})})]})]})]})}c.div`
`;const Pe=c.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (min-width: ${r.breakpoint.md}) {
        margin-right: -16px;
        margin-bottom: 32px;
    }

    @media (min-width: ${r.breakpoint.xl}) {
        margin-right: -16px; 
    }
`,ze=c.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    
    @media (min-width: ${r.breakpoint.md}) {
        width: calc(33.3333% - 16px);
        margin-right: 16px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }


    @media (min-width: ${r.breakpoint.xl}) {
        width: calc(20% - 16px); 
        &:nth-child(3n) {
            margin-right: 16px;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
`,Ae=c.div`
    position: relative;
    padding-bottom: 62%;
    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(4, 4, 4, 0.5); 
        border-radius: 12px;
        border: ${r.border.grey2};
        z-index: 1; 
     } 
     
    @media (min-width: ${r.breakpoint.md}) {
        padding-bottom: 92%;
    }
    @media (min-width: ${r.breakpoint.xl}) {
        padding-bottom: 87%;
    }
`,Me=c.img`
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    height: 100%;
    object-fit: cover;
    background-image: url(${t=>t.src});
    background-size: cover;
    background-position: center;
`,Re=c.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
`,Fe=c.h3`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    text-transform: lowercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-letter {
        text-transform: uppercase;
    }

    ${t=>t.isLong&&`
            white-space: normal;
            word-wrap: break-word;

        `}
`,We=c.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: ${r.color.greyFifth};
`;function Ne({subcategory:t}){const i=A(),n=()=>{i(J(t.name))};return e.jsx(ze,{onClick:n,children:e.jsxs(Ae,{children:[e.jsx(Me,{src:t.imgURL,alt:t.name}),e.jsxs(Re,{children:[e.jsx(Fe,{isLong:t.name.length>16,children:t.name}),e.jsx(We,{children:t.filter})]})]})})}const qe=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  @media (min-width: ${r.breakpoint.md}) {
    bottom: -32px;
  }
`,De=c.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${t=>t.active?r.color.black:r.color.greySixth};
  border: ${t=>t.active?r.border.orange:"none"};
  position: relative;
  cursor: pointer;
  outline: none;
  vertical-align: middle;

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${r.color.orange}; 
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${t=>t.active?"block":"none"};
  }
`,Ue=c.div`
  position: relative;
`,Oe=c.div`
  padding-top: 71px;
  width: 100%;
  @media (min-width: ${r.breakpoint.md}) {
    padding-top: 116px;
    }
`,Ge=c.div`
  position: relative;
`;function Ve({categories:t,selectedCategory:i}){const n=t.filter(d=>d.filter===i),[s,o]=h.useState(0),[a,l]=h.useState(10),x=768,m=Math.ceil(n.length/a),u=()=>{window.scrollTo({top:0,behavior:"smooth"})};h.useEffect(()=>{const d=()=>{window.innerWidth>=x&&window.innerWidth<=1439?l(9):l(10),o(0)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),h.useEffect(()=>{o(0),u()},[i]);const f=d=>{o(d),u()};return e.jsxs(Ge,{children:[e.jsx(Pe,{children:n.slice(s*a,(s+1)*a).map((d,p)=>e.jsx(Ne,{subcategory:d},p))}),m>1&&e.jsx(qe,{children:e.jsx("div",{children:Array.from({length:m},(d,p)=>e.jsx(De,{active:p===s,onClick:()=>f(p),children:""},p))})})]})}const He=({isOpen:t,onClose:i,calorise:n,time:s})=>{var l;const o=Q(),a=h.useRef(o);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{onClick:i,children:e.jsx(te,{children:e.jsx("use",{href:`${E}#x-modal`})})}),t&&e.jsx(ie,{children:e.jsxs(re,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:r.breakpoint.sm,srcSet:"/img/like-1x.png"}),e.jsx("source",{media:r.breakpoint.md,srcSet:"/img/like-2x.png"}),e.jsx("img",{src:"/img/like-1x.png",alt:"Like",loading:"lazy"})]}),e.jsx(ne,{children:"Well done"}),e.jsxs(oe,{children:[e.jsx(se,{children:"Your time:"}),e.jsxs(ae,{children:[s," minutes"]}),e.jsx(le,{children:"Burned calories:"}),e.jsx(ce,{children:n})]}),e.jsx(de,{type:"button",onClick:i,children:"Next exercise"}),e.jsxs(he,{to:((l=a.current.state)==null?void 0:l.from)??"/diary",children:["To the diary",e.jsx(pe,{children:e.jsx("use",{href:`${E}#arrow`})})]})]})})]})},_e=c.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
    padding: 48px 16px;
    width: 335px;
    height: 788px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${r.breakpoint.md}) {
        padding: 48px 30px;
        width: 694px;
        height: 550px;
    }
`,Ke=c.div`
    width: 270px;
    height: 226px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 12px;
    overflow: hidden;
    border: ${r.border.grey2};
    background: ${r.color.greySeven};
    img {
        width: 100%;
        height: 100%;
    }
`,Xe=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 214px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    @media (min-width: ${r.breakpoint.md}) {
        margin-bottom: 0;
    }
`,Ye=c.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 302px;
    height: 132px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    @media (min-width: ${r.breakpoint.md}) {
        margin-right: 0;
        width: 345px;
        height: 148px;
    }
`,Je=c.button`
    width: 151px;
    height: 42px;
    padding: 12px 32px;
    border-radius: 12px;
    border: none;
    margin-left: 0;
    color: ${r.color.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    cursor: pointer;
    background-color: ${r.color.orange};
    &:hover{
        background-color: ${r.color.orangeSecond};
    };
    @media (min-width: ${r.breakpoint.md}) {
        margin-right: 0;
        height: 52px;
        padding: 14px 32px;
        line-height: 1.5;
        margin: auto 0 0 auto;
    }
`,Qe=c.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`,Ze=c(V)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`,et=c.span`
    color: ${r.color.orange};
    font-size: 14px;
    line-height: 1.29;
`,tt=c.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${r.color.grey};
`;var U=typeof window>"u"?h.useEffect:h.useLayoutEffect,it=({isPlaying:t,duration:i,startAt:n=0,updateInterval:s=0,onComplete:o,onUpdate:a})=>{let[l,x]=h.useState(n),m=h.useRef(0),u=h.useRef(n),f=h.useRef(n*-1e3),d=h.useRef(null),p=h.useRef(null),j=h.useRef(null),v=k=>{let g=k/1e3;if(p.current===null){p.current=g,d.current=requestAnimationFrame(v);return}let w=g-p.current,$=m.current+w;p.current=g,m.current=$;let T=u.current+(s===0?$:($/s|0)*s),B=u.current+$,P=typeof i=="number"&&B>=i;x(P?i:T),P||(d.current=requestAnimationFrame(v))},C=()=>{d.current&&cancelAnimationFrame(d.current),j.current&&clearTimeout(j.current),p.current=null},y=h.useCallback(k=>{C(),m.current=0;let g=typeof k=="number"?k:n;u.current=g,x(g),t&&(d.current=requestAnimationFrame(v))},[t,n]);return U(()=>{if(a==null||a(l),i&&l>=i){f.current+=i*1e3;let{shouldRepeat:k=!1,delay:g=0,newStartAt:w}=(o==null?void 0:o(f.current/1e3))||{};k&&(j.current=setTimeout(()=>y(w),g*1e3))}},[l,i]),U(()=>(t&&(d.current=requestAnimationFrame(v)),C),[t,i,s]),{elapsedTime:l,reset:y}},rt=(t,i,n)=>{let s=t/2,o=i/2,a=s-o,l=2*a,x=n==="clockwise"?"1,0":"0,1",m=2*Math.PI*a;return{path:`m ${s},${o} a ${a},${a} 0 ${x} 0,${l} a ${a},${a} 0 ${x} 0,-${l}`,pathLength:m}},O=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,nt=t=>({position:"relative",width:t,height:t}),ot={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},H=(t,i,n,s,o)=>{if(s===0)return i;let a=(o?s-t:t)/s;return i+n*a},G=t=>{var i,n;return(n=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,o,a,l)=>`#${o}${o}${a}${a}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?n:[]},st=(t,i)=>{var n;let{colors:s,colorsTime:o,isSmoothColorTransition:a=!0}=t;if(typeof s=="string")return s;let l=(n=o==null?void 0:o.findIndex((p,j)=>p>=i&&i>=o[j+1]))!=null?n:-1;if(!o||l===-1)return s[0];if(!a)return s[l];let x=o[l]-i,m=o[l]-o[l+1],u=G(s[l]),f=G(s[l+1]),d=!!t.isGrowing;return`rgb(${u.map((p,j)=>H(x,p,f[j]-p,m,d)|0).join(",")})`},at=t=>{let{duration:i,initialRemainingTime:n,updateInterval:s,size:o=180,strokeWidth:a=12,trailStrokeWidth:l,isPlaying:x=!1,isGrowing:m=!1,rotation:u="clockwise",onComplete:f,onUpdate:d}=t,p=h.useRef(),j=Math.max(a,l??0),{path:v,pathLength:C}=rt(o,j,u),{elapsedTime:y}=it({isPlaying:x,duration:i,startAt:O(i,n),updateInterval:s,onUpdate:typeof d=="function"?g=>{let w=Math.ceil(i-g);w!==p.current&&(p.current=w,d(w))}:void 0,onComplete:typeof f=="function"?g=>{var w;let{shouldRepeat:$,delay:T,newInitialRemainingTime:B}=(w=f(g))!=null?w:{};if($)return{shouldRepeat:$,delay:T,newStartAt:O(i,B)}}:void 0}),k=i-y;return{elapsedTime:y,path:v,pathLength:C,remainingTime:Math.ceil(k),rotation:u,size:o,stroke:st(t,k),strokeDashoffset:H(y,0,C,i,m),strokeWidth:a}},_=t=>{let{children:i,strokeLinecap:n,trailColor:s,trailStrokeWidth:o}=t,{path:a,pathLength:l,stroke:x,strokeDashoffset:m,remainingTime:u,elapsedTime:f,size:d,strokeWidth:p}=at(t);return I.createElement("div",{style:nt(d)},I.createElement("svg",{viewBox:`0 0 ${d} ${d}`,width:d,height:d,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:a,fill:"none",stroke:s??"#d9d9d9",strokeWidth:o??p}),I.createElement("path",{d:a,fill:"none",stroke:x,strokeLinecap:n??"round",strokeWidth:p,strokeDasharray:l,strokeDashoffset:m})),typeof i=="function"&&I.createElement("div",{style:ot},i({remainingTime:u,elapsedTime:f,color:x})))};_.displayName="CountdownCircleTimer";const lt=c.li`
    padding: 12px 18px;
    width: 147px;
    height: 62px;
    border-radius: 12px;
    border: ${r.border.grey2};
    background: ${r.color.greySeven};
    @media (min-width: ${r.breakpoint.md}) {
        width: 168px;
        height: 70px;
    }
`,ct=c.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${r.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${r.breakpoint.md}) {
        line-height: 1.5;
    }
`,dt=c(V)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    color: ${r.color.white}
`,z=({tittle:t,name:i})=>e.jsxs(lt,{children:[e.jsx(ct,{children:t}),e.jsx(dt,{children:i})]}),ht=({item:t={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"},onClose:i})=>{const[n,s]=h.useState(!1),[o,a]=h.useState(0),l=h.useRef(180),[x,m]=h.useState(0),[u,f]=h.useState(!1),{name:d,target:p,bodyPart:j,equipment:v,gifUrl:C,burnedCalories:y,_id:k}=t,g=180,w=A();h.useEffect(()=>{let b=null;return n&&(b=setInterval(()=>{if(n){const S=g-(l.current-1);a(Math.floor(S*y/g))}},1e3)),()=>{b&&clearInterval(b)}},[y,n]);const $=({remainingTime:b})=>{const L=Math.floor(b/60),S=b%60,N=S<10?`0${S}`:S;return`${L}:${N}`},T=()=>{s(!n)},B=()=>(m(b=>b+1),s(!1),{shouldRepeat:!1}),P=async b=>{b.preventDefault();try{const L={exercise:k,time:g-l.current},S=await w(q(L));q.fulfilled.match(S)?f(!0):(f(!1),D.error("Oops, something went wrong"))}catch{f(!1),D.error("Oops, something went wrong")}},K=()=>{i(),f(!1)};return e.jsxs(e.Fragment,{children:[!u&&e.jsx("form",{onSubmit:P,children:e.jsxs(_e,{children:[e.jsx(Ke,{children:e.jsx("img",{src:C,alt:d})}),e.jsxs(Xe,{children:[e.jsx(Ze,{children:"Time"}),e.jsx(_,{isPlaying:n,size:124,strokeWidth:4,trailColor:`${r.color.greySixth}`,duration:180,colors:`${r.color.orange}`,onComplete:B,children:({remainingTime:b})=>(l.current=b,$({remainingTime:b}))},x),e.jsx(Qe,{type:"button",onClick:()=>{T()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${r.color.orange}`,viewBox:"0 0 32 32",children:n?e.jsx("use",{href:`${E}#pause-btn`}):e.jsx("use",{href:`${E}#play-btn`})})}),e.jsxs(tt,{children:["Burned calories:"," ",e.jsx(et,{children:Math.round(o)})]})]}),e.jsxs(Ye,{children:[e.jsx(z,{tittle:"Name",name:d}),e.jsx(z,{tittle:"Target",name:p}),e.jsx(z,{tittle:"Body Part",name:j}),e.jsx(z,{tittle:"Equipment",name:v})]}),e.jsx(Je,{type:"submit",children:"Add to diary"})]})}),u&&e.jsx(He,{calorise:Math.round(o),time:Math.floor((g-l.current)/60),isOpen:u,onClose:()=>K()})]})},pt=({item:t})=>{const[i,n]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:"workout"}),e.jsxs(me,{children:[e.jsx(ue,{children:e.jsx("use",{href:`${E}#run-man-circle`})}),e.jsx(ge,{children:t.name})]}),e.jsxs(fe,{children:[e.jsx(M,{text:"Burned calories:",val:t.burnedCalories}),e.jsx(M,{text:"Body part:",val:t.bodyPart}),e.jsx(M,{text:"Target:",val:t.target})]}),e.jsxs(be,{type:"button",onClick:()=>n(!0),children:[e.jsx(we,{children:"Start"}),e.jsx(je,{children:e.jsx("use",{href:`${E}#arrow`})})]}),i&&e.jsx(ke,{isOpen:i,onClose:()=>n(!1),children:e.jsx(ht,{item:t,onClose:()=>n(!1)})})]})},xt=c.div`
  @media (min-width: ${r.breakpoint.md}) {
    overflow-y: scroll;
    max-width: 704px;
    max-height: 660px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${r.color.greySixth};
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${r.color.orange};
      border-radius: 12px;
      height: 153px;
    }
  }
  @media (min-width: ${r.breakpoint.xl}) {
    max-width: 850px;
    max-height: 487px;
  }
`,mt=c.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-gap: 20px;

  margin: 0 auto;

  @media (min-width: ${r.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 704px;
  }

  @media (min-width: ${r.breakpoint.xl}) {
    max-width: 850px;
  }
`,ut=c.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  width: 100%;

  border-radius: 12px;
  border: ${r.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${r.breakpoint.md}) {
    max-width: 335px;
  }

  @media (min-width: ${r.breakpoint.xl}) {
    max-width: 405px;
  }
`,gt=(t,i)=>t.filter(n=>{const s=n.bodyPart.toLowerCase(),o=n.target.toLowerCase(),a=n.equipment.toLowerCase(),l=s.includes(i.toLowerCase()),x=o.includes(i.toLowerCase()),m=a.includes(i.toLowerCase());return l||x||m}),ft=({bodyPartFilter:t})=>{const i=A();h.useEffect(()=>{i(Z())},[i]);const n=W(o=>o.exercises.items),s=gt(n,t);return e.jsx(xt,{children:e.jsx(mt,{children:s.map((o,a)=>e.jsx(ut,{children:e.jsx(pt,{item:o})},a))})})};function kt(){const[t,i]=h.useState(""),n=ye(t),s=W(a=>a.filter.exercisesFilter),o=a=>{i(a)};return e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx(Ue,{children:e.jsxs(Oe,{children:[e.jsx(Ie,{onClick:o}),s===""?e.jsx(Ve,{categories:n,selectedCategory:t}):e.jsx(ft,{bodyPartFilter:s})]})})})})}export{kt as default};
