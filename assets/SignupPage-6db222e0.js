import{u as i,j as e,r as n}from"./index-0dbe3382.js";import{S as o,a as d,b as c,A as l,c as m,d as u}from"./AuthForm-90c42aca.js";import{c as h,a as r}from"./formik.esm-6f72dd27.js";const p=h().shape({name:r().min(3,"Too short").required("Required"),email:r().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:r().min(6,"password must be at least 6 characters").required("Required")}),g=()=>{const t=i(),s=a=>{t(n(a))};return e.jsx(e.Fragment,{children:e.jsxs(o,{children:[e.jsx(d,{children:"Sign Up"}),e.jsx(c,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(l,{schema:p,handleSubmit:s,register:!0,btnContent:"Sign Up"}),e.jsxs(m,{children:["Already have an account? ",e.jsx(u,{to:"/signin",children:"Sign In"})]})]})})};function f(){return e.jsx(e.Fragment,{children:e.jsx(g,{})})}export{f as default};
