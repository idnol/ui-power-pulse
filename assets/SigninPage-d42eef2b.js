import{u as r,j as e,l as i}from"./index-f79d8a4b.js";import{c as o,a as s}from"./formik.esm-488329e8.js";import{S as c,a as l,b as d,A as m,c as h,d as p}from"./AuthForm-499a5b6c.js";import{W as u,a as x,S}from"./WelcomePage.styled-7cb3ba5a.js";import"./ReusableStyles.styled-d40f324a.js";import"./side-view-2x-desk-dd305d4a.js";const j=o().shape({email:s().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:s().min(6,"password must be at least 6 characters").required("Required")}),g=()=>{const t=r(),a=n=>{t(i(n))};return e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsx(l,{children:"Sign In"}),e.jsx(d,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsx(m,{schema:j,handleSubmit:a,btnContent:"Sign In"}),e.jsxs(h,{children:["Don’t have an account? ",e.jsx(p,{to:"/signup",children:"Sign Up"})]})]})})};function A(){return e.jsx(u,{children:e.jsx("div",{className:"container",children:e.jsxs(x,{children:[e.jsx(g,{}),e.jsx(S,{})]})})})}export{A as default};
