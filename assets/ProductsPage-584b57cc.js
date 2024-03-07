import{s as t,t as e,r as a,u as O,k as E,j as o,a as g,m as D,L as M,o as V,e as y,p as G}from"./index-be439271.js";import{B as Y}from"./react-toastify.esm-15ad27d0.js";import{e as q,S as H,b as S}from"./BasicModalWindow-932bc188.js";const _=t.div`
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
`,J=t.h2`
  margin-top: 61px;
  @media (min-width: ${e.breakpoint.md}) {
    margin-top: 84px;
  }
  @media (min-width: ${e.breakpoint.xl}) {
    margin-top: 0;
    display: block;
  }
`,K=t.div`
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
`,U=t.div`
 display: flex;
 align-items: center;
 width: 100%;
 width: 335px;
 background: transparent;
 position: relative;
 @media (min-width: ${e.breakpoint.md}) {
  width: 236px;
  }
`,X=t.input`
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
`,Z=t.button`
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
`,ee=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.orange};
`,oe=t.button`
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
`,te=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.white};
`,ie=t.div`
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
`,re=t.div`
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
`,P=t.svg`
 width: 20px;
 height: 20px;
 stroke: ${e.color.white};
 position: absolute;
 top: 14px;
 right: 14px;
 z-index: 1;
`,R=t.ul`
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
`,L=t.li`
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
`,ne=t.div`
 display: flex;
 gap: 16px;
`,ae={title:"",category:"",recommended:"all"},se=({onFilterChange:i})=>{const[n,s]=a.useState(ae),[l,p]=a.useState(!1),[d,x]=a.useState(!1),h=a.useRef(null),m=a.useRef(null),[u,k]=a.useState([]),[w,f]=a.useState(null),v=["all","recommend","not recommend"],j=O();a.useEffect(()=>{async function r(){try{f(null);const c=await D();k(c)}catch{f(!0)}}r()},[]),a.useEffect(()=>{j(E(n))},[n,j]);const $=()=>{p(!l)},b=()=>{x(!d)},z=r=>{s(c=>({...c,title:r.target.value}))},C=r=>{s(c=>({...c,category:r})),p(!1)},N=r=>{s(c=>({...c,recommended:r})),x(!1)},F=r=>{h.current&&!h.current.contains(r.target)&&p(!1),m.current&&!m.current.contains(r.target)&&x(!1)};a.useEffect(()=>(document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}),[]);const I=r=>{r.preventDefault(),i(n)},W=()=>{s(r=>({...r,title:""}))};return o.jsxs(o.Fragment,{children:[o.jsx(K,{children:o.jsxs(Q,{onSubmit:I,children:[o.jsxs(U,{children:[o.jsx(X,{type:"text",name:"title",placeholder:"Search",value:n.title,onChange:z}),o.jsx(Z,{type:"button",className:"cleanBtn",onClick:W,children:o.jsx(ee,{children:o.jsx("use",{href:`${g}#x`})})}),o.jsx(oe,{type:"submit",onSubmit:I,children:o.jsx(te,{children:o.jsx("use",{href:`${g}#search`})})})]}),o.jsxs(ne,{children:[o.jsxs(ie,{children:[o.jsx(B,{onClick:$,children:n.category||"Category"}),o.jsx(P,{children:o.jsx("use",{href:`${g}#arrow-down`})}),o.jsx(R,{ref:h,$isopen:l,children:u.map((r,c)=>o.jsx(L,{onClick:()=>C(r),children:r},c))})]}),o.jsxs(re,{children:[o.jsx(B,{onClick:b,children:n.recommended||"All"}),o.jsx(P,{children:o.jsx("use",{href:`${g}#arrow-down`})}),o.jsx(R,{ref:m,$isopen:d,children:v.map((r,c)=>o.jsx(L,{onClick:()=>N(r),children:r},c))})]})]})]})}),w&&Y.error("Something went wrong! Please try again.")]})},de=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,ce=t.svg`
  width: 24px;
  height: 24px;
`,pe=t.p`
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
`,le=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(de,{children:[o.jsx(ce,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(pe,{children:i})]})}),xe=i=>i.$notAllowed?e.color.red:e.color.green,he=t.div`
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
`,be=t.button`
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
`,we=t.svg`
width: 18px;
height: 18px;
stroke: ${e.color.orange};
`,fe=t.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 35px;
 @media (min-width: ${e.breakpoint.md}) {
  margin-bottom: 27px;
  }
`,$e=t.div`
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
`;const ke=t.div`
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
`;const je=t.div`
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
`,ve=t(M)`
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
`,Se=t.h3`
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
`,Fe=t.p`
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
`,Be=({isOpen:i,onClose:n,calories:s})=>{var d;const l=V(),p=a.useRef(l);return o.jsx(o.Fragment,{children:i&&o.jsx(Ce,{children:o.jsxs(ke,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcset:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcset:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Se,{children:"Well done"}),o.jsxs(je,{children:[o.jsx(ze,{children:"Calories:"}),o.jsx(Fe,{children:s})]}),o.jsx(Ie,{type:"button",onClick:n,children:"Next product"}),o.jsxs(ve,{to:((d=p.current.state)==null?void 0:d.from)??"/diary",children:["To the diary",o.jsx(ye,{children:o.jsx("use",{href:`${g}#arrow`})})]})]})})})},Pe=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Re=t.button`
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
`,Le=t.use``,Ae=t.svg`
  width: 22px;
  height: 22px;

  @media (min-width: ${e.breakpoint.md}) {
    width: 26px;
    height: 26px;
  }
`,Oe=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${e.breakpoint.md}) {
    flex-direction: row;
  }
`,Ee=t.div`
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
`,Ne=t.div`
  position: relative;
`,We=t.p`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 12px;
  color: ${e.color.greyFifth};
`,De=t.input`
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
`,Me=t.div`
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
`,Ge=t.div`
  max-width: 286px;
  display: flex;
  gap: 14px;
  max-height: 42px;
  @media (min-width: ${e.breakpoint.md}) {
    max-width: 309px;
  }
`,Ye=t.button`
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
`,qe=t.button`
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
`,_e=({isOpen:i,onClose:n,title:s,calories:l,id:p})=>{const[d,x]=a.useState(""),[h,m]=a.useState("0"),[u,k]=a.useState(l),[w,f]=a.useState(!1),v=$=>{const b=$.currentTarget.value;x(b);const C=Math.round(b*u/100);m(C)},j=$=>{$.preventDefault(),f(!0);const b={exercise:p,grams:+d};console.log(b),x("")};return o.jsxs(q,{isOpen:i,onClose:n,children:[o.jsx(Re,{onClick:n,children:o.jsx(Ae,{children:o.jsx(Le,{href:`${g}#x-modal`})})}),!w&&o.jsx(Pe,{children:o.jsxs("form",{onSubmit:j,children:[o.jsxs(Oe,{children:[o.jsx(Ee,{children:o.jsx(Te,{children:s})}),o.jsxs(Ne,{children:[o.jsx(De,{name:"number",required:!0,value:d,onChange:v}),o.jsx(We,{children:"grams"})]})]}),o.jsxs(Me,{children:[o.jsx(He,{children:"Calories:"}),o.jsx(Ve,{children:h})]}),o.jsxs(Ge,{children:[o.jsx(Ye,{type:"submit",children:"Add to diary"}),o.jsx(qe,{type:"button",onClick:n,children:"Cancel"})]})]})}),w&&o.jsx(Be,{calories:h,isOpen:w,onClose:()=>f(!1)})]})},Je=({item:{title:i,calories:n,category:s,weight:l,groupBloodNotAllowed:p,_id:d},bloodGroup:x})=>{const[h,m]=a.useState(!1),u=p[x],k=u?"Not recommended":"Recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(he,{children:[o.jsxs(fe,{children:[o.jsx(me,{children:"Diet"}),o.jsxs($e,{children:[o.jsxs(ue,{children:[o.jsx(ge,{$notAllowed:u}),k]}),o.jsxs(be,{type:"button",onClick:()=>m(!0),children:["Add",o.jsx(we,{children:o.jsx("use",{href:`${g}#arrow`})})]})]})]}),o.jsx(le,{titleName:i}),o.jsxs(H,{children:[o.jsx(S,{text:"Calories: ",val:n}),o.jsx(S,{text:"Category: ",val:s}),o.jsx(S,{text:"Weight: ",val:l})]})]}),o.jsx(_e,{isOpen:h,id:d,title:i,calories:n,onClose:()=>m(!1)})]})},Ke=t.div`
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
`,Qe=t.ul`
 display: flex;
 flex-direction: column;
 gap: 20px;
 @media (min-width: ${e.breakpoint.md}) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 32px;
  }
`,Ue=t.section`
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
`,T=i=>i.products.items,Xe=i=>i.products.isLoading,Ze=i=>i.products.error,eo=()=>{const i=y(T),n="1";return o.jsx(Ke,{children:o.jsx(Qe,{children:i.map(s=>o.jsx("li",{children:o.jsx(Je,{item:s,bloodGroup:n})},s._id))})})},oo=t.section`
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
`,to=G`
  to {
    transform: rotate(360deg);
  }
`,io=t.div`
  border: 8px solid ${e.color.grey};
  border-top-color: ${e.color.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${to} 1s ease-in-out infinite;
`,ro=()=>o.jsx(oo,{id:"preloader",children:o.jsx(io,{})}),no=t.div`
 max-width: 335px;
 margin: 0 auto;
 margin-top: 64px;
 @media (min-width: ${e.breakpoint.md}) {
 max-width: 580px;
 margin: 0;
 margin-top: 132px;   
 }
`,ao=t.p`
font-size: 14px;
line-height: 1.29;
color: ${e.color.grey};
margin-bottom: 16px;
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,A=t.span`
font-size: 14px;
line-height: 1.29;
color: ${e.color.orange};
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,so=()=>o.jsxs(no,{children:[o.jsxs(ao,{children:[o.jsx(A,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(A,{children:"Try changing the search parameters."})]});function xo(){const i=y(T),n=y(Xe),s=y(Ze),l=O(),p=d=>{l(E(d))};return o.jsx(o.Fragment,{children:o.jsx(Ue,{children:o.jsxs("div",{className:"container",children:[o.jsxs(_,{children:[o.jsx(J,{children:"Products"}),o.jsx(se,{onFilterChange:p})]}),n&&o.jsx(ro,{}),i.length>0&&o.jsx(eo,{}),s&&o.jsx(so,{})]})})})}export{xo as default};
