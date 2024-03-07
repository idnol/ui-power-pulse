import{s as t,t as e,r as s,u as A,f as T,j as o,a as g,h as W,L as M,k as V,S as G,m as S,o as j,p as Y}from"./index-854ce60b.js";import{B as q}from"./react-toastify.esm-23a682fb.js";const H=t.div`
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
`,Q=t.div`
 display: flex;
 align-items: center;
 width: 100%;
 width: 335px;
 background: transparent;
 position: relative;
 @media (min-width: ${e.breakpoint.md}) {
  width: 236px;
  }
`,U=t.input`
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
`,X=t.button`
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
`,Z=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.orange};
`,ee=t.button`
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
`,oe=t.svg`
 width: 18px;
 height: 18px;
 stroke: ${e.color.white};
`,te=t.div`
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
`,ie=t.div`
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
`,I=t.div` 
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
`,R=t.li`
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
`,re=t.div`
 display: flex;
 gap: 16px;
`,ne={title:"",category:"",recommended:"all"},de=({onFilterChange:i})=>{const[r,d]=s.useState(ne),[p,a]=s.useState(!1),[c,x]=s.useState(!1),h=s.useRef(null),m=s.useRef(null),[u,$]=s.useState([]),[w,f]=s.useState(null),v=["all","recommend","not recommend"],y=A();s.useEffect(()=>{async function n(){try{f(null);const l=await W();$(l)}catch{f(!0)}}n()},[]),s.useEffect(()=>{y(T(r))},[r,y]);const k=()=>{a(!p)},b=()=>{x(!c)},z=n=>{d(l=>({...l,title:n.target.value}))},C=n=>{d(l=>({...l,category:n})),a(!1)},N=n=>{d(l=>({...l,recommended:n})),x(!1)},F=n=>{h.current&&!h.current.contains(n.target)&&a(!1),m.current&&!m.current.contains(n.target)&&x(!1)};s.useEffect(()=>(document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}),[]);const B=n=>{n.preventDefault(),i(r)},O=()=>{d(n=>({...n,title:""}))};return o.jsxs(o.Fragment,{children:[o.jsx(_,{children:o.jsxs(J,{onSubmit:B,children:[o.jsxs(Q,{children:[o.jsx(U,{type:"text",name:"title",placeholder:"Search",value:r.title,onChange:z}),o.jsx(X,{type:"button",className:"cleanBtn",onClick:O,children:o.jsx(Z,{children:o.jsx("use",{href:`${g}#x`})})}),o.jsx(ee,{type:"submit",onSubmit:B,children:o.jsx(oe,{children:o.jsx("use",{href:`${g}#search`})})})]}),o.jsxs(re,{children:[o.jsxs(te,{children:[o.jsx(I,{onClick:k,children:r.category||"Category"}),o.jsx(P,{children:o.jsx("use",{href:`${g}#arrow-down`})}),o.jsx(L,{ref:h,$isopen:p,children:u.map((n,l)=>o.jsx(R,{onClick:()=>C(n),children:n},l))})]}),o.jsxs(ie,{children:[o.jsx(I,{onClick:b,children:r.recommended||"All"}),o.jsx(P,{children:o.jsx("use",{href:`${g}#arrow-down`})}),o.jsx(L,{ref:m,$isopen:c,children:v.map((n,l)=>o.jsx(R,{onClick:()=>N(n),children:n},l))})]})]})]})}),w&&q.error("Something went wrong! Please try again.")]})},ae=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,se=t.svg`
  width: 24px;
  height: 24px;
`,ce=t.p`
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
`,pe=({titleName:i})=>o.jsx(o.Fragment,{children:o.jsxs(ae,{children:[o.jsx(se,{children:o.jsx("use",{href:"../../../public/img/sprait.svg#run-man-circle"})}),o.jsx(ce,{children:i})]})}),le=i=>i.$notAllowed?e.color.red:e.color.green,xe=t.div`
 border: ${e.border.grey3};
 border-radius: 12px;
 padding: 16px;
 width: 335px;
 height: 141px;
 background-color: ${e.color.greyTr};
 @media (min-width: ${e.breakpoint.xl}) {
  width: 405px;
  }
`,he=t.div`
 border-radius: 4px;
 padding: 5px 7px;
 width: 41px;
 height: 24px;
 background: ${e.color.greyTr};
 font-weight: 700;
 font-size: 12px;
 color: #fff;
 text-transform: uppercase;
`,me=t.span`
 display: block;
 width: 14px;
 height: 14px;
 border-radius: 50%;
 background-color: ${le};
`,ge=t.p`
 font-size: 12px;
 line-height: 1.5;
 color: ${e.color.white};
 display: flex;
 gap: 8px;
 align-items: center;
 margin: 0;
`,ue=t.button`
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
`,fe=t.div`
 display: flex;
 gap: 16px;
`,ke=t.div`
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
 
  
`,$e=t.div`
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
  
`,ye=({isOpen:i,onClose:r,children:d})=>{const p=a=>{a.currentTarget===a.target&&r()};return s.useEffect(()=>{const a=c=>{c.keyCode===27&&r()};return i&&(document.addEventListener("keydown",a),document.body.classList.add("disable-scroll")),()=>{document.removeEventListener("keydown",a),document.body.classList.remove("disable-scroll")}},[i,r]),i?o.jsx(o.Fragment,{children:i&&o.jsx(ke,{onClick:p,children:o.jsx($e,{children:d})})}):null};t.div`
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
`;const je=t.div`
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
`,Be=t.p`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${e.color.white};
  opacity: 0.4;
  @media (min-width: ${e.breakpoint.md}) {
    margin-bottom: 32px;
  }
`,Ie=t.p`
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
`,Le=({isOpen:i,onClose:r,calories:d})=>{var c;const p=V(),a=s.useRef(p);return o.jsx(o.Fragment,{children:i&&o.jsx(ze,{children:o.jsxs(je,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:`${e.breakpoint.sm}`,srcset:"/img/avocado-1x.png"}),o.jsx("source",{media:`${e.breakpoint.md}`,srcset:"/img/avocado-2x.png"}),o.jsx("img",{src:"/img/avocado-1x.png",alt:"Avocado",loading:"lazy"})]}),o.jsx(Fe,{children:"Well done"}),o.jsxs(ve,{children:[o.jsx(Be,{children:"Calories:"}),o.jsx(Ie,{children:d})]}),o.jsx(Pe,{type:"button",onClick:r,children:"Next product"}),o.jsxs(Se,{to:((c=a.current.state)==null?void 0:c.from)??"/diary",children:["To the diary",o.jsx(Ce,{children:o.jsx("use",{href:`${g}#arrow`})})]})]})})})},Re=t.div`
  padding: 48px 24px;
  max-width: 335px;

  @media (min-width: ${e.breakpoint.md}) {
    padding: 48px 32px;
    max-width: 479px;
  }
`,Ee=t.button`
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
`,De=t.div`
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
`,Oe=t.p`
  font-feature-settings:
    'clig' off,
    'liga' off;
  overflow: hidden;
  white-space: nowrap;
  font-size: 16px;
  text-overflow: ellipsis;
  color: ${e.color.greyFifth};
`,We=t.div`
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
`,Ge=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,Ye=t.p`
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
`,Ke=t.button`
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
`,Je=({isOpen:i,onClose:r,title:d,calories:p,id:a})=>{const[c,x]=s.useState(""),[h,m]=s.useState("0"),[u,$]=s.useState(p),[w,f]=s.useState(!1),v=k=>{const b=k.currentTarget.value;x(b);const C=Math.round(b*u/100);m(C)},y=k=>{k.preventDefault(),f(!0);const b={exercise:a,grams:+c};console.log(b),x("")};return o.jsxs(ye,{isOpen:i,onClose:r,children:[o.jsx(Ee,{onClick:r,children:o.jsx(Te,{children:o.jsx(Ae,{href:`${g}#x-modal`})})}),!w&&o.jsx(Re,{children:o.jsxs("form",{onSubmit:y,children:[o.jsxs(De,{children:[o.jsx(Ne,{children:o.jsx(Oe,{children:d})}),o.jsxs(We,{children:[o.jsx(Ve,{name:"number",required:!0,value:c,onChange:v}),o.jsx(Me,{children:"grams"})]})]}),o.jsxs(Ge,{children:[o.jsx(_e,{children:"Calories:"}),o.jsx(Ye,{children:h})]}),o.jsxs(qe,{children:[o.jsx(He,{type:"submit",children:"Add to diary"}),o.jsx(Ke,{type:"button",onClick:r,children:"Cancel"})]})]})}),w&&o.jsx(Le,{calories:h,isOpen:w,onClose:()=>f(!1)})]})},Qe=({item:{title:i,calories:r,category:d,weight:p,groupBloodNotAllowed:a,_id:c},bloodGroup:x})=>{const[h,m]=s.useState(!1),u=a[x],$=u?"Not recommended":"Recommended";return o.jsxs(o.Fragment,{children:[o.jsxs(xe,{children:[o.jsxs(we,{children:[o.jsx(he,{children:"Diet"}),o.jsxs(fe,{children:[o.jsxs(ge,{children:[o.jsx(me,{$notAllowed:u}),$]}),o.jsxs(ue,{type:"button",onClick:()=>m(!0),children:["Add",o.jsx(be,{children:o.jsx("use",{href:`${g}#arrow`})})]})]})]}),o.jsx(pe,{titleName:i}),o.jsxs(G,{children:[o.jsx(S,{text:"Calories: ",val:r}),o.jsx(S,{text:"Category: ",val:d}),o.jsx(S,{text:"Weight: ",val:p})]})]}),o.jsx(Je,{isOpen:h,id:c,title:i,calories:r,onClose:()=>m(!1)})]})},Ue=t.div`
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
`,D=i=>i.products.items,eo=i=>i.products.isLoading,oo=i=>i.products.error,to=()=>{const i=j(D),r="1";return o.jsx(Ue,{children:o.jsx(Xe,{children:i.map(d=>o.jsx("li",{children:o.jsx(Qe,{item:d,bloodGroup:r})},d._id))})})},io=t.section`
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
`,ro=Y`
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
`,ao=()=>o.jsx(io,{id:"preloader",children:o.jsx(no,{})}),so=t.div`
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
`,E=t.span`
font-size: 14px;
line-height: 1.29;
color: ${e.color.orange};
@media (min-width: ${e.breakpoint.md}) {
 font-size: 16px;
 line-height: 1.5;    
 }
`,po=()=>o.jsxs(so,{children:[o.jsxs(co,{children:[o.jsx(E,{children:" Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(E,{children:"Try changing the search parameters."})]});function ho(){const i=j(D),r=j(eo),d=j(oo),p=A(),a=c=>{p(T(c))};return o.jsx(o.Fragment,{children:o.jsx(Ze,{children:o.jsxs("div",{className:"container",children:[o.jsxs(H,{children:[o.jsx(K,{children:"Products"}),o.jsx(de,{onFilterChange:a})]}),r&&o.jsx(ao,{}),i.length>0&&o.jsx(to,{}),d&&o.jsx(po,{})]})})})}export{ho as default};
