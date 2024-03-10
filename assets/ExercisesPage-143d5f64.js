import{a,m as b,s as i,j as e}from"./index-fbada1ca.js";function w(t){const[r,c]=a.useState([]);return a.useEffect(()=>{(async()=>{try{const n=await b.get(`http://localhost:3333/api/exercises/filters?filter=${t}`);c(n.data)}catch(n){console.error("Error fetching categories:",n)}})()},[t]),r}const v=i.div`
    @media (min-width: 768px){
        display: flex;
        align-items: baseline;
    }
`,j=i.h2`
    font-size: 24px;
    line-height: 1.16;
    width: 104px;

    @media (min-width: 768px) {
        display: flex;
        justify-content: baseline;
        width: 138px;
        line-height: 1,375;
        font-size: 32px;
        margin-bottom: 64px;
    }
`,E=i.ul`
    display: flex;
    width: 244px;
    height: 26px;
    gap: 28px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        gap: 32px;
        margin-left: auto;
        width: 279px;
        height: 32px;
        margin-bottom: 0px;
    }
`,p=i.li`
    line-height: 1,285;
    font-size: 14px;

    @media (min-width: 768px) {
        line-height: 1.5;
        height: 24px;
        font-size: 16px;
    }
`,x=i.span`
    text-decoration: none;
    position: relative;
    color: rgba(239, 237, 232, 0.4);
    &.active {
        color: #EFEDE8;
        &:after {
            content: '';
            position: absolute;
            bottom: -9px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 4px;
            background-color: #EF8964; 
            border-radius: 2px;
        }
    }
`;function C({onClick:t}){const[r,c]=a.useState("Body parts");a.useEffect(()=>{t(r)},[t,r]);const s=n=>{t(n),c(n)};return e.jsxs(v,{children:[e.jsx(j,{children:"Exercises"}),e.jsxs(E,{children:[e.jsx(p,{children:e.jsx(x,{className:r==="Body parts"?"active":"","data-target":"Body parts",onClick:()=>s("Body parts"),children:"Body parts"})}),e.jsx(p,{children:e.jsx(x,{className:r==="Muscles"?"active":"","data-target":"Muscles",onClick:()=>s("Muscles"),children:"Muscles"})}),e.jsx(p,{children:e.jsx(x,{className:r==="Equipment"?"active":"","data-target":"Equipment",onClick:()=>s("Equipment"),children:"Equipment"})})]})]})}i.div`
`;const S=i.ul`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-right: -16px;
        margin-bottom: 32px;
    }

    @media (min-width: 1440px) {
        margin-right: -16px; 
    }
`,y=i.li`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        width: calc(33.3333% - 16px);
        margin-right: 16px;

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1440px) {
        width: calc(20% - 16px); 
        &:nth-child(3n) {
            margin-right: 16px;
        }
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
`,k=i.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background-image: url(${t=>t.src});
    background-size: cover;
    background-position: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(4, 4, 4, 0.5); 
        border-radius: 12px;
        border: 2px solid rgba(239, 237, 232, 0.2);
        z-index: -1;
    }
`,z=i.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`,P=i.h3`
    font-size: 20px;
    line-height: 1.2;
    margin: 0;
    text-transform: lowercase;
    &:first-letter {
        text-transform: uppercase;
    }
    
    @media (min-width: 768px) {
        line-height: 1.33;
        font-size: 24px;
    }
`,B=i.h4`
    line-height: 1.5;
    font-size: 12px;
    margin: 2px 0 0;
    color: rgba(239, 237, 232, 0.4);
`;function L({subcategory:t}){return e.jsxs(y,{children:[e.jsx(k,{src:t.imgURL,alt:t.name}),e.jsxs(z,{children:[e.jsx(P,{children:t.name}),e.jsx(B,{children:t.filter})]})]})}const M=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: -40px;
  transform: translateX(-50%);
  @media (min-width: 768px) {
      bottom: -32px;
  }
`,N=i.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${t=>t.active?"#040404;":"rgba(239, 237, 232, 0.1)"};
  border: ${t=>t.active?"1px solid #E6533C":"none"};
  position: relative;
  cursor: pointer;
  outline: none;
  vertical-align: middle;


  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #E6533C; 
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: ${t=>t.active?"block":"none"};
  }

`,T=i.div`
    width: 100%;
`,W=i.div`
    position: relative;
`;function $({categories:t,selectedCategory:r}){const c=t.filter(o=>o.filter===r),[s,n]=a.useState(0),[d,h]=a.useState(10),u=768,g=Math.ceil(c.length/d),m=()=>{window.scrollTo({top:0,behavior:"smooth"})};a.useEffect(()=>{const o=()=>{window.innerWidth>=u&&window.innerWidth<=1439?h(9):h(10),n(0)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),a.useEffect(()=>{n(0),m()},[r]);const f=o=>{n(o),m()};return e.jsxs(W,{children:[e.jsx(S,{children:c.slice(s*d,(s+1)*d).map((o,l)=>e.jsx(L,{subcategory:o},l))}),g>1&&e.jsx(M,{children:e.jsx("div",{children:Array.from({length:g},(o,l)=>e.jsx(N,{active:l===s,onClick:()=>f(l),children:""},l))})})]})}function F(){const[t,r]=a.useState(""),c=w(t),s=n=>{r(n)};return e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs(T,{children:[e.jsx(C,{onClick:s}),e.jsx($,{categories:c,selectedCategory:t})]})})})})}export{F as default};
