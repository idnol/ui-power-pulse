import{u as i,j as e,r as n}from"./index-331d9419.js";import{S as o,a as d,b as c,A as l,c as m,d as u}from"./AuthForm-e674f115.js";import{c as h,a as r}from"./formik.esm-a3103798.js";const p=h().shape({name:r().min(3,"Too short").required("Required"),email:r().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:r().min(6,"password must be at least 6 characters").required("Required")}),g=()=>{const s=i(),t=a=>{s(n(a))};return e.jsx(e.Fragment,{children:e.jsxs(o,{children:[e.jsx(d,{children:"Sign Up"}),e.jsx(c,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(l,{schema:p,handleSubmit:t,register:!0}),e.jsxs(m,{children:["Already have an account? ",e.jsx(u,{to:"/signin",children:"Sign In"})]})]})})};function f(){return e.jsx(e.Fragment,{children:e.jsx(g,{})})}export{f as default};
