import{s as t,t as o,j as e,a as b,b as x,J as T,f as S,K as O,F as D,u as B,M as P,w as M,O as N,d as k,P as W}from"./index-c38365cc.js";import{S as V,C as G,e as q,f as H,i as Y,j as C,n as J}from"./AddExerciseSuccess.styled-8c5c53c3.js";import{T as K}from"./TitlePage-9db50b06.js";const Q=t.div`
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
`,_=t.div`
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
`,re=t.button`
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
  stroke: ${o.color.white};
`,ne=({onChange:r,inputValue:n,onCleanForm:s,onSubmit:i})=>e.jsx("form",{onSubmit:i,children:e.jsxs(Z,{children:[e.jsx(ee,{type:"text",name:"query",placeholder:"Search",value:n,onChange:r}),e.jsx(oe,{type:"button",className:"cleanBtn",onClick:s,children:e.jsx(te,{children:e.jsx("use",{href:`${b}#x`})})}),e.jsx(re,{type:"submit",children:e.jsx(ie,{children:e.jsx("use",{href:`${b}#search`})})})]})}),se=t.div`
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
`,ae=({label:r,onSelect:n,onToggle:s,isOpen:i})=>{const[l,a]=x.useState([]),p=x.useRef(null);x.useEffect(()=>{async function c(){try{const h=await T();a(h)}catch{return S.error("Something went wrong! Please try again!")}}c()},[]);const d=c=>{p.current&&!p.current.contains(c.target)&&s()};return x.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)})),e.jsx(e.Fragment,{children:e.jsxs(se,{children:[e.jsx(R,{onClick:s,children:r}),e.jsx(A,{children:e.jsx("use",{href:`${b}#arrow-down`})}),i&&e.jsxs(L,{ref:p,children:[e.jsx(z,{onClick:()=>n(""),children:"All"}),l.map((c,h)=>e.jsx(z,{onClick:()=>n(c),children:c},h))]})]})})},de=t.div`
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
`,ce=({label:r,isOpen:n,onToggle:s,onSelect:i})=>{const l=["All","recommended","not recommended"],a=x.useRef(null),p=d=>{a.current&&!a.current.contains(d.target)&&s()};return x.useEffect(()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),e.jsxs(de,{children:[e.jsx(R,{onClick:s,children:r}),e.jsx(A,{children:e.jsx("use",{href:`${b}#arrow-down`})}),n&&e.jsx(L,{ref:a,children:l.map((d,c)=>e.jsx(z,{onClick:()=>i(d),children:d},c))})]})},le=({category:r,recommended:n,bloodGroup:s})=>{const[i,l]=O(),[a,p]=x.useState(!1),[d,c]=x.useState(!1),[h,m]=x.useState(""),w=g=>{m(g.target.value)},j=()=>{p(!a)},$=()=>{c(!d)},y=g=>{i.set("category",g),l(i),p(!1)},v=g=>{i.set("recommended",g),i.set("blood",s),l(i),c(!1)},f=g=>{g.preventDefault(),i.set("query",g.target[0].value),l(i)},u=()=>{i.set("query",""),l(i),m("")};return e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsxs(U,{children:[e.jsx(ne,{inputValue:h,onChange:w,onSubmit:f,onCleanForm:u}),e.jsxs(X,{children:[e.jsx(ae,{label:r||"Category",isOpen:a,onToggle:j,onSelect:y}),e.jsx(ce,{label:n||"All",isOpen:d,onToggle:$,onSelect:v})]})]})})})},pe=t.div`
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
`,me=({titleName:r})=>e.jsx(e.Fragment,{children:e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),e.jsx(he,{children:r})]})}),ge=r=>r.$isAllowed?o.color.green:o.color.red,ue=t.div`
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
`,ke=t.svg`
  width: 18px;
  height: 18px;
  stroke: ${o.color.orange};
`,$e=t.div`
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
`,F="/ui-power-pulse/assets/avocado-1x-5dd1adfd.png",ve="/ui-power-pulse/assets/avocado-2x-f57ad951.png",Ce=t.div`
  padding: 48px 89px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 64px 136px;
    max-width: 430px;
  }
`,Se=t.h3`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 16px;
  color: ${o.color.white};
  @media (min-width: ${o.breakpoint.md}) {
    margin-top: 32px;
  }
`,ze=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Pe=t.p`
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
`,Ie=({isOpen:r,onClose:n,calories:s})=>{var a;const i=D(),l=x.useRef(i);return e.jsx(e.Fragment,{children:r&&e.jsx(Ce,{children:e.jsxs(V,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:`${o.breakpoint.sm}`,srcSet:F}),e.jsx("source",{media:`${o.breakpoint.md}`,srcSet:ve}),e.jsx("img",{src:F,alt:"Avocado",loading:"lazy"})]}),e.jsx(Se,{children:"Well done"}),e.jsxs(G,{children:[e.jsx(ze,{children:"Calories:"}),e.jsx(Pe,{children:s})]}),e.jsx(Fe,{type:"button",onClick:n,children:"Next product"}),e.jsxs(q,{to:((a=l.current.state)==null?void 0:a.from)??"/diary",children:["To the diary",e.jsx(H,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})})})},Oe=t.div`
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
`,Re=t.use``,Ae=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${o.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Le=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
  }
`,Ee=t.div`
  width: 287px;
  padding: 8px 14px;
  border: ${o.border.orange};
  border-radius: 12px;
  @media (min-width: ${o.breakpoint.md}) {
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
  color: ${o.color.greyFifth};
`,De=t.div`
  position: relative;
`,Me=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${o.color.greyFifth};
`,Ne=t.input`
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
`,We=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Ve=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  font-size: 12px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ge=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 309px;
  }
`,qe=t.button`
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
`,He=t.button`
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
`,Ye=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,Je=({onClose:r,title:n,calories:s,id:i})=>{const[l,a]=x.useState(""),[p,d]=x.useState("0"),[c,h]=x.useState(s),[m,w]=x.useState(!1),j=B(),$=f=>{const u=f.currentTarget.value;a(u);const E=Math.round(u*c/100);d(E)},y=async f=>{f.preventDefault();try{const u={product:i,weight:+l},g=await j(P(u));j(M()),P.fulfilled.match(g)?(a(""),w(!0)):(w(!1),d("0"),S.error("Oops, something went wrong"))}catch{w(!1),d("0"),S.error("Oops, something went wrong")}},v=()=>{r(),w(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Be,{onClick:r,children:e.jsx(Ae,{children:e.jsx(Re,{href:`${b}#x-modal`})})}),!m&&e.jsx(Oe,{children:e.jsxs("form",{onSubmit:y,children:[e.jsxs(Le,{children:[e.jsx(Ee,{children:e.jsx(Te,{children:n})}),e.jsxs(De,{children:[e.jsx(Ne,{name:"number",required:!0,value:l,onChange:$}),e.jsx(Me,{children:"grams"})]})]}),e.jsxs(We,{children:[e.jsx(Ye,{children:"Calories:"}),e.jsx(Ve,{children:p})]}),e.jsxs(Ge,{children:[e.jsx(qe,{type:"submit",children:"Add to diary"}),e.jsx(He,{type:"button",onClick:r,children:"Cancel"})]})]})}),m&&e.jsx(Ie,{calories:p,isOpen:m,onClose:()=>v()})]})},Ke=({item:{title:r,calories:n,category:s,weight:i,groupBloodNotAllowed:l,_id:a},bloodGroup:p})=>{const[d,c]=x.useState(!1),h=l[p],m=h?"Recommended":"Not recommended";return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsxs($e,{children:[e.jsx(be,{children:"Diet"}),e.jsxs(ye,{children:[e.jsxs(fe,{children:[e.jsx(we,{$isAllowed:h}),m]}),e.jsxs(je,{type:"button",onClick:()=>c(!0),children:["Add",e.jsx(ke,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})]}),e.jsx(me,{titleName:r}),e.jsxs(Y,{children:[e.jsx(C,{text:"Calories: ",val:n}),e.jsx(C,{text:"Category: ",val:s}),e.jsx(C,{text:"Weight: ",val:i})]})]}),d&&e.jsx(J,{isOpen:d,onClose:()=>c(!1),children:e.jsx(Je,{onClose:()=>c(!1),id:a,title:r,calories:n})})]})},Qe=t.div`
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
`,_e=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    row-gap: 32px;
  }
`,Ue=({items:r,bloodGroup:n})=>e.jsx(Qe,{children:e.jsx(_e,{children:r.map(s=>e.jsx("li",{children:e.jsx(Ke,{item:s,bloodGroup:n})},s._id))})}),Xe=r=>r.products.items,Ze=r=>r.products.isLoading,eo=r=>r.products.error,oo=t.section`
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
`,to=N`
  to {
    transform: rotate(360deg);
  }
`,ro=t.div`
  border: 8px solid ${o.color.grey};
  border-top-color: ${o.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${to} 1s ease-in-out infinite;
`,io=()=>e.jsx(oo,{id:"preloader",children:e.jsx(ro,{})}),no=t.div`
  max-width: 335px;
  margin: 0 auto;
  margin-top: 64px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 580px;
    margin: 0;
    margin-top: 132px;   
  }
`,so=t.p`
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
`,ao=()=>e.jsxs(no,{children:[e.jsxs(so,{children:[e.jsx(I,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(I,{children:"Try changing the search parameters."})]}),co="/ui-power-pulse/assets/side-view-products-1x-desk-5585045d.jpg",lo="/ui-power-pulse/assets/side-view-products-2x-desk-f4510abe.jpg",po=t.section`
  padding-top: 61px;
  padding-bottom: 40px;
  @media (min-width: ${o.breakpoint.md}) {
    padding-top: 84px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
    background-image: url(${co});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
       background-image: url(${lo});
       }
  }
`,xo=t.div`
  @media (min-width: ${o.breakpoint.xl}) {
    border-bottom: ${o.border.grey2};
    background-color: ${o.color.black};
    width: 100%;
    height: 84px;
  }
`,ho=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;function bo(){const r=k(Xe),n=k(Ze),s=k(eo),i=k(h=>{var m;return(m=h.profile.items.bodyData)==null?void 0:m.blood})??"1",l=B(),[a]=O(),p=x.useMemo(()=>Object.fromEntries([...a]),[a]),{category:d="",recommended:c="all"}=p;return x.useEffect(()=>{l(W(p))},[l,p]),e.jsx(e.Fragment,{children:e.jsxs(po,{children:[e.jsx(xo,{}),e.jsx("div",{className:"container",children:e.jsxs(ho,{children:[e.jsxs(Q,{children:[e.jsx(K,{children:"Products"}),e.jsx(le,{category:d,recommended:c,bloodGroup:i})]}),n&&e.jsx(io,{}),r.length>0&&e.jsx(Ue,{items:r,bloodGroup:i}),(s||r.length===0&&!n)&&e.jsx(ao,{})]})})]})})}export{bo as default};
