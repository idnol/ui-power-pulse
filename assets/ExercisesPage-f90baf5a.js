import{b as c,q as ee,s as d,t as i,u as P,d as J,j as e,a as E,F as te,G as re,H as ie,D as T,J as q,g as Y,K as ne}from"./index-7fed7879.js";import{M as oe,a as se,W as ae,S as le,T as de,C as ce,b as pe,V as he,c as xe,d as ue,B as me,e as ge,f as fe,g as be,N as we,I as ke,h as je,i as ve,j as $,k as ye,l as Se,m as Ce,n as Ae}from"./AddExerciseSuccess.styled-475b3d00.js";import{a as Z}from"./ReusableStyles.styled-d18a916f.js";function Be(t){const[r,n]=c.useState([]);return c.useEffect(()=>{(async()=>{try{const a=await ee.get(`/exercises/filters?filter=${t}`);n(a.data)}catch(a){console.error("Error fetching categories:",a)}})()},[t]),r}const Ee=d.div`
position: relative;
`,Fe=d.div`
  max-width: 335px;
  margin-right: auto;
 

  @media (min-width: ${i.breakpoint.md}) {
    max-width: 100%;
    display: flex;
    align-items: baseline;
  }
`,Le=d.div`
  display: flex;
  background-color: transparent;
  position: absolute;
  top: -35%;
  left: 0;
  @media (min-width: ${i.breakpoint.md}) {
    top: -30%;
  }
`,Te=d.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${i.color.greyFifth};
`,Ue=d.svg`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`,Re=d.span`
  font-size: 14px;
  line-height: 1.285;
  &::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: ${i.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.33;
  }
`,Pe=d.h2`
  font-size: 24px;
  line-height: 1.16;
  max-width: 200px;
  text-transform: capitalize;
  margin-bottom: 20px;

  @media (min-width: ${i.breakpoint.md}) {
    display: flex;
    justify-content: baseline;
    max-width: 200px;
    line-height: 1.375;
    font-size: 32px;
    margin-bottom: 64px;
  }
`,$e=d.ul`
  display: flex;
  width: 244px;
  height: 26px;
  gap: 28px;
  margin-bottom: 40px;

  @media (min-width: ${i.breakpoint.md}) {
    gap: 32px;
    margin-left: auto;
    width: 279px;
    height: 32px;
    margin-bottom: 0px;
  }
`,M=d.li`
  line-height: 1.285;
  font-size: 14px;
  cursor: pointer;

  @media (min-width: ${i.breakpoint.md}) {
    line-height: 1.5;
    height: 24px;
    font-size: 16px;
  }
`,N=d.span`
  text-decoration: none;
  position: relative;
  color: ${i.color.greyFifth};
  cursor: pointer;
  &.active, &:hover {
    color: ${i.color.white};
    &:after {
      content: '';
      position: absolute;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4px;
      background-color: ${i.color.orangeSecond};
      border-radius: 2px;
    }
  }
`;function Me({onClick:t,onRenderBackground:r}){const n=P();c.useEffect(()=>{r()});const[o,a]=c.useState("Body parts"),l=J(h=>h.filter.exercisesFilter);c.useEffect(()=>{t(o)},[t,o]);const s=h=>{t(h),a(h)},x=()=>{n(te())};return e.jsxs(Ee,{children:[e.jsx(Le,{children:l!==""&&e.jsxs(Te,{onClick:x,children:[e.jsx(Ue,{children:e.jsx("use",{href:`${E}#arrow-left-ex`,style:{fill:"rgba(239, 237, 232, 0.4)"}})}),e.jsx(Re,{children:"back"})]})}),e.jsxs(Fe,{children:[e.jsx(Pe,{children:l===""?"Exercises":l}),e.jsxs($e,{id:"uniqueId",children:[e.jsx(M,{children:e.jsx(N,{className:o==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>{s("Body parts"),x()},children:"Body parts"})}),e.jsx(M,{children:e.jsx(N,{className:o==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>{s("Muscles"),x()},children:"Muscles"})}),e.jsx(M,{children:e.jsx(N,{className:o==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>{s("Equipment"),x()},children:"Equipment"})})]})]})]})}d.div`
`;const Ne=d.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (min-width: ${i.breakpoint.md}) {
        margin-right: -16px;
        margin-bottom: 32px;
    }

    @media (min-width: ${i.breakpoint.xl}) {
        margin-right: -16px; 
    }
`,Je=d.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    
    @media (min-width: ${i.breakpoint.md}) {
        width: calc(33.3333% - 16px);
        margin-right: 16px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }


    @media (min-width: ${i.breakpoint.xl}) {
        width: calc(20% - 16px); 
        &:nth-child(3n) {
            margin-right: 16px;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
`,Ie=d.div`
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
        border: ${i.border.grey2};
        z-index: 1; 
     } 
     
    @media (min-width: ${i.breakpoint.md}) {
        padding-bottom: 92%;
    }
    @media (min-width: ${i.breakpoint.xl}) {
        padding-bottom: 87%;
    }
`,qe=d.img`
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    height: 100%;
    object-fit: cover;
    background-image: url(${t=>t.src});
    background-size: cover;
    background-position: center;
`,Ye=d.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
`,We=d.h3`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    text-transform: lowercase;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 176px;
    &:first-letter {
        text-transform: uppercase;
    }
`,Ke=d.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: ${i.color.greyFifth};
`;function De({subcategory:t}){const r=P(),n=()=>{r(re(t.name))};return e.jsx(Je,{onClick:n,children:e.jsxs(Ie,{children:[e.jsx(qe,{src:t.imgURL,alt:t.name}),e.jsxs(Ye,{children:[e.jsx(We,{children:t.name}),e.jsx(Ke,{children:t.filter})]})]})})}const ze=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  @media (min-width: ${i.breakpoint.md}) {
    bottom: -32px;
  }
`,Ze=d.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${t=>t.active?i.color.black:i.color.greySixth};
  border: ${t=>t.active?i.border.orange:"none"};
  position: relative;
  cursor: pointer;
  outline: none;
  vertical-align: middle;

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${i.color.orange}; 
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${t=>t.active?"block":"none"};
  }
`,Ve="/ui-power-pulse/assets/side-view-exercises-1x-desk-68380f68.jpg",Ge="/ui-power-pulse/assets/side-view-exercises-2x-desk-e1111ea7.jpg",Xe=t=>t.$isbackground?`url(${Ve})`:"none",Oe=t=>t.$isbackground?`url(${Ge})`:"none",He=d.div`
  @media (min-width: ${i.breakpoint.xl}) {
    border-bottom: ${i.border.grey2};
    background-color: ${i.color.black};
    width: 100%;
    height: 84px;
  }
`,Qe=d.div`
  position: relative;
`,_e=d.div`
  width: 100%; 
  @media (min-width: ${i.breakpoint.xl}) {
    padding-top: 72px;
  }
`,et=d.section`
  padding-top: 101px;
  @media (min-width: ${i.breakpoint.md}) {
    padding-top: 116px;
  }
  @media (min-width: ${i.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
   background-image: ${Xe};
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: ${Oe};
       }
  }
`,tt=d.div`
  position: relative;
   max-width: 335px;
   margin: 0 auto;
    @media (min-width: ${i.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 1248px;
  }
`;function rt({categories:t,selectedCategory:r}){const n=t.filter(p=>p.filter===r),[o,a]=c.useState(0),[l,s]=c.useState(10),x=768,h=Math.ceil(n.length/l),m=()=>{window.scrollTo({top:0,behavior:"smooth"})};c.useEffect(()=>{const p=()=>{window.innerWidth>=x&&window.innerWidth<=1439?s(9):s(10),a(0)};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[]),c.useEffect(()=>{a(0),m()},[r]);const f=p=>{a(p),m()};return e.jsxs(tt,{children:[e.jsx(Ne,{children:n.slice(o*l,(o+1)*l).map((p,u)=>e.jsx(De,{subcategory:p},u))}),h>1&&e.jsx(ze,{children:e.jsx("div",{children:Array.from({length:h},(p,u)=>e.jsx(Ze,{active:u===o,onClick:()=>f(u),children:""},u))})})]})}const W="data:image/png;base64,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",it="/ui-power-pulse/assets/like-2x-9c7b87f9.png",nt=({isOpen:t,onClose:r,calorise:n,time:o})=>{var s;const a=ie(),l=c.useRef(a);return e.jsxs(e.Fragment,{children:[e.jsx(oe,{onClick:r,children:e.jsx(se,{children:e.jsx("use",{href:`${E}#x-modal`})})}),t&&e.jsx(ae,{children:e.jsxs(le,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:i.breakpoint.sm,srcSet:W}),e.jsx("source",{media:i.breakpoint.md,srcSet:it}),e.jsx("img",{src:W,alt:"Like",loading:"lazy"})]}),e.jsx(de,{children:"Well done"}),e.jsxs(ce,{children:[e.jsx(pe,{children:"Your time:"}),e.jsxs(he,{children:[o," minutes"]}),e.jsx(xe,{children:"Burned calories:"}),e.jsx(ue,{children:n})]}),e.jsx(me,{type:"button",onClick:r,children:"Next exercise"}),e.jsxs(ge,{to:((s=l.current.state)==null?void 0:s.from)??"/diary",children:["To the diary",e.jsx(fe,{children:e.jsx("use",{href:`${E}#arrow`})})]})]})})]})},ot=d.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
    padding: 48px 16px;
    width: 335px;
    height: 788px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${i.breakpoint.md}) {
        padding: 48px 30px;
        width: 694px;
        height: 550px;
    }
`,st=d.div`
    width: 270px;
    height: 226px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14px;
    border-radius: 12px;
    overflow: hidden;
    border: ${i.border.grey2};
    background: ${i.color.greySeven};
    img {
        width: 100%;
        height: 100%;
    }
`,at=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 214px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    @media (min-width: ${i.breakpoint.md}) {
        margin-bottom: 0;
    }
`,lt=d.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 302px;
    height: 132px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    @media (min-width: ${i.breakpoint.md}) {
        margin-right: 0;
        width: 345px;
        height: 148px;
    }
`,dt=d.button`
    width: 151px;
    height: 42px;
    padding: 12px 32px;
    border-radius: 12px;
    border: none;
    margin-left: 0;
    color: ${i.color.white};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    cursor: pointer;
    background-color: ${i.color.orange};
    &:hover{
        background-color: ${i.color.orangeSecond};
    };
    @media (min-width: ${i.breakpoint.md}) {
        margin-right: 0;
        height: 52px;
        padding: 14px 32px;
        line-height: 1.5;
        margin: auto 0 0 auto;
    }
`,ct=d.button`
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    margin-top: 14px;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`,pt=d(Z)`
    margin-bottom: 4px;
    font-size: 10px;
    line-height: 1.4;
`,ht=d.span`
    color: ${i.color.orange};
    font-size: 14px;
    line-height: 1.29;
`,xt=d.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${i.color.grey};
`;var K=typeof window>"u"?c.useEffect:c.useLayoutEffect,ut=({isPlaying:t,duration:r,startAt:n=0,updateInterval:o=0,onComplete:a,onUpdate:l})=>{let[s,x]=c.useState(n),h=c.useRef(0),m=c.useRef(n),f=c.useRef(n*-1e3),p=c.useRef(null),u=c.useRef(null),w=c.useRef(null),S=j=>{let b=j/1e3;if(u.current===null){u.current=b,p.current=requestAnimationFrame(S);return}let k=b-u.current,v=h.current+k;u.current=b,h.current=v;let F=m.current+(o===0?v:(v/o|0)*o),y=m.current+v,U=typeof r=="number"&&y>=r;x(U?r:F),U||(p.current=requestAnimationFrame(S))},C=()=>{p.current&&cancelAnimationFrame(p.current),w.current&&clearTimeout(w.current),u.current=null},A=c.useCallback(j=>{C(),h.current=0;let b=typeof j=="number"?j:n;m.current=b,x(b),t&&(p.current=requestAnimationFrame(S))},[t,n]);return K(()=>{if(l==null||l(s),r&&s>=r){f.current+=r*1e3;let{shouldRepeat:j=!1,delay:b=0,newStartAt:k}=(a==null?void 0:a(f.current/1e3))||{};j&&(w.current=setTimeout(()=>A(k),b*1e3))}},[s,r]),K(()=>(t&&(p.current=requestAnimationFrame(S)),C),[t,r,o]),{elapsedTime:s,reset:A}},mt=(t,r,n)=>{let o=t/2,a=r/2,l=o-a,s=2*l,x=n==="clockwise"?"1,0":"0,1",h=2*Math.PI*l;return{path:`m ${o},${a} a ${l},${l} 0 ${x} 0,${s} a ${l},${l} 0 ${x} 0,-${s}`,pathLength:h}},D=(t,r)=>t===0||t===r?0:typeof r=="number"?t-r:0,gt=t=>({position:"relative",width:t,height:t}),ft={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},V=(t,r,n,o,a)=>{if(o===0)return r;let l=(a?o-t:t)/o;return r+n*l},z=t=>{var r,n;return(n=(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,a,l,s)=>`#${a}${a}${l}${l}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:r.map(o=>parseInt(o,16)))!=null?n:[]},bt=(t,r)=>{var n;let{colors:o,colorsTime:a,isSmoothColorTransition:l=!0}=t;if(typeof o=="string")return o;let s=(n=a==null?void 0:a.findIndex((u,w)=>u>=r&&r>=a[w+1]))!=null?n:-1;if(!a||s===-1)return o[0];if(!l)return o[s];let x=a[s]-r,h=a[s]-a[s+1],m=z(o[s]),f=z(o[s+1]),p=!!t.isGrowing;return`rgb(${m.map((u,w)=>V(x,u,f[w]-u,h,p)|0).join(",")})`},wt=t=>{let{duration:r,initialRemainingTime:n,updateInterval:o,size:a=180,strokeWidth:l=12,trailStrokeWidth:s,isPlaying:x=!1,isGrowing:h=!1,rotation:m="clockwise",onComplete:f,onUpdate:p}=t,u=c.useRef(),w=Math.max(l,s??0),{path:S,pathLength:C}=mt(a,w,m),{elapsedTime:A}=ut({isPlaying:x,duration:r,startAt:D(r,n),updateInterval:o,onUpdate:typeof p=="function"?b=>{let k=Math.ceil(r-b);k!==u.current&&(u.current=k,p(k))}:void 0,onComplete:typeof f=="function"?b=>{var k;let{shouldRepeat:v,delay:F,newInitialRemainingTime:y}=(k=f(b))!=null?k:{};if(v)return{shouldRepeat:v,delay:F,newStartAt:D(r,y)}}:void 0}),j=r-A;return{elapsedTime:A,path:S,pathLength:C,remainingTime:Math.ceil(j),rotation:m,size:a,stroke:bt(t,j),strokeDashoffset:V(A,0,C,r,h),strokeWidth:l}},G=t=>{let{children:r,strokeLinecap:n,trailColor:o,trailStrokeWidth:a}=t,{path:l,pathLength:s,stroke:x,strokeDashoffset:h,remainingTime:m,elapsedTime:f,size:p,strokeWidth:u}=wt(t);return T.createElement("div",{style:gt(p)},T.createElement("svg",{viewBox:`0 0 ${p} ${p}`,width:p,height:p,xmlns:"http://www.w3.org/2000/svg"},T.createElement("path",{d:l,fill:"none",stroke:o??"#d9d9d9",strokeWidth:a??u}),T.createElement("path",{d:l,fill:"none",stroke:x,strokeLinecap:n??"round",strokeWidth:u,strokeDasharray:s,strokeDashoffset:h})),typeof r=="function"&&T.createElement("div",{style:ft},r({remainingTime:m,elapsedTime:f,color:x})))};G.displayName="CountdownCircleTimer";const kt=d.li`
    padding: 12px 18px;
    width: 147px;
    height: 62px;
    border-radius: 12px;
    border: ${i.border.grey2};
    background: ${i.color.greySeven};
    @media (min-width: ${i.breakpoint.md}) {
        width: 168px;
        height: 70px;
    }
`,jt=d.p`
    font-size: 12px;
    line-height: 1.33;
    color: ${i.color.grey};
    margin-bottom: 4px;
    @media (min-width: ${i.breakpoint.md}) {
        line-height: 1.5;
    }
`,vt=d(Z)`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    color: ${i.color.white}
`,R=({tittle:t,name:r})=>e.jsxs(kt,{children:[e.jsx(jt,{children:t}),e.jsx(vt,{children:r})]}),yt=({item:t={name:"N/A",target:"N/A",bodyPart:"N/A",equipment:"N/A",gifUrl:"",burnedCalories:0,_id:"N/A"},onClose:r})=>{const[n,o]=c.useState(!1),[a,l]=c.useState(0),s=c.useRef(180),[x,h]=c.useState(0),[m,f]=c.useState(!1),[p,u]=c.useState(0),[w,S]=c.useState(0),{name:C,target:A,bodyPart:j,equipment:b,gifUrl:k,burnedCalories:v,_id:F}=t,y=180,U=P();c.useEffect(()=>{let g=null;return n&&(g=setInterval(()=>{if(n){const B=y-(s.current-1);l(Math.floor(B*v/y))}},1e3)),()=>{g&&clearInterval(g)}},[v,n]);const X=({remainingTime:g})=>{const L=Math.floor(g/60),B=g%60,I=B<10?`0${B}`:B;return`${L}:${I}`},O=()=>{!n&&s.current===0&&(h(g=>g+1),s.current=y,l(0)),o(!n)},H=()=>(u(g=>g+y-s.current),S(g=>g+a),h(g=>g+1),o(!1),l(0),{shouldRepeat:!1}),Q=async g=>{g.preventDefault();try{const L={exercise:F,time:y-s.current+p},B=await U(q(L));q.fulfilled.match(B)?f(!0):(f(!1),Y.error("Oops, something went wrong"))}catch{f(!1),Y.error("Oops, something went wrong")}},_=()=>{r(),f(!1)};return e.jsxs(e.Fragment,{children:[!m&&e.jsx("form",{onSubmit:Q,children:e.jsxs(ot,{children:[e.jsx(st,{children:e.jsx("img",{src:k,alt:C})}),e.jsxs(at,{children:[e.jsx(pt,{children:"Time"}),e.jsx(G,{isPlaying:n,size:124,strokeWidth:4,trailColor:`${i.color.greySixth}`,duration:180,colors:`${i.color.orange}`,onComplete:H,children:({remainingTime:g})=>(s.current=g,X({remainingTime:g}))},x),e.jsx(ct,{type:"button",onClick:()=>{O()},children:e.jsx("svg",{width:"32",height:"32",stroke:`${i.color.orange}`,viewBox:"0 0 32 32",children:n?e.jsx("use",{href:`${E}#pause-btn`}):e.jsx("use",{href:`${E}#play-btn`})})}),e.jsxs(xt,{children:["Burned calories:"," ",e.jsx(ht,{children:Math.floor(a+w)})]})]}),e.jsxs(lt,{children:[e.jsx(R,{tittle:"Name",name:C}),e.jsx(R,{tittle:"Target",name:A}),e.jsx(R,{tittle:"Body Part",name:j}),e.jsx(R,{tittle:"Equipment",name:b})]}),e.jsx(dt,{type:"submit",children:"Add to diary"})]})}),m&&e.jsx(nt,{calorise:Math.floor(a+w),time:Math.floor((y-s.current+p)/60),isOpen:m,onClose:()=>_()})]})},St=({item:t})=>{const[r,n]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(be,{children:"workout"}),e.jsxs(we,{children:[e.jsx(ke,{children:e.jsx("use",{href:`${E}#run-man-circle`})}),e.jsx(je,{children:t.name})]}),e.jsxs(ve,{children:[e.jsx($,{text:"Burned calories:",val:t.burnedCalories}),e.jsx($,{text:"Body part:",val:t.bodyPart}),e.jsx($,{text:"Target:",val:t.target})]}),e.jsxs(ye,{type:"button",onClick:()=>n(!0),children:[e.jsx(Se,{children:"Start"}),e.jsx(Ce,{children:e.jsx("use",{href:`${E}#arrow`})})]}),r&&e.jsx(Ae,{isOpen:r,onClose:()=>n(!1),children:e.jsx(yt,{item:t,onClose:()=>n(!1)})})]})},Ct=d.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${i.breakpoint.md}) {
    overflow-y: scroll;
    max-width: 704px;
    max-height: 686px;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${i.color.greySixth};
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${i.color.orange};
      border-radius: 12px;
      height: 153px;
    }
  }
  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 850px;
    max-height: 487px;
    margin: 0;
  }
`,At=d.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  grid-row-gap: 20px;

  margin: 0 auto;

  @media (min-width: ${i.breakpoint.md}) {
    grid-row-gap: 32px;
    grid-column-gap: 16px;

    max-width: 704px;
  }

  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 850px;
  }
`,Bt=d.li`
  position: relative;

  padding: 18px 16px 16px 16px;

  width: 100%;

  border-radius: 12px;
  border: ${i.border.grey2};
  background: rgba(239, 237, 232, 0.05);

  @media (min-width: ${i.breakpoint.md}) {
    max-width: 335px;
  }

  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 405px;
  }
`,Et=(t,r)=>t.filter(n=>{const o=n.bodyPart.toLowerCase(),a=n.target.toLowerCase(),l=n.equipment.toLowerCase(),s=o.includes(r.toLowerCase()),x=a.includes(r.toLowerCase()),h=l.includes(r.toLowerCase());return s||x||h}),Ft=({bodyPartFilter:t,onRenderBackground:r})=>{const n=P();c.useEffect(()=>{n(ne())},[n]),c.useEffect(()=>{r()});const o=J(l=>l.exercises.items),a=Et(o,t);return e.jsx(Ct,{children:e.jsx(At,{children:a.map((l,s)=>e.jsx(Bt,{children:e.jsx(St,{item:l})},s))})})};function Rt(){const[t,r]=c.useState(!1),[n,o]=c.useState(""),a=Be(n),l=J(m=>m.filter.exercisesFilter),s=m=>{o(m)},x=()=>{r(!0)},h=()=>{r(!1)};return e.jsxs(et,{$isbackground:t,children:[e.jsx(He,{}),e.jsx("div",{className:"container",children:e.jsx(Qe,{children:e.jsxs(_e,{children:[e.jsx(Me,{onClick:s,onRenderBackground:h}),l===""?e.jsx(rt,{categories:a,selectedCategory:n}):e.jsx(Ft,{bodyPartFilter:l,onRenderBackground:x})]})})})]})}export{Rt as default};
