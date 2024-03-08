import{s as t,t as e,j as o,a as u,r as a,v as W,w as D,u as R,y as I,L as M,z as V,d as y,A as q}from"./index-bfeb4fee.js";import{B as G}from"./react-toastify.esm-e71aa4ec.js";import{e as Y,S as H,b as C}from"./BasicModalWindow-becdc97a.js";const Q=t.div`
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
`,_=t.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,J=t.div`
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
`,K=t.form`
 display: flex;
 flex-direction: column;
 gap: 16px;
 @media (min-width: ${e.breakpoint.md}) {
  flex-direction: row;
  }
`,B=t.div` 
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
`,A=t.li`
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
`,re=({query:i,onTitleChange:n,onCleanForm:r,onSubmit:s})=>o.jsx(o.Fragment,{children:o.jsxs(X,{children:[o.jsx(Z,{type:"text",name:"query",placeholder:"Search",value:i,onChange:n}),o.jsx(ee,{type:"button",className:"cleanBtn",onClick:r,children:o.jsx(oe,{children:o.jsx("use",{href:`${u}#x`})})}),o.jsx(te,{type:"submit",onSubmit:s,children:o.jsx(ie,{children:o.jsx("use",{href:`${u}#search`})})})]})}),ne=t.div`
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
`,se=({label:i,onSelect:n,onToggle:r,isOpen:s})=>{const[d,c]=a.useState([]),[p,x]=a.useState(null),g=a.useRef(null);return a.useEffect(()=>{async function l(){try{x(null);const h=await W();c(h)}catch{x(!0)}}l()},[]),o.jsxs(o.Fragment,{children:[o.jsxs(ne,{children:[o.jsx(B,{onClick:r,children:i}),o.jsx(L,{children:o.jsx("use",{href:`${u}#arrow-down`})}),o.jsx(O,{ref:g,$isopen:s,children:d.map((l,h)=>o.jsx(A,{onClick:()=>n(l),children:l},h))})]}),p&&G.error("Something went wrong! Please try again.")]})},ae=t.div`
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
`,de=({label:i,isOpen:n,onToggle:r,onSelect:s})=>{const d=["All","recommended","not recommended"],c=a.useRef(null);return o.jsxs(ae,{children:[o.jsx(B,{onClick:r,children:i}),o.jsx(L,{children:o.jsx("use",{href:`${u}#arrow-down`})}),o.jsx(O,{ref:c,$isopen:n,children:d.map((p,x)=>o.jsx(A,{onClick:()=>s(p),children:p},x))})]})},ce=({onFilterChange:i,bloodGroup:n})=>{const[r,s]=D(),d=a.useMemo(()=>Object.fromEntries([...r]),[r]),{query:c="",category:p="",recommended:x="all"}=d,[g,l]=a.useState(!1),h=a.useRef(null),[b,w]=a.useState(!1),k=a.useRef(null),j=R();a.useEffect(()=>{j(I(d))},[j,d]);const $=()=>{l(!g)},f=()=>{w(!b)},S=m=>{r.set("query",m.target.value),s(r)},v=m=>{r.set("category",m),s(r),l(!1)},E=m=>{r.set("recommended",m),r.set("blood",n),s(r),w(!1)},z=m=>{h.current&&!h.current.contains(m.target)&&l(!1),k.current&&!k.current.contains(m.target)&&w(!1)};a.useEffect(()=>(document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}),[]);const F=m=>{m.preventDefault(),i(d)},N=()=>{r.set("query",""),s(r)};return o.jsx(o.Fragment,{children:o.jsx(J,{children:o.jsxs(K,{onSubmit:F,children:[o.jsx(re,{query:c,onTitleChange:S,onCleanForm:N,onSubmit:F}),o.jsxs(U,{children:[o.jsx(se,{label:p||"Category",onToggle:$,onSelect:v,isOpen:g}),o.jsx(de,{label:x||"All",isOpen:b,onToggle:f,onSelect:E})]})]})})})},pe=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,le=t.svg`
  width: 24px;
  height: 24px;
`,xe=t.p`
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
`,he=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(pe,{children:[o.jsx(le,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(xe,{children:i})]})}),me=i=>i.$isAllowed?e.color.green:e.color.red,ge=t.div`
 border: ${e.border.grey3};
 border-radius: 12px;
 padding: 16px;
 width: 335px;
 height: 141px;
 background-color: ${e.color.greyTr};
 @media (min-width: ${e.breakpoint.xl}) {
  width: 405px;
  }
`,ue=t.div`
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
 background-color: ${me};
`,we=t.p`
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
`,$e=t.svg`
width: 18px;
height: 18px;
stroke: ${e.color.orange};
`,ke=t.div`
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
`;const ve=t.div`
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
`;const Ce=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Se=t(M)`
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
`,Fe=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${e.color.white};
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 32px;
  }
`,Pe=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Re=t.p`
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
`,Be=({isOpen:i,onClose:n,calories:r})=>{var c;const s=V(),d=a.useRef(s);return o.jsx(o.Fragment,{children:i&&o.jsx(ze,{children:o.jsxs(ye,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcset:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcset:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Fe,{children:"Well done"}),o.jsxs(ve,{children:[o.jsx(Pe,{children:"Calories:"}),o.jsx(Re,{children:r})]}),o.jsx(Ie,{type:"button",onClick:n,children:"Next product"}),o.jsxs(Se,{to:((c=d.current.state)==null?void 0:c.from)??"/diary",children:["To the diary",o.jsx(Ce,{children:o.jsx("use",{href:`${u}#arrow`})})]})]})})})},Le=t.div`
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
`,Ae=t.use``,Te=t.svg`
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
`,Ne=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${e.border.orange};
  border-radius: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    width: 244px;
  }
`,We=t.p`
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
`,Me=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${e.color.greyFifth};
`,Ve=t.input`
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
`,qe=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Ge=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  font-size: 12px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ye=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 309px;
  }
`,He=t.button`
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
`,_e=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,Je=({isOpen:i,onClose:n,title:r,calories:s,id:d})=>{const[c,p]=a.useState(""),[x,g]=a.useState("0"),[l,h]=a.useState(s),[b,w]=a.useState(!1),k=$=>{const f=$.currentTarget.value;p(f);const v=Math.round(f*l/100);g(v)},j=$=>{$.preventDefault(),w(!0);const f={exercise:d,grams:+c};console.log(f),p("")};return o.jsxs(Y,{isOpen:i,onClose:n,children:[o.jsx(Oe,{onClick:n,children:o.jsx(Te,{children:o.jsx(Ae,{href:`${u}#x-modal`})})}),!b&&o.jsx(Le,{children:o.jsxs("form",{onSubmit:j,children:[o.jsxs(Ee,{children:[o.jsx(Ne,{children:o.jsx(We,{children:r})}),o.jsxs(De,{children:[o.jsx(Ve,{name:"number",required:!0,value:c,onChange:k}),o.jsx(Me,{children:"grams"})]})]}),o.jsxs(qe,{children:[o.jsx(_e,{children:"Calories:"}),o.jsx(Ge,{children:x})]}),o.jsxs(Ye,{children:[o.jsx(He,{type:"submit",children:"Add to diary"}),o.jsx(Qe,{type:"button",onClick:n,children:"Cancel"})]})]})}),b&&o.jsx(Be,{calories:x,isOpen:b,onClose:()=>w(!1)})]})},Ke=({item:{title:i,calories:n,category:r,weight:s,groupBloodNotAllowed:d,_id:c},bloodGroup:p})=>{const[x,g]=a.useState(!1),l=d[p],h=l?"Recommended":"Not recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(ge,{children:[o.jsxs(ke,{children:[o.jsx(ue,{children:"Diet"}),o.jsxs(je,{children:[o.jsxs(we,{children:[o.jsx(be,{$isAllowed:l}),h]}),o.jsxs(fe,{type:"button",onClick:()=>g(!0),children:["Add",o.jsx($e,{children:o.jsx("use",{href:`${u}#arrow`})})]})]})]}),o.jsx(he,{titleName:i}),o.jsxs(H,{children:[o.jsx(C,{text:"Calories: ",val:n}),o.jsx(C,{text:"Category: ",val:r}),o.jsx(C,{text:"Weight: ",val:s})]})]}),o.jsx(Je,{isOpen:x,id:c,title:i,calories:n,onClose:()=>g(!1)})]})},Ue=t.div`
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
`,Ze=t.section`
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
`,T=i=>i.products.items,eo=i=>i.products.isLoading,oo=i=>i.products.error,to=({bloodGroup:i})=>{const n=y(T);return o.jsx(Ue,{children:o.jsx(Xe,{children:n.map(r=>o.jsx("li",{children:o.jsx(Ke,{item:r,bloodGroup:i})},r._id))})})},io=t.section`
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
`,ro=q`
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
`,co=t.p`
font-size: 14px;
line-height: 1.29;
color: ${e.color.grey};
margin-bottom: 16px;
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,P=t.span`
font-size: 14px;
line-height: 1.29;
color: ${e.color.orange};
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,po=()=>o.jsxs(ao,{children:[o.jsxs(co,{children:[o.jsx(P,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(P,{children:"Try changing the search parameters."})]});function mo(){const i=y(T),n=y(eo),r=y(oo),s="1",d=R(),c=p=>{d(I(p))};return o.jsx(o.Fragment,{children:o.jsx(Ze,{children:o.jsxs("div",{className:"container",children:[o.jsxs(Q,{children:[o.jsx(_,{children:"Products"}),o.jsx(ce,{onFilterChange:c,bloodGroup:s})]}),n&&o.jsx(so,{}),i.length>0&&o.jsx(to,{bloodGroup:s}),r||i.length===0&&o.jsx(po,{})]})})})}export{mo as default};
