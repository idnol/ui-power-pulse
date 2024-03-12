import{a as d,o as X,s as c,t as r,u as R,d as W,j as e,b as E,D as Y,E as J,F as Q,B as I,G as q,g as D,H as Z}from"./index-afe6ff0f.js";import{M as ee,a as te,W as ie,S as re,T as ne,C as oe,b as se,V as ae,c as le,d as ce,B as de,e as pe,f as he,g as xe,N as me,I as ue,h as ge,i as fe,j as A,k as be,l as we,m as ke,n as je}from"./AddExerciseSuccess.styled-e53620f9.js";import{a as H}from"./ReusableStyles.styled-cffdfb5a.js";function $e(t){const[i,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const s=await X.get(`http://localhost:3333/api/exercises/filters?filter=${t}`);n(s.data)}catch(s){console.error("Error fetching categories:",s)}})()},[t]),i}const ye=c.div`
  
`,ve=c.div`
  max-width: 335px;
  margin-right: auto;

  @media (min-width: ${r.breakpoint.md}) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`,Se=c.div`
  display: flex;
  background-color: transparent;
`,Ce=c.button`
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
`,Be=c.span`
  font-size: 14px;
  line-height: 1.285;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${r.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.33;
  }
`,Te=c.h2`
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
`,M=c.li`
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
`;function Ie({onClick:t,onRenderBackground:i}){const n=R();d.useEffect(()=>{i()});const[o,s]=d.useState("Body parts"),l=W(x=>x.filter.exercisesFilter);d.useEffect(()=>{t(o)},[t,o]);const a=x=>{t(x),s(x)},h=()=>{n(Y())};return e.jsxs(ye,{children:[e.jsx(Se,{children:e.jsxs(Ce,{onClick:h,children:[e.jsx(Ee,{children:e.jsx("use",{href:`${E}#arrow-left-ex`,style:{fill:"rgba(239, 237, 232, 0.4)"}})}),e.jsx(Be,{children:"back"})]})}),e.jsxs(ve,{children:[e.jsx(Te,{children:l===""?"Exercises":l}),e.jsxs(Le,{children:[e.jsx(M,{children:e.jsx(F,{className:o==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>{a("Body parts"),h()},children:"Body parts"})}),e.jsx(M,{children:e.jsx(F,{className:o==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>{a("Muscles"),h()},children:"Muscles"})}),e.jsx(M,{children:e.jsx(F,{className:o==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>{a("Equipment"),h()},children:"Equipment"})})]})]})]})}c.div`
`;const ze=c.ul`
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
`,Pe=c.li`
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
`,Re=c.div`
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
`,Ae=c.img`
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    height: 100%;
    object-fit: cover;
    background-image: url(${t=>t.src});
    background-size: cover;
    background-position: center;
`,Me=c.div`
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
`;function Ne({subcategory:t}){const i=R(),n=()=>{i(J(t.name))};return e.jsx(Pe,{onClick:n,children:e.jsxs(Re,{children:[e.jsx(Ae,{src:t.imgURL,alt:t.name}),e.jsxs(Me,{children:[e.jsx(Fe,{isLong:t.name.length>16,children:t.name}),e.jsx(We,{children:t.filter})]})]})})}const qe=c.div`
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
`,Ue=t=>t.$isbackground?"url(../../../public/img/side-view-exercises-1x-desk.jpg)":"none",Oe=t=>t.$isbackground?"url(../../../public/img/side-view-exercises-2x-desk.jpg)":"none",Ge=c.div`
  @media (min-width: ${r.breakpoint.xl}) {
    border-bottom: ${r.border.grey2};
    background-color: ${r.color.black};
    width: 100%;
    height: 84px;
  }
`,He=c.div`
  position: relative;
`,Ve=c.div`
  width: 100%;
  @media (min-width: ${r.breakpoint.xl}) {
    padding-top: 72px;
  }
`,_e=c.section`
  padding-top: 101px;
  @media (min-width: ${r.breakpoint.md}) {
    padding-top: 156px;
  }
  @media (min-width: ${r.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
   background-image: ${Ue};
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: ${Oe};
       }
  }
`,Ke=c.div`
  position: relative;
   max-width: 335px;
   margin: 0 auto;
    @media (min-width: ${r.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${r.breakpoint.xl}) {
    max-width: 1248px;
  }
`;function Xe({categories:t,selectedCategory:i}){const n=t.filter(p=>p.filter===i),[o,s]=d.useState(0),[l,a]=d.useState(10),h=768,x=Math.ceil(n.length/l),u=()=>{window.scrollTo({top:0,behavior:"smooth"})};d.useEffect(()=>{const p=()=>{window.innerWidth>=h&&window.innerWidth<=1439?a(9):a(10),s(0)};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),d.useEffect(()=>{s(0),u()},[i]);const f=p=>{s(p),u()};return e.jsxs(Ke,{children:[e.jsx(ze,{children:n.slice(o*l,(o+1)*l).map((p,m)=>e.jsx(Ne,{subcategory:p},m))}),x>1&&e.jsx(qe,{children:e.jsx("div",{children:Array.from({length:x},(p,m)=>e.jsx(De,{active:m===o,onClick:()=>f(m),children:""},m))})})]})}const Ye=({isOpen:t,onClose:i,calorise:n,time:o})=>{var a;const s=Q(),l=d.useRef(s);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{onClick:i,children:e.jsx(te,{children:e.jsx("use",{href:`${E}#x-modal`})})}),t&&e.jsx(ie,{children:e.jsxs(re,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:r.breakpoint.sm,srcSet:"/img/like-1x.png"}),e.jsx("source",{media:r.breakpoint.md,srcSet:"/img/like-2x.png"}),e.jsx("img",{src:"/img/like-1x.png",alt:"Like",loading:"lazy"})]}),e.jsx(ne,{children:"Well done"}),e.jsxs(oe,{children:[e.jsx(se,{children:"Your time:"}),e.jsxs(ae,{children:[o," minutes"]}),e.jsx(le,{children:"Burned calories:"}),e.jsx(ce,{children:n})]}),e.jsx(de,{type:"button",onClick:i,children:"Next exercise"}),e.jsxs(pe,{to:((a=l.current.state)==null?void 0:a.from)??"/diary",children:["To the diary",e.jsx(he,{children:e.jsx("use",{href:`${E}#arrow`})})]})]})})]})},Je=c.div`
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
`,Qe=c.div`
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
`,Ze=c.div`
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
`,et=c.ul`
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
`,tt=c.button`
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
`,it=c.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`,rt=c(H)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`,nt=c.span`
    color: ${r.color.orange};
    font-size: 14px;
    line-height: 1.29;
`,ot=c.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${r.color.grey};
`;var U=typeof window>"u"?d.useEffect:d.useLayoutEffect,st=({isPlaying:t,duration:i,startAt:n=0,updateInterval:o=0,onComplete:s,onUpdate:l})=>{let[a,h]=d.useState(n),x=d.useRef(0),u=d.useRef(n),f=d.useRef(n*-1e3),p=d.useRef(null),m=d.useRef(null),k=d.useRef(null),v=j=>{let g=j/1e3;if(m.current===null){m.current=g,p.current=requestAnimationFrame(v);return}let w=g-m.current,y=x.current+w;m.current=g,x.current=y;let B=u.current+(o===0?y:(y/o|0)*o),T=u.current+y,z=typeof i=="number"&&T>=i;h(z?i:B),z||(p.current=requestAnimationFrame(v))},S=()=>{p.current&&cancelAnimationFrame(p.current),k.current&&clearTimeout(k.current),m.current=null},$=d.useCallback(j=>{S(),x.current=0;let g=typeof j=="number"?j:n;u.current=g,h(g),t&&(p.current=requestAnimationFrame(v))},[t,n]);return U(()=>{if(l==null||l(a),i&&a>=i){f.current+=i*1e3;let{shouldRepeat:j=!1,delay:g=0,newStartAt:w}=(s==null?void 0:s(f.current/1e3))||{};j&&(k.current=setTimeout(()=>$(w),g*1e3))}},[a,i]),U(()=>(t&&(p.current=requestAnimationFrame(v)),S),[t,i,o]),{elapsedTime:a,reset:$}},at=(t,i,n)=>{let o=t/2,s=i/2,l=o-s,a=2*l,h=n==="clockwise"?"1,0":"0,1",x=2*Math.PI*l;return{path:`m ${o},${s} a ${l},${l} 0 ${h} 0,${a} a ${l},${l} 0 ${h} 0,-${a}`,pathLength:x}},O=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,lt=t=>({position:"relative",width:t,height:t}),ct={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},V=(t,i,n,o,s)=>{if(o===0)return i;let l=(s?o-t:t)/o;return i+n*l},G=t=>{var i,n;return(n=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,s,l,a)=>`#${s}${s}${l}${l}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:i.map(o=>parseInt(o,16)))!=null?n:[]},dt=(t,i)=>{var n;let{colors:o,colorsTime:s,isSmoothColorTransition:l=!0}=t;if(typeof o=="string")return o;let a=(n=s==null?void 0:s.findIndex((m,k)=>m>=i&&i>=s[k+1]))!=null?n:-1;if(!s||a===-1)return o[0];if(!l)return o[a];let h=s[a]-i,x=s[a]-s[a+1],u=G(o[a]),f=G(o[a+1]),p=!!t.isGrowing;return`rgb(${u.map((m,k)=>V(h,m,f[k]-m,x,p)|0).join(",")})`},pt=t=>{let{duration:i,initialRemainingTime:n,updateInterval:o,size:s=180,strokeWidth:l=12,trailStrokeWidth:a,isPlaying:h=!1,isGrowing:x=!1,rotation:u="clockwise",onComplete:f,onUpdate:p}=t,m=d.useRef(),k=Math.max(l,a??0),{path:v,pathLength:S}=at(s,k,u),{elapsedTime:$}=st({isPlaying:h,duration:i,startAt:O(i,n),updateInterval:o,onUpdate:typeof p=="function"?g=>{let w=Math.ceil(i-g);w!==m.current&&(m.current=w,p(w))}:void 0,onComplete:typeof f=="function"?g=>{var w;let{shouldRepeat:y,delay:B,newInitialRemainingTime:T}=(w=f(g))!=null?w:{};if(y)return{shouldRepeat:y,delay:B,newStartAt:O(i,T)}}:void 0}),j=i-$;return{elapsedTime:$,path:v,pathLength:S,remainingTime:Math.ceil(j),rotation:u,size:s,stroke:dt(t,j),strokeDashoffset:V($,0,S,i,x),strokeWidth:l}},_=t=>{let{children:i,strokeLinecap:n,trailColor:o,trailStrokeWidth:s}=t,{path:l,pathLength:a,stroke:h,strokeDashoffset:x,remainingTime:u,elapsedTime:f,size:p,strokeWidth:m}=pt(t);return I.createElement("div",{style:lt(p)},I.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:l,fill:"none",stroke:o??"#d9d9d9",strokeWidth:s??m}),I.createElement("path",{d:l,fill:"none",stroke:h,strokeLinecap:n??"round",strokeWidth:m,strokeDasharray:a,strokeDashoffset:x})),typeof i=="function"&&I.createElement("div",{style:ct},i({remainingTime:u,elapsedTime:f,color:h})))};_.displayName="CountdownCircleTimer";const ht=c.li`
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
`,xt=c.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${r.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${r.breakpoint.md}) {
        line-height: 1.5;
    }
`,mt=c(H)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    color: ${r.color.white}
`,P=({tittle:t,name:i})=>e.jsxs(ht,{children:[e.jsx(xt,{children:t}),e.jsx(mt,{children:i})]}),ut=({item:t={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"},onClose:i})=>{const[n,o]=d.useState(!1),[s,l]=d.useState(0),a=d.useRef(180),[h,x]=d.useState(0),[u,f]=d.useState(!1),{name:p,target:m,bodyPart:k,equipment:v,gifUrl:S,burnedCalories:$,_id:j}=t,g=180,w=R();d.useEffect(()=>{let b=null;return n&&(b=setInterval(()=>{if(n){const C=g-(a.current-1);l(Math.floor(C*$/g))}},1e3)),()=>{b&&clearInterval(b)}},[$,n]);const y=({remainingTime:b})=>{const L=Math.floor(b/60),C=b%60,N=C<10?`0${C}`:C;return`${L}:${N}`},B=()=>{o(!n)},T=()=>(x(b=>b+1),o(!1),{shouldRepeat:!1}),z=async b=>{b.preventDefault();try{const L={exercise:j,time:g-a.current},C=await w(q(L));q.fulfilled.match(C)?f(!0):(f(!1),D.error("Oops, something went wrong"))}catch{f(!1),D.error("Oops, something went wrong")}},K=()=>{i(),f(!1)};return e.jsxs(e.Fragment,{children:[!u&&e.jsx("form",{onSubmit:z,children:e.jsxs(Je,{children:[e.jsx(Qe,{children:e.jsx("img",{src:S,alt:p})}),e.jsxs(Ze,{children:[e.jsx(rt,{children:"Time"}),e.jsx(_,{isPlaying:n,size:124,strokeWidth:4,trailColor:`${r.color.greySixth}`,duration:180,colors:`${r.color.orange}`,onComplete:T,children:({remainingTime:b})=>(a.current=b,y({remainingTime:b}))},h),e.jsx(it,{type:"button",onClick:()=>{B()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${r.color.orange}`,viewBox:"0 0 32 32",children:n?e.jsx("use",{href:`${E}#pause-btn`}):e.jsx("use",{href:`${E}#play-btn`})})}),e.jsxs(ot,{children:["Burned calories:"," ",e.jsx(nt,{children:Math.round(s)})]})]}),e.jsxs(et,{children:[e.jsx(P,{tittle:"Name",name:p}),e.jsx(P,{tittle:"Target",name:m}),e.jsx(P,{tittle:"Body Part",name:k}),e.jsx(P,{tittle:"Equipment",name:v})]}),e.jsx(tt,{type:"submit",children:"Add to diary"})]})}),u&&e.jsx(Ye,{calorise:Math.round(s),time:Math.floor((g-a.current)/60),isOpen:u,onClose:()=>K()})]})},gt=({item:t})=>{const[i,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:"workout"}),e.jsxs(me,{children:[e.jsx(ue,{children:e.jsx("use",{href:`${E}#run-man-circle`})}),e.jsx(ge,{children:t.name})]}),e.jsxs(fe,{children:[e.jsx(A,{text:"Burned calories:",val:t.burnedCalories}),e.jsx(A,{text:"Body part:",val:t.bodyPart}),e.jsx(A,{text:"Target:",val:t.target})]}),e.jsxs(be,{type:"button",onClick:()=>n(!0),children:[e.jsx(we,{children:"Start"}),e.jsx(ke,{children:e.jsx("use",{href:`${E}#arrow`})})]}),i&&e.jsx(je,{isOpen:i,onClose:()=>n(!1),children:e.jsx(ut,{item:t,onClose:()=>n(!1)})})]})},ft=c.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${r.breakpoint.md}) {
    overflow-y: scroll;
    max-width: 704px;
    max-height: 686px;

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
    margin: 0;
  }
`,bt=c.ul`
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
`,wt=c.li`
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
`,kt=(t,i)=>t.filter(n=>{const o=n.bodyPart.toLowerCase(),s=n.target.toLowerCase(),l=n.equipment.toLowerCase(),a=o.includes(i.toLowerCase()),h=s.includes(i.toLowerCase()),x=l.includes(i.toLowerCase());return a||h||x}),jt=({bodyPartFilter:t,onRenderBackground:i})=>{const n=R();d.useEffect(()=>{n(Z())},[n]),d.useEffect(()=>{i()});const o=W(l=>l.exercises.items),s=kt(o,t);return e.jsx(ft,{children:e.jsx(bt,{children:s.map((l,a)=>e.jsx(wt,{children:e.jsx(gt,{item:l})},a))})})};function St(){const[t,i]=d.useState(!1),[n,o]=d.useState(""),s=$e(n),l=W(u=>u.filter.exercisesFilter),a=u=>{o(u)},h=()=>{i(!0)},x=()=>{i(!1)};return e.jsxs(_e,{$isbackground:t,children:[e.jsx(Ge,{}),e.jsx("div",{className:"container",children:e.jsx(He,{children:e.jsxs(Ve,{children:[e.jsx(Ie,{onClick:a,onRenderBackground:x}),l===""?e.jsx(Xe,{categories:s,selectedCategory:n}):e.jsx(jt,{bodyPartFilter:l,onRenderBackground:h})]})})})]})}export{St as default};
