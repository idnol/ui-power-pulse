import{a as h,k as X,s as l,u as A,d as W,j as e,b as E,B as Y,C as J,D as Q,t as d,z as I,E as q,n as D,F as Z}from"./index-44247cc4.js";import{M as ee,a as te,W as re,S as ie,T as ne,C as se,b as oe,V as ae,c as le,d as ce,B as de,e as he,f as pe,g as xe,N as ue,I as me,h as ge,i as fe,j as M,k as be,l as we,m as je,n as ye}from"./AddExerciseSuccess.styled-6f5df8cd.js";import{a as V}from"./ReusableStyles.styled-a6d5f7f3.js";function ke(t){const[r,i]=h.useState([]);return h.useEffect(()=>{(async()=>{try{const n=await X.get(`http://localhost:3333/api/exercises/filters?filter=${t}`);i(n.data)}catch(n){console.error("Error fetching categories:",n)}})()},[t]),r}const ve=l.div`
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`,Ce=l.div``,Se=l.button`
  margin-bottom: 12px;
`,$e=l.svg`
  width: 12px;
  height: 12px;
`,Ee=l.h2`
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
`,Te=l.ul`
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
`;function Be({onClick:t}){const r=A(),[i,s]=h.useState("Body parts"),n=W(x=>x.filter.exercisesFilter);h.useEffect(()=>{t(i)},[t,i]);const o=x=>{t(x),s(x)},a=()=>{r(Y())};return e.jsxs(ve,{children:[n!==""&&e.jsx(Se,{onClick:a,children:e.jsxs(Ce,{children:[e.jsx($e,{children:e.jsx("use",{href:`${E}#arrow-left-ex`})}),"back"]})}),e.jsx(Ee,{children:n===""?"Exercises":n}),e.jsxs(Te,{children:[e.jsx(R,{children:e.jsx(F,{className:i==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>{o("Body parts"),a()},children:"Body parts"})}),e.jsx(R,{children:e.jsx(F,{className:i==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>{o("Muscles"),a()},children:"Muscles"})}),e.jsx(R,{children:e.jsx(F,{className:i==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>{o("Equipment"),a()},children:"Equipment"})})]})]})}l.div`
`;const Le=l.ul`
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
`,Ie=l.li`
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
`,Pe=l.div`
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
`,ze=l.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`,Ae=l.h3`
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
`,Me=l.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: rgba(239, 237, 232, 0.4);
`;function Re({subcategory:t}){const r=A(),i=()=>{r(J(t.name))};return e.jsxs(Ie,{onClick:i,children:[e.jsx(Pe,{src:t.imgURL,alt:t.name}),e.jsxs(ze,{children:[e.jsx(Ae,{children:t.name}),e.jsx(Me,{children:t.filter})]})]})}const Fe=l.div`
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
`,We=l.button`
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

`,Ne=l.div`
  position: relative;
`,qe=l.div`
  padding-top: 154px;
  width: 100%;
`,De=l.div`
  position: relative;
`;l.button`
  position: absolute;
  top: 71px;
  left: 0;
`;function Ue({categories:t,selectedCategory:r}){const i=t.filter(c=>c.filter===r),[s,n]=h.useState(0),[o,a]=h.useState(10),x=768,u=Math.ceil(i.length/o),m=()=>{window.scrollTo({top:0,behavior:"smooth"})};h.useEffect(()=>{const c=()=>{window.innerWidth>=x&&window.innerWidth<=1439?a(9):a(10),n(0)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),h.useEffect(()=>{n(0),m()},[r]);const f=c=>{n(c),m()};return e.jsxs(De,{children:[e.jsx(Le,{children:i.slice(s*o,(s+1)*o).map((c,p)=>e.jsx(Re,{subcategory:c},p))}),u>1&&e.jsx(Fe,{children:e.jsx("div",{children:Array.from({length:u},(c,p)=>e.jsx(We,{active:p===s,onClick:()=>f(p),children:""},p))})})]})}const Oe=({isOpen:t,onClose:r,calorise:i,time:s})=>{var a;const n=Q(),o=h.useRef(n);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{onClick:r,children:e.jsx(te,{children:e.jsx("use",{href:`${E}#x-modal`})})}),t&&e.jsx(re,{children:e.jsxs(ie,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:d.breakpoint.sm,srcSet:"/img/like-1x.png"}),e.jsx("source",{media:d.breakpoint.md,srcSet:"/img/like-2x.png"}),e.jsx("img",{src:"/img/like-1x.png",alt:"Like",loading:"lazy"})]}),e.jsx(ne,{children:"Well done"}),e.jsxs(se,{children:[e.jsx(oe,{children:"Your time:"}),e.jsxs(ae,{children:[s," minutes"]}),e.jsx(le,{children:"Burned calories:"}),e.jsx(ce,{children:i})]}),e.jsx(de,{type:"button",onClick:r,children:"Next exercise"}),e.jsxs(he,{to:((a=o.current.state)==null?void 0:a.from)??"/diary",children:["To the diary",e.jsx(pe,{children:e.jsx("use",{href:`${E}#arrow`})})]})]})})]})},Ge=l.div`
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
`,Ve=l.div`
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
`,_e=l.div`
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
`,He=l.ul`
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
`,Ke=l.button`
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
`,Xe=l.button`
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
`,Qe=l.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${d.color.grey};
`;var U=typeof window>"u"?h.useEffect:h.useLayoutEffect,Ze=({isPlaying:t,duration:r,startAt:i=0,updateInterval:s=0,onComplete:n,onUpdate:o})=>{let[a,x]=h.useState(i),u=h.useRef(0),m=h.useRef(i),f=h.useRef(i*-1e3),c=h.useRef(null),p=h.useRef(null),j=h.useRef(null),C=y=>{let g=y/1e3;if(p.current===null){p.current=g,c.current=requestAnimationFrame(C);return}let w=g-p.current,v=u.current+w;p.current=g,u.current=v;let T=m.current+(s===0?v:(v/s|0)*s),B=m.current+v,P=typeof r=="number"&&B>=r;x(P?r:T),P||(c.current=requestAnimationFrame(C))},S=()=>{c.current&&cancelAnimationFrame(c.current),j.current&&clearTimeout(j.current),p.current=null},k=h.useCallback(y=>{S(),u.current=0;let g=typeof y=="number"?y:i;m.current=g,x(g),t&&(c.current=requestAnimationFrame(C))},[t,i]);return U(()=>{if(o==null||o(a),r&&a>=r){f.current+=r*1e3;let{shouldRepeat:y=!1,delay:g=0,newStartAt:w}=(n==null?void 0:n(f.current/1e3))||{};y&&(j.current=setTimeout(()=>k(w),g*1e3))}},[a,r]),U(()=>(t&&(c.current=requestAnimationFrame(C)),S),[t,r,s]),{elapsedTime:a,reset:k}},et=(t,r,i)=>{let s=t/2,n=r/2,o=s-n,a=2*o,x=i==="clockwise"?"1,0":"0,1",u=2*Math.PI*o;return{path:`m ${s},${n} a ${o},${o} 0 ${x} 0,${a} a ${o},${o} 0 ${x} 0,-${a}`,pathLength:u}},O=(t,r)=>t===0||t===r?0:typeof r=="number"?t-r:0,tt=t=>({position:"relative",width:t,height:t}),rt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},_=(t,r,i,s,n)=>{if(s===0)return r;let o=(n?s-t:t)/s;return r+i*o},G=t=>{var r,i;return(i=(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(s,n,o,a)=>`#${n}${n}${o}${o}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:r.map(s=>parseInt(s,16)))!=null?i:[]},it=(t,r)=>{var i;let{colors:s,colorsTime:n,isSmoothColorTransition:o=!0}=t;if(typeof s=="string")return s;let a=(i=n==null?void 0:n.findIndex((p,j)=>p>=r&&r>=n[j+1]))!=null?i:-1;if(!n||a===-1)return s[0];if(!o)return s[a];let x=n[a]-r,u=n[a]-n[a+1],m=G(s[a]),f=G(s[a+1]),c=!!t.isGrowing;return`rgb(${m.map((p,j)=>_(x,p,f[j]-p,u,c)|0).join(",")})`},nt=t=>{let{duration:r,initialRemainingTime:i,updateInterval:s,size:n=180,strokeWidth:o=12,trailStrokeWidth:a,isPlaying:x=!1,isGrowing:u=!1,rotation:m="clockwise",onComplete:f,onUpdate:c}=t,p=h.useRef(),j=Math.max(o,a??0),{path:C,pathLength:S}=et(n,j,m),{elapsedTime:k}=Ze({isPlaying:x,duration:r,startAt:O(r,i),updateInterval:s,onUpdate:typeof c=="function"?g=>{let w=Math.ceil(r-g);w!==p.current&&(p.current=w,c(w))}:void 0,onComplete:typeof f=="function"?g=>{var w;let{shouldRepeat:v,delay:T,newInitialRemainingTime:B}=(w=f(g))!=null?w:{};if(v)return{shouldRepeat:v,delay:T,newStartAt:O(r,B)}}:void 0}),y=r-k;return{elapsedTime:k,path:C,pathLength:S,remainingTime:Math.ceil(y),rotation:m,size:n,stroke:it(t,y),strokeDashoffset:_(k,0,S,r,u),strokeWidth:o}},H=t=>{let{children:r,strokeLinecap:i,trailColor:s,trailStrokeWidth:n}=t,{path:o,pathLength:a,stroke:x,strokeDashoffset:u,remainingTime:m,elapsedTime:f,size:c,strokeWidth:p}=nt(t);return I.createElement("div",{style:tt(c)},I.createElement("svg",{viewBox:`0 0 ${c} ${c}`,width:c,height:c,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:o,fill:"none",stroke:s??"#d9d9d9",strokeWidth:n??p}),I.createElement("path",{d:o,fill:"none",stroke:x,strokeLinecap:i??"round",strokeWidth:p,strokeDasharray:a,strokeDashoffset:u})),typeof r=="function"&&I.createElement("div",{style:rt},r({remainingTime:m,elapsedTime:f,color:x})))};H.displayName="CountdownCircleTimer";const st=l.li`
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
`,ot=l.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${d.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${d.breakpoint.md}) {
        line-height: 1.5;
    }
`,at=l(V)`
    font-weight: 700;
    color: ${d.color.white}
`,z=({tittle:t,name:r})=>e.jsxs(st,{children:[e.jsx(ot,{children:t}),e.jsx(at,{children:r})]}),lt=({item:t={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"},onClose:r})=>{const[i,s]=h.useState(!1),[n,o]=h.useState(0),a=h.useRef(180),[x,u]=h.useState(0),[m,f]=h.useState(!1),{name:c,target:p,bodyPart:j,equipment:C,gifUrl:S,burnedCalories:k,_id:y}=t,g=180,w=A();h.useEffect(()=>{let b=null;return i&&(b=setInterval(()=>{if(i){const $=g-(a.current-1);o(Math.round($*k/g))}},1e3)),()=>{b&&clearInterval(b)}},[k,i]);const v=({remainingTime:b})=>{const L=Math.floor(b/60),$=b%60,N=$<10?`0${$}`:$;return`${L}:${N}`},T=()=>{s(!i)},B=()=>(u(b=>b+1),s(!1),{shouldRepeat:!1}),P=async b=>{b.preventDefault();try{const L={exercise:y,time:g-a.current},$=await w(q(L));q.fulfilled.match($)?f(!0):(f(!1),D.error("Oops, something went wrong"))}catch{f(!1),D.error("Oops, something went wrong")}},K=()=>{r(),f(!1)};return e.jsxs(e.Fragment,{children:[!m&&e.jsx("form",{onSubmit:P,children:e.jsxs(Ge,{children:[e.jsx(Ve,{children:e.jsx("img",{src:S,alt:c})}),e.jsxs(_e,{children:[e.jsx(Ye,{children:"Time"}),e.jsx(H,{isPlaying:i,size:124,strokeWidth:4,trailColor:`${d.color.greySixth}`,duration:180,colors:`${d.color.orange}`,onComplete:B,children:({remainingTime:b})=>(a.current=b,v({remainingTime:b}))},x),e.jsx(Xe,{type:"button",onClick:()=>{T()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${d.color.orange}`,viewBox:"0 0 32 32",children:i?e.jsx("use",{href:`${E}#pause-btn`}):e.jsx("use",{href:`${E}#play-btn`})})}),e.jsxs(Qe,{children:["Burned calories:"," ",e.jsx(Je,{children:Math.round(n)})]})]}),e.jsxs(He,{children:[e.jsx(z,{tittle:"Name",name:c}),e.jsx(z,{tittle:"Target",name:p}),e.jsx(z,{tittle:"Body Part",name:j}),e.jsx(z,{tittle:"Equipment",name:C})]}),e.jsx(Ke,{type:"submit",children:"Add to diary"})]})}),m&&e.jsx(Oe,{calorise:Math.round(n),time:Math.floor((g-a.current)/60),isOpen:m,onClose:()=>K()})]})},ct=({item:t})=>{const[r,i]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:"workout"}),e.jsxs(ue,{children:[e.jsx(me,{children:e.jsx("use",{href:`${E}#run-man-circle`})}),e.jsx(ge,{children:t.name})]}),e.jsxs(fe,{children:[e.jsx(M,{text:"Burned calories:",val:t.burnedCalories}),e.jsx(M,{text:"Body part:",val:t.bodyPart}),e.jsx(M,{text:"Target:",val:t.target})]}),e.jsxs(be,{type:"button",onClick:()=>i(!0),children:[e.jsx(we,{children:"Start"}),e.jsx(je,{children:e.jsx("use",{href:`${E}#arrow`})})]}),r&&e.jsx(ye,{isOpen:r,onClose:()=>i(!1),children:e.jsx(lt,{item:t,onClose:()=>i(!1)})})]})},dt=l.div`
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
`,ht=l.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-gap: 20px;

  margin: 0 auto;

  @media (min-width: ${d.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 704px;
  }

  @media (min-width: ${d.breakpoint.xl}) {
    max-width: 850px;
  }
`,pt=l.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  width: 100%;

  border-radius: 12px;
  border: ${d.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${d.breakpoint.md}) {
    max-width: 336px;
  }

  @media (min-width: ${d.breakpoint.xl}) {
    max-width: 405px;
  }
`,xt=(t,r)=>t.filter(i=>{const s=i.bodyPart.toLowerCase(),n=i.target.toLowerCase(),o=i.equipment.toLowerCase(),a=s.includes(r.toLowerCase()),x=n.includes(r.toLowerCase()),u=o.includes(r.toLowerCase());return a||x||u}),ut=({bodyPartFilter:t})=>{const r=A();h.useEffect(()=>{r(Z())},[r]);const i=W(n=>n.exercises.items),s=xt(i,t);return e.jsx(dt,{children:e.jsx(ht,{children:s.map((n,o)=>e.jsx(pt,{children:e.jsx(ct,{item:n})},o))})})};function bt(){const[t,r]=h.useState(""),i=ke(t),s=W(o=>o.filter.exercisesFilter),n=o=>{r(o)};return e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx(Ne,{className:"row",children:e.jsxs(qe,{children:[e.jsx(Be,{onClick:n}),s===""?e.jsx(Ue,{categories:i,selectedCategory:t}):e.jsx(ut,{bodyPartFilter:s})]})})})})}export{bt as default};
