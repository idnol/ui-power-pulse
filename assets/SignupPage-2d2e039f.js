import{u as a,j as e,r as n}from"./index-e029ae4d.js";import{A as o}from"./AuthForm-0cda3b57.js";import{c,a as s,S as d,b as l,d as m,e as h,f as u}from"./AuthForms.styled-5d9a16a8.js";import{W as p,S as x}from"./WelcomePage.styled-af504cc9.js";import"./ReusableStyles.styled-889b3230.js";const S=c().shape({name:s().min(3,"Too short").required("Required"),email:s().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"It must be valid email").required("Required"),password:s().min(6,"password must be at least 6 characters").required("Required")}),j=()=>{const r=a(),t=i=>{r(n(i))};return e.jsxs(d,{children:[e.jsx(l,{children:"Sign Up"}),e.jsx(m,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(o,{schema:S,handleSubmit:t,register:!0,btnContent:"Sign Up"}),e.jsxs(h,{children:["Already have an account? ",e.jsx(u,{to:"/signin",children:"Sign In"})]})]})};function w(){return e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsxs(p,{children:[e.jsx(j,{}),e.jsx(x,{})]})})})})}export{w as default};
