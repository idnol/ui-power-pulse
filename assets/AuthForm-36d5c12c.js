import{s as t,t as e,n as m,L as b,r as u,j as o}from"./index-06cbc35e.js";import{F as w,E as f,b as y,d as $}from"./formik.esm-a656bdb2.js";const S=t.h2`
    line-height: 1.17;
    @media (min-width: ${e.breakpoint.md}) {
        font-size: 32px;
        line-height: 1.38;
    }
`,k=t.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${e.color.grey};
    @media (min-width: ${e.breakpoint.md}) {
        font-size: 16px;
        line-height: 1.5;
    }
`,I=t.div`
    margin-top: 127px;
    max-width: 335px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${e.breakpoint.md}) {
        max-width: 496px;
        margin-left: 0px;
    }
`,L=t(S)`
    margin-bottom: 14px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 16px;
    }
`,T=t(k)`
    margin-bottom: 28px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 32px;
    }
`,p=t(w)`
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
`,l=t(f)`
    color: ${e.color.red};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.12px;
    margin: 4px;
`,j=t.button`
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
`,A=t.p`
    color: ${e.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${e.color.greySecond};
    @media (min-width: ${e.breakpoint.md}) {
        padding-left: 8px;
    }
`,B=t(b)`
    color: ${e.color.white};
    text-decoration: underline;
`,v=t.button`
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
`,z=t.div`
    position: relative;
    display: inline-block;
`,E=t.div`
    display: flex;
    flex-direction:column;
    gap: 18px;
    @media (min-width: ${e.breakpoint.md}) {
        width: max-content;
    }
`,h="/ui-power-pulse/assets/sprite-2-bd01abe3.svg",C=({schema:n,handleSubmit:a,register:r})=>{const[d,c]=u.useState(!1),x=()=>d?"text":"password",g=r?{email:"",password:"",name:""}:{email:"",password:""};return o.jsx(y,{initialValues:g,validationSchema:n,onSubmit:s=>{a(s)},children:({errors:s,touched:i})=>o.jsxs($,{autoComplete:"off",children:[o.jsxs(E,{children:[r&&o.jsxs(o.Fragment,{children:[o.jsx(p,{type:"text",name:"name",placeholder:"Name",error:s.name&&i.name?"true":"false",touched:i.name?"true":"false"}),o.jsx(l,{name:"name",component:"p"})]}),o.jsx(p,{type:"email",name:"email",placeholder:"Email",error:s.email&&i.email?"true":"false",touched:i.email?"true":"false"}),o.jsx(l,{name:"email",component:"p"}),o.jsxs(z,{children:[o.jsx(p,{name:"password",type:x(),placeholder:"Password",error:s.password&&i.password?"true":"false",touched:i.password?"true":"false"}),o.jsx(v,{type:"button",onClick:()=>c(!d),children:o.jsx("svg",{width:"20",height:"20",stroke:"#efede8",viewBox:"0 0 20 20",children:d?o.jsx("use",{href:`${h}#eye-off`}):o.jsx("use",{href:`${h}#eye`})})})]}),o.jsx(l,{name:"password",component:"p"})]}),o.jsx(j,{type:"submit",children:"Sign Up"})]})})};export{C as A,I as S,L as a,T as b,A as c,B as d};
