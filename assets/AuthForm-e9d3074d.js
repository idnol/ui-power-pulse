import{s as t,t as e,n as m,L as g,r as b,j as o}from"./index-907ecb0a.js";import{F as u,E as w,b as f,d as y}from"./formik.esm-5f11b3cd.js";const S=t.h2`
    line-height: 1.17;
    @media (min-width: ${e.breakpoint.md}) {
        font-size: 32px;
        line-height: 1.38;
    }
`,$=t.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${e.color.grey};
    @media (min-width: ${e.breakpoint.md}) {
        font-size: 16px;
        line-height: 1.5;
    }
`,P=t.div`
    margin-top: 127px;
    max-width: 335px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${e.breakpoint.md}) {
        max-width: 496px;
        margin-left: 0px;
    }
`,I=t(S)`
    margin-bottom: 14px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 16px;
    }
`,L=t($)`
    margin-bottom: 28px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 32px;
    }
`,p=t(u)`
    display: block;
    width: 100%;
    height: 46px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    border-radius: 12px;
    border: ${e.border.grey3};
    background-color: transparent;
    color: ${e.color.white};
    &:hover{
        border: ${e.border.orange};
    };
    ${({error:n,touched:a})=>a==="true"&&n==="true"&&m`
        border-color: red;
    `}
    ${({error:n,touched:a,name:r})=>a==="true"&&n==="false"&&(r==="email"||r==="password"||r==="name")&&m`
        border-color: green;
    `}
    @media (min-width: ${e.breakpoint.md}) {
        width: 364px;
        height: 52px;
        font-size: 16px;
        line-height: 1.5;
    }
`,l=t(w)`
    color: ${e.color.red};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.12px;
    margin: 4px;
`,k=t.button`
    height: 42px;
    margin-top: 40px;
    padding: 12px 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    border-radius: 12px;
    border: none;
    background-color: ${e.color.orange};
    color: ${e.color.white};
    &:hover{
        background-color: ${e.color.orangeSecond};
    };
    @media (min-width: ${e.breakpoint.md}) {
        height: 56px;
        margin-top: 64px;
        padding: 16px 60px;
        font-size: 20px;
        line-height: 1.2;
    }
`,T=t.p`
    color: ${e.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${e.color.greySecond};
    @media (min-width: ${e.breakpoint.md}) {
        padding-left: 8px;
    }
`,A=t(g)`
    color: ${e.color.white};
    text-decoration: underline;
`,j=t.button`
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
`,v=t.div`
    position: relative;
    display: inline-block;
`,z=t.div`
    display: flex;
    flex-direction:column;
    gap: 18px;
    @media (min-width: ${e.breakpoint.md}) {
        width: max-content;
    }
`,B=({schema:n,handleSubmit:a,register:r})=>{const[d,h]=b.useState(!1),c=()=>d?"text":"password",x=r?{email:"",password:"",name:""}:{email:"",password:""};return o.jsx(f,{initialValues:x,validationSchema:n,onSubmit:s=>{a(s)},children:({errors:s,touched:i})=>o.jsxs(y,{autoComplete:"off",children:[o.jsxs(z,{children:[r&&o.jsxs(o.Fragment,{children:[o.jsx(p,{type:"text",name:"name",placeholder:"Name",error:s.name&&i.name?"true":"false",touched:i.name?"true":"false"}),o.jsx(l,{name:"name",component:"p"})]}),o.jsx(p,{type:"email",name:"email",placeholder:"Email",error:s.email&&i.email?"true":"false",touched:i.email?"true":"false"}),o.jsx(l,{name:"email",component:"p"}),o.jsxs(v,{children:[o.jsx(p,{name:"password",type:c(),placeholder:"Password",error:s.password&&i.password?"true":"false",touched:i.password?"true":"false"}),o.jsx(j,{type:"button",onClick:()=>h(!d),children:o.jsx("svg",{width:"20",height:"20",stroke:"#efede8",viewBox:"0 0 20 20",children:d?o.jsx("use",{href:"/img/sprait.svg#eye-off"}):o.jsx("use",{href:"/img/sprait.svg#eye"})})})]}),o.jsx(l,{name:"password",component:"p"})]}),o.jsx(k,{type:"submit",children:"Sign Up"})]})})};export{B as A,P as S,I as a,L as b,T as c,A as d};
