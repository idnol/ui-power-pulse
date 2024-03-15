import{s as t,t as o,j as e,a as b,b as h,M as E,g as S,O,H as D,u as B,P,y as T,Q as M,d as j,S as N}from"./index-740190a3.js";import{S as W,C as V,e as G,f as q,i as H,j as C,n as Q}from"./AddExerciseSuccess.styled-55ac01b4.js";import{T as Y}from"./TitlePage-55ab706c.js";const _=t.div`
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
`,J=t.div`
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
`,K=t.div`
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
`,ie=({onChange:r,inputValue:a,onCleanForm:d,onSubmit:i})=>e.jsx("form",{onSubmit:i,children:e.jsxs(X,{children:[e.jsx(Z,{type:"text",name:"query",placeholder:"Search",value:a,onChange:r}),e.jsx(ee,{type:"button",className:"cleanBtn",onClick:d,children:e.jsx(oe,{children:e.jsx("use",{href:`${b}#x`})})}),e.jsx(te,{type:"submit",children:e.jsx(re,{children:e.jsx("use",{href:`${b}#search`})})})]})}),ne=t.div`
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
`,se=({label:r,onSelect:a,onToggle:d,isOpen:i})=>{const[l,c]=h.useState([]),p=h.useRef(null);h.useEffect(()=>{async function s(){try{const x=await E();c(x)}catch{return S.error("Something went wrong! Please try again!")}}s()},[]);const n=s=>{p.current&&!p.current.contains(s.target)&&d()};return h.useEffect(()=>(document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)})),e.jsx(e.Fragment,{children:e.jsxs(ne,{children:[e.jsx(R,{onClick:d,children:r}),e.jsx(A,{children:e.jsx("use",{href:`${b}#arrow-down`})}),i&&e.jsxs(L,{ref:p,children:[e.jsx(z,{onClick:()=>a(""),children:"All"}),l.map((s,x)=>e.jsx(z,{onClick:()=>a(s),children:s},x))]})]})})},ae=t.div`
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
`,de=({label:r,isOpen:a,onToggle:d,onSelect:i})=>{const l=["All","recommended","not recommended"],c=h.useRef(null),p=n=>{c.current&&!c.current.contains(n.target)&&d()};return h.useEffect(()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),e.jsxs(ae,{children:[e.jsx(R,{onClick:d,children:r}),e.jsx(A,{children:e.jsx("use",{href:`${b}#arrow-down`})}),a&&e.jsx(L,{ref:c,children:l.map((n,s)=>e.jsx(z,{onClick:()=>i(n),children:n},s))})]})},ce=({category:r,recommended:a,bloodGroup:d})=>{const[i,l]=O(),[c,p]=h.useState(!1),[n,s]=h.useState(!1),[x,m]=h.useState(""),g=u=>{m(u.target.value)},$=()=>{p(!c)},y=()=>{s(!n)},f=u=>{i.set("category",u),l(i),p(!1)},w=u=>{i.set("recommended",u),i.set("blood",d),l(i),s(!1)},k=u=>{u.preventDefault(),i.set("query",u.target[0].value),l(i)},v=()=>{i.set("query",""),l(i),m("")};return e.jsx(e.Fragment,{children:e.jsx(J,{children:e.jsxs(K,{children:[e.jsx(ie,{inputValue:x,onChange:g,onSubmit:k,onCleanForm:v}),e.jsxs(U,{children:[e.jsx(se,{label:r||"Category",isOpen:c,onToggle:$,onSelect:f}),e.jsx(de,{label:a||"All",isOpen:n,onToggle:y,onSelect:w})]})]})})})},le=t.div`
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
  line-height: 1.2;
  max-width: 240px;
  @media (min-width: ${o.breakpoint.md}) {
   font-size: 24px;
   line-height: 32px;
  }
`,he=({titleName:r})=>e.jsx(e.Fragment,{children:e.jsxs(le,{children:[e.jsx(pe,{children:e.jsx("use",{href:`${b}#run-man-circle`})}),e.jsx(xe,{children:r})]})}),me=r=>r.$isAllowed?o.color.green:o.color.red,ge=t.div`
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
`,je=t.svg`
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
`,$e=t.div`
  display: flex;
  gap: 16px;
`,F="/ui-power-pulse/assets/avocado-1x-5dd1adfd.png",ye="/ui-power-pulse/assets/avocado-2x-f57ad951.png",ve=t.div`
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
`,Pe=t.button`
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
`,Fe=({isOpen:r,onClose:a,calories:d})=>{var c;const i=D(),l=h.useRef(i);return e.jsx(e.Fragment,{children:r&&e.jsx(ve,{children:e.jsxs(W,{children:[e.jsxs("picture",{children:[e.jsx("source",{media:`${o.breakpoint.sm}`,srcSet:F}),e.jsx("source",{media:`${o.breakpoint.md}`,srcSet:ye}),e.jsx("img",{src:F,alt:"Avocado",loading:"lazy"})]}),e.jsx(Ce,{children:"Well done"}),e.jsxs(V,{children:[e.jsx(Se,{children:"Calories:"}),e.jsx(ze,{children:d})]}),e.jsx(Pe,{type:"button",onClick:a,children:"Next product"}),e.jsxs(G,{to:((c=l.current.state)==null?void 0:c.from)??"/diary",children:["To the diary",e.jsx(q,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})})})},Ie=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Oe=t.button`
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
`,Be=t.use``,Re=t.svg`
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
`,De=t.div`
  position: relative;
`,Te=t.p`
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
`,Qe=({onClose:r,title:a,calories:d,id:i})=>{const[l,c]=h.useState(""),[p,n]=h.useState("0"),[s,x]=h.useState(!1),m=B(),g=f=>{const w=f.currentTarget.value;c(w);const v=Math.round(w*d/100);n(v)},$=async f=>{f.preventDefault();try{const w={product:i,weight:+l},k=await m(P(w));m(T()),P.fulfilled.match(k)?(c(""),x(!0)):(x(!1),n("0"),S.error("Oops, something went wrong"))}catch{x(!1),n("0"),S.error("Oops, something went wrong")}},y=()=>{r(),x(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(Oe,{onClick:r,children:e.jsx(Re,{children:e.jsx(Be,{href:`${b}#x-modal`})})}),!s&&e.jsx(Ie,{children:e.jsxs("form",{onSubmit:$,children:[e.jsxs(Ae,{children:[e.jsx(Le,{children:e.jsx(Ee,{children:a})}),e.jsxs(De,{children:[e.jsx(Me,{name:"number",required:!0,value:l,onChange:g}),e.jsx(Te,{children:"grams"})]})]}),e.jsxs(Ne,{children:[e.jsx(He,{children:"Calories:"}),e.jsx(We,{children:p})]}),e.jsxs(Ve,{children:[e.jsx(Ge,{type:"submit",children:"Add to diary"}),e.jsx(qe,{type:"button",onClick:r,children:"Cancel"})]})]})}),s&&e.jsx(Fe,{calories:p,isOpen:s,onClose:()=>y()})]})},Ye=({item:{title:r,calories:a,category:d,weight:i,groupBloodNotAllowed:l,_id:c},bloodGroup:p})=>{const[n,s]=h.useState(!1),x=l[p],m=x?"Recommended":"Not recommended";return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsxs(ke,{children:[e.jsx(ue,{children:"Diet"}),e.jsxs($e,{children:[e.jsxs(we,{children:[e.jsx(be,{$isAllowed:x}),m]}),e.jsxs(fe,{type:"button",onClick:()=>s(!0),children:["Add",e.jsx(je,{children:e.jsx("use",{href:`${b}#arrow`})})]})]})]}),e.jsx(he,{titleName:r}),e.jsxs(H,{children:[e.jsx(C,{text:"Calories: ",val:a}),e.jsx(C,{text:"Category: ",val:d}),e.jsx(C,{text:"Weight: ",val:i})]})]}),n&&e.jsx(Q,{isOpen:n,onClose:()=>s(!1),children:e.jsx(Qe,{onClose:()=>s(!1),id:c,title:r,calories:a})})]})},_e=t.div`
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
`,Ke=({items:r,bloodGroup:a})=>e.jsx(_e,{children:e.jsx(Je,{children:r.map(d=>e.jsx("li",{children:e.jsx(Ye,{item:d,bloodGroup:a})},d._id))})}),Ue=r=>r.products.items,Xe=r=>r.products.isLoading,Ze=r=>r.products.error,eo=t.section`
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
`,oo=M`
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
`,ro=()=>e.jsx(eo,{id:"preloader",children:e.jsx(to,{})}),io=t.div`
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
`,so=()=>e.jsxs(io,{children:[e.jsxs(no,{children:[e.jsx(I,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(I,{children:"Try changing the search parameters."})]}),ao="/ui-power-pulse/assets/side-view-products-1x-desk-5585045d.jpg",co="/ui-power-pulse/assets/side-view-products-2x-desk-f4510abe.jpg",lo=t.section`
  padding-top: 61px;
  padding-bottom: 40px;
  @media (min-width: ${o.breakpoint.md}) {
    padding-top: 84px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    height: 100vh;
    width: 100%;
    padding-top: 0;
    background-image: url(${ao});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
       background-image: url(${co});
       }
  }
`,po=t.div`
  @media (min-width: ${o.breakpoint.xl}) {
    background-color: ${o.color.black};
    width: 100%;
    height: 84px;
  }
`,xo=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;function uo(){const r=j(Ue),a=j(Xe),d=j(Ze),i=j(m=>{var g;return(g=m.auth.user.bodyData)==null?void 0:g.blood}),l=j(m=>{var g;return(g=m.profile.items.bodyData)==null?void 0:g.blood})??i??"1",c=B(),[p]=O(),n=h.useMemo(()=>Object.fromEntries([...p]),[p]),{category:s="",recommended:x="all"}=n;return h.useEffect(()=>{c(N(n))},[c,n]),e.jsx(e.Fragment,{children:e.jsxs(lo,{children:[e.jsx(po,{}),e.jsx("div",{className:"container",children:e.jsxs(xo,{children:[e.jsxs(_,{children:[e.jsx(Y,{children:"Products"}),e.jsx(ce,{category:s,recommended:x,bloodGroup:l})]}),a&&e.jsx(ro,{}),r.length>0&&e.jsx(Ke,{items:r,bloodGroup:l}),(d||r.length===0&&!a)&&e.jsx(so,{})]})})]})})}export{uo as default};
