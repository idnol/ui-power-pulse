import{s as t,t as e,j as o,b,a as p,I as T,z as D,_ as M,A as R,L as N,C as W,u as B,Q as V,D as S,B as F,E as q,d as k,F as P}from"./index-cf26041d.js";const G=t.div`
  max-width: 335px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 668px;
    margin: 0;
    padding-top: 72px;
    padding-bottom: 32px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    max-width: 1248px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,_=t.div`
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
`,H=t.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
  }
`,L=t.div` 
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
`,E=t.svg`
  width: 20px;
  height: 20px;
  stroke: ${e.color.white};
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
`,A=t.ul`
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
`,z=t.li`
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
`,Q=t.div`
  display: flex;
  gap: 16px;
`,Y=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  width: 335px;
  background: transparent;
  position: relative;
  @media (min-width: ${e.breakpoint.md}) {
    width: 236px;
  }
`,K=t.input`
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
   line-height: 1.5;
  }
`,J=t.button`
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
`,U=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.orange};
  fill: ${e.color.orange};
`,X=t.button`
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
`,Z=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.white};
`,ee=({query:i,onTitleChange:r,onCleanForm:s})=>o.jsxs(Y,{children:[o.jsx(K,{type:"text",name:"query",placeholder:"Search",value:i,onChange:r}),o.jsx(J,{type:"button",className:"cleanBtn",onClick:s,children:o.jsx(U,{children:o.jsx("use",{href:`${b}#x`})})}),o.jsx(X,{type:"submit",children:o.jsx(Z,{children:o.jsx("use",{href:`${b}#search`})})})]}),oe=t.div`
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
`,te=({label:i,onSelect:r,onToggle:s,isOpen:x})=>{const[a,n]=p.useState([]),d=p.useRef(null);p.useEffect(()=>{async function l(){try{const h=await D();n(h)}catch{return M.error("Something went wrong! Please try again!")}}l()},[]);const c=l=>{d.current&&!d.current.contains(l.target)&&s()};return p.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)})),o.jsxs(o.Fragment,{children:[o.jsxs(oe,{children:[o.jsx(L,{onClick:s,children:i}),o.jsx(E,{children:o.jsx("use",{href:`${b}#arrow-down`})}),x&&o.jsxs(A,{ref:d,children:[o.jsx(z,{onClick:()=>r(""),children:"All"}),a.map((l,h)=>o.jsx(z,{onClick:()=>r(l),children:l},h))]})]}),o.jsx(T,{})]})},ie=t.div`
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
`,ne=({label:i,isOpen:r,onToggle:s,onSelect:x})=>{const a=["All","recommended","not recommended"],n=p.useRef(null),d=c=>{n.current&&!n.current.contains(c.target)&&s()};return p.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)})),o.jsxs(ie,{children:[o.jsx(L,{onClick:s,children:i}),o.jsx(E,{children:o.jsx("use",{href:`${b}#arrow-down`})}),r&&o.jsx(A,{ref:n,children:a.map((c,l)=>o.jsx(z,{onClick:()=>x(c),children:c},l))})]})},re=({query:i,category:r,recommended:s,onFilterChange:x,bloodGroup:a})=>{const[n,d]=R(),[c,l]=p.useState(!1),[h,g]=p.useState(!1),u=()=>{l(!c)},w=()=>{g(!h)},y=m=>{m.preventDefault(),n.set("query",m.target.value),d(n)},j=m=>{n.set("category",m),d(n),l(!1)},v=m=>{n.set("recommended",m),n.set("blood",a),d(n),g(!1)},$=m=>{m.preventDefault(),x(n)},f=()=>{n.set("query",""),d(n)};return o.jsx(o.Fragment,{children:o.jsx(_,{children:o.jsxs(H,{onSubmit:$,children:[o.jsx(ee,{query:i,onTitleChange:y,onCleanForm:f}),o.jsxs(Q,{children:[o.jsx(te,{label:r||"Category",isOpen:c,onToggle:u,onSelect:j}),o.jsx(ne,{label:s||"All",isOpen:h,onToggle:w,onSelect:v})]})]})})})};t.p`
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
`;const se=t.ul`
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
`;const ae=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,de=t.svg`
  width: 24px;
  height: 24px;
`,ce=t.p`
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
`,le=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(ae,{children:[o.jsx(de,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(ce,{children:i})]})}),pe=t.li`
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
`,xe=t.span`
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
`,C=({text:i,val:r})=>o.jsxs(pe,{children:[i,o.jsx(xe,{children:r})]}),he=i=>i.$isAllowed?e.color.green:e.color.red,me=t.div`
  border: ${e.border.grey3};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 141px;
  background-color: ${e.color.greyTr};
  @media (min-width: ${e.breakpoint.xl}) {
    width: 405px;
  }
`,ge=t.div`
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
  background: ${e.color.greyTr};
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`,ue=t.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${he};
`,fe=t.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${e.color.white};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
`,be=t.button`
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
`,we=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.orange};
`,$e=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 27px;
  }
`,ke=t.div`
  display: flex;
  gap: 16px;
`;t.div`
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
`;const ye=t.div`
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
`;const je=t.div`
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
`;const ve=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Ce=t(N)`
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
`;const ze=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,Se=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`,Fe=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Pe=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.orange};
  font-size: 14px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ie=t.button`
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
`,Re=({isOpen:i,onClose:r,calories:s})=>{var n;const x=W(),a=p.useRef(x);return o.jsx(o.Fragment,{children:i&&o.jsx(ze,{children:o.jsxs(ye,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Se,{children:"Well done"}),o.jsxs(je,{children:[o.jsx(Fe,{children:"Calories:"}),o.jsx(Pe,{children:s})]}),o.jsx(Ie,{type:"button",onClick:r,children:"Next product"}),o.jsxs(Ce,{to:((n=a.current.state)==null?void 0:n.from)??"/diary",children:["To the diary",o.jsx(ve,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})})})},Be=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Le=t.button`
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
`,Ee=t.use``,Ae=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Oe=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
  }
`,Te=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.orange};
  border-radius: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    width: 244px;
  }
`,De=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${e.color.greyFifth};
`,Me=t.div`
  position: relative;
`,Ne=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${e.color.greyFifth};
`,We=t.input`
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
`,Ve=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,qe=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  font-size: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ge=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 309px;
  }
`,_e=t.button`
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
`,He=t.button`
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
`,Qe=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,Ye=({onClose:i,title:r,calories:s,id:x})=>{const[a,n]=p.useState(""),[d,c]=p.useState("0"),[l,h]=p.useState(s),[g,u]=p.useState(!1),w=B(),y=$=>{const f=$.currentTarget.value;n(f);const O=Math.round(f*l/100);c(O)},j=async $=>{$.preventDefault();try{const f={product:x,weight:+a},m=await w(S(f));S.fulfilled.match(m)?(n(""),u(!0)):(u(!1),c("0"),F.error("Oops, something went wrong"))}catch{u(!1),c("0"),F.error("Oops, something went wrong")}},v=()=>{i(),u(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(Le,{onClick:i,children:o.jsx(Ae,{children:o.jsx(Ee,{href:`${b}#x-modal`})})}),!g&&o.jsx(Be,{children:o.jsxs("form",{onSubmit:j,children:[o.jsxs(Oe,{children:[o.jsx(Te,{children:o.jsx(De,{children:r})}),o.jsxs(Me,{children:[o.jsx(We,{name:"number",required:!0,value:a,onChange:y}),o.jsx(Ne,{children:"grams"})]})]}),o.jsxs(Ve,{children:[o.jsx(Qe,{children:"Calories:"}),o.jsx(qe,{children:d})]}),o.jsxs(Ge,{children:[o.jsx(_e,{type:"submit",children:"Add to diary"}),o.jsx(He,{type:"button",onClick:i,children:"Cancel"})]})]})}),g&&o.jsx(Re,{calories:d,isOpen:g,onClose:()=>v()}),o.jsx(V,{position:"bottom-right",limit:2,autoClose:3e3})]})},Ke=t.div`
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
`,Je=t.div`
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
`,Ue=({isOpen:i,onClose:r,children:s})=>{const x=a=>{a.currentTarget===a.target&&r()};return p.useEffect(()=>{const a=n=>{n.keyCode===27&&r()};return i&&(document.addEventListener("keydown",a),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",a),document.body.classList.remove("disable-scroll")}},[i,r]),i?o.jsx(o.Fragment,{children:i&&o.jsx(Ke,{onClick:x,children:o.jsx(Je,{children:s})})}):null},Xe=({item:{title:i,calories:r,category:s,weight:x,groupBloodNotAllowed:a,_id:n},bloodGroup:d})=>{const[c,l]=p.useState(!1),h=a[d],g=h?"Recommended":"Not recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(me,{children:[o.jsxs($e,{children:[o.jsx(ge,{children:"Diet"}),o.jsxs(ke,{children:[o.jsxs(fe,{children:[o.jsx(ue,{$isAllowed:h}),g]}),o.jsxs(be,{type:"button",onClick:()=>l(!0),children:["Add",o.jsx(we,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})]}),o.jsx(le,{titleName:i}),o.jsxs(se,{children:[o.jsx(C,{text:"Calories: ",val:r}),o.jsx(C,{text:"Category: ",val:s}),o.jsx(C,{text:"Weight: ",val:x})]})]}),c&&o.jsx(Ue,{isOpen:c,onClose:()=>l(!1),children:o.jsx(Ye,{onClose:()=>l(!1),id:n,title:i,calories:r})})]})},Ze=t.div`
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
`,eo=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`,oo=i=>i.products.items,to=i=>i.products.isLoading,io=i=>i.products.error,no=({items:i,bloodGroup:r})=>o.jsx(Ze,{children:o.jsx(eo,{children:i.map(s=>o.jsx("li",{children:o.jsx(Xe,{item:s,bloodGroup:r})},s._id))})}),ro=t.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
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
`,so=q`
  to {
    transform: rotate(360deg);
  }
`,ao=t.div`
  border: 8px solid ${e.color.grey};
  border-top-color: ${e.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${so} 1s ease-in-out infinite;
`,co=()=>o.jsx(ro,{id:"preloader",children:o.jsx(ao,{})}),lo=t.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`,po=t.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.grey};
  margin-bottom: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
  }
`,I=t.span`
  font-size: 14px;
  line-height: 1.29;
  color: ${e.color.orange};
  @media (min-width: ${e.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
 }
`,xo=()=>o.jsxs(lo,{children:[o.jsxs(po,{children:[o.jsx(I,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(I,{children:"Try changing the search parameters."})]}),ho=t.section`
  padding-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    padding-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
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
`,mo=t.div`
  @media (min-width: ${e.breakpoint.xl}) {
    border-bottom: ${e.border.grey2};
    background-color: ${e.color.black};
    width: 100%;
    height: 84px;
  }
`,go=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,uo=t.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    font-size: 32px;
    line-height: 1.37;
  }
  @media (min-width: ${e.breakpoint.xl}) {
  }
`,fo=({children:i})=>o.jsx(uo,{children:i});function wo(){const i=k(oo),r=k(to),s=k(io),x=k(u=>{var w;return(w=u.auth.user.bodyData)==null?void 0:w.blood})??"1",a=B(),[n]=R(),d=p.useMemo(()=>Object.fromEntries([...n]),[n]),{query:c="",category:l="",recommended:h="all"}=d;p.useEffect(()=>{a(P(d))},[a,d]);const g=u=>{a(P(u))};return o.jsx(o.Fragment,{children:o.jsxs(ho,{children:[o.jsx(mo,{}),o.jsx("div",{className:"container",children:o.jsxs(go,{children:[o.jsxs(G,{children:[o.jsx(fo,{children:"Products"}),o.jsx(re,{query:c,category:l,recommended:h,onFilterChange:g,bloodGroup:x})]}),r&&o.jsx(co,{}),i.length>0&&o.jsx(no,{items:i,bloodGroup:x}),s||i.length===0&&o.jsx(xo,{})]})})]})})}export{wo as default};
