import{s as a,t as i,j as e,b,u as v,d as j,a as f,e as k,f as z,g as U,h as W,i as A,k as E}from"./index-23270db7.js";import{B as d,Q as L}from"./react-toastify.esm-73a5ad48.js";import{c as C,a as _,e as u,f as R,u as q,d as N,F as S,b as O}from"./formik.esm-74217423.js";import{i as B}from"./index-98733fd3.js";import{W as T}from"./WelcomePage.styled-6da3dee3.js";const M=a.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  gap: 28px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);


  @media screen and (min-width: ${i.breakpoint.md}) {
    padding: 14px;

  }
`,P=a.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${i.breakpoint.md}) {
  line-height: 150%;
}
`,V=a.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${i.color.white};

@media screen and (min-width: $${i.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,Y=a.div`
display: flex;
align-items: center;
gap:8px;
`,$=({svg:n,text:t,number:c})=>e.jsxs(M,{children:[e.jsxs(Y,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${b}#${n}`})}),e.jsx(P,{children:t})]}),e.jsx(V,{children:c})]}),H=a.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    gap: 14px;
    justify-content: center;
    @media screen and (max-width: ${i.breakpoint.sm}) {
      max-width: 100%;
    }
    @media screen and (min-width: ${i.breakpoint.md}) {
      gap: 16px;
    }
`,J=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }
`,I=n=>n.profile.items,G=a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width:${i.breakpoint.xl}) {
        margin-top: 64px;
  }
    @media screen and (${i.breakpoint.xl}){
        margin-top: 0;
  }
`,Q=a.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${i.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`,X=a.div`
    width: 90px;
    height: 90px;
    border-radius: 100px;
    border: 1px solid #e6533c;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:${i.breakpoint.md}) {
        width: 150px;
        height: 150px;
  }
`;a.img`
    border-radius: 100px;
`;const K=a.div`
    cursor: pointer;
`,Z=a.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`,ee=a.svg`
    width: 24px;
    height: 24px;
    position: relative;
    top: -13px;
    left: 0px;

  @media screen and (min-width:${i.breakpoint.md}) {
      width: 32px;
      height: 32px;
      top: -17.5px;
  }
`,te=a.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${i.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`,ie=a.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${i.breakpoint.md}) {
        margin-top: 8px;
  }
`,ae=a.img`
    width: 90px;
    height:90px;
    border-radius:50%;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 150px;
        height:150px;
  }

`,re=()=>{const n=v(),t=j(I),[c,l]=f.useState(null),o=c||t.bodyData&&t.bodyData.avatar||null,p=e.jsx(Z,{children:e.jsx("use",{href:o||`${b}#icon-user`})}),x=async s=>{const r=s.target.files[0];if(r)try{l(URL.createObjectURL(r));const h=await n(k(r));return k.fulfilled.match(h)?d.success("File uploaded successfully"):d.error("Error uploading file: Server response not successful"),h.data}catch(h){d.error("Error uploading file:",h),l(null)}};return e.jsxs(G,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(X,{children:o&&o!=="undefined"?e.jsx(ae,{src:o,alt:"User Avatar"}):p}),e.jsxs(Q,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:x,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(K,{children:e.jsx(ee,{children:e.jsx("use",{href:`${b}#icon-check-mark`})})})})]})]}),e.jsx(te,{children:t.name}),e.jsx(ie,{children:"User"})]})},ne=a.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${i.breakpoint.xl}) {
        font-size: 16px;
    }
`,oe=a.div`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width:335px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    max-width:335px;
    @media screen and (min-width: ${i.breakpoint.md}) {
        max-width:439px;
    }
`,se=()=>e.jsxs(oe,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${b}#exclamation-mark`})}),e.jsx(ne,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),de=()=>e.jsxs(J,{children:[e.jsx(re,{}),e.jsxs(H,{children:[e.jsx($,{svg:"fork-knife",text:"Daily calorie intake",number:"0"}),e.jsx($,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:"0 min"})]}),e.jsx(se,{})]}),le=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],ce=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],pe=[{id:"level-1",value:1,label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:2,label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:3,label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:4,label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:5,label:"Extremely active (very strenuous exercises/sports and physical work)"}],he=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],xe=C().shape({name:_().required(),height:u().min(150).required(),currentWeight:u().min(35).required(),desiredWeight:u().min(35).required(),birthday:R().min(new Date(new Date().getFullYear()-18,0,1)).required(),blood:u().oneOf([1,2,3,4]).required(),sex:_().oneOf(["male","female"]).required(),levelActivity:u().oneOf([1,2,3,4,5]).required()}),me=n=>{d.error(n)},m=({name:n})=>{const[,t]=q(n);return f.useEffect(()=>{t.error&&t.touched&&me(t.error)},[t.error,t.touched]),null};const ue=a(N)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width:theme.breakpoint.xl){
        margin-top: 0;
  }
`,ge=a.div`
    margin-top: 20px;
    display: flex;
    flex-direction:column;
    gap:14px;

@media screen and (min-width: ${i.breakpoint.md}) {
  flex-direction:row;
    margin-top: 40px;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    }
    input {
        width: 335px;
    }
    @media screen and (min-width:theme.breakpoint.xl){
        margin: 0;
    }
`,be=a.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;

    input {
        width: 160px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 165px;
  }
  }
`,fe=a.div`
    display:flex;
    align-items:end;
    flex-wrap:wrap;
    gap:25px;
`,w=a(S)`
    outline: none;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: transparent;
    border-radius: 12px;
    padding: 14px;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: ${i.color.white};


    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 341px;
    }

    &:disabled{
        color: ${i.color.greySecond};

    }
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
`,g=a.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${i.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width:theme.breakpoint.xl){
        font-size: 14px;
    }
`,ye=a(S)`
    background: transparent;
    position: relative;
    appearance: none;
    min-width: 20px;
    min-height: 20px;
    border: 2px solid #636366; 
    border-radius: 50%;
    outline: none;

    &:checked {
      box-shadow: 0 0 0 4px black;
      border:1.5px solid ${i.color.orange};
    
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        background-color: ${i.color.orange};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      } 
  }

`,we=a.label`
    display: flex;
    align-items:center;
    gap:8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: var(--white);
    height: 36px;
    @media screen and (min-width:theme.breakpoint.xl){
        font-size: 16px;
    }
`,D=a.div`
    display: flex;
    gap:8px;
`,ve=a.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`,je=a.button`
    cursor: pointer;
    border: none;
    background-color: ${i.color.orange};
    border-radius: 12px;
    padding: 12px 40px;
    width: 115px;
    height: 42px;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    color: ${i.color.white};
    &:disabled{
        color: ${i.color.greySecond};
    }
`,y=({id:n,value:t,name:c,label:l,onChange:o,checked:p})=>e.jsxs(we,{children:[e.jsx(ye,{id:n,type:"radio",name:c,value:t,checked:p,onChange:o}),l]}),ke=({label:n,name:t})=>e.jsxs("div",{children:[e.jsx(g,{children:n}),e.jsx(w,{type:"number",name:t}),e.jsx(m,{name:t})]}),_e=z`
 .react-datepicker__wrapper {
    position: relative;
    display: inline-block;
  }
  .react-datepicker {
    position: absolute;
    width: 215px;
    left: 50%; 
    transform: translateX(-50%); 
    top: 50%;
    transform: translate(-15%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 14px;
    background-color: #ef8964;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
  }
  .react-datepicker__header {
    position: relative;
    background-color: #ef8964;    
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    margin: 0;
    color: rgba(239, 237, 232, 0.5);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .react-datepicker__day--disabled {
    opacity: 25%;
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: #efede8;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color: #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: #ef8964;
  }
  .react-datepicker__day--outside-month {
    opacity: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }

`,$e=a.svg`
  position: absolute;
  right: 14px;
  top: 14px;
`;a.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`;const De=a.input`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  border-radius: 12px;
  padding: 14px 14px 14px 14px;
  height: 46px;

  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i.color.white};
`,We="/ui-power-pulse/assets/sprait-112b8185.svg",Se=({number:n})=>e.jsxs(e.Fragment,{children:[e.jsx($e,{width:"18",height:"18",children:e.jsx("use",{href:`${We}#icon-calendar`})}),e.jsx(B,{showYearDropdown:!0,scrollableYearDropdown:!0,maxDate:new Date,value:n,customInput:e.jsx(De,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:t=>t.substring(0,1),showMonthDropdown:!0}),e.jsx(_e,{})]}),Ie=()=>{var x;const n=v(),t=j(I),l=(async()=>await n(U()))();l.name,l.email;const o={name:t.name||"Name",email:t.email,height:t.bodyData&&t.bodyData.height||"150",currentWeight:t.bodyData&&t.bodyData.currentWeight||"35",desiredWeight:t.bodyData&&t.bodyData.desiredWeight||"35",birthday:"2006-01-02",blood:t.bodyData.blood.toString()||"1",sex:t.bodyData.sex||"male",levelActivity:parseInt((x=t.bodyData)==null?void 0:x.levelActivity,10)||1},p=async s=>{if(t.bodyData){if(JSON.stringify(s)===JSON.stringify(o)){d.error("Nothing to change");return}try{const{email:r,...h}=s;console.log("Before API call:",{email:r,bodyData:h});const F=await W.patch("/users/profile",h);return d.success("User data updated successfully"),n(A(h)),F.data}catch(r){d.error("Error updating user data:",r)}}else d.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(O,{initialValues:o,validationSchema:xe,onSubmit:p,children:s=>e.jsxs(ue,{onSubmit:s.handleSubmit,children:[e.jsxs(ge,{children:[e.jsxs("div",{children:[e.jsx(g,{children:"Name"}),e.jsx(w,{type:"text",name:"name"}),e.jsx(m,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Email"}),e.jsx(w,{type:"email",name:"email",disabled:!0}),e.jsx(m,{name:"email"})]})]}),e.jsxs(be,{children:[he.map(r=>e.jsx(ke,{id:r.id,name:r.name,label:r.label},r.id)),e.jsxs("div",{children:[e.jsx(g,{children:"Day of Birth"}),e.jsxs("div",{style:{position:"relative"},children:[" ",e.jsx(Se,{number:o.birthday})]})]})]}),e.jsxs(fe,{children:[e.jsxs("div",{children:[e.jsx(g,{children:"Blood"}),e.jsx(D,{children:le.map(r=>e.jsx(y,{id:r.id,name:"blood",label:r.label,onChange:()=>s.setFieldValue("blood",r.id),checked:s.values.blood===r.id},r.id))}),e.jsx(m,{name:"blood"})]}),e.jsxs(D,{children:[ce.map(r=>e.jsx(y,{id:r.id,name:"sex",value:r.value,label:r.label},r.id)),e.jsx(m,{name:"sex"})]})]}),e.jsxs(ve,{children:[pe.map(r=>e.jsx(y,{id:r.id,name:"levelActivity",label:r.label,onChange:()=>s.setFieldValue("levelActivity",r.value),checked:s.values.levelActivity===r.value},r.id)),e.jsx(m,{name:"levelActivity"})]}),e.jsx(je,{type:"submit",disabled:!s.dirty,children:"Save"}),e.jsx(L,{})]})})},Fe=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`;function Ce(){const n=v(),t=j(o=>o.auth.token),[c,l]=f.useState(!1);return f.useEffect(()=>{(async()=>{try{if(t){const x=(await W.get("/users/current",{headers:{Authorization:`Bearer ${t}`}})).data;n(E(x)),l(!0)}else d.error("Token not available. Unable to fetch user data.")}catch(p){d.error("Error fetching user data:",p)}})()},[n,t]),c?e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx(T,{children:e.jsxs(Fe,{children:[e.jsx(de,{}),e.jsx(Ie,{})]})})})})}):e.jsx("div",{children:"Loading..."})}export{Ce as default};
