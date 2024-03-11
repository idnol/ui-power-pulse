import{s as t,t as o,j as e,b as w,a as p,I as T,G as D,_ as M,H as B,D as N,u as O,Q as W,J as z,B as F,K as V,d as $,M as P}from"./index-2c988186.js";import{S as G,C as q,e as H,f as _,i as Q,j as C,n as Y}from"./AddExerciseSuccess.styled-4f794a15.js";const J=t.div`
  max-width: 335px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 668px;
    margin: 0;
    padding-top: 72px;
    padding-bottom: 32px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    max-width: 1248px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,K=t.div`
  margin-top: 40px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 664px;
    margin: 0;
    margin-top: 32px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    margin-bottom: 0;
    margin-top: 0;
  }
`,U=t.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
  }
`,R=t.div` 
  font-size: 14px;
  line-height: 1.29;
  padding: 14px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  &::first-letter {
    text-transform: capitalize;
  }
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,A=t.svg`
  width: 20px;
  height: 20px;
  stroke: ${o.color.white};
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1;
`,L=t.ul`
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
  background-color: ${o.color.darkGreySecond};
  z-index: 100;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 12px;
  } 
  &::-webkit-scrollbar-thumb {
    background-color: ${o.color.greySixth};
    border-radius: 12px;
    height: 147px;
  }
`,S=t.li`
  background-color: ${o.color.darkGreySecond};
  color:  ${o.color.white};
  font-size: 14px;
  line-height: 1.29;
  border-radius: 12px;
  margin-bottom: 8px;
  cursor: pointer;
  &::first-letter {
    text-transform: capitalize;
  }
   &:hover {
    background-color: ${o.color.grey};
  }
   @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,X=t.div`
  display: flex;
  gap: 16px;
`,Z=t.div`
  display: flex;
  align-items: center;
  width: 100%;
  width: 335px;
  background: transparent;
  position: relative;
  @media (min-width: ${o.breakpoint.md}) {
    width: 236px;
  }
`,ee=t.input`
  position: relative;
  display: inline-block;
  font-size: 14px;
  outline: none;
  border: none;
  width: 335px;
  border: ${o.border.grey3};
  border-radius: 12px;
  overflow: hidden;
  padding: 14px; 
  background: transparent;
  color:  ${o.color.white};
  &::placeholder { 
   color: ${o.color.white};
  }
 &:focus  { 
   border: ${o.border.orange};
  }
 &:not(:placeholder-shown) + .cleanBtn { 
   display: block;
  }
 @media (min-width: ${o.breakpoint.md}) {
   width: 236px;
   font-size: 16px;
   line-height: 1.5;
  }
`,oe=t.button`
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
`,te=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${o.color.orange};
  fill: ${o.color.orange};
`,ie=t.button`
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
`,re=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${o.color.white};
`,ne=({query:i,onTitleChange:a,onCleanForm:n})=>e.jsxs(Z,{children:[e.jsx(ee,{type:"text",name:"query",placeholder:"Search",value:i,onChange:a}),e.jsx(oe,{type:"button",className:"cleanBtn",onClick:n,children:e.jsx(te,{children:e.jsx("use",{href:`${w}#x`})})}),e.jsx(ie,{type:"submit",children:e.jsx(re,{children:e.jsx("use",{href:`${w}#search`})})})]}),se=t.div`
  border: ${o.border.grey3};
  border-radius: 12px;
  width: 146px;
  background: transparent;
  color:  ${o.color.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  cursor: pointer;
  scrollbar-width: none;
  position: relative;
  display: inline-block; 
  z-index: 2;
  @media (min-width: ${o.breakpoint.md}) {
    width: 192px;
    font-size: 16px;
    line-height: 1.5;
  }
`,ae=({label:i,onSelect:a,onToggle:n,isOpen:x})=>{const[l,r]=p.useState([]),s=p.useRef(null);p.useEffect(()=>{async function c(){try{const h=await D();r(h)}catch{return M.error("Something went wrong! Please try again!")}}c()},[]);const d=c=>{s.current&&!s.current.contains(c.target)&&n()};return p.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)})),e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[e.jsx(R,{onClick:n,children:i}),e.jsx(A,{children:e.jsx("use",{href:`${w}#arrow-down`})}),x&&e.jsxs(L,{ref:s,children:[e.jsx(S,{onClick:()=>a(""),children:"All"}),l.map((c,h)=>e.jsx(S,{onClick:()=>a(c),children:c},h))]})]}),e.jsx(T,{})]})},de=t.div`
  border: ${o.border.grey3};
  border-radius: 12px;
  width: 173px;
  background: transparent;
  color:  ${o.color.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  position: relative;
  display: inline-block;
  @media (min-width: ${o.breakpoint.md}) {
    width: 204px;
    font-size: 16px;
    line-height: 1.5;
  }
`,ce=({label:i,isOpen:a,onToggle:n,onSelect:x})=>{const l=["All","recommended","not recommended"],r=p.useRef(null),s=d=>{r.current&&!r.current.contains(d.target)&&n()};return p.useEffect(()=>(document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)})),e.jsxs(de,{children:[e.jsx(R,{onClick:n,children:i}),e.jsx(A,{children:e.jsx("use",{href:`${w}#arrow-down`})}),a&&e.jsx(L,{ref:r,children:l.map((d,c)=>e.jsx(S,{onClick:()=>x(d),children:d},c))})]})},le=({query:i,category:a,recommended:n,onFilterChange:x,bloodGroup:l})=>{const[r,s]=B(),[d,c]=p.useState(!1),[h,g]=p.useState(!1),u=()=>{c(!d)},f=()=>{g(!h)},k=m=>{m.preventDefault(),r.set("query",m.target.value),s(r)},y=m=>{r.set("category",m),s(r),c(!1)},v=m=>{r.set("recommended",m),r.set("blood",l),s(r),g(!1)},j=m=>{m.preventDefault(),x(r)},b=()=>{r.set("query",""),s(r)};return e.jsx(e.Fragment,{children:e.jsx(K,{children:e.jsxs(U,{onSubmit:j,children:[e.jsx(ne,{query:i,onTitleChange:k,onCleanForm:b}),e.jsxs(X,{children:[e.jsx(ae,{label:a||"Category",isOpen:d,onToggle:u,onSelect:y}),e.jsx(ce,{label:n||"All",isOpen:h,onToggle:f,onSelect:v})]})]})})})},pe=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,xe=t.svg`
  width: 24px;
  height: 24px;
`,he=t.p`
  color: ${o.color.white};
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
  @media (min-width: ${o.breakpoint.md}) {
   font-size: 24px;
   line-height: 32px;
  }
`,me=({titleName:i})=>e.jsx(e.Fragment,{children:e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),e.jsx(he,{children:i})]})}),ge=i=>i.$isAllowed?o.color.green:o.color.red,ue=t.div`
  border: ${o.border.grey3};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 141px;
  background-color: ${o.color.greyTr};
  @media (min-width: ${o.breakpoint.xl}) {
    width: 405px;
  }
`,be=t.div`
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
  background: ${o.color.greyTr};
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`,we=t.span`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${ge};
`,fe=t.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${o.color.white};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
`,je=t.button`
  font-size: 14px;
  line-height: 1.29;
  color: ${o.color.orange};
  background-color: transparent;
  border: none;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0;
  cursor: pointer;
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;
  }
`,$e=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${o.color.orange};
`,ke=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 27px;
  }
`,ye=t.div`
  display: flex;
  gap: 16px;
`,ve=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,Ce=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${o.color.white};
  @media (min-width: ${o.breakpoint.md}) {
    margin-top: 32px;
  }
`,Se=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,ze=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.orange};
  font-size: 14px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Fe=t.button`
  min-width: 157px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${o.color.orange};
  color: ${o.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${o.color.orangeSecond};
  }
  @media (min-width: ${o.breakpoint.md}) {
    padding: 14px 32px;
  }
`,Pe=({isOpen:i,onClose:a,calories:n})=>{var r;const x=N(),l=p.useRef(x);return e.jsx(e.Fragment,{children:i&&e.jsx(ve,{children:e.jsxs(G,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:`${o.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),e.jsx("source",{media:`${o.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),e.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),e.jsx(Ce,{children:"Well done"}),e.jsxs(q,{children:[e.jsx(Se,{children:"Calories:"}),e.jsx(ze,{children:n})]}),e.jsx(Fe,{type:"button",onClick:a,children:"Next product"}),e.jsxs(H,{to:((r=l.current.state)==null?void 0:r.from)??"/diary",children:["To the diary",e.jsx(_,{children:e.jsx("use",{href:`${w}#arrow`})})]})]})})})},Ie=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Be=t.button`
  position: absolute;
  stroke: ${o.color.white};
  fill: transparent;
  &:hover {
    stroke: ${o.color.orangeSecond};
  }

  width: 22px;
  height: 22px;
  top: 14px;
  right: 14px;

  @media (min-width: ${o.breakpoint.md}) {
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
`,Oe=t.use``,Re=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${o.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Ae=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
  }
`,Le=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${o.border.orange};
  border-radius: 12px;
  @media (min-width: ${o.breakpoint.md}) {
    width: 244px;
  }
`,Ee=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${o.color.greyFifth};
`,Te=t.div`
  position: relative;
`,De=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${o.color.greyFifth};
`,Me=t.input`
  width: 287px;
  padding: 8px 14px;
  border: ${o.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  outline: transparent;
  color: ${o.color.white};
  &:hover,
  &:focus {
    border: ${o.border.orange};
    outline: ${o.border.orange};
  }

  @media (min-width: ${o.breakpoint.md}) {
    width: 155px;
  }
`,Ne=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,We=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  font-size: 12px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ve=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 309px;
  }
`,Ge=t.button`
  min-width: 151px;
  padding: 12px 32px;
  border-radius: 12px;
  border: none;
  background-color: ${o.color.orange};
  color: ${o.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${o.color.orangeSecond};
  }
  @media (min-width: ${o.breakpoint.md}) {
    min-width: 151px;
    padding: 14px 32px;
  }
`,qe=t.button`
  min-width: 121px;
  padding: 12px 36px;
  border-radius: 12px;
  background-color: transparent;
  border: ${o.border.grey3};
  color: ${o.color.white};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: ${o.border.orange};
  }
  @media (min-width: ${o.breakpoint.md}) {
    min-width: 142px;
    padding: 12px 40px;
  }
`,He=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,_e=({onClose:i,title:a,calories:n,id:x})=>{const[l,r]=p.useState(""),[s,d]=p.useState("0"),[c,h]=p.useState(n),[g,u]=p.useState(!1),f=O(),k=j=>{const b=j.currentTarget.value;r(b);const E=Math.round(b*c/100);d(E)},y=async j=>{j.preventDefault();try{const b={product:x,weight:+l},m=await f(z(b));z.fulfilled.match(m)?(r(""),u(!0)):(u(!1),d("0"),F.error("Oops, something went wrong"))}catch{u(!1),d("0"),F.error("Oops, something went wrong")}},v=()=>{i(),u(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Be,{onClick:i,children:e.jsx(Re,{children:e.jsx(Oe,{href:`${w}#x-modal`})})}),!g&&e.jsx(Ie,{children:e.jsxs("form",{onSubmit:y,children:[e.jsxs(Ae,{children:[e.jsx(Le,{children:e.jsx(Ee,{children:a})}),e.jsxs(Te,{children:[e.jsx(Me,{name:"number",required:!0,value:l,onChange:k}),e.jsx(De,{children:"grams"})]})]}),e.jsxs(Ne,{children:[e.jsx(He,{children:"Calories:"}),e.jsx(We,{children:s})]}),e.jsxs(Ve,{children:[e.jsx(Ge,{type:"submit",children:"Add to diary"}),e.jsx(qe,{type:"button",onClick:i,children:"Cancel"})]})]})}),g&&e.jsx(Pe,{calories:s,isOpen:g,onClose:()=>v()}),e.jsx(W,{position:"bottom-right",limit:2,autoClose:3e3})]})},Qe=({item:{title:i,calories:a,category:n,weight:x,groupBloodNotAllowed:l,_id:r},bloodGroup:s})=>{const[d,c]=p.useState(!1),h=l[s],g=h?"Recommended":"Not recommended";return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsxs(ke,{children:[e.jsx(be,{children:"Diet"}),e.jsxs(ye,{children:[e.jsxs(fe,{children:[e.jsx(we,{$isAllowed:h}),g]}),e.jsxs(je,{type:"button",onClick:()=>c(!0),children:["Add",e.jsx($e,{children:e.jsx("use",{href:`${w}#arrow`})})]})]})]}),e.jsx(me,{titleName:i}),e.jsxs(Q,{children:[e.jsx(C,{text:"Calories: ",val:a}),e.jsx(C,{text:"Category: ",val:n}),e.jsx(C,{text:"Weight: ",val:x})]})]}),d&&e.jsx(Y,{isOpen:d,onClose:()=>c(!1),children:e.jsx(_e,{onClose:()=>c(!1),id:r,title:i,calories:a})})]})},Ye=t.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 686px;
    margin: 0;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    max-width: 850px;
    margin: 0;
    max-height: 487px;
    overflow-y: scroll;
    @-moz-document url-prefix() {
      scrollbar {
      width: thin;
      color: ${o.color.orange};
      background-color: ${o.color.greySixth};
      }
    }
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${o.color.greySixth};
      border-radius: 12px;
    } 
    &::-webkit-scrollbar-thumb {
      background-color: ${o.color.orange};
      border-radius: 12px;
      height: 153px;
    }
 }
`,Je=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`,Ke=i=>i.products.items,Ue=i=>i.products.isLoading,Xe=i=>i.products.error,Ze=({items:i,bloodGroup:a})=>e.jsx(Ye,{children:e.jsx(Je,{children:i.map(n=>e.jsx("li",{children:e.jsx(Qe,{item:n,bloodGroup:a})},n._id))})}),eo=t.section`
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
`,oo=V`
  to {
    transform: rotate(360deg);
  }
`,to=t.div`
  border: 8px solid ${o.color.grey};
  border-top-color: ${o.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${oo} 1s ease-in-out infinite;
`,io=()=>e.jsx(eo,{id:"preloader",children:e.jsx(to,{})}),ro=t.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`,no=t.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${o.color.grey};
  margin-bottom: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
  }
`,I=t.span`
  font-size: 14px;
  line-height: 1.29;
  color: ${o.color.orange};
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
 }
`,so=()=>e.jsxs(ro,{children:[e.jsxs(no,{children:[e.jsx(I,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(I,{children:"Try changing the search parameters."})]}),ao=t.section`
  padding-top: 61px;
  @media (min-width: ${o.breakpoint.md}) {
    padding-top: 84px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
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
`,co=t.div`
  @media (min-width: ${o.breakpoint.xl}) {
    border-bottom: ${o.border.grey2};
    background-color: ${o.color.black};
    width: 100%;
    height: 84px;
  }
`,lo=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,po=t.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: ${o.color.white};
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 32px;
    line-height: 1.37;
  }
  @media (min-width: ${o.breakpoint.xl}) {
  }
`,xo=({children:i})=>e.jsx(po,{children:i});function go(){const i=$(Ke),a=$(Ue),n=$(Xe),x=$(u=>{var f;return(f=u.auth.user.bodyData)==null?void 0:f.blood})??"1",l=O(),[r]=B(),s=p.useMemo(()=>Object.fromEntries([...r]),[r]),{query:d="",category:c="",recommended:h="all"}=s;p.useEffect(()=>{l(P(s))},[l,s]);const g=u=>{l(P(u))};return e.jsx(e.Fragment,{children:e.jsxs(ao,{children:[e.jsx(co,{}),e.jsx("div",{className:"container",children:e.jsxs(lo,{children:[e.jsxs(J,{children:[e.jsx(xo,{children:"Products"}),e.jsx(le,{query:d,category:c,recommended:h,onFilterChange:g,bloodGroup:x})]}),a&&e.jsx(io,{}),i.length>0&&e.jsx(Ze,{items:i,bloodGroup:x}),n||i.length===0&&e.jsx(so,{})]})})]})})}export{go as default};
