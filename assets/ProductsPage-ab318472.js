import{s as t,t as e,j as o,b,a as c,B as z,z as T,A as I,L as D,C as M,u as B,Q as N,D as F,E as W,d as k,F as P}from"./index-69efe994.js";const V=t.div`
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
`,q=t.div`
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
`,G=t.form`
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
`,S=t.li`
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
`,H=t.div`
  display: flex;
  gap: 16px;
`,Q=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  width: 335px;
  background: transparent;
  position: relative;
  @media (min-width: ${e.breakpoint.md}) {
    width: 236px;
  }
`,Y=t.input`
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
`,K=t.button`
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
`,_=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.orange};
  fill: ${e.color.orange};
`,J=t.button`
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
`,U=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.white};
`,X=({query:i,onTitleChange:n,onCleanForm:s})=>o.jsxs(Q,{children:[o.jsx(Y,{type:"text",name:"query",placeholder:"Search",value:i,onChange:n}),o.jsx(K,{type:"button",className:"cleanBtn",onClick:s,children:o.jsx(_,{children:o.jsx("use",{href:`${b}#x`})})}),o.jsx(J,{type:"submit",children:o.jsx(U,{children:o.jsx("use",{href:`${b}#search`})})})]}),Z=t.div`
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
`,ee=({label:i,onSelect:n,onToggle:s,isOpen:x})=>{const[a,r]=c.useState([]),[l,d]=c.useState(null),h=c.useRef(null);c.useEffect(()=>{async function p(){try{d(null);const m=await T();r(m)}catch{d(!0)}}p()},[]);const g=p=>{h.current&&!h.current.contains(p.target)&&s()};return c.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)})),o.jsxs(o.Fragment,{children:[o.jsxs(Z,{children:[o.jsx(L,{onClick:s,children:i}),o.jsx(E,{children:o.jsx("use",{href:`${b}#arrow-down`})}),x&&o.jsxs(A,{ref:h,children:[o.jsx(S,{onClick:()=>n(""),children:"All"}),a.map((p,m)=>o.jsx(S,{onClick:()=>n(p),children:p},m))]})]}),l&&z.error("Something went wrong! Please try again.")]})},oe=t.div`
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
`,te=({label:i,isOpen:n,onToggle:s,onSelect:x})=>{const a=["All","recommended","not recommended"],r=c.useRef(null),l=d=>{r.current&&!r.current.contains(d.target)&&s()};return c.useEffect(()=>(document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)})),o.jsxs(oe,{children:[o.jsx(L,{onClick:s,children:i}),o.jsx(E,{children:o.jsx("use",{href:`${b}#arrow-down`})}),n&&o.jsx(A,{ref:r,children:a.map((d,h)=>o.jsx(S,{onClick:()=>x(d),children:d},h))})]})},ie=({query:i,category:n,recommended:s,onFilterChange:x,bloodGroup:a})=>{const[r,l]=I(),[d,h]=c.useState(!1),[g,p]=c.useState(!1),m=()=>{h(!d)},w=()=>{p(!g)},y=u=>{u.preventDefault(),r.set("query",u.target.value),l(r)},j=u=>{r.set("category",u),l(r),h(!1)},v=u=>{r.set("recommended",u),r.set("blood",a),l(r),p(!1)},$=u=>{u.preventDefault(),x(r)},f=()=>{r.set("query",""),l(r)};return o.jsx(o.Fragment,{children:o.jsx(q,{children:o.jsxs(G,{onSubmit:$,children:[o.jsx(X,{query:i,onTitleChange:y,onCleanForm:f}),o.jsxs(H,{children:[o.jsx(ee,{label:n||"Category",isOpen:d,onToggle:m,onSelect:j}),o.jsx(te,{label:s||"All",isOpen:g,onToggle:w,onSelect:v})]})]})})})};t.p`
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
`;const re=t.ul`
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
`;const ne=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,se=t.svg`
  width: 24px;
  height: 24px;
`,ae=t.p`
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
`,de=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(ne,{children:[o.jsx(se,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(ae,{children:i})]})}),le=t.li`
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
`,ce=t.span`
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
`,C=({text:i,val:n})=>o.jsxs(le,{children:[i,o.jsx(ce,{children:n})]}),pe=i=>i.$isAllowed?e.color.green:e.color.red,xe=t.div`
  border: ${e.border.grey3};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 141px;
  background-color: ${e.color.greyTr};
  @media (min-width: ${e.breakpoint.xl}) {
    width: 405px;
  }
`,he=t.div`
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
  background: ${e.color.greyTr};
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`,me=t.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${pe};
`,ge=t.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${e.color.white};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
`,ue=t.button`
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
`,fe=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.orange};
`,be=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 27px;
  }
`,we=t.div`
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
`;const $e=t.div`
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
`;const ke=t.div`
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
`;const ye=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,je=t(D)`
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
`;const ve=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,Ce=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`,ze=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Se=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.orange};
  font-size: 14px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Fe=t.button`
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
`,Pe=({isOpen:i,onClose:n,calories:s})=>{var r;const x=M(),a=c.useRef(x);return o.jsx(o.Fragment,{children:i&&o.jsx(ve,{children:o.jsxs($e,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Ce,{children:"Well done"}),o.jsxs(ke,{children:[o.jsx(ze,{children:"Calories:"}),o.jsx(Se,{children:s})]}),o.jsx(Fe,{type:"button",onClick:n,children:"Next product"}),o.jsxs(je,{to:((r=a.current.state)==null?void 0:r.from)??"/diary",children:["To the diary",o.jsx(ye,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})})})},Re=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Ie=t.button`
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
`,Be=t.use``,Le=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Ee=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
  }
`,Ae=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.orange};
  border-radius: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    width: 244px;
  }
`,Oe=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${e.color.greyFifth};
`,Te=t.div`
  position: relative;
`,De=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${e.color.greyFifth};
`,Me=t.input`
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
`,Ne=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,We=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  font-size: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ve=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 309px;
  }
`,qe=t.button`
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
`,Ge=t.button`
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
`,He=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,Qe=({onClose:i,title:n,calories:s,id:x})=>{const[a,r]=c.useState(""),[l,d]=c.useState("0"),[h,g]=c.useState(s),[p,m]=c.useState(!1),w=B(),y=$=>{const f=$.currentTarget.value;r(f);const O=Math.round(f*h/100);d(O)},j=async $=>{$.preventDefault();try{const f={product:x,weight:+a},u=await w(F(f));F.fulfilled.match(u)?(r(""),m(!0)):(m(!1),d("0"),z.error("Oops, something went wrong"))}catch{m(!1),d("0"),z.error("Oops, something went wrong")}},v=()=>{i(),m(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(Ie,{onClick:i,children:o.jsx(Le,{children:o.jsx(Be,{href:`${b}#x-modal`})})}),!p&&o.jsx(Re,{children:o.jsxs("form",{onSubmit:j,children:[o.jsxs(Ee,{children:[o.jsx(Ae,{children:o.jsx(Oe,{children:n})}),o.jsxs(Te,{children:[o.jsx(Me,{name:"number",required:!0,value:a,onChange:y}),o.jsx(De,{children:"grams"})]})]}),o.jsxs(Ne,{children:[o.jsx(He,{children:"Calories:"}),o.jsx(We,{children:l})]}),o.jsxs(Ve,{children:[o.jsx(qe,{type:"submit",children:"Add to diary"}),o.jsx(Ge,{type:"button",onClick:i,children:"Cancel"})]})]})}),p&&o.jsx(Pe,{calories:l,isOpen:p,onClose:()=>v()}),o.jsx(N,{position:"bottom-right",limit:2,autoClose:3e3})]})},Ye=t.div`
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
`,Ke=t.div`
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
`,_e=({isOpen:i,onClose:n,children:s})=>{const x=a=>{a.currentTarget===a.target&&n()};return c.useEffect(()=>{const a=r=>{r.keyCode===27&&n()};return i&&(document.addEventListener("keydown",a),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",a),document.body.classList.remove("disable-scroll")}},[i,n]),i?o.jsx(o.Fragment,{children:i&&o.jsx(Ye,{onClick:x,children:o.jsx(Ke,{children:s})})}):null},Je=({item:{title:i,calories:n,category:s,weight:x,groupBloodNotAllowed:a,_id:r},bloodGroup:l})=>{const[d,h]=c.useState(!1),g=a[l],p=g?"Recommended":"Not recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(xe,{children:[o.jsxs(be,{children:[o.jsx(he,{children:"Diet"}),o.jsxs(we,{children:[o.jsxs(ge,{children:[o.jsx(me,{$isAllowed:g}),p]}),o.jsxs(ue,{type:"button",onClick:()=>h(!0),children:["Add",o.jsx(fe,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})]}),o.jsx(de,{titleName:i}),o.jsxs(re,{children:[o.jsx(C,{text:"Calories: ",val:n}),o.jsx(C,{text:"Category: ",val:s}),o.jsx(C,{text:"Weight: ",val:x})]})]}),d&&o.jsx(_e,{isOpen:d,onClose:()=>h(!1),children:o.jsx(Qe,{onClose:()=>h(!1),id:r,title:i,calories:n})})]})},Ue=t.div`
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
`,Xe=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`,Ze=i=>i.products.items,eo=i=>i.products.isLoading,oo=i=>i.products.error,to=({items:i,bloodGroup:n})=>o.jsx(Ue,{children:o.jsx(Xe,{children:i.map(s=>o.jsx("li",{children:o.jsx(Je,{item:s,bloodGroup:n})},s._id))})}),io=t.section`
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
`,ro=W`
  to {
    transform: rotate(360deg);
  }
`,no=t.div`
  border: 8px solid ${e.color.grey};
  border-top-color: ${e.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${ro} 1s ease-in-out infinite;
`,so=()=>o.jsx(io,{id:"preloader",children:o.jsx(no,{})}),ao=t.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`,lo=t.p`
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
`,co=()=>o.jsxs(ao,{children:[o.jsxs(lo,{children:[o.jsx(R,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(R,{children:"Try changing the search parameters."})]}),po=t.section`
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
`,xo=t.div`
  @media (min-width: ${e.breakpoint.xl}) {
    border-bottom: ${e.border.grey2};
    background-color: ${e.color.black};
    width: 100%;
    height: 84px;
  }
`,ho=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,mo=t.h2`
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
`,go=({children:i})=>o.jsx(mo,{children:i});function fo(){const i=k(Ze),n=k(eo),s=k(oo),x=k(m=>{var w;return(w=m.auth.user.bodyData)==null?void 0:w.blood})??"1",a=B(),[r]=I(),l=c.useMemo(()=>Object.fromEntries([...r]),[r]),{query:d="",category:h="",recommended:g="all"}=l;c.useEffect(()=>{a(P(l))},[a,l]);const p=m=>{a(P(m))};return o.jsx(o.Fragment,{children:o.jsxs(po,{children:[o.jsx(xo,{}),o.jsx("div",{className:"container",children:o.jsxs(ho,{children:[o.jsxs(V,{children:[o.jsx(go,{children:"Products"}),o.jsx(ie,{query:d,category:h,recommended:g,onFilterChange:p,bloodGroup:x})]}),n&&o.jsx(so,{}),i.length>0&&o.jsx(to,{items:i,bloodGroup:x}),s||i.length===0&&o.jsx(co,{})]})})]})})}export{fo as default};
