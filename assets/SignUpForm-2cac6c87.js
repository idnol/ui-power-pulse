import{s as o,t,n as c,L as w,r as f,j as e,a as h,u as y,b as $}from"./index-f012eb28.js";import{F as S,E as j,b as k,d as v,c as z,a as l}from"./formik.esm-981deb3e.js";const F=o.h2`
    line-height: 1.17;
    @media (min-width: ${t.breakpoint.md}) {
        font-size: 32px;
        line-height: 1.38;
    }
`,E=o.p`
    font-size: 14px;
    line-height: 1.29;
    color: ${t.color.grey};
    @media (min-width: ${t.breakpoint.md}) {
        font-size: 16px;
        line-height: 1.5;
    }
`,q=o.div`
    //margin-top: 127px;
    max-width: 335px;
    margin-right: 178px;
    //margin-left: auto;
    //margin-right: auto;
    @media (min-width: ${t.breakpoint.md}) {
        max-width: 496px;
        //margin-left: 0px;
    }
`,T=o(F)`
    margin-bottom: 14px;
    @media (min-width: ${t.breakpoint.md}) {
        margin-bottom: 16px;
    }
`,A=o(E)`
    margin-bottom: 28px;
    @media (min-width: ${t.breakpoint.md}) {
        margin-bottom: 32px;
    }
`,p=o(S)`
    display: block;
    width: 100%;
    height: 46px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    border-radius: 12px;
    border: ${t.border.grey3};
    background-color: transparent;
    color: ${t.color.white};
    &:hover{
        border: ${t.border.orange};
    };
    &:focus {
    outline: none;
    border: ${t.border.orange};
}
    ${({error:i,touched:n})=>n==="true"&&i==="true"&&c`
        border-color: red;
    `}
    ${({error:i,touched:n,name:r})=>n==="true"&&i==="false"&&(r==="email"||r==="password"||r==="name")&&c`
        border-color: green;
    `}
    @media (min-width: ${t.breakpoint.md}) {
        width: 364px;
        height: 52px;
        font-size: 16px;
        line-height: 1.5;
    }
`,m=o(j)`
    color: ${t.color.red};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.12px;
    margin: 4px;
`,I=o.button`
    height: 42px;
    margin-top: 40px;
    padding: 12px 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    border-radius: 12px;
    border: none;
    background-color: ${t.color.orange};
    color: ${t.color.white};
    cursor: pointer;
    &:hover{
        background-color: ${t.color.orangeSecond};
    };
    @media (min-width: ${t.breakpoint.md}) {
        height: 56px;
        margin-top: 64px;
        padding: 16px 60px;
        font-size: 20px;
        line-height: 1.2;
    }
`,R=o.p`
    color: ${t.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${t.color.greySecond};
    @media (min-width: ${t.breakpoint.md}) {
        padding-left: 8px;
    }
`,P=o(w)`
    color: ${t.color.white};
    text-decoration: underline;
`,C=o.button`
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
`,L=o.div`
    position: relative;
    display: inline-block;
`,U=o.div`
    display: flex;
    flex-direction:column;
    gap: 18px;
    @media (min-width: ${t.breakpoint.md}) {
        width: max-content;
    }
`,B=({schema:i,handleSubmit:n,register:r,btnContent:x})=>{const[d,g]=f.useState(!1),u=()=>d?"text":"password",b=r?{email:"",password:"",name:""}:{email:"",password:""};return e.jsx(k,{initialValues:b,validationSchema:i,onSubmit:s=>{n(s)},children:({errors:s,touched:a})=>e.jsxs(v,{autoComplete:"off",children:[e.jsxs(U,{children:[r&&e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"text",name:"name",placeholder:"Name",error:s.name&&a.name?"true":"false",touched:a.name?"true":"false"}),e.jsx(m,{name:"name",component:"p"})]}),e.jsx(p,{type:"email",name:"email",placeholder:"Email",error:s.email&&a.email?"true":"false",touched:a.email?"true":"false"}),e.jsx(m,{name:"email",component:"p"}),e.jsxs(L,{children:[e.jsx(p,{name:"password",type:u(),placeholder:"Password",error:s.password&&a.password?"true":"false",touched:a.password?"true":"false"}),e.jsx(C,{type:"button",onClick:()=>g(!d),children:e.jsx("svg",{width:"20",height:"20",stroke:`${t.color.white}`,viewBox:"0 0 20 20",children:d?e.jsx("use",{href:`${h}#eye-off`}):e.jsx("use",{href:`${h}#eye`})})})]}),e.jsx(m,{name:"password",component:"p"})]}),e.jsx(I,{type:"submit",children:x})]})})},D=z().shape({name:l().min(3,"Too short").required("Required"),email:l().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:l().min(6,"password must be at least 6 characters").required("Required")}),G=()=>{const i=y(),n=r=>{i($(r))};return e.jsxs(q,{children:[e.jsx(T,{children:"Sign Up"}),e.jsx(A,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(B,{schema:D,handleSubmit:n,register:!0,btnContent:"Sign Up"}),e.jsxs(R,{children:["Already have an account? ",e.jsx(P,{to:"/signin",children:"Sign In"})]})]})};export{B as A,q as S,T as a,A as b,R as c,P as d,G as e};
