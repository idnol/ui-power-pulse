import{u as n,j as e,l as i}from"./index-331d9419.js";import{c as o,a as s}from"./formik.esm-a3103798.js";import{S as c,a as l,b as d,A as m,c as h,d as u}from"./AuthForm-e674f115.js";const p=o().shape({email:s().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:s().min(6,"password must be at least 6 characters").required("Required")}),x=()=>{const t=n(),a=r=>{t(i(r))};return e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsx(l,{children:"Sign In"}),e.jsx(d,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(m,{schema:p,handleSubmit:a}),e.jsxs(h,{children:["Don’t have an account? ",e.jsx(u,{to:"/signup",children:"Sign Up"})]})]})})};function y(){return e.jsx(e.Fragment,{children:e.jsx(x,{})})}export{y as default};