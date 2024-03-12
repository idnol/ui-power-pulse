import{b as d,p as Z,s as c,t as r,u as R,d as W,j as e,a as T,E as ee,F as te,G as ie,x as I,H as q,g as D,J as re}from"./index-0ea9e0db.js";import{M as ne,a as oe,W as se,S as ae,T as le,C as ce,b as de,V as pe,c as he,d as xe,B as me,e as ue,f as ge,g as fe,N as be,I as we,h as ke,i as je,j as A,k as $e,l as ye,m as ve,n as Se}from"./AddExerciseSuccess.styled-3d724c03.js";import{a as H}from"./ReusableStyles.styled-66a06153.js";function Ce(t){const[i,n]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const a=await Z.get(`http://localhost:3333/api/exercises/filters?filter=${t}`);n(a.data)}catch(a){console.error("Error fetching categories:",a)}})()},[t]),i}const Ee=c.div`
  
`,Te=c.div`
  max-width: 335px;
  margin-right: auto;

  @media (min-width: ${r.breakpoint.md}) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`,Be=c.div`
  display: flex;
  background-color: transparent;
`,Le=c.button`
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
`,Ie=c.svg`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`,ze=c.span`
  font-size: 14px;
  line-height: 1.285;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${r.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.33;
  }
`,Pe=c.h2`
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
`,Re=c.ul`
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
`;function Ae({onClick:t,onRenderBackground:i}){const n=R();d.useEffect(()=>{i()});const[o,a]=d.useState("Body parts"),l=W(h=>h.filter.exercisesFilter);d.useEffect(()=>{t(o)},[t,o]);const s=h=>{t(h),a(h)},x=()=>{n(ee())};return e.jsxs(Ee,{children:[e.jsx(Be,{children:e.jsxs(Le,{onClick:x,children:[e.jsx(Ie,{children:e.jsx("use",{href:`${T}#arrow-left-ex`,style:{fill:"rgba(239, 237, 232, 0.4)"}})}),e.jsx(ze,{children:"back"})]})}),e.jsxs(Te,{children:[e.jsx(Pe,{children:l===""?"Exercises":l}),e.jsxs(Re,{children:[e.jsx(M,{children:e.jsx(F,{className:o==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>{s("Body parts"),x()},children:"Body parts"})}),e.jsx(M,{children:e.jsx(F,{className:o==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>{s("Muscles"),x()},children:"Muscles"})}),e.jsx(M,{children:e.jsx(F,{className:o==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>{s("Equipment"),x()},children:"Equipment"})})]})]})]})}c.div`
`;const Me=c.ul`
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
`,Fe=c.li`
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
`,We=c.div`
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
`,Ne=c.img`
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    height: 100%;
    object-fit: cover;
    background-image: url(${t=>t.src});
    background-size: cover;
    background-position: center;
`,qe=c.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
`,De=c.h3`
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
`,Ue=c.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: ${r.color.greyFifth};
`;function Oe({subcategory:t}){const i=R(),n=()=>{i(te(t.name))};return e.jsx(Fe,{onClick:n,children:e.jsxs(We,{children:[e.jsx(Ne,{src:t.imgURL,alt:t.name}),e.jsxs(qe,{children:[e.jsx(De,{isLong:t.name.length>16,children:t.name}),e.jsx(Ue,{children:t.filter})]})]})})}const Ge=c.div`
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
`,He=c.button`
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
`,Ve=t=>t.$isbackground?"url(../../../public/img/side-view-exercises-1x-desk.jpg)":"none",_e=t=>t.$isbackground?"url(../../../public/img/side-view-exercises-2x-desk.jpg)":"none",Ke=c.div`
  @media (min-width: ${r.breakpoint.xl}) {
    border-bottom: ${r.border.grey2};
    background-color: ${r.color.black};
    width: 100%;
    height: 84px;
  }
`,Xe=c.div`
  position: relative;
`,Je=c.div`
  width: 100%;
  @media (min-width: ${r.breakpoint.xl}) {
    padding-top: 72px;
  }
`,Ye=c.section`
  padding-top: 71px;
  @media (min-width: ${r.breakpoint.md}) {
    padding-top: 156px;
  }
  @media (min-width: ${r.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
   background-image: ${Ve};
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: ${_e};
       }
  }
`,Qe=c.div`
  position: relative;
   max-width: 335px;
   margin: 0 auto;
    @media (min-width: ${r.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${r.breakpoint.xl}) {
    max-width: 1248px;
  }
`;function Ze({categories:t,selectedCategory:i}){const n=t.filter(p=>p.filter===i),[o,a]=d.useState(0),[l,s]=d.useState(10),x=768,h=Math.ceil(n.length/l),u=()=>{window.scrollTo({top:0,behavior:"smooth"})};d.useEffect(()=>{const p=()=>{window.innerWidth>=x&&window.innerWidth<=1439?s(9):s(10),a(0)};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),d.useEffect(()=>{a(0),u()},[i]);const f=p=>{a(p),u()};return e.jsxs(Qe,{children:[e.jsx(Me,{children:n.slice(o*l,(o+1)*l).map((p,m)=>e.jsx(Oe,{subcategory:p},m))}),h>1&&e.jsx(Ge,{children:e.jsx("div",{children:Array.from({length:h},(p,m)=>e.jsx(He,{active:m===o,onClick:()=>f(m),children:""},m))})})]})}const et=({isOpen:t,onClose:i,calorise:n,time:o})=>{var s;const a=ie(),l=d.useRef(a);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{onClick:i,children:e.jsx(oe,{children:e.jsx("use",{href:`${T}#x-modal`})})}),t&&e.jsx(se,{children:e.jsxs(ae,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:r.breakpoint.sm,srcSet:"/img/like-1x.png"}),e.jsx("source",{media:r.breakpoint.md,srcSet:"/img/like-2x.png"}),e.jsx("img",{src:"/img/like-1x.png",alt:"Like",loading:"lazy"})]}),e.jsx(le,{children:"Well done"}),e.jsxs(ce,{children:[e.jsx(de,{children:"Your time:"}),e.jsxs(pe,{children:[o," minutes"]}),e.jsx(he,{children:"Burned calories:"}),e.jsx(xe,{children:n})]}),e.jsx(me,{type:"button",onClick:i,children:"Next exercise"}),e.jsxs(ue,{to:((s=l.current.state)==null?void 0:s.from)??"/diary",children:["To the diary",e.jsx(ge,{children:e.jsx("use",{href:`${T}#arrow`})})]})]})})]})},tt=c.div`
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
`,it=c.div`
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
`,rt=c.div`
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
`,nt=c.ul`
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
`,ot=c.button`
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
`,st=c.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`,at=c(H)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`,lt=c.span`
    color: ${r.color.orange};
    font-size: 14px;
    line-height: 1.29;
`,ct=c.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${r.color.grey};
`;var U=typeof window>"u"?d.useEffect:d.useLayoutEffect,dt=({isPlaying:t,duration:i,startAt:n=0,updateInterval:o=0,onComplete:a,onUpdate:l})=>{let[s,x]=d.useState(n),h=d.useRef(0),u=d.useRef(n),f=d.useRef(n*-1e3),p=d.useRef(null),m=d.useRef(null),w=d.useRef(null),v=j=>{let b=j/1e3;if(m.current===null){m.current=b,p.current=requestAnimationFrame(v);return}let k=b-m.current,$=h.current+k;m.current=b,h.current=$;let B=u.current+(o===0?$:($/o|0)*o),y=u.current+$,z=typeof i=="number"&&y>=i;x(z?i:B),z||(p.current=requestAnimationFrame(v))},S=()=>{p.current&&cancelAnimationFrame(p.current),w.current&&clearTimeout(w.current),m.current=null},C=d.useCallback(j=>{S(),h.current=0;let b=typeof j=="number"?j:n;u.current=b,x(b),t&&(p.current=requestAnimationFrame(v))},[t,n]);return U(()=>{if(l==null||l(s),i&&s>=i){f.current+=i*1e3;let{shouldRepeat:j=!1,delay:b=0,newStartAt:k}=(a==null?void 0:a(f.current/1e3))||{};j&&(w.current=setTimeout(()=>C(k),b*1e3))}},[s,i]),U(()=>(t&&(p.current=requestAnimationFrame(v)),S),[t,i,o]),{elapsedTime:s,reset:C}},pt=(t,i,n)=>{let o=t/2,a=i/2,l=o-a,s=2*l,x=n==="clockwise"?"1,0":"0,1",h=2*Math.PI*l;return{path:`m ${o},${a} a ${l},${l} 0 ${x} 0,${s} a ${l},${l} 0 ${x} 0,-${s}`,pathLength:h}},O=(t,i)=>t===0||t===i?0:typeof i=="number"?t-i:0,ht=t=>({position:"relative",width:t,height:t}),xt={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},V=(t,i,n,o,a)=>{if(o===0)return i;let l=(a?o-t:t)/o;return i+n*l},G=t=>{var i,n;return(n=(i=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,a,l,s)=>`#${a}${a}${l}${l}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:i.map(o=>parseInt(o,16)))!=null?n:[]},mt=(t,i)=>{var n;let{colors:o,colorsTime:a,isSmoothColorTransition:l=!0}=t;if(typeof o=="string")return o;let s=(n=a==null?void 0:a.findIndex((m,w)=>m>=i&&i>=a[w+1]))!=null?n:-1;if(!a||s===-1)return o[0];if(!l)return o[s];let x=a[s]-i,h=a[s]-a[s+1],u=G(o[s]),f=G(o[s+1]),p=!!t.isGrowing;return`rgb(${u.map((m,w)=>V(x,m,f[w]-m,h,p)|0).join(",")})`},ut=t=>{let{duration:i,initialRemainingTime:n,updateInterval:o,size:a=180,strokeWidth:l=12,trailStrokeWidth:s,isPlaying:x=!1,isGrowing:h=!1,rotation:u="clockwise",onComplete:f,onUpdate:p}=t,m=d.useRef(),w=Math.max(l,s??0),{path:v,pathLength:S}=pt(a,w,u),{elapsedTime:C}=dt({isPlaying:x,duration:i,startAt:O(i,n),updateInterval:o,onUpdate:typeof p=="function"?b=>{let k=Math.ceil(i-b);k!==m.current&&(m.current=k,p(k))}:void 0,onComplete:typeof f=="function"?b=>{var k;let{shouldRepeat:$,delay:B,newInitialRemainingTime:y}=(k=f(b))!=null?k:{};if($)return{shouldRepeat:$,delay:B,newStartAt:O(i,y)}}:void 0}),j=i-C;return{elapsedTime:C,path:v,pathLength:S,remainingTime:Math.ceil(j),rotation:u,size:a,stroke:mt(t,j),strokeDashoffset:V(C,0,S,i,h),strokeWidth:l}},_=t=>{let{children:i,strokeLinecap:n,trailColor:o,trailStrokeWidth:a}=t,{path:l,pathLength:s,stroke:x,strokeDashoffset:h,remainingTime:u,elapsedTime:f,size:p,strokeWidth:m}=ut(t);return I.createElement("div",{style:ht(p)},I.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},I.createElement("path",{d:l,fill:"none",stroke:o??"#d9d9d9",strokeWidth:a??m}),I.createElement("path",{d:l,fill:"none",stroke:x,strokeLinecap:n??"round",strokeWidth:m,strokeDasharray:s,strokeDashoffset:h})),typeof i=="function"&&I.createElement("div",{style:xt},i({remainingTime:u,elapsedTime:f,color:x})))};_.displayName="CountdownCircleTimer";const gt=c.li`
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
`,ft=c.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${r.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${r.breakpoint.md}) {
        line-height: 1.5;
    }
`,bt=c(H)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    color: ${r.color.white}
`,P=({tittle:t,name:i})=>e.jsxs(gt,{children:[e.jsx(ft,{children:t}),e.jsx(bt,{children:i})]}),wt=({item:t={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"},onClose:i})=>{const[n,o]=d.useState(!1),[a,l]=d.useState(0),s=d.useRef(180),[x,h]=d.useState(0),[u,f]=d.useState(!1),[p,m]=d.useState(0),[w,v]=d.useState(0),{name:S,target:C,bodyPart:j,equipment:b,gifUrl:k,burnedCalories:$,_id:B}=t,y=180,z=R();d.useEffect(()=>{let g=null;return n&&(g=setInterval(()=>{if(n){const E=y-(s.current-1);l(Math.floor(E*$/y))}},1e3)),()=>{g&&clearInterval(g)}},[$,n]);const K=({remainingTime:g})=>{const L=Math.floor(g/60),E=g%60,N=E<10?`0${E}`:E;return`${L}:${N}`},X=()=>{!n&&s.current===0&&(h(g=>g+1),s.current=y,l(0)),o(!n)},J=()=>(m(g=>g+y-s.current),v(g=>g+a),h(g=>g+1),o(!1),l(0),{shouldRepeat:!1}),Y=async g=>{g.preventDefault();try{const L={exercise:B,time:y-s.current+p},E=await z(q(L));q.fulfilled.match(E)?f(!0):(f(!1),D.error("Oops, something went wrong"))}catch{f(!1),D.error("Oops, something went wrong")}},Q=()=>{i(),f(!1)};return e.jsxs(e.Fragment,{children:[!u&&e.jsx("form",{onSubmit:Y,children:e.jsxs(tt,{children:[e.jsx(it,{children:e.jsx("img",{src:k,alt:S})}),e.jsxs(rt,{children:[e.jsx(at,{children:"Time"}),e.jsx(_,{isPlaying:n,size:124,strokeWidth:4,trailColor:`${r.color.greySixth}`,duration:180,colors:`${r.color.orange}`,onComplete:J,children:({remainingTime:g})=>(s.current=g,K({remainingTime:g}))},x),e.jsx(st,{type:"button",onClick:()=>{X()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${r.color.orange}`,viewBox:"0 0 32 32",children:n?e.jsx("use",{href:`${T}#pause-btn`}):e.jsx("use",{href:`${T}#play-btn`})})}),e.jsxs(ct,{children:["Burned calories:"," ",e.jsx(lt,{children:Math.floor(a+w)})]})]}),e.jsxs(nt,{children:[e.jsx(P,{tittle:"Name",name:S}),e.jsx(P,{tittle:"Target",name:C}),e.jsx(P,{tittle:"Body Part",name:j}),e.jsx(P,{tittle:"Equipment",name:b})]}),e.jsx(ot,{type:"submit",children:"Add to diary"})]})}),u&&e.jsx(et,{calorise:Math.floor(a+w),time:Math.floor((y-s.current+p)/60),isOpen:u,onClose:()=>Q()})]})},kt=({item:t})=>{const[i,n]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(fe,{children:"workout"}),e.jsxs(be,{children:[e.jsx(we,{children:e.jsx("use",{href:`${T}#run-man-circle`})}),e.jsx(ke,{children:t.name})]}),e.jsxs(je,{children:[e.jsx(A,{text:"Burned calories:",val:t.burnedCalories}),e.jsx(A,{text:"Body part:",val:t.bodyPart}),e.jsx(A,{text:"Target:",val:t.target})]}),e.jsxs($e,{type:"button",onClick:()=>n(!0),children:[e.jsx(ye,{children:"Start"}),e.jsx(ve,{children:e.jsx("use",{href:`${T}#arrow`})})]}),i&&e.jsx(Se,{isOpen:i,onClose:()=>n(!1),children:e.jsx(wt,{item:t,onClose:()=>n(!1)})})]})},jt=c.div`
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
`,$t=c.ul`
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
`,yt=c.li`
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
`,vt=(t,i)=>t.filter(n=>{const o=n.bodyPart.toLowerCase(),a=n.target.toLowerCase(),l=n.equipment.toLowerCase(),s=o.includes(i.toLowerCase()),x=a.includes(i.toLowerCase()),h=l.includes(i.toLowerCase());return s||x||h}),St=({bodyPartFilter:t,onRenderBackground:i})=>{const n=R();d.useEffect(()=>{n(re())},[n]),d.useEffect(()=>{i()});const o=W(l=>l.exercises.items),a=vt(o,t);return e.jsx(jt,{children:e.jsx($t,{children:a.map((l,s)=>e.jsx(yt,{children:e.jsx(kt,{item:l})},s))})})};function Bt(){const[t,i]=d.useState(!1),[n,o]=d.useState(""),a=Ce(n),l=W(u=>u.filter.exercisesFilter),s=u=>{o(u)},x=()=>{i(!0)},h=()=>{i(!1)};return e.jsxs(Ye,{$isbackground:t,children:[e.jsx(Ke,{}),e.jsx("div",{className:"container",children:e.jsx(Xe,{children:e.jsxs(Je,{children:[e.jsx(Ae,{onClick:s,onRenderBackground:h}),l===""?e.jsx(Ze,{categories:a,selectedCategory:n}):e.jsx(St,{bodyPartFilter:l,onRenderBackground:x})]})})})]})}export{Bt as default};
