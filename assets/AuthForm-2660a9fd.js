import{s as r,t as e,n as m,L as b,a as w,j as o,b as c}from"./index-2c988186.js";import{F as f,E as y,b as $,d as S}from"./formik.esm-071462e8.js";import{S as j,a as k}from"./ReusableStyles.styled-097c6e31.js";const T=r.div`
    //margin-top: 127px;
    max-width: 335px;
    margin-right: 178px;
    //margin-left: auto;
    //margin-right: auto;
    @media (min-width: ${e.breakpoint.md}) {
        max-width: 496px;
        //margin-left: 0px;
    }
`,A=r(j)`
    margin-bottom: 14px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 16px;
    }
`,B=r(k)`
    margin-bottom: 28px;
    @media (min-width: ${e.breakpoint.md}) {
        margin-bottom: 32px;
    }
`,p=r(f)`
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
    ${({error:i,touched:n})=>n==="true"&&i==="true"&&m`
        border-color: red;
    `}
    ${({error:i,touched:n,name:t})=>n==="true"&&i==="false"&&(t==="email"||t==="password"||t==="name")&&m`
        border-color: green;
    `}
    @media (min-width: ${e.breakpoint.md}) {
        width: 364px;
        height: 52px;
        font-size: 16px;
        line-height: 1.5;
    }
`,l=r(y)`
    color: ${e.color.red};
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.12px;
    margin: 4px;
`,v=r.button`
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
`,C=r.p`
    color: ${e.color.grey};
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.5;
    color: ${e.color.greySecond};
    @media (min-width: ${e.breakpoint.md}) {
        padding-left: 8px;
    }
`,W=r(b)`
    color: ${e.color.white};
    text-decoration: underline;
`,E=r.button`
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
`,F=r.div`
    position: relative;
    display: inline-block;
`,z=r.div`
    display: flex;
    flex-direction:column;
    gap: 18px;
    @media (min-width: ${e.breakpoint.md}) {
        width: max-content;
    }
`,D=({schema:i,handleSubmit:n,register:t,btnContent:x})=>{const[d,h]=w.useState(!1),g=()=>d?"text":"password",u=t?{email:"",password:"",name:""}:{email:"",password:""};return o.jsx($,{initialValues:u,validationSchema:i,onSubmit:s=>{n(s)},children:({errors:s,touched:a})=>o.jsxs(S,{autoComplete:"off",children:[o.jsxs(z,{children:[t&&o.jsxs(o.Fragment,{children:[o.jsx(p,{type:"text",name:"name",placeholder:"Name",error:s.name&&a.name?"true":"false",touched:a.name?"true":"false"}),o.jsx(l,{name:"name",component:"p"})]}),o.jsx(p,{type:"email",name:"email",placeholder:"Email",error:s.email&&a.email?"true":"false",touched:a.email?"true":"false"}),o.jsx(l,{name:"email",component:"p"}),o.jsxs(F,{children:[o.jsx(p,{name:"password",type:g(),placeholder:"Password",error:s.password&&a.password?"true":"false",touched:a.password?"true":"false"}),o.jsx(E,{type:"button",onClick:()=>h(!d),children:o.jsx("svg",{width:"20",height:"20",stroke:`${e.color.white}`,viewBox:"0 0 20 20",children:d?o.jsx("use",{href:`${c}#eye-off`}):o.jsx("use",{href:`${c}#eye`})})})]}),o.jsx(l,{name:"password",component:"p"})]}),o.jsx(v,{type:"submit",children:x})]})})};export{D as A,T as S,A as a,B as b,C as c,W as d};
