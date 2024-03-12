import{s as t,t as o,j as e,a as b,b as x,J as E,f as S,K as I,F as T,u as O,M as P,w as D,O as M,d as j,P as N}from"./index-d12377af.js";import{S as W,C as V,e as G,f as q,i as H,j as C,n as Y}from"./AddExerciseSuccess.styled-f1675043.js";import{T as J}from"./TitlePage-27d76667.js";const K=t.div`
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
`,Q=t.div`
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
`,_=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
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
`,z=t.li`
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
`,U=t.div`
  display: flex;
  gap: 16px;
`,X=t.label`
  display: flex;
  align-items: center;
  width: 100%;
  width: 335px;
  background: transparent;
  position: relative;
  @media (min-width: ${o.breakpoint.md}) {
    width: 236px;
  }
`,Z=t.input`
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
  stroke: ${o.color.orange};
  fill: ${o.color.orange};
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
`,re=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${o.color.white};
`,ie=({onChange:r,inputValue:n,onCleanForm:s,onSubmit:i})=>e.jsx("form",{onSubmit:i,children:e.jsxs(X,{children:[e.jsx(Z,{type:"text",name:"query",placeholder:"Search",value:n,onChange:r}),e.jsx(ee,{type:"button",className:"cleanBtn",onClick:s,children:e.jsx(oe,{children:e.jsx("use",{href:`${b}#x`})})}),e.jsx(te,{type:"submit",children:e.jsx(re,{children:e.jsx("use",{href:`${b}#search`})})})]})}),ne=t.div`
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
`,se=({label:r,onSelect:n,onToggle:s,isOpen:i})=>{const[l,a]=x.useState([]),p=x.useRef(null);x.useEffect(()=>{async function c(){try{const h=await E();a(h)}catch{return S.error("Something went wrong! Please try again!")}}c()},[]);const d=c=>{p.current&&!p.current.contains(c.target)&&s()};return x.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)})),e.jsx(e.Fragment,{children:e.jsxs(ne,{children:[e.jsx(B,{onClick:s,children:r}),e.jsx(R,{children:e.jsx("use",{href:`${b}#arrow-down`})}),i&&e.jsxs(A,{ref:p,children:[e.jsx(z,{onClick:()=>n(""),children:"All"}),l.map((c,h)=>e.jsx(z,{onClick:()=>n(c),children:c},h))]})]})})},ae=t.div`
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
`,de=({label:r,isOpen:n,onToggle:s,onSelect:i})=>{const l=["All","recommended","not recommended"],a=x.useRef(null),p=d=>{a.current&&!a.current.contains(d.target)&&s()};return x.useEffect(()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),e.jsxs(ae,{children:[e.jsx(B,{onClick:s,children:r}),e.jsx(R,{children:e.jsx("use",{href:`${b}#arrow-down`})}),n&&e.jsx(A,{ref:a,children:l.map((d,c)=>e.jsx(z,{onClick:()=>i(d),children:d},c))})]})},ce=({category:r,recommended:n,bloodGroup:s})=>{const[i,l]=I(),[a,p]=x.useState(!1),[d,c]=x.useState(!1),[h,m]=x.useState(""),w=g=>{m(g.target.value)},k=()=>{p(!a)},$=()=>{c(!d)},y=g=>{i.set("category",g),l(i),p(!1)},v=g=>{i.set("recommended",g),i.set("blood",s),l(i),c(!1)},f=g=>{g.preventDefault(),i.set("query",g.target[0].value),l(i)},u=()=>{i.set("query",""),l(i),m("")};return e.jsx(e.Fragment,{children:e.jsx(Q,{children:e.jsxs(_,{children:[e.jsx(ie,{inputValue:h,onChange:w,onSubmit:f,onCleanForm:u}),e.jsxs(U,{children:[e.jsx(se,{label:r||"Category",isOpen:a,onToggle:k,onSelect:y}),e.jsx(de,{label:n||"All",isOpen:d,onToggle:$,onSelect:v})]})]})})})},le=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,pe=t.svg`
  width: 24px;
  height: 24px;
`,xe=t.p`
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
`,he=({titleName:r})=>e.jsx(e.Fragment,{children:e.jsxs(le,{children:[e.jsx(pe,{children:e.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),e.jsx(xe,{children:r})]})}),me=r=>r.$isAllowed?o.color.green:o.color.red,ge=t.div`
  border: ${o.border.grey3};
  border-radius: 12px;
  padding: 16px;
  width: 335px;
  height: 141px;
  background-color: ${o.color.greyTr};
  @media (min-width: ${o.breakpoint.xl}) {
    width: 405px;
  }
`,ue=t.div`
  border-radius: 4px;
  padding: 5px 7px;
  width: 41px;
  height: 24px;
  background: ${o.color.greyTr};
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
  color: ${o.color.white};
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
`,fe=t.button`
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
`,ke=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${o.color.orange};
`,je=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 27px;
  }
`,$e=t.div`
  display: flex;
  gap: 16px;
`,ye=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,ve=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${o.color.white};
  @media (min-width: ${o.breakpoint.md}) {
    margin-top: 32px;
  }
`,Ce=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Se=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.orange};
  font-size: 14px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,ze=t.button`
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
`,Pe=({isOpen:r,onClose:n,calories:s})=>{var a;const i=T(),l=x.useRef(i);return e.jsx(e.Fragment,{children:r&&e.jsx(ye,{children:e.jsxs(W,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:`${o.breakpoint.sm}`,srcSet:"/img/avocado-1x.png"}),e.jsx("source",{media:`${o.breakpoint.md}`,srcSet:"/img/avocado-2x.png"}),e.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),e.jsx(ve,{children:"Well done"}),e.jsxs(V,{children:[e.jsx(Ce,{children:"Calories:"}),e.jsx(Se,{children:s})]}),e.jsx(ze,{type:"button",onClick:n,children:"Next product"}),e.jsxs(G,{to:((a=l.current.state)==null?void 0:a.from)??"/diary",children:["To the diary",e.jsx(q,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})})})},Fe=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Ie=t.button`
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
`,Oe=t.use``,Be=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${o.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Re=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
  }
`,Ae=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${o.border.orange};
  border-radius: 12px;
  @media (min-width: ${o.breakpoint.md}) {
    width: 244px;
  }
`,Le=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${o.color.greyFifth};
`,Ee=t.div`
  position: relative;
`,Te=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${o.color.greyFifth};
`,De=t.input`
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
`,Me=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Ne=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  font-size: 12px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,We=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 309px;
  }
`,Ve=t.button`
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
`,Ge=t.button`
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
`,qe=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,He=({onClose:r,title:n,calories:s,id:i})=>{const[l,a]=x.useState(""),[p,d]=x.useState("0"),[c,h]=x.useState(s),[m,w]=x.useState(!1),k=O(),$=f=>{const u=f.currentTarget.value;a(u);const L=Math.round(u*c/100);d(L)},y=async f=>{f.preventDefault();try{const u={product:i,weight:+l},g=await k(P(u));k(D()),P.fulfilled.match(g)?(a(""),w(!0)):(w(!1),d("0"),S.error("Oops, something went wrong"))}catch{w(!1),d("0"),S.error("Oops, something went wrong")}},v=()=>{r(),w(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Ie,{onClick:r,children:e.jsx(Be,{children:e.jsx(Oe,{href:`${b}#x-modal`})})}),!m&&e.jsx(Fe,{children:e.jsxs("form",{onSubmit:y,children:[e.jsxs(Re,{children:[e.jsx(Ae,{children:e.jsx(Le,{children:n})}),e.jsxs(Ee,{children:[e.jsx(De,{name:"number",required:!0,value:l,onChange:$}),e.jsx(Te,{children:"grams"})]})]}),e.jsxs(Me,{children:[e.jsx(qe,{children:"Calories:"}),e.jsx(Ne,{children:p})]}),e.jsxs(We,{children:[e.jsx(Ve,{type:"submit",children:"Add to diary"}),e.jsx(Ge,{type:"button",onClick:r,children:"Cancel"})]})]})}),m&&e.jsx(Pe,{calories:p,isOpen:m,onClose:()=>v()})]})},Ye=({item:{title:r,calories:n,category:s,weight:i,groupBloodNotAllowed:l,_id:a},bloodGroup:p})=>{const[d,c]=x.useState(!1),h=l[p],m=h?"Recommended":"Not recommended";return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsxs(je,{children:[e.jsx(ue,{children:"Diet"}),e.jsxs($e,{children:[e.jsxs(we,{children:[e.jsx(be,{$isAllowed:h}),m]}),e.jsxs(fe,{type:"button",onClick:()=>c(!0),children:["Add",e.jsx(ke,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})]}),e.jsx(he,{titleName:r}),e.jsxs(H,{children:[e.jsx(C,{text:"Calories: ",val:n}),e.jsx(C,{text:"Category: ",val:s}),e.jsx(C,{text:"Weight: ",val:i})]})]}),d&&e.jsx(Y,{isOpen:d,onClose:()=>c(!1),children:e.jsx(He,{onClose:()=>c(!1),id:a,title:r,calories:n})})]})},Je=t.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 704px;
    margin: 0;
    overflow-y: scroll;
    height: 660px;
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
`,Ke=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`,Qe=({items:r,bloodGroup:n})=>e.jsx(Je,{children:e.jsx(Ke,{children:r.map(s=>e.jsx("li",{children:e.jsx(Ye,{item:s,bloodGroup:n})},s._id))})}),_e=r=>r.products.items,Ue=r=>r.products.isLoading,Xe=r=>r.products.error,Ze=t.section`
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
`,eo=M`
  to {
    transform: rotate(360deg);
  }
`,oo=t.div`
  border: 8px solid ${o.color.grey};
  border-top-color: ${o.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${eo} 1s ease-in-out infinite;
`,to=()=>e.jsx(Ze,{id:"preloader",children:e.jsx(oo,{})}),ro=t.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`,io=t.p`
  font-size: 14px;
  line-height: 1.29;
  color: ${o.color.grey};
  margin-bottom: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
  }
`,F=t.span`
  font-size: 14px;
  line-height: 1.29;
  color: ${o.color.orange};
  @media (min-width: ${o.breakpoint.md}) {
    font-size: 16px;
    line-height: 1.5;    
 }
`,no=()=>e.jsxs(ro,{children:[e.jsxs(io,{children:[e.jsx(F,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(F,{children:"Try changing the search parameters."})]}),so=t.section`
  padding-top: 61px;
  padding-bottom: 40px;
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
`,ao=t.div`
  @media (min-width: ${o.breakpoint.xl}) {
    border-bottom: ${o.border.grey2};
    background-color: ${o.color.black};
    width: 100%;
    height: 84px;
  }
`,co=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;function ho(){const r=j(_e),n=j(Ue),s=j(Xe),i=j(h=>{var m;return(m=h.profile.items.bodyData)==null?void 0:m.blood})??"1",l=O(),[a]=I(),p=x.useMemo(()=>Object.fromEntries([...a]),[a]),{category:d="",recommended:c="all"}=p;return x.useEffect(()=>{l(N(p))},[l,p]),e.jsx(e.Fragment,{children:e.jsxs(so,{children:[e.jsx(ao,{}),e.jsx("div",{className:"container",children:e.jsxs(co,{children:[e.jsxs(K,{children:[e.jsx(J,{children:"Products"}),e.jsx(ce,{category:d,recommended:c,bloodGroup:i})]}),n&&e.jsx(to,{}),r.length>0&&e.jsx(Qe,{items:r,bloodGroup:i}),(s||r.length===0&&!n)&&e.jsx(no,{})]})})]})})}export{ho as default};
