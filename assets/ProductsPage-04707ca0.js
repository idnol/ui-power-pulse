import{s as t,t as e,j as o,b,a as l,B as z,z as T,A as B,L as D,C as N,u as I,Q as M,D as F,d as k,E as P,k as W}from"./index-7b8cd649.js";const V=t.div`
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
`,q=t.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,G=t.div`
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
`,Y=t.div`
  display: flex;
  gap: 16px;
`,H=t.div`
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
  }
`,_=t.button`
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
`,J=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.orange};
`,U=t.button`
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
`,X=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.white};
`,Z=({query:i,onTitleChange:n,onCleanForm:s})=>o.jsxs(H,{children:[o.jsx(K,{type:"text",name:"query",placeholder:"Search",value:i,onChange:n}),o.jsx(_,{type:"button",className:"cleanBtn",onClick:s,children:o.jsx(J,{children:o.jsx("use",{href:`${b}#x`})})}),o.jsx(U,{type:"submit",children:o.jsx(X,{children:o.jsx("use",{href:`${b}#search`})})})]}),ee=t.div`
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
`,oe=({label:i,onSelect:n,onToggle:s,isOpen:x})=>{const[a,r]=l.useState([]),[c,d]=l.useState(null),h=l.useRef(null);l.useEffect(()=>{async function p(){try{d(null);const m=await T();r(m)}catch{d(!0)}}p()},[]);const g=p=>{h.current&&!h.current.contains(p.target)&&s()};return l.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)})),o.jsxs(o.Fragment,{children:[o.jsxs(ee,{children:[o.jsx(L,{onClick:s,children:i}),o.jsx(E,{children:o.jsx("use",{href:`${b}#arrow-down`})}),x&&o.jsxs(A,{ref:h,children:[o.jsx(S,{onClick:()=>n(""),children:"All"}),a.map((p,m)=>o.jsx(S,{onClick:()=>n(p),children:p},m))]})]}),c&&z.error("Something went wrong! Please try again.")]})},te=t.div`
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
`,ie=({label:i,isOpen:n,onToggle:s,onSelect:x})=>{const a=["All","recommended","not recommended"],r=l.useRef(null),c=d=>{r.current&&!r.current.contains(d.target)&&s()};return l.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)})),o.jsxs(te,{children:[o.jsx(L,{onClick:s,children:i}),o.jsx(E,{children:o.jsx("use",{href:`${b}#arrow-down`})}),n&&o.jsx(A,{ref:r,children:a.map((d,h)=>o.jsx(S,{onClick:()=>x(d),children:d},h))})]})},re=({query:i,category:n,recommended:s,onFilterChange:x,bloodGroup:a})=>{const[r,c]=B(),[d,h]=l.useState(!1),[g,p]=l.useState(!1),m=()=>{h(!d)},$=()=>{p(!g)},y=u=>{u.preventDefault(),r.set("query",u.target.value),c(r)},j=u=>{r.set("category",u),c(r),h(!1)},v=u=>{r.set("recommended",u),r.set("blood",a),c(r),p(!1)},w=u=>{u.preventDefault(),x(r)},f=()=>{r.set("query",""),c(r)};return o.jsx(o.Fragment,{children:o.jsx(G,{children:o.jsxs(Q,{onSubmit:w,children:[o.jsx(Z,{query:i,onTitleChange:y,onCleanForm:f}),o.jsxs(Y,{children:[o.jsx(oe,{label:n||"Category",isOpen:d,onToggle:m,onSelect:j}),o.jsx(ie,{label:s||"All",isOpen:g,onToggle:$,onSelect:v})]})]})})})};t.p`
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
`;const ne=t.ul`
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
`;const se=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,ae=t.svg`
  width: 24px;
  height: 24px;
`,de=t.p`
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
`,ce=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(se,{children:[o.jsx(ae,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(de,{children:i})]})}),le=t.li`
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
`,pe=t.span`
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
`,C=({text:i,val:n})=>o.jsxs(le,{children:[i,o.jsx(pe,{children:n})]}),xe=i=>i.$isAllowed?e.color.green:e.color.red,he=t.div`
  border: ${e.border.grey3};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 141px;
  background-color: ${e.color.greyTr};
  @media (min-width: ${e.breakpoint.xl}) {
    width: 405px;
  }
`,me=t.div`
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
  background: ${e.color.greyTr};
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`,ge=t.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${xe};
`,ue=t.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${e.color.white};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
`,fe=t.button`
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
`,be=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${e.color.orange};
`,we=t.div`
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
`;const ye=t.div`
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
`;const je=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,ve=t(D)`
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
`;const Ce=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,ze=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`,Se=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Fe=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.orange};
  font-size: 14px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Pe=t.button`
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
`,Re=({isOpen:i,onClose:n,calories:s})=>{var r;const x=N(),a=l.useRef(x);return o.jsx(o.Fragment,{children:i&&o.jsx(Ce,{children:o.jsxs($e,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(ze,{children:"Well done"}),o.jsxs(ye,{children:[o.jsx(Se,{children:"Calories:"}),o.jsx(Fe,{children:s})]}),o.jsx(Pe,{type:"button",onClick:n,children:"Next product"}),o.jsxs(ve,{to:((r=a.current.state)==null?void 0:r.from)??"/diary",children:["To the diary",o.jsx(je,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})})})},Be=t.div`
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
`,Le=t.use``,Ee=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Ae=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
  }
`,Oe=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.orange};
  border-radius: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    width: 244px;
  }
`,Te=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${e.color.greyFifth};
`,De=t.div`
  position: relative;
`,Ne=t.p`
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
`,We=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Ve=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  font-size: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,qe=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 309px;
  }
`,Ge=t.button`
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
`,Qe=t.button`
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
`,Ye=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,He=({onClose:i,title:n,calories:s,id:x})=>{const[a,r]=l.useState(""),[c,d]=l.useState("0"),[h,g]=l.useState(s),[p,m]=l.useState(!1),$=I(),y=w=>{const f=w.currentTarget.value;r(f);const O=Math.round(f*h/100);d(O)},j=async w=>{w.preventDefault();try{const f={product:x,weight:+a},u=await $(F(f));F.fulfilled.match(u)?(r(""),m(!0)):(m(!1),d("0"),z.error("Oops, something went wrong"))}catch{m(!1),d("0"),z.error("Oops, something went wrong")}},v=()=>{i(),m(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(Ie,{onClick:i,children:o.jsx(Ee,{children:o.jsx(Le,{href:`${b}#x-modal`})})}),!p&&o.jsx(Be,{children:o.jsxs("form",{onSubmit:j,children:[o.jsxs(Ae,{children:[o.jsx(Oe,{children:o.jsx(Te,{children:n})}),o.jsxs(De,{children:[o.jsx(Me,{name:"number",required:!0,value:a,onChange:y}),o.jsx(Ne,{children:"grams"})]})]}),o.jsxs(We,{children:[o.jsx(Ye,{children:"Calories:"}),o.jsx(Ve,{children:c})]}),o.jsxs(qe,{children:[o.jsx(Ge,{type:"submit",children:"Add to diary"}),o.jsx(Qe,{type:"button",onClick:i,children:"Cancel"})]})]})}),p&&o.jsx(Re,{calories:c,isOpen:p,onClose:()=>v()}),o.jsx(M,{position:"bottom-right",limit:2,autoClose:3e3})]})},Ke=t.div`
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
`,_e=t.div`
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
`,Je=({isOpen:i,onClose:n,children:s})=>{const x=a=>{a.currentTarget===a.target&&n()};return l.useEffect(()=>{const a=r=>{r.keyCode===27&&n()};return i&&(document.addEventListener("keydown",a),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",a),document.body.classList.remove("disable-scroll")}},[i,n]),i?o.jsx(o.Fragment,{children:i&&o.jsx(Ke,{onClick:x,children:o.jsx(_e,{children:s})})}):null},Ue=({item:{title:i,calories:n,category:s,weight:x,groupBloodNotAllowed:a,_id:r},bloodGroup:c})=>{const[d,h]=l.useState(!1),g=a[c],p=g?"Recommended":"Not recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(he,{children:[o.jsxs(we,{children:[o.jsx(me,{children:"Diet"}),o.jsxs(ke,{children:[o.jsxs(ue,{children:[o.jsx(ge,{$isAllowed:g}),p]}),o.jsxs(fe,{type:"button",onClick:()=>h(!0),children:["Add",o.jsx(be,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})]}),o.jsx(ce,{titleName:i}),o.jsxs(ne,{children:[o.jsx(C,{text:"Calories: ",val:n}),o.jsx(C,{text:"Category: ",val:s}),o.jsx(C,{text:"Weight: ",val:x})]})]}),d&&o.jsx(Je,{isOpen:d,onClose:()=>h(!1),children:o.jsx(He,{onClose:()=>h(!1),id:r,title:i,calories:n})})]})},Xe=t.div`
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
`,Ze=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`,eo=t.section`
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
`,oo=i=>i.products.items,to=i=>i.products.isLoading,io=i=>i.products.error,ro=({items:i,bloodGroup:n})=>o.jsx(Xe,{children:o.jsx(Ze,{children:i.map(s=>o.jsx("li",{children:o.jsx(Ue,{item:s,bloodGroup:n})},s._id))})}),no=t.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`,so=t.p`
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
`,ao=()=>o.jsxs(no,{children:[o.jsxs(so,{children:[o.jsx(R,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(R,{children:"Try changing the search parameters."})]}),co=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;function po(){const i=k(oo),n=k(to),s=k(io),x=k(m=>m.profile.items.bodyData.blood),a=I(),[r]=B(),c=l.useMemo(()=>Object.fromEntries([...r]),[r]),{query:d="",category:h="",recommended:g="all"}=c;l.useEffect(()=>{a(P(c))},[a,c]);const p=m=>{a(P(m))};return o.jsx(o.Fragment,{children:o.jsx(eo,{children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsxs(co,{children:[o.jsxs(V,{children:[o.jsx(q,{children:"Products"}),o.jsx(re,{query:d,category:h,recommended:g,onFilterChange:p,bloodGroup:x})]}),n&&o.jsx(W,{}),i.length>0&&o.jsx(ro,{items:i,bloodGroup:x}),s||i.length===0&&o.jsx(ao,{})]})})})})})}export{po as default};
