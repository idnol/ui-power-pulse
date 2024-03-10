import{s as t,t as e,n as m,L as u,a as w,j as o,b as h}from"./index-251844ee.js";import{F as f,E as y,b as $,d as S}from"./formik.esm-567cce7d.js";const k=t.h2`
    line-height: 1.17;
    @media (min-width: ${e.breakpoint.md}) {
        font-size: 32px;
        line-height: 1.38;
    }
`,j=t.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${e.color.grey};
    @media (min-width: ${e.breakpoint.md}) {
        font-size: 16px;
        line-height: 1.5;
    }
`,L=t.div`
    //margin-top: 127px;
    max-width: 335px;
    margin-right: 178px;
    //margin-left: auto;
    //margin-right: auto;
    @media (min-width: ${e.breakpoint.md}) {
        max-width: 496px;
        //margin-left: 0px;
    }
`,T=t(k)`
    margin-bottom: 14px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 16px;
    }
`,A=t(j)`
    margin-bottom: 28px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 32px;
    }
`,p=t(f)`
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
    &:focus {
    outline: none;
    border: ${e.border.orange};
}
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
`,l=t(y)`
    color: ${e.color.red};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.12px;
    margin: 4px;
`,v=t.button`
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
    cursor: pointer;
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
`,B=t.p`
    color: ${e.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${e.color.greySecond};
    @media (min-width: ${e.breakpoint.md}) {
        padding-left: 8px;
    }
`,C=t(u)`
    color: ${e.color.white};
    text-decoration: underline;
`,z=t.button`
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
`,E=t.div`
    position: relative;
    display: inline-block;
`,F=t.div`
    display: flex;
    flex-direction:column;
    gap: 18px;
    @media (min-width: ${e.breakpoint.md}) {
        width: max-content;
    }
`,W=({schema:n,handleSubmit:a,register:r,btnContent:c})=>{const[d,x]=w.useState(!1),g=()=>d?"text":"password",b=r?{email:"",password:"",name:""}:{email:"",password:""};return o.jsx($,{initialValues:b,validationSchema:n,onSubmit:s=>{a(s)},children:({errors:s,touched:i})=>o.jsxs(S,{autoComplete:"off",children:[o.jsxs(F,{children:[r&&o.jsxs(o.Fragment,{children:[o.jsx(p,{type:"text",name:"name",placeholder:"Name",error:s.name&&i.name?"true":"false",touched:i.name?"true":"false"}),o.jsx(l,{name:"name",component:"p"})]}),o.jsx(p,{type:"email",name:"email",placeholder:"Email",error:s.email&&i.email?"true":"false",touched:i.email?"true":"false"}),o.jsx(l,{name:"email",component:"p"}),o.jsxs(E,{children:[o.jsx(p,{name:"password",type:g(),placeholder:"Password",error:s.password&&i.password?"true":"false",touched:i.password?"true":"false"}),o.jsx(z,{type:"button",onClick:()=>x(!d),children:o.jsx("svg",{width:"20",height:"20",stroke:`${e.color.white}`,viewBox:"0 0 20 20",children:d?o.jsx("use",{href:`${h}#eye-off`}):o.jsx("use",{href:`${h}#eye`})})})]}),o.jsx(l,{name:"password",component:"p"})]}),o.jsx(v,{type:"submit",children:c})]})})};export{W as A,L as S,T as a,A as b,B as c,C as d};
