import{s as o,t as r,n as c,L as w,r as f,j as e,a as h,u as y,b as S}from"./index-94a99226.js";import{F as $,E as j,b as k,d as v,c as z,a as l}from"./formik.esm-b887f53c.js";import{S as F,a as E}from"./ReusableStyles.styled-a874e107.js";const q=o.div`
    //margin-top: 127px;
    max-width: 335px;
    margin-right: 178px;
    //margin-left: auto;
    //margin-right: auto;
    @media (min-width: ${r.breakpoint.md}) {
        max-width: 496px;
        //margin-left: 0px;
    }
`,T=o(F)`
    margin-bottom: 14px;
    @media (min-width: ${r.breakpoint.md}) {
        margin-bottom: 16px;
    }
`,A=o(E)`
    margin-bottom: 28px;
    @media (min-width: ${r.breakpoint.md}) {
        margin-bottom: 32px;
    }
`,p=o($)`
    display: block;
    width: 100%;
    height: 46px;
    padding: 14px;
    font-size: 14px;
    line-height: 1.29;
    border-radius: 12px;
    border: ${r.border.grey3};
    background-color: transparent;
    color: ${r.color.white};
    &:hover{
        border: ${r.border.orange};
    };
    &:focus {
    outline: none;
    border: ${r.border.orange};
}
    ${({error:a,touched:i})=>i==="true"&&a==="true"&&c`
        border-color: red;
    `}
    ${({error:a,touched:i,name:t})=>i==="true"&&a==="false"&&(t==="email"||t==="password"||t==="name")&&c`
        border-color: green;
    `}
    @media (min-width: ${r.breakpoint.md}) {
        width: 364px;
        height: 52px;
        font-size: 16px;
        line-height: 1.5;
    }
`,m=o(j)`
    color: ${r.color.red};
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
    background-color: ${r.color.orange};
    color: ${r.color.white};
    cursor: pointer;
    &:hover{
        background-color: ${r.color.orangeSecond};
    };
    @media (min-width: ${r.breakpoint.md}) {
        height: 56px;
        margin-top: 64px;
        padding: 16px 60px;
        font-size: 20px;
        line-height: 1.2;
    }
`,R=o.p`
    color: ${r.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${r.color.greySecond};
    @media (min-width: ${r.breakpoint.md}) {
        padding-left: 8px;
    }
`,P=o(w)`
    color: ${r.color.white};
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
    @media (min-width: ${r.breakpoint.md}) {
        width: max-content;
    }
`,B=({schema:a,handleSubmit:i,register:t,btnContent:x})=>{const[d,g]=f.useState(!1),u=()=>d?"text":"password",b=t?{email:"",password:"",name:""}:{email:"",password:""};return e.jsx(k,{initialValues:b,validationSchema:a,onSubmit:s=>{i(s)},children:({errors:s,touched:n})=>e.jsxs(v,{autoComplete:"off",children:[e.jsxs(U,{children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(p,{type:"text",name:"name",placeholder:"Name",error:s.name&&n.name?"true":"false",touched:n.name?"true":"false"}),e.jsx(m,{name:"name",component:"p"})]}),e.jsx(p,{type:"email",name:"email",placeholder:"Email",error:s.email&&n.email?"true":"false",touched:n.email?"true":"false"}),e.jsx(m,{name:"email",component:"p"}),e.jsxs(L,{children:[e.jsx(p,{name:"password",type:u(),placeholder:"Password",error:s.password&&n.password?"true":"false",touched:n.password?"true":"false"}),e.jsx(C,{type:"button",onClick:()=>g(!d),children:e.jsx("svg",{width:"20",height:"20",stroke:`${r.color.white}`,viewBox:"0 0 20 20",children:d?e.jsx("use",{href:`${h}#eye-off`}):e.jsx("use",{href:`${h}#eye`})})})]}),e.jsx(m,{name:"password",component:"p"})]}),e.jsx(I,{type:"submit",children:x})]})})},D=z().shape({name:l().min(3,"Too short").required("Required"),email:l().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:l().min(6,"password must be at least 6 characters").required("Required")}),H=()=>{const a=y(),i=t=>{a(S(t))};return e.jsxs(q,{children:[e.jsx(T,{children:"Sign Up"}),e.jsx(A,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(B,{schema:D,handleSubmit:i,register:!0,btnContent:"Sign Up"}),e.jsxs(R,{children:["Already have an account? ",e.jsx(P,{to:"/signin",children:"Sign In"})]})]})};export{B as A,q as S,T as a,A as b,R as c,P as d,H as e};
