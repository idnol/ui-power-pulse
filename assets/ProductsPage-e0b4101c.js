import{s as t,t as o,a as c,u as B,f as E,j as e,b as g,h as G,S as q,k as w,m as u,o as V}from"./index-d46c97fe.js";import{B as Y}from"./react-toastify.esm-fff474ed.js";import{E as H,c as K,a as y,b as _,d as J}from"./formik.esm-27906595.js";const Q=t.div`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: ${o.breakpoint.md}) {
    padding-top: 72px;
    padding-bottom: 32px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,U=t.h2`
  margin-top: 61px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${o.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,X=t.div`
 max-width: 335px;
 margin: 0 auto;
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
`,Z=t.form`
 display: flex;
 flex-direction: column;
 gap: 16px;
 @media (min-width: ${o.breakpoint.md}) {
  flex-direction: row;
  }
`,ee=t.div`
 display: flex;
 align-items: center;
 width: 100%;
 width: 335px;
 background: transparent;
 position: relative;
 @media (min-width: ${o.breakpoint.md}) {
  width: 236px;
  }
`,oe=t.input`
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
  }
`,te=t.button`
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
`,re=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${o.color.orange};
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
`,ne=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${o.color.white};
`,de=t.div`
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
`,se=t.div`
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
`,v=t.div` 
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
`,C=t.svg`
 width: 20px;
 height: 20px;
 stroke: ${o.color.white};
 position: absolute;
 top: 14px;
 right: 14px;
 z-index: 1;
`,S=t.ul`
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
  display: ${({$isopen:r})=>r?"block":"none"};
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
`,ae=t.div`
 display: flex;
 gap: 16px;
`,ce={title:"",category:"",recommended:"all"},le=({onFilterChange:r})=>{const[i,d]=c.useState(ce),[l,s]=c.useState(!1),[p,m]=c.useState(!1),x=c.useRef(null),h=c.useRef(null),[b,I]=c.useState([]),[L,f]=c.useState(null),T=["all","recommend","not recommend"],k=B();c.useEffect(()=>{async function n(){try{f(null);const a=await G();I(a)}catch{f(!0)}}n()},[]),c.useEffect(()=>{k(E(i))},[i,k]);const A=()=>{s(!l)},D=()=>{m(!p)},M=n=>{d(a=>({...a,title:n.target.value}))},N=n=>{d(a=>({...a,category:n})),s(!1)},O=n=>{d(a=>({...a,recommended:n})),m(!1)},j=n=>{x.current&&!x.current.contains(n.target)&&s(!1),h.current&&!h.current.contains(n.target)&&m(!1)};c.useEffect(()=>(document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}),[]);const $=n=>{n.preventDefault(),r(i)},W=()=>{d(n=>({...n,title:""}))};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsxs(Z,{onSubmit:$,children:[e.jsxs(ee,{children:[e.jsx(oe,{type:"text",name:"title",placeholder:"Search",value:i.title,onChange:M}),e.jsx(te,{type:"button",className:"cleanBtn",onClick:W,children:e.jsx(re,{children:e.jsx("use",{href:`${g}#x`})})}),e.jsx(ie,{type:"submit",onSubmit:$,children:e.jsx(ne,{children:e.jsx("use",{href:`${g}#search`})})})]}),e.jsxs(ae,{children:[e.jsxs(de,{children:[e.jsx(v,{onClick:A,children:i.category||"Category"}),e.jsx(C,{children:e.jsx("use",{href:`${g}#arrow-down`})}),e.jsx(S,{ref:x,$isopen:l,children:b.map((n,a)=>e.jsx(z,{onClick:()=>N(n),children:n},a))})]}),e.jsxs(se,{children:[e.jsx(v,{onClick:D,children:i.recommended||"All"}),e.jsx(C,{children:e.jsx("use",{href:`${g}#arrow-down`})}),e.jsx(S,{ref:h,$isopen:p,children:T.map((n,a)=>e.jsx(z,{onClick:()=>O(n),children:n},a))})]})]})]})}),L&&Y.error("Something went wrong! Please try again.")]})},pe=t.div`
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
`,me=({titleName:r})=>e.jsx(e.Fragment,{children:e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),e.jsx(he,{children:r})]})}),ge=r=>r.$notAllowed?o.color.red:o.color.green,ue=t.div`
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
`,ke=t.button`
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
`,ve=t.div`
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
`,Ce=t.div`
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
`,Se=({isOpen:r,onClose:i,children:d})=>{const l=s=>{s.currentTarget===s.target&&i()};return c.useEffect(()=>{const s=p=>{p.keyCode===27&&i()};return r&&document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[r]),r?e.jsx(e.Fragment,{children:r&&e.jsx(ve,{onClick:l,children:e.jsx(Ce,{children:d})})}):null},ze=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${o.breakpoint.md}) {
    flex-direction: row;
  }
`,Fe=t.input`
  width: 287px;
  padding: 8px 14px;
  border: ${o.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  color: ${o.color.white};
  &:hover {
    border: ${o.border.orange};
  }

  @media (min-width: ${o.breakpoint.md}) {
    width: 244px;
  }
`,Pe=t.div`
  position: relative;
`,Be=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${o.color.white};
  opacity: 0.4;
`,Ee=t.input`
  width: 287px;
  padding: 8px 14px;
  border: ${o.border.grey3};
  border-radius: 12px;
  background-color: transparent;
  color: ${o.color.white};
  &:hover {
    border: ${o.border.orange};
  }
  @media (min-width: ${o.breakpoint.md}) {
    width: 155px;
  }
`,Re=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Ie=t.p`
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  font-size: 12px;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Le=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${o.breakpoint.md}) {
    max-width: 309px;
  }
`,Te=t.button`
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
`,Ae=t.button`
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
`,De=t.p`
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${o.color.white};
  opacity: 0.4;
  @media (min-width: ${o.breakpoint.md}) {
    margin-bottom: 64px;
  }
`,F=t(H)``,Me=K().shape({name:y().min(3,"Too Short!").required("Required"),number:y().required("Required")}),Ne=({onClose:r})=>e.jsx(_,{initialValues:{name:"",number:""},validationSchema:Me,onSubmit:(i,d)=>{d.resetForm()},children:e.jsxs(J,{children:[e.jsxs(ze,{children:[e.jsx(Fe,{name:"name",placeholder:"Banana juice"}),e.jsx(F,{name:"name",component:"span"}),e.jsxs(Pe,{children:[e.jsx(Ee,{name:"number"}),e.jsx(Be,{children:"grams"})]}),e.jsx(F,{name:"number",component:"span"})]}),e.jsxs(Re,{children:[e.jsx(De,{children:"Calories:"}),e.jsx(Ie,{children:"96"})]}),e.jsxs(Le,{children:[e.jsx(Te,{type:"submit",children:"Add to diary"}),e.jsx(Ae,{type:"button",onClick:r,children:"Cancel"})]})]})}),Oe=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${o.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,We=t.button`
  position: absolute;

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
`,Ge=t.use`
  stroke: ${o.color.white};
  fill: transparent;
  &:hover {
    stroke: ${o.color.orangeSecond};
  }
`,qe=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${o.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Ve=({isOpen:r,onClose:i})=>e.jsx(e.Fragment,{children:e.jsxs(Se,{isOpen:r,onClose:i,children:[e.jsx(We,{onClick:i,children:e.jsx(qe,{children:e.jsx(Ge,{href:"/img/sprait.svg#x-modal"})})}),e.jsx(Oe,{children:e.jsx(Ne,{onClose:i})})]})}),Ye=({item:{title:r,calories:i,category:d,weight:l,groupBloodNotAllowed:s},bloodGroup:p})=>{const[m,x]=c.useState(!1),h=s[p],b=h?"Not recommended":"Recommended";return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{children:[e.jsxs($e,{children:[e.jsx(be,{children:"Diet"}),e.jsxs(ye,{children:[e.jsxs(fe,{children:[e.jsx(we,{$notAllowed:h}),b]}),e.jsxs(ke,{type:"button",onClick:()=>x(!0),children:["Add",e.jsx(je,{children:e.jsx("use",{href:`${g}#arrow`})})]})]})]}),e.jsx(me,{titleName:r}),e.jsxs(q,{children:[e.jsx(w,{text:"Calories: ",val:i}),e.jsx(w,{text:"Category: ",val:d}),e.jsx(w,{text:"Weight: ",val:l})]})]}),e.jsx(Ve,{isOpen:m,onClose:()=>x(!1)})]})},He=t.div`
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
`,_e=t.section`
 @media (min-width: ${o.breakpoint.xl}) {
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
`,R=r=>r.products.items,Je=r=>r.products.isLoading,Qe=r=>r.products.error,Ue=()=>{const r=u(R),i="1";return e.jsx(He,{children:e.jsx(Ke,{children:r.map(d=>e.jsx("li",{children:e.jsx(Ye,{item:d,bloodGroup:i})},d._id))})})},Xe=t.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${o.color.black};
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
`,Ze=V`
  to {
    transform: rotate(360deg);
  }
`,eo=t.div`
  border: 8px solid ${o.color.grey};
  border-top-color: ${o.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Ze} 1s ease-in-out infinite;
`,oo=()=>e.jsx(Xe,{id:"preloader",children:e.jsx(eo,{})}),to=t.div`
 max-width: 335px;
 margin: 0 auto;
 margin-top: 64px;
 @media (min-width: ${o.breakpoint.md}) {
 max-width: 580px;
 margin: 0;
 margin-top: 132px;   
 }
`,ro=t.p`
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
`,io=()=>e.jsxs(to,{children:[e.jsxs(ro,{children:[e.jsx(P,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),e.jsx(P,{children:"Try changing the search parameters."})]});function co(){const r=u(R),i=u(Je),d=u(Qe),l=B(),s=p=>{l(E(p))};return e.jsx(e.Fragment,{children:e.jsx(_e,{children:e.jsxs("div",{className:"container",children:[e.jsxs(Q,{children:[e.jsx(U,{children:"Products"}),e.jsx(le,{onFilterChange:s})]}),i&&e.jsx(oo,{}),r.length>0&&e.jsx(Ue,{}),d&&e.jsx(io,{})]})})})}export{co as default};
