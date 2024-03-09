import{s as t,t as e,j as o,b,a as d,x as W,y as V,u as P,z as A,L as q,A as G,d as $,B as I,m as Q}from"./index-2a33ee49.js";import{B as R,Q as Y}from"./react-toastify.esm-10702de6.js";const H=t.div`
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
`,K=t.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,_=t.div`
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
`,J=t.form`
 display: flex;
 flex-direction: column;
 gap: 16px;
 @media (min-width: ${e.breakpoint.md}) {
  flex-direction: row;
  }
`,E=t.div` 
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
`,T=t.svg`
 width: 20px;
 height: 20px;
 stroke: ${e.color.white};
 position: absolute;
 top: 14px;
 right: 14px;
 z-index: 1;
`,O=t.ul`
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
`,N=t.li`
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
`,U=t.div`
 display: flex;
 gap: 16px;
`,X=t.div`
 display: flex;
 align-items: center;
 width: 100%;
 width: 335px;
 background: transparent;
 position: relative;
 @media (min-width: ${e.breakpoint.md}) {
  width: 236px;
  }
`,Z=t.input`
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
`,ee=t.button`
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
`,oe=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.orange};
`,te=t.button`
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
`,ie=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.white};
`,ne=({query:i,onTitleChange:r,onCleanForm:n,onSubmit:a})=>o.jsx(o.Fragment,{children:o.jsxs(X,{children:[o.jsx(Z,{type:"text",name:"query",placeholder:"Search",value:i,onChange:r}),o.jsx(ee,{type:"button",className:"cleanBtn",onClick:n,children:o.jsx(oe,{children:o.jsx("use",{href:`${b}#x`})})}),o.jsx(te,{type:"submit",onSubmit:a,children:o.jsx(ie,{children:o.jsx("use",{href:`${b}#search`})})})]})}),re=t.div`
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
`,se=({label:i,onSelect:r,onToggle:n,isOpen:a})=>{const[s,c]=d.useState([]),[l,p]=d.useState(null),m=d.useRef(null);return d.useEffect(()=>{async function h(){try{p(null);const x=await W();c(x)}catch{p(!0)}}h()},[]),o.jsxs(o.Fragment,{children:[o.jsxs(re,{children:[o.jsx(E,{onClick:n,children:i}),o.jsx(T,{children:o.jsx("use",{href:`${b}#arrow-down`})}),o.jsx(O,{ref:m,$isopen:a,children:s.map((h,x)=>o.jsx(N,{onClick:()=>r(h),children:h},x))})]}),l&&R.error("Something went wrong! Please try again.")]})},ae=t.div`
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
`,de=({label:i,isOpen:r,onToggle:n,onSelect:a})=>{const s=["All","recommended","not recommended"],c=d.useRef(null);return o.jsxs(ae,{children:[o.jsx(E,{onClick:n,children:i}),o.jsx(T,{children:o.jsx("use",{href:`${b}#arrow-down`})}),o.jsx(O,{ref:c,$isopen:r,children:s.map((l,p)=>o.jsx(N,{onClick:()=>a(l),children:l},p))})]})},ce=({onFilterChange:i,bloodGroup:r})=>{const[n,a]=V(),s=d.useMemo(()=>Object.fromEntries([...n]),[n]),{query:c="",category:l="",recommended:p="all"}=s,[m,h]=d.useState(!1),x=d.useRef(null),[f,w]=d.useState(!1),y=d.useRef(null),j=P();d.useEffect(()=>{j(A(s))},[j,s]);const z=()=>{h(!m)},C=()=>{w(!f)},k=g=>{n.set("query",g.target.value),a(n)},u=g=>{n.set("category",g),a(n),h(!1)},v=g=>{n.set("recommended",g),n.set("blood",r),a(n),w(!1)},S=g=>{x.current&&!x.current.contains(g.target)&&h(!1),y.current&&!y.current.contains(g.target)&&w(!1)};d.useEffect(()=>(document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}),[]);const B=g=>{g.preventDefault(),i(s)},M=()=>{n.set("query",""),a(n)};return o.jsx(o.Fragment,{children:o.jsx(_,{children:o.jsxs(J,{onSubmit:B,children:[o.jsx(ne,{query:c,onTitleChange:k,onCleanForm:M,onSubmit:B}),o.jsxs(U,{children:[o.jsx(se,{label:l||"Category",onToggle:z,onSelect:u,isOpen:m}),o.jsx(de,{label:p||"All",isOpen:f,onToggle:C,onSelect:v})]})]})})})};t.p`
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
`;const le=t.ul`
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
`;const pe=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,xe=t.svg`
  width: 24px;
  height: 24px;
`,he=t.p`
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
`,me=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(pe,{children:[o.jsx(xe,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(he,{children:i})]})}),ge=t.li`
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
`,ue=t.span`
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
`,F=({text:i,val:r})=>o.jsxs(ge,{children:[i,o.jsx(ue,{children:r})]}),fe=i=>i.$isAllowed?e.color.green:e.color.red,be=t.div`
 border: ${e.border.grey3};
 border-radius: 12px;
 padding: 16px;
 width: 335px;
 height: 141px;
 background-color: ${e.color.greyTr};
 @media (min-width: ${e.breakpoint.xl}) {
  width: 405px;
  }
`,we=t.div`
 border-radius: 4px;
 padding: 5px 7px;
 width: 41px;
 height: 24px;
 background: ${e.color.greyTr};
 font-weight: 700;
 font-size: 12px;
 color: #fff;
 text-transform: uppercase;
`,ke=t.span`
 display: block;
 width: 14px;
 height: 14px;
 border-radius: 50%;
 background-color: ${fe};
`,$e=t.p`
 font-size: 12px;
 line-height: 1.5;
 color: ${e.color.white};
 display: flex;
 gap: 8px;
 align-items: center;
 margin: 0;
`,ye=t.button`
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
`,je=t.svg`
width: 18px;
height: 18px;
stroke: ${e.color.orange};
`,ve=t.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 35px;
 @media (min-width: ${e.breakpoint.md}) {
  margin-bottom: 27px;
  }
`,Se=t.div`
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
`;const ze=t.div`
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
`;const Ce=t.div`
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
`;const Fe=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Re=t(q)`
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
`;const Pe=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,Be=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`,Ie=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Le=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.orange};
  font-size: 14px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ae=t.button`
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
`,Ee=({isOpen:i,onClose:r,calories:n})=>{var c;const a=G(),s=d.useRef(a);return o.jsx(o.Fragment,{children:i&&o.jsx(Pe,{children:o.jsxs(ze,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Be,{children:"Well done"}),o.jsxs(Ce,{children:[o.jsx(Ie,{children:"Calories:"}),o.jsx(Le,{children:n})]}),o.jsx(Ae,{type:"button",onClick:r,children:"Next product"}),o.jsxs(Re,{to:((c=s.current.state)==null?void 0:c.from)??"/diary",children:["To the diary",o.jsx(Fe,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})})})},Te=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Oe=t.button`
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
`,Ne=t.use``,De=t.svg`
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
`,We=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.orange};
  border-radius: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    width: 244px;
  }
`,Ve=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${e.color.greyFifth};
`,qe=t.div`
  position: relative;
`,Ge=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${e.color.greyFifth};
`,Qe=t.input`
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
`,Ye=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,He=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  font-size: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ke=t.div`
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
`,Je=t.button`
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
`,Ue=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,Xe=i=>i.diary.isSuccess,Ze=({onClose:i,title:r,calories:n,id:a})=>{const[s,c]=d.useState(""),[l,p]=d.useState("0"),[m,h]=d.useState(n),[x,f]=d.useState(!1),w=$(Xe),y=P(),j=k=>{const u=k.currentTarget.value;c(u);const S=Math.round(u*m/100);p(S)},z=async k=>{k.preventDefault();try{const u={product:a,weight:+s},v=await y(I(u));I.fulfilled.match(v)?(console.log(u),c(""),f(!0),console.log("Success ",w)):(f(!1),p("0"),R.error("Oops, something went wrong"),console.log("Success ",w))}catch{f(!1),p("0"),R.error("Oops, something went wrong")}},C=()=>{i(),f(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(Oe,{onClick:i,children:o.jsx(De,{children:o.jsx(Ne,{href:`${b}#x-modal`})})}),!x&&o.jsx(Te,{children:o.jsxs("form",{onSubmit:z,children:[o.jsxs(Me,{children:[o.jsx(We,{children:o.jsx(Ve,{children:r})}),o.jsxs(qe,{children:[o.jsx(Qe,{name:"number",required:!0,value:s,onChange:j}),o.jsx(Ge,{children:"grams"})]})]}),o.jsxs(Ye,{children:[o.jsx(Ue,{children:"Calories:"}),o.jsx(He,{children:l})]}),o.jsxs(Ke,{children:[o.jsx(_e,{type:"submit",children:"Add to diary"}),o.jsx(Je,{type:"button",onClick:i,children:"Cancel"})]})]})}),x&&o.jsx(Ee,{calories:l,isOpen:x,onClose:()=>C()}),o.jsx(Y,{})]})},eo=t.div`
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
`,oo=t.div`
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
`,to=({isOpen:i,onClose:r,children:n})=>{const a=s=>{s.currentTarget===s.target&&r()};return d.useEffect(()=>{const s=c=>{c.keyCode===27&&r()};return i&&(document.addEventListener("keydown",s),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",s),document.body.classList.remove("disable-scroll")}},[i,r]),i?o.jsx(o.Fragment,{children:i&&o.jsx(eo,{onClick:a,children:o.jsx(oo,{children:n})})}):null},io=({item:{title:i,calories:r,category:n,weight:a,groupBloodNotAllowed:s,_id:c},bloodGroup:l})=>{const[p,m]=d.useState(!1),h=s[l],x=h?"Recommended":"Not recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(be,{children:[o.jsxs(ve,{children:[o.jsx(we,{children:"Diet"}),o.jsxs(Se,{children:[o.jsxs($e,{children:[o.jsx(ke,{$isAllowed:h}),x]}),o.jsxs(ye,{type:"button",onClick:()=>m(!0),children:["Add",o.jsx(je,{children:o.jsx("use",{href:`${b}#arrow`})})]})]})]}),o.jsx(me,{titleName:i}),o.jsxs(le,{children:[o.jsx(F,{text:"Calories: ",val:r}),o.jsx(F,{text:"Category: ",val:n}),o.jsx(F,{text:"Weight: ",val:a})]})]}),p&&o.jsx(to,{isOpen:p,onClose:()=>m(!1),children:o.jsx(Ze,{onClose:()=>m(!1),id:c,title:i,calories:r})})]})},no=t.div`
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
`,ro=t.ul`
 display: flex;
 flex-direction: column;
 gap: 20px;
 @media (min-width: ${e.breakpoint.md}) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 32px;
  }
`,so=t.section`
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
`,D=i=>i.products.items,ao=i=>i.products.isLoading,co=i=>i.products.error,lo=({bloodGroup:i})=>{const r=$(D);return o.jsx(no,{children:o.jsx(ro,{children:r.map(n=>o.jsx("li",{children:o.jsx(io,{item:n,bloodGroup:i})},n._id))})})},po=t.div`
 max-width: 335px;
 margin: 0 auto;
 margin-top: 64px;
 @media (min-width: ${e.breakpoint.md}) {
 max-width: 580px;
 margin: 0;
 margin-top: 132px;   
 }
`,xo=t.p`
font-size: 14px;
line-height: 1.29;
color: ${e.color.grey};
margin-bottom: 16px;
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,L=t.span`
font-size: 14px;
line-height: 1.29;
color: ${e.color.orange};
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,ho=()=>o.jsxs(po,{children:[o.jsxs(xo,{children:[o.jsx(L,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(L,{children:"Try changing the search parameters."})]}),mo=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;function fo(){const i=$(D),r=$(ao),n=$(co),a="1",s=P(),c=l=>{s(A(l))};return o.jsx(o.Fragment,{children:o.jsx(so,{children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsxs(mo,{children:[o.jsxs(H,{children:[o.jsx(K,{children:"Products"}),o.jsx(ce,{onFilterChange:c,bloodGroup:a})]}),r&&o.jsx(Q,{}),i.length>0&&o.jsx(lo,{bloodGroup:a}),n||i.length===0&&o.jsx(ho,{})]})})})})})}export{fo as default};
