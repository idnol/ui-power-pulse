import{s as t,t as e,j as o,b as u,a as d,v as D,w as W,u as P,x as B,L as M,y as V,d as j,z as q}from"./index-7f19dda6.js";import{B as G}from"./react-toastify.esm-5318fe92.js";const Y=t.div`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${e.breakpoint.md}) {
    padding-top: 72px;
    padding-bottom: 32px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,H=t.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,K=t.div`
 max-width: 335px;
 margin: 0 auto;
 margin-top: 40px;
 @media (min-width: ${e.breakpoint.md}) {
  max-width: 664px;
  margin: 0;
  margin-top: 32px;
  }
 @media (min-width: ${e.breakpoint.xl}) {
  margin-bottom: 0;
  margin-top: 0;
  }
`,Q=t.form`
 display: flex;
 flex-direction: column;
 gap: 16px;
 @media (min-width: ${e.breakpoint.md}) {
  flex-direction: row;
  }
`,I=t.div` 
  font-size: 14px;
  line-height: 1.29;
  padding: 14px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  &::first-letter {
  text-transform: capitalize;
  }
  @media (min-width: ${e.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
  }
`,L=t.svg`
 width: 20px;
 height: 20px;
 stroke: ${e.color.white};
 position: absolute;
 top: 14px;
 right: 14px;
 z-index: 1;
`,E=t.ul`
  list-style: none;
  padding: 14px 32px 14px 14px;
  margin: 0;
  position: absolute;
  top: 103%; 
  left: 0; 
  width: 100%;
  max-height: 228px;
  overflow-y: scroll;
  border: none;
  border-radius: 12px;
  background-color: ${e.color.darkGreySecond};
  z-index: 100;
  display: ${({$isopen:i})=>i?"block":"none"};
  &::-webkit-scrollbar {
    width: 6px;
    }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
    } 
  &::-webkit-scrollbar-thumb {
    background-color: ${e.color.greySixth};
    border-radius: 12px;
    height: 147px;
    }
`,T=t.li`
 background-color: ${e.color.darkGreySecond};
 color:  ${e.color.white};
 font-size: 14px;
 line-height: 1.29;
 border-radius: 12px;
 margin-bottom: 8px;
 cursor: pointer;
 &::first-letter {
  text-transform: capitalize;
  }
  &:hover {
   background-color: ${e.color.grey};
   }
  @media (min-width: ${e.breakpoint.md}) {
   font-size: 16px;
   line-height: 1.5;
   }
`,_=t.div`
 display: flex;
 gap: 16px;
`,J=t.div`
 display: flex;
 align-items: center;
 width: 100%;
 width: 335px;
 background: transparent;
 position: relative;
 @media (min-width: ${e.breakpoint.md}) {
  width: 236px;
  }
`,U=t.input`
 position: relative;
 display: inline-block;
 font-size: 14px;
 outline: none;
 border: none;
 width: 335px;
 border: ${e.border.grey3};
 border-radius: 12px;
 overflow: hidden;
 padding: 14px; 
 background: transparent;
 color:  ${e.color.white};
 &::placeholder {
  color: ${e.color.white};
 }
&:focus  {
  border: ${e.border.orange};
 }
&:not(:placeholder-shown) + .cleanBtn {
  display: block;
 }
@media (min-width: ${e.breakpoint.md}) {
  width: 236px;
  font-size: 16px;
  }
`,X=t.button`
 position: absolute;
 right: 40px;
 width: 18px;
 height: 18px;
 cursor: pointer;
 outline: none;
 background-color: transparent;
 border: none;
 padding: 0;
 display: none;
`,Z=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.orange};
`,ee=t.button`
 position: absolute;
 right: 14px;
 display: inline-block;
 width: 18px;
 height: 18px;
 cursor: pointer;
 outline: none;
 background-color: transparent;
 border: none;
 padding: 0;
`,oe=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.white};
`,te=({query:i,onTitleChange:r,onCleanForm:n,onSubmit:s})=>o.jsx(o.Fragment,{children:o.jsxs(J,{children:[o.jsx(U,{type:"text",name:"query",placeholder:"Search",value:i,onChange:r}),o.jsx(X,{type:"button",className:"cleanBtn",onClick:n,children:o.jsx(Z,{children:o.jsx("use",{href:`${u}#x`})})}),o.jsx(ee,{type:"submit",onSubmit:s,children:o.jsx(oe,{children:o.jsx("use",{href:`${u}#search`})})})]})}),ie=t.div`
 border: ${e.border.grey3};
 border-radius: 12px;
 width: 146px;
 background: transparent;
 color:  ${e.color.white};
 font-weight: 400;
 font-size: 14px;
 line-height: 1.29;
 cursor: pointer;
 scrollbar-width: none;
 position: relative;
 display: inline-block; 
 z-index: 2;
 @media (min-width: ${e.breakpoint.md}) {
  width: 192px;
  font-size: 16px;
  line-height: 1.5;
  }
`,ne=({label:i,onSelect:r,onToggle:n,isOpen:s})=>{const[a,c]=d.useState([]),[l,x]=d.useState(null),g=d.useRef(null);return d.useEffect(()=>{async function p(){try{x(null);const h=await D();c(h)}catch{x(!0)}}p()},[]),o.jsxs(o.Fragment,{children:[o.jsxs(ie,{children:[o.jsx(I,{onClick:n,children:i}),o.jsx(L,{children:o.jsx("use",{href:`${u}#arrow-down`})}),o.jsx(E,{ref:g,$isopen:s,children:a.map((p,h)=>o.jsx(T,{onClick:()=>r(p),children:p},h))})]}),l&&G.error("Something went wrong! Please try again.")]})},re=t.div`
 border: ${e.border.grey3};
 border-radius: 12px;
 width: 173px;
 background: transparent;
 color:  ${e.color.white};
 font-weight: 400;
 font-size: 14px;
 line-height: 1.29;
 position: relative;
 display: inline-block;
 @media (min-width: ${e.breakpoint.md}) {
  width: 204px;
  font-size: 16px;
  line-height: 1.5;
  }
`,se=({label:i,isOpen:r,onToggle:n,onSelect:s})=>{const a=["All","recommended","not recommended"],c=d.useRef(null);return o.jsxs(re,{children:[o.jsx(I,{onClick:n,children:i}),o.jsx(L,{children:o.jsx("use",{href:`${u}#arrow-down`})}),o.jsx(E,{ref:c,$isopen:r,children:a.map((l,x)=>o.jsx(T,{onClick:()=>s(l),children:l},x))})]})},ae=({onFilterChange:i,bloodGroup:r})=>{const[n,s]=W(),a=d.useMemo(()=>Object.fromEntries([...n]),[n]),{query:c="",category:l="",recommended:x="all"}=a,[g,p]=d.useState(!1),h=d.useRef(null),[f,b]=d.useState(!1),$=d.useRef(null),k=P();d.useEffect(()=>{k(B(a))},[k,a]);const w=()=>{p(!g)},y=()=>{b(!f)},C=m=>{n.set("query",m.target.value),s(n)},v=m=>{n.set("category",m),s(n),p(!1)},O=m=>{n.set("recommended",m),n.set("blood",r),s(n),b(!1)},S=m=>{h.current&&!h.current.contains(m.target)&&p(!1),$.current&&!$.current.contains(m.target)&&b(!1)};d.useEffect(()=>(document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}),[]);const F=m=>{m.preventDefault(),i(a)},N=()=>{n.set("query",""),s(n)};return o.jsx(o.Fragment,{children:o.jsx(K,{children:o.jsxs(Q,{onSubmit:F,children:[o.jsx(te,{query:c,onTitleChange:C,onCleanForm:N,onSubmit:F}),o.jsxs(_,{children:[o.jsx(ne,{label:l||"Category",onToggle:w,onSelect:v,isOpen:g}),o.jsx(se,{label:x||"All",isOpen:f,onToggle:y,onSelect:O})]})]})})})};t.p`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  margin-bottom: 33px;

  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 25px;
  }
`;t.div`
  display: flex;
  gap: 16px;

  margin-bottom: 8px;
`;t.svg`
  width: 24px;
  height: 24px;
`;t.p`
  color: ${e.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */

  max-width: 240px;

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 24px;
    line-height: 32px;
  }
`;const de=t.ul`
  display: flex;
  flex-wrap: wrap;
`;t.button`
  position: absolute;
  top: 18px;
  right: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: none;

  cursor: pointer;
`;t.svg`
  width: 16px;
  height: 16px;
  stroke: ${e.color.orange};
`;t.p`
  color: ${e.color.orange};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 24px;
  }
`;const ce=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,le=t.svg`
  width: 24px;
  height: 24px;
`,pe=t.p`
  color: ${e.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  max-width: 240px;
  @media (min-width: ${e.breakpoint.md}) {
   font-size: 24px;
   line-height: 32px;
  }
`,xe=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(ce,{children:[o.jsx(le,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(pe,{children:i})]})}),he=t.li`
  color: ${e.color.greyFifth};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  margin-right: 16px;
  display: flex;
  gap: 4px;
  &:last-child {
    margin-right: 0;
  }
`,me=t.span`
  color: ${e.color.white};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
 display: block;
 max-width: 76px;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
`,z=({text:i,val:r})=>o.jsxs(he,{children:[i,o.jsx(me,{children:r})]}),ge=i=>i.$isAllowed?e.color.green:e.color.red,ue=t.div`
 border: ${e.border.grey3};
 border-radius: 12px;
 padding: 16px;
 width: 335px;
 height: 141px;
 background-color: ${e.color.greyTr};
 @media (min-width: ${e.breakpoint.xl}) {
  width: 405px;
  }
`,fe=t.div`
 border-radius: 4px;
 padding: 5px 7px;
 width: 41px;
 height: 24px;
 background: ${e.color.greyTr};
 font-weight: 700;
 font-size: 12px;
 color: #fff;
 text-transform: uppercase;
`,be=t.span`
 display: block;
 width: 14px;
 height: 14px;
 border-radius: 50%;
 background-color: ${ge};
`,we=t.p`
 font-size: 12px;
 line-height: 1.5;
 color: ${e.color.white};
 display: flex;
 gap: 8px;
 align-items: center;
 margin: 0;
`,$e=t.button`
 font-size: 14px;
 line-height: 1.29;
 color: ${e.color.orange};
 background-color: transparent;
 border: none;
 display: flex;
 gap: 8px;
 align-items: center;
 padding: 0;
 cursor: pointer;
 @media (min-width: ${e.breakpoint.md}) {
  font-size: 16px;
  line-height: 1.5;
  }
`,ke=t.svg`
width: 18px;
height: 18px;
stroke: ${e.color.orange};
`,ye=t.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 35px;
 @media (min-width: ${e.breakpoint.md}) {
  margin-bottom: 27px;
  }
`,je=t.div`
 display: flex;
 gap: 16px;
`,ve=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1200;
 
  
`,ze=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;

  transform: translate(-50%, -50%);
  background-color: #10100f;
  border-radius: 12px;
  border: none;
  overflow: hidden;
  
`,Ce=({isOpen:i,onClose:r,children:n})=>{const s=a=>{a.currentTarget===a.target&&r()};return d.useEffect(()=>{const a=c=>{c.keyCode===27&&r()};return i&&(document.addEventListener("keydown",a),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",a),document.body.classList.remove("disable-scroll")}},[i,r]),i?o.jsx(o.Fragment,{children:i&&o.jsx(ve,{onClick:s,children:o.jsx(ze,{children:n})})}):null};t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 64px 134px;
    max-width: 430px;
  }
`;t.button`
  position: absolute;

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;
  stroke: ${e.color.white};
  fill: transparent;
  &:hover {
    stroke: ${e.color.orangeSecond};
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
    top: 16px;
    right: 16px;
  }

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`;const Se=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 27px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`;const Fe=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 8px;
`;t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 0;
  color: ${e.color.white};
  opacity: 0.4;
`;t.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;t.p`
  color: ${e.color.orange};
  margin-top: 16px;
  margin-bottom: 0;
  font-size: 14px;
`;t.p`
  color: ${e.color.orange};
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 14px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`;t.button`
  min-width: 162px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${e.color.orange};
  color: ${e.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${e.color.orangeSecond};
  }
  @media (min-width: ${e.breakpoint.md}) {
    padding: 14px 32px;
  }
`;const Re=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Pe=t(M)`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
  stroke: ${e.color.grey};
  font-size: 14px;
  

  fill: transparent;

  color: ${e.color.grey};
  &:hover{
    color: ${e.color.white};
    stroke: ${e.color.white}
   
  }
`;t.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
`;const Be=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,Ie=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`,Le=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ee=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.orange};
  font-size: 14px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Te=t.button`
  min-width: 157px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${e.color.orange};
  color: ${e.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${e.color.orangeSecond};
  }
  @media (min-width: ${e.breakpoint.md}) {
    padding: 14px 32px;
  }
`,Ae=({isOpen:i,onClose:r,calories:n})=>{var c;const s=V(),a=d.useRef(s);return o.jsx(o.Fragment,{children:i&&o.jsx(Be,{children:o.jsxs(Se,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcset:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcset:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Ie,{children:"Well done"}),o.jsxs(Fe,{children:[o.jsx(Le,{children:"Calories:"}),o.jsx(Ee,{children:n})]}),o.jsx(Te,{type:"button",onClick:r,children:"Next product"}),o.jsxs(Pe,{to:((c=a.current.state)==null?void 0:c.from)??"/diary",children:["To the diary",o.jsx(Re,{children:o.jsx("use",{href:`${u}#arrow`})})]})]})})})},Oe=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Ne=t.button`
  position: absolute;
  stroke: ${e.color.white};
  fill: transparent;
  &:hover {
    stroke: ${e.color.orangeSecond};
  }

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
    top: 16px;
    right: 16px;
  }

  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`,De=t.use``,We=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Me=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
  }
`,Ve=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.orange};
  border-radius: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    width: 244px;
  }
`,qe=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${e.color.greyFifth};
`,Ge=t.div`
  position: relative;
`,Ye=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${e.color.greyFifth};
`,He=t.input`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  outline: transparent;
  color: ${e.color.white};
  &:hover,
  &:focus {
    border: ${e.border.orange};
    outline: ${e.border.orange};
  }

  @media (min-width: ${e.breakpoint.md}) {
    width: 155px;
  }
`,Ke=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Qe=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  font-size: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,_e=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 309px;
  }
`,Je=t.button`
  min-width: 151px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${e.color.orange};
  color: ${e.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${e.color.orangeSecond};
  }
  @media (min-width: ${e.breakpoint.md}) {
    min-width: 151px;
    padding: 14px 32px;
  }
`,Ue=t.button`
  min-width: 121px;
  padding: 12px 36px;
  border-radius: 12px;
  background-color: transparent;
  border: ${e.border.grey3};
  color: ${e.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: ${e.border.orange};
  }
  @media (min-width: ${e.breakpoint.md}) {
    min-width: 142px;
    padding: 12px 40px;
  }
`,Xe=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,Ze=({isOpen:i,onClose:r,title:n,calories:s,id:a})=>{const[c,l]=d.useState(""),[x,g]=d.useState("0"),[p,h]=d.useState(s),[f,b]=d.useState(!1),$=w=>{const y=w.currentTarget.value;l(y);const v=Math.round(y*p/100);g(v)},k=w=>{w.preventDefault(),b(!0),l("")};return o.jsxs(Ce,{isOpen:i,onClose:r,children:[o.jsx(Ne,{onClick:r,children:o.jsx(We,{children:o.jsx(De,{href:`${u}#x-modal`})})}),!f&&o.jsx(Oe,{children:o.jsxs("form",{onSubmit:k,children:[o.jsxs(Me,{children:[o.jsx(Ve,{children:o.jsx(qe,{children:n})}),o.jsxs(Ge,{children:[o.jsx(He,{name:"number",required:!0,value:c,onChange:$}),o.jsx(Ye,{children:"grams"})]})]}),o.jsxs(Ke,{children:[o.jsx(Xe,{children:"Calories:"}),o.jsx(Qe,{children:x})]}),o.jsxs(_e,{children:[o.jsx(Je,{type:"submit",children:"Add to diary"}),o.jsx(Ue,{type:"button",onClick:r,children:"Cancel"})]})]})}),f&&o.jsx(Ae,{calories:x,isOpen:f,onClose:()=>b(!1)})]})},eo=({item:{title:i,calories:r,category:n,weight:s,groupBloodNotAllowed:a,_id:c},bloodGroup:l})=>{const[x,g]=d.useState(!1),p=a[l],h=p?"Recommended":"Not recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(ue,{children:[o.jsxs(ye,{children:[o.jsx(fe,{children:"Diet"}),o.jsxs(je,{children:[o.jsxs(we,{children:[o.jsx(be,{$isAllowed:p}),h]}),o.jsxs($e,{type:"button",onClick:()=>g(!0),children:["Add",o.jsx(ke,{children:o.jsx("use",{href:`${u}#arrow`})})]})]})]}),o.jsx(xe,{titleName:i}),o.jsxs(de,{children:[o.jsx(z,{text:"Calories: ",val:r}),o.jsx(z,{text:"Category: ",val:n}),o.jsx(z,{text:"Weight: ",val:s})]})]}),o.jsx(Ze,{isOpen:x,id:c,title:i,calories:r,onClose:()=>g(!1)})]})},oo=t.div`
 max-width: 335px;
 margin: 0 auto;
 @media (min-width: ${e.breakpoint.md}) {
  max-width: 686px;
  margin: 0;
  }
 @media (min-width: ${e.breakpoint.xl}) {
  max-width: 850px;
  margin: 0;
  max-height: 487px;
  overflow-y: scroll;
  @-moz-document url-prefix() {
   scrollbar {
   width: thin;
   color: ${e.color.orange};
   background-color: ${e.color.greySixth};
   }
  }
  &::-webkit-scrollbar {
    width: 8px;
    }
  &::-webkit-scrollbar-track {
    background-color: ${e.color.greySixth};
    border-radius: 12px;
    } 
  &::-webkit-scrollbar-thumb {
    background-color: ${e.color.orange};
    border-radius: 12px;
    height: 153px;
    }
 }
`,to=t.ul`
 display: flex;
 flex-direction: column;
 gap: 20px;
 @media (min-width: ${e.breakpoint.md}) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 32px;
  }
`,io=t.section`
 @media (min-width: ${e.breakpoint.xl}) {
  height: 100vh;
  width: 100%;
  background-image: url(../../../public/img/side-view-products-1x-desk.jpg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
      background-image: url(../../../public/img/side-view-products-2x-desk.jpg); 
      }
  }
`,A=i=>i.products.items,no=i=>i.products.isLoading,ro=i=>i.products.error,so=({bloodGroup:i})=>{const r=j(A);return o.jsx(oo,{children:o.jsx(to,{children:r.map(n=>o.jsx("li",{children:o.jsx(eo,{item:n,bloodGroup:i})},n._id))})})},ao=t.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${e.color.black};
  z-index: 9999;
  opacity: 1;
  visibility: visible;
  transition:
  opacity 0.5s ease,
  visibility 0.5s ease;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,co=q`
  to {
    transform: rotate(360deg);
  }
`,lo=t.div`
  border: 8px solid ${e.color.grey};
  border-top-color: ${e.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${co} 1s ease-in-out infinite;
`,po=()=>o.jsx(ao,{id:"preloader",children:o.jsx(lo,{})}),xo=t.div`
 max-width: 335px;
 margin: 0 auto;
 margin-top: 64px;
 @media (min-width: ${e.breakpoint.md}) {
 max-width: 580px;
 margin: 0;
 margin-top: 132px;   
 }
`,ho=t.p`
font-size: 14px;
line-height: 1.29;
color: ${e.color.grey};
margin-bottom: 16px;
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,R=t.span`
font-size: 14px;
line-height: 1.29;
color: ${e.color.orange};
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,mo=()=>o.jsxs(xo,{children:[o.jsxs(ho,{children:[o.jsx(R,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(R,{children:"Try changing the search parameters."})]}),go=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;function bo(){const i=j(A),r=j(no),n=j(ro),s="1",a=P(),c=l=>{a(B(l))};return o.jsx(o.Fragment,{children:o.jsx(io,{children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsxs(go,{children:[o.jsxs(Y,{children:[o.jsx(H,{children:"Products"}),o.jsx(ae,{onFilterChange:c,bloodGroup:s})]}),r&&o.jsx(po,{}),i.length>0&&o.jsx(so,{bloodGroup:s}),n||i.length===0&&o.jsx(mo,{})]})})})})})}export{bo as default};
