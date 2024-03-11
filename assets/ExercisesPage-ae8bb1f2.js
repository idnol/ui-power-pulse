import{a as h,m as X,s as l,u as A,d as W,j as e,b as E,A as Q,C as Y,D as J,t as d,y as I,Q as Z,E as q,B as D,F as ee}from"./index-054cf276.js";import{M as te,a as ie,W as re,S as ne,T as se,C as oe,b as ae,V as le,c as ce,d as de,B as he,e as pe,f as xe,g as ue,N as me,I as ge,h as fe,i as be,j as M,k as we,l as je,m as ye,n as ke}from"./AddExerciseSuccess.styled-ba210450.js";import{a as V}from"./ReusableStyles.styled-dfef7112.js";function ve(t){const[i,r]=h.useState([]);return h.useEffect(()=>{(async()=>{try{const n=await X.get(`http://localhost:3333/api/exercises/filters?filter=${t}`);r(n.data)}catch(n){console.error("Error fetching categories:",n)}})()},[t]),i}const Ce=l.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`,Se=l.div``,$e=l.button`
  margin-bottom: 12px;
`,Ee=l.svg`
  width: 12px;
  height: 12px;
`,Te=l.h2`
  font-size: 24px;
  line-height: 1.16;
  max-width: 200px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: baseline;
    max-width: 200px;
    line-height: 1, 375;
    font-size: 32px;
    margin-bottom: 64px;
  }
`,Be=l.ul`
  display: flex;
  width: 244px;
  height: 26px;
  gap: 28px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-left: auto;
    width: 279px;
    height: 32px;
    margin-bottom: 0px;
  }
`,R=l.li`
  line-height: 1, 285;
  font-size: 14px;

  @media (min-width: 768px) {
    line-height: 1.5;
    height: 24px;
    font-size: 16px;
  }
`,F=l.span`
  text-decoration: none;
  position: relative;
  color: rgba(239, 237, 232, 0.4);
  &.active {
    color: #efede8;
    &:after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4px;
      background-color: #ef8964;
      border-radius: 2px;
    }
  }
`;function Le({onClick:t}){const i=A(),[r,s]=h.useState("Body parts"),n=W(x=>x.filter.exercisesFilter);h.useEffect(()=>{t(r)},[t,r]);const o=x=>{t(x),s(x)},a=()=>{i(Q())};return e.jsxs(Ce,{children:[e.jsx($e,{onClick:a,children:e.jsxs(Se,{children:[e.jsx(Ee,{children:e.jsx("use",{href:`${E}#arrow-left-ex`})}),"back"]})}),e.jsx(Te,{children:n===""?"Exercises":n}),e.jsxs(Be,{children:[e.jsx(R,{children:e.jsx(F,{className:r==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>o("Body parts"),children:"Body parts"})}),e.jsx(R,{children:e.jsx(F,{className:r==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>o("Muscles"),children:"Muscles"})}),e.jsx(R,{children:e.jsx(F,{className:r==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>o("Equipment"),children:"Equipment"})})]})]})}l.div`
`;const Ie=l.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-right: -16px;
        margin-bottom: 32px;
    }

    @media (min-width: 1440px) {
        margin-right: -16px; 
    }
`,Pe=l.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: calc(33.3333% - 16px);
        margin-right: 16px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1440px) {
        width: calc(20% - 16px); 
        &:nth-child(3n) {
            margin-right: 16px;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
`,ze=l.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background-image: url(${t=>t.src});
    background-size: cover;
    background-position: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
        border: 2px solid rgba(239, 237, 232, 0.2);
        z-index: -1;
    }
`,Ae=l.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`,Me=l.h3`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    text-transform: lowercase;
    &:first-letter {
        text-transform: uppercase;
    }
    
    @media (min-width: 768px) {
        line-height: 1.33;
        font-size: 24px;
    }
`,Re=l.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: rgba(239, 237, 232, 0.4);
`;function Fe({subcategory:t}){const i=A(),r=()=>{i(Y(t.name))};return e.jsxs(Pe,{onClick:r,children:[e.jsx(ze,{src:t.imgURL,alt:t.name}),e.jsxs(Ae,{children:[e.jsx(Me,{children:t.name}),e.jsx(Re,{children:t.filter})]})]})}const We=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  @media (min-width: 768px) {
      bottom: -32px;
  }
`,Ne=l.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${t=>t.active?"#040404;":"rgba(239, 237, 232, 0.1)"};
  border: ${t=>t.active?"1px solid #E6533C":"none"};
  position: relative;
  cursor: pointer;
  outline: none;
  vertical-align: middle;


  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #E6533C; 
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${t=>t.active?"block":"none"};
  }

`,qe=l.div`
  position: relative;
`,De=l.div`
  padding-top: 154px;
  width: 100%;
`,Ue=l.div`
  position: relative;
`;l.button`
  position: absolute;
  top: 71px;
  left: 0;
`;function Oe({categories:t,selectedCategory:i}){const r=t.filter(c=>c.filter===i),[s,n]=h.useState(0),[o,a]=h.useState(10),x=768,u=Math.ceil(r.length/o),m=()=>{window.scrollTo({top:0,behavior:"smooth"})};h.useEffect(()=>{const c=()=>{window.innerWidth>=x&&window.innerWidth<=1439?a(9):a(10),n(0)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),h.useEffect(()=>{n(0),m()},[i]);const f=c=>{n(c),m()};return e.jsxs(Ue,{children:[e.jsx(Ie,{children:r.slice(s*o,(s+1)*o).map((c,p)=>e.jsx(Fe,{subcategory:c},p))}),u>1&&e.jsx(We,{children:e.jsx("div",{children:Array.from({length:u},(c,p)=>e.jsx(Ne,{active:p===s,onClick:()=>f(p),children:""},p))})})]})}const Ge=({isOpen:t,onClose:i,calorise:r,time:s})=>{var a;const n=J(),o=h.useRef(n);return e.jsxs(e.Fragment,{children:[e.jsx(te,{onClick:i,children:e.jsx(ie,{children:e.jsx("use",{href:`${E}#x-modal`})})}),t&&e.jsx(re,{children:e.jsxs(ne,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:d.breakpoint.sm,srcSet:"/img/like-1x.png"}),e.jsx("source",{media:d.breakpoint.md,srcSet:"/img/like-2x.png"}),e.jsx("img",{src:"/img/like-1x.png",alt:"Like",loading:"lazy"})]}),e.jsx(se,{children:"Well done"}),e.jsxs(oe,{children:[e.jsx(ae,{children:"Your time:"}),e.jsxs(le,{children:[s," minutes"]}),e.jsx(ce,{children:"Burned calories:"}),e.jsx(de,{children:r})]}),e.jsx(he,{type:"button",onClick:i,children:"Next exercise"}),e.jsxs(pe,{to:((a=o.current.state)==null?void 0:a.from)??"/diary",children:["To the diary",e.jsx(xe,{children:e.jsx("use",{href:`${E}#arrow`})})]})]})})]})},Ve=l.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
    padding: 48px 16px;
    width: 335px;
    height: 788px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${d.breakpoint.md}) {
        padding: 48px 30px;
        width: 694px;
        height: 550px;
    }
`,_e=l.div`
    width: 270px;
    height: 226px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 12px;
    overflow: hidden;
    border: ${d.border.grey2};
    background: ${d.color.greySeven};
    img {
        width: 100%;
        height: 100%;
    }
`,He=l.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 214px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    @media (min-width: ${d.breakpoint.md}) {
        margin-bottom: 0;
    }
`,Ke=l.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 302px;
    height: 132px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    @media (min-width: ${d.breakpoint.md}) {
        margin-right: 0;
        width: 345px;
        height: 148px;
    }
`,Xe=l.button`
    width: 151px;
    height: 42px;
    padding: 12px 32px;
    border-radius: 12px;
    border: none;
    margin-left: 0;
    color: ${d.color.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    cursor: pointer;
    background-color: ${d.color.orange};
    &:hover{
        background-color: ${d.color.orangeSecond};
    };
    @media (min-width: ${d.breakpoint.md}) {
        margin-right: 0;
        height: 52px;
        padding: 14px 32px;
        line-height: 1.5;
        margin: auto 0 0 auto;
    }
`,Qe=l.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`,Ye=l(V)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`,Je=l.span`
    color: ${d.color.orange};
    font-size: 14px;
    line-height: 1.29;
`,Ze=l.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${d.color.grey};
`;var U=typeof window>"u"?h.useEffect:h.useLayoutEffect,et=({isPlaying:t,duration:i,startAt:r=0,updateInterval:s=0,onComplete:n,onUpdate:o})=>{let[a,x]=h.useState(r),u=h.useRef(0),m=h.useRef(r),f=h.useRef(r*-1e3),c=h.useRef(null),p=h.useRef(null),j=h.useRef(null),C=y=>{let g=y/1e3;if(p.current===null){p.current=g,c.current=requestAnimationFrame(C);return}let w=g-p.current,v=u.current+w;p.current=g,u.current=v;let T=m.current+(s===0?v:(v/s|0)*s),B=m.current+v,P=typeof i=="number"&&B>=i;x(P?i:T),P||(c.current=requestAnimationFrame(C))},S=()=>{c.current&&cancelAnimationFrame(c.current),j.current&&clearTimeout(j.current),p.current=null},k=h.useCallback(y=>{S(),u.current=0;let g=typeof y=="number"?y:r;m.current=g,x(g),t&&(c.current=requestAnimationFrame(C))},[t,r]);return U(()=>{if(o==null||o(a),i&&a>=i){f.current+=i*1e3;let{shouldRepeat:y=!1,delay:g=0,newStartAt:w}=(n==null?void 0:n(f.current/1e3))||{};y&&(j.current=setTimeout(()=>k(w),g*1e3))}},[a,i]),U(()=>(t&&(c.current=requestAnimationFrame(C)),S),[t,i,s]),{elapsedTime:a,reset:k}},tt=(t,i,r)=>{let s=t/2,n=i/2,o=s-n,a=2*o,x=r==="clockwise"?"1,0":"0,1",u=2*Math.PI*o;return{path:`m ${s},${n} a ${o},${o} 0 ${x} 0,${a} a ${o},${o} 0 ${x} 0,-${a}`,pathLength:u}},O=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,it=t=>({position:"relative",width:t,height:t}),rt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},_=(t,i,r,s,n)=>{if(s===0)return i;let o=(n?s-t:t)/s;return i+r*o},G=t=>{var i,r;return(r=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,n,o,a)=>`#${n}${n}${o}${o}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:i.map(s=>parseInt(s,16)))!=null?r:[]},nt=(t,i)=>{var r;let{colors:s,colorsTime:n,isSmoothColorTransition:o=!0}=t;if(typeof s=="string")return s;let a=(r=n==null?void 0:n.findIndex((p,j)=>p>=i&&i>=n[j+1]))!=null?r:-1;if(!n||a===-1)return s[0];if(!o)return s[a];let x=n[a]-i,u=n[a]-n[a+1],m=G(s[a]),f=G(s[a+1]),c=!!t.isGrowing;return`rgb(${m.map((p,j)=>_(x,p,f[j]-p,u,c)|0).join(",")})`},st=t=>{let{duration:i,initialRemainingTime:r,updateInterval:s,size:n=180,strokeWidth:o=12,trailStrokeWidth:a,isPlaying:x=!1,isGrowing:u=!1,rotation:m="clockwise",onComplete:f,onUpdate:c}=t,p=h.useRef(),j=Math.max(o,a??0),{path:C,pathLength:S}=tt(n,j,m),{elapsedTime:k}=et({isPlaying:x,duration:i,startAt:O(i,r),updateInterval:s,onUpdate:typeof c=="function"?g=>{let w=Math.ceil(i-g);w!==p.current&&(p.current=w,c(w))}:void 0,onComplete:typeof f=="function"?g=>{var w;let{shouldRepeat:v,delay:T,newInitialRemainingTime:B}=(w=f(g))!=null?w:{};if(v)return{shouldRepeat:v,delay:T,newStartAt:O(i,B)}}:void 0}),y=i-k;return{elapsedTime:k,path:C,pathLength:S,remainingTime:Math.ceil(y),rotation:m,size:n,stroke:nt(t,y),strokeDashoffset:_(k,0,S,i,u),strokeWidth:o}},H=t=>{let{children:i,strokeLinecap:r,trailColor:s,trailStrokeWidth:n}=t,{path:o,pathLength:a,stroke:x,strokeDashoffset:u,remainingTime:m,elapsedTime:f,size:c,strokeWidth:p}=st(t);return I.createElement("div",{style:it(c)},I.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:o,fill:"none",stroke:s??"#d9d9d9",strokeWidth:n??p}),I.createElement("path",{d:o,fill:"none",stroke:x,strokeLinecap:r??"round",strokeWidth:p,strokeDasharray:a,strokeDashoffset:u})),typeof i=="function"&&I.createElement("div",{style:rt},i({remainingTime:m,elapsedTime:f,color:x})))};H.displayName="CountdownCircleTimer";const ot=l.li`
    padding: 12px 18px;
    width: 147px;
    height: 62px;
    border-radius: 12px;
    border: ${d.border.grey2};
    background: ${d.color.greySeven};
    @media (min-width: ${d.breakpoint.md}) {
        width: 168px;
        height: 70px;
    }
`,at=l.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${d.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${d.breakpoint.md}) {
        line-height: 1.5;
    }
`,lt=l(V)`
    font-weight: 700;
    color: ${d.color.white}
`,z=({tittle:t,name:i})=>e.jsxs(ot,{children:[e.jsx(at,{children:t}),e.jsx(lt,{children:i})]}),ct=({item:t={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"},onClose:i})=>{const[r,s]=h.useState(!1),[n,o]=h.useState(0),a=h.useRef(180),[x,u]=h.useState(0),[m,f]=h.useState(!1),{name:c,target:p,bodyPart:j,equipment:C,gifUrl:S,burnedCalories:k,_id:y}=t,g=180,w=A();h.useEffect(()=>{let b=null;return r&&(b=setInterval(()=>{if(r){const $=g-(a.current-1);o(Math.round($*k/g))}},1e3)),()=>{b&&clearInterval(b)}},[k,r]);const v=({remainingTime:b})=>{const L=Math.floor(b/60),$=b%60,N=$<10?`0${$}`:$;return`${L}:${N}`},T=()=>{s(!r)},B=()=>(u(b=>b+1),s(!1),{shouldRepeat:!1}),P=async b=>{b.preventDefault();try{const L={exercise:y,time:g-a.current},$=w(q(L));q.fulfilled.match($)?f(!0):(f(!1),D.error("Oops, something went wrong"))}catch{f(!1),D.error("Oops, something went wrong")}},K=()=>{i(),f(!1)};return e.jsxs(e.Fragment,{children:[!m&&e.jsx("form",{onSubmit:P,children:e.jsxs(Ve,{children:[e.jsx(_e,{children:e.jsx("img",{src:S,alt:c})}),e.jsxs(He,{children:[e.jsx(Ye,{children:"Time"}),e.jsx(H,{isPlaying:r,size:124,strokeWidth:4,trailColor:`${d.color.greySixth}`,duration:180,colors:`${d.color.orange}`,onComplete:B,children:({remainingTime:b})=>(a.current=b,v({remainingTime:b}))},x),e.jsx(Qe,{type:"button",onClick:()=>{T()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${d.color.orange}`,viewBox:"0 0 32 32",children:r?e.jsx("use",{href:`${E}#pause-btn`}):e.jsx("use",{href:`${E}#play-btn`})})}),e.jsxs(Ze,{children:["Burned calories:"," ",e.jsx(Je,{children:Math.round(n)})]})]}),e.jsxs(Ke,{children:[e.jsx(z,{tittle:"Name",name:c}),e.jsx(z,{tittle:"Target",name:p}),e.jsx(z,{tittle:"Body Part",name:j}),e.jsx(z,{tittle:"Equipment",name:C})]}),e.jsx(Xe,{type:"submit",children:"Add to diary"})]})}),m&&e.jsx(Ge,{calorise:Math.round(n),time:Math.floor((g-a.current)/60),isOpen:m,onClose:()=>K()}),e.jsx(Z,{position:"bottom-right",limit:2,autoClose:3e3})]})},dt=({item:t})=>{const[i,r]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:"workout"}),e.jsxs(me,{children:[e.jsx(ge,{children:e.jsx("use",{href:`${E}#run-man-circle`})}),e.jsx(fe,{children:t.name})]}),e.jsxs(be,{children:[e.jsx(M,{text:"Burned calories:",val:t.burnedCalories}),e.jsx(M,{text:"Body part:",val:t.bodyPart}),e.jsx(M,{text:"Target:",val:t.target})]}),e.jsxs(we,{type:"button",onClick:()=>r(!0),children:[e.jsx(je,{children:"Start"}),e.jsx(ye,{children:e.jsx("use",{href:`${E}#arrow`})})]}),i&&e.jsx(ke,{isOpen:i,onClose:()=>r(!1),children:e.jsx(ct,{item:t,onClose:()=>r(!1)})})]})},ht=l.div`
  @media (min-width: ${d.breakpoint.xl}) {
    max-width: 850px;
    max-height: 487px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${d.color.greySixth};
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${d.color.orange};
      border-radius: 12px;
      height: 153px;
    }
  }
`,pt=l.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 335px));
  justify-content: center;
  grid-row-gap: 20px;

  max-width: 335px;

  margin: 0 auto;

  @media (min-width: ${d.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 700px;
  }

  @media (min-width: ${d.breakpoint.xl}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 405px));
    max-width: 826px;
  }
`,xt=l.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  max-width: 335px;
  width: 100%;

  border-radius: 12px;
  border: ${d.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${d.breakpoint.md}) {
  }

  @media (min-width: ${d.breakpoint.xl}) {
    max-width: 405px;
  }
`,ut=(t,i)=>t.filter(r=>{const s=r.bodyPart.toLowerCase(),n=r.target.toLowerCase(),o=r.equipment.toLowerCase(),a=s.includes(i.toLowerCase()),x=n.includes(i.toLowerCase()),u=o.includes(i.toLowerCase());return a||x||u}),mt=({bodyPartFilter:t})=>{const i=A();h.useEffect(()=>{i(ee())},[i]);const r=W(n=>n.exercises.items),s=ut(r,t);return e.jsx(ht,{children:e.jsx(pt,{children:s.map((n,o)=>e.jsx(xt,{children:e.jsx(dt,{item:n})},o))})})};function wt(){const[t,i]=h.useState(""),r=ve(t),s=W(o=>o.filter.exercisesFilter),n=o=>{i(o)};return e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx(qe,{className:"row",children:e.jsxs(De,{children:[e.jsx(Le,{onClick:n}),s===""?e.jsx(Oe,{categories:r,selectedCategory:t}):e.jsx(mt,{bodyPartFilter:s})]})})})})}export{wt as default};
