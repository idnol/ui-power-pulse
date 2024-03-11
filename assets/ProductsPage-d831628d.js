import{s as t,t as o,j as e,b,a as x,I as E,G as T,_ as D,H as F,D as M,u as B,Q as N,J as z,B as I,K as W,d as j,M as V}from"./index-054cf276.js";import{S as G,C as q,e as H,f as _,i as Q,j as C,n as Y}from"./AddExerciseSuccess.styled-ba210450.js";const J=t.div`
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
`,U=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
  }
`,O=t.div` 
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
`,R=t.svg`
  width: 20px;
  height: 20px;
  stroke: ${o.color.white};
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
`,Z=t.label`
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
`,ne=({onChange:i,inputValue:n,onCleanForm:s,onSubmit:r})=>e.jsx("form",{onSubmit:r,children:e.jsxs(Z,{children:[e.jsx(ee,{type:"text",name:"query",placeholder:"Search",value:n,onChange:i}),e.jsx(oe,{type:"button",className:"cleanBtn",onClick:s,children:e.jsx(te,{children:e.jsx("use",{href:`${b}#x`})})}),e.jsx(ie,{type:"submit",children:e.jsx(re,{children:e.jsx("use",{href:`${b}#search`})})})]})}),se=t.div`
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
`,ae=({label:i,onSelect:n,onToggle:s,isOpen:r})=>{const[l,a]=x.useState([]),p=x.useRef(null);x.useEffect(()=>{async function c(){try{const h=await T();a(h)}catch{return D.error("Something went wrong! Please try again!")}}c()},[]);const d=c=>{p.current&&!p.current.contains(c.target)&&s()};return x.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)})),e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[e.jsx(O,{onClick:s,children:i}),e.jsx(R,{children:e.jsx("use",{href:`${b}#arrow-down`})}),r&&e.jsxs(A,{ref:p,children:[e.jsx(S,{onClick:()=>n(""),children:"All"}),l.map((c,h)=>e.jsx(S,{onClick:()=>n(c),children:c},h))]})]}),e.jsx(E,{})]})},de=t.div`
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
`,ce=({label:i,isOpen:n,onToggle:s,onSelect:r})=>{const l=["All","recommended","not recommended"],a=x.useRef(null),p=d=>{a.current&&!a.current.contains(d.target)&&s()};return x.useEffect(()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),e.jsxs(de,{children:[e.jsx(O,{onClick:s,children:i}),e.jsx(R,{children:e.jsx("use",{href:`${b}#arrow-down`})}),n&&e.jsx(A,{ref:a,children:l.map((d,c)=>e.jsx(S,{onClick:()=>r(d),children:d},c))})]})},le=({category:i,recommended:n,bloodGroup:s})=>{const[r,l]=F(),[a,p]=x.useState(!1),[d,c]=x.useState(!1),[h,m]=x.useState(""),w=g=>{m(g.target.value)},$=()=>{p(!a)},k=()=>{c(!d)},y=g=>{r.set("category",g),l(r),p(!1)},v=g=>{r.set("recommended",g),r.set("blood",s),l(r),c(!1)},f=g=>{g.preventDefault(),r.set("query",g.target[0].value),l(r)},u=()=>{r.set("query",""),l(r),m("")};return e.jsx(e.Fragment,{children:e.jsx(K,{children:e.jsxs(U,{children:[e.jsx(ne,{inputValue:h,onChange:w,onSubmit:f,onCleanForm:u}),e.jsxs(X,{children:[e.jsx(ae,{label:i||"Category",isOpen:a,onToggle:$,onSelect:y}),e.jsx(ce,{label:n||"All",isOpen:d,onToggle:k,onSelect:v})]})]})})})},pe=t.div`
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
`,Ie=t.button`
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
`,Pe=({isOpen:i,onClose:n,calories:s})=>{var a;const r=M(),l=x.useRef(r);return e.jsx(e.Fragment,{children:i&&e.jsx(ve,{children:e.jsxs(G,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:`${o.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),e.jsx("source",{media:`${o.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),e.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),e.jsx(Ce,{children:"Well done"}),e.jsxs(q,{children:[e.jsx(Se,{children:"Calories:"}),e.jsx(ze,{children:s})]}),e.jsx(Ie,{type:"button",onClick:n,children:"Next product"}),e.jsxs(H,{to:((a=l.current.state)==null?void 0:a.from)??"/diary",children:["To the diary",e.jsx(_,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})})})},Fe=t.div`
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
`,_e=({onClose:i,title:n,calories:s,id:r})=>{const[l,a]=x.useState(""),[p,d]=x.useState("0"),[c,h]=x.useState(s),[m,w]=x.useState(!1),$=B(),k=f=>{const u=f.currentTarget.value;a(u);const L=Math.round(u*c/100);d(L)},y=async f=>{f.preventDefault();try{const u={product:r,weight:+l},g=await $(z(u));z.fulfilled.match(g)?(a(""),w(!0)):(w(!1),d("0"),I.error("Oops, something went wrong"))}catch{w(!1),d("0"),I.error("Oops, something went wrong")}},v=()=>{i(),w(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Be,{onClick:i,children:e.jsx(Re,{children:e.jsx(Oe,{href:`${b}#x-modal`})})}),!m&&e.jsx(Fe,{children:e.jsxs("form",{onSubmit:y,children:[e.jsxs(Ae,{children:[e.jsx(Le,{children:e.jsx(Ee,{children:n})}),e.jsxs(Te,{children:[e.jsx(Me,{name:"number",required:!0,value:l,onChange:k}),e.jsx(De,{children:"grams"})]})]}),e.jsxs(Ne,{children:[e.jsx(He,{children:"Calories:"}),e.jsx(We,{children:p})]}),e.jsxs(Ve,{children:[e.jsx(Ge,{type:"submit",children:"Add to diary"}),e.jsx(qe,{type:"button",onClick:i,children:"Cancel"})]})]})}),m&&e.jsx(Pe,{calories:p,isOpen:m,onClose:()=>v()}),e.jsx(N,{position:"bottom-right",limit:2,autoClose:3e3})]})},Qe=({item:{title:i,calories:n,category:s,weight:r,groupBloodNotAllowed:l,_id:a},bloodGroup:p})=>{const[d,c]=x.useState(!1),h=l[p],m=h?"Recommended":"Not recommended";return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsxs(ke,{children:[e.jsx(be,{children:"Diet"}),e.jsxs(ye,{children:[e.jsxs(fe,{children:[e.jsx(we,{$isAllowed:h}),m]}),e.jsxs(je,{type:"button",onClick:()=>c(!0),children:["Add",e.jsx($e,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})]}),e.jsx(me,{titleName:i}),e.jsxs(Q,{children:[e.jsx(C,{text:"Calories: ",val:n}),e.jsx(C,{text:"Category: ",val:s}),e.jsx(C,{text:"Weight: ",val:r})]})]}),d&&e.jsx(Y,{isOpen:d,onClose:()=>c(!1),children:e.jsx(_e,{onClose:()=>c(!1),id:a,title:i,calories:n})})]})},Ye=t.div`
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
`,Ke=i=>i.products.items,Ue=i=>i.products.isLoading,Xe=i=>i.products.error,Ze=({items:i,bloodGroup:n})=>e.jsx(Ye,{children:e.jsx(Je,{children:i.map(s=>e.jsx("li",{children:e.jsx(Qe,{item:s,bloodGroup:n})},s._id))})}),eo=t.section`
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
`,oo=W`
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
`,P=t.span`
  font-size: 14px;
  line-height: 1.29;
  color: ${o.color.orange};
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
 }
`,so=()=>e.jsxs(ro,{children:[e.jsxs(no,{children:[e.jsx(P,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(P,{children:"Try changing the search parameters."})]}),ao=t.section`
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
`,xo=({children:i})=>e.jsx(po,{children:i});function go(){const i=j(Ke),n=j(Ue),s=j(Xe),r=j(h=>{var m;return(m=h.auth.user.bodyData)==null?void 0:m.blood})??"1",l=B(),[a]=F(),p=x.useMemo(()=>Object.fromEntries([...a]),[a]),{category:d="",recommended:c="all"}=p;return x.useEffect(()=>{l(V(p))},[l,p]),e.jsx(e.Fragment,{children:e.jsxs(ao,{children:[e.jsx(co,{}),e.jsx("div",{className:"container",children:e.jsxs(lo,{children:[e.jsxs(J,{children:[e.jsx(xo,{children:"Products"}),e.jsx(le,{category:d,recommended:c,bloodGroup:r})]}),n&&e.jsx(io,{}),i.length>0&&e.jsx(Ze,{items:i,bloodGroup:r}),(s||i.length===0&&!n)&&e.jsx(so,{})]})})]})})}export{go as default};
