import{s as a,t as i,j as e,b,u as v,d as j,e as W,a as f,f as k,g as z,h as U,i as A,k as I,m as L,o as E,p as C}from"./index-3db971f1.js";import{B as d,Q as O}from"./react-toastify.esm-a2c6dd13.js";import{c as R,a as _,e as u,f as q,u as N,d as B,F as S,b as T}from"./formik.esm-0f5fe7eb.js";import{i as M}from"./index-3ca30416.js";import{W as P}from"./WelcomePage.styled-9f1f14ae.js";const V=a.div`
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
`,Y=a.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${i.breakpoint.md}) {
  line-height: 150%;
}
`,H=a.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${i.color.white};

@media screen and (min-width: $${i.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,J=a.div`
display: flex;
align-items: center;
gap:8px;
`,$=({svg:n,text:t,number:c})=>e.jsxs(V,{children:[e.jsxs(J,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${b}#${n}`})}),e.jsx(Y,{children:t})]}),e.jsx(H,{children:c})]}),G=a.div`
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
`,Q=a.div`
    max-width: 439px;
    margin: 0 auto;
    @media screen and (min-width:${i.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }

`,X=a.div`
    display: flex;
    justify-content:flex-end;
    padding-right: 32px;
    margin-top:32px;
`,K=a.div`
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
`,Z=a.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${i.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`,ee=a.div`
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
`;const te=a.div`
    cursor: pointer;
`,ie=a.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`,ae=a.svg`
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
`,re=a.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${i.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`,ne=a.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${i.breakpoint.md}) {
        margin-top: 8px;
  }
`,oe=a.img`
    width: 90px;
    height:90px;
    border-radius:50%;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 150px;
        height:150px;
  }

`,se=()=>{const n=v(),t=j(W),[c,l]=f.useState(null),o=c||t.bodyData&&t.bodyData.avatar||null,p=e.jsx(ie,{children:e.jsx("use",{href:o||`${b}#icon-user`})}),x=async s=>{const r=s.target.files[0];if(r)try{l(URL.createObjectURL(r));const h=await n(k(r));return k.fulfilled.match(h)?d.success("File uploaded successfully"):d.error("Error uploading file: Server response not successful"),h.data}catch(h){d.error("Error uploading file:",h),l(null)}};return e.jsxs(K,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ee,{children:o&&o!=="undefined"?e.jsx(oe,{src:o,alt:"User Avatar"}):p}),e.jsxs(Z,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:x,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(te,{children:e.jsx(ae,{children:e.jsx("use",{href:`${b}#icon-check-mark`})})})})]})]}),e.jsx(re,{children:t.name}),e.jsx(ne,{children:"User"})]})},de=a.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${i.breakpoint.xl}) {
        font-size: 16px;
    }
`,le=a.div`
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
`,ce=()=>e.jsxs(le,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${b}#exclamation-mark`})}),e.jsx(de,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),pe=()=>e.jsxs(Q,{children:[e.jsx(se,{}),e.jsxs(G,{children:[e.jsx($,{svg:"fork-knife",text:"Daily calorie intake",number:"0"}),e.jsx($,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:"0 min"})]}),e.jsx(ce,{}),e.jsx(X,{children:e.jsx(z,{})})]}),he=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],xe=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],me=[{id:"level-1",value:1,label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:2,label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:3,label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:4,label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:5,label:"Extremely active (very strenuous exercises/sports and physical work)"}],ue=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],ge=R().shape({name:_().required(),height:u().min(150).required(),currentWeight:u().min(35).required(),desiredWeight:u().min(35).required(),birthday:q().min(new Date(new Date().getFullYear()-18,0,1)).required(),blood:u().oneOf([1,2,3,4]).required(),sex:_().oneOf(["male","female"]).required(),levelActivity:u().oneOf([1,2,3,4,5]).required()}),be=n=>{d.error(n)},m=({name:n})=>{const[,t]=N(n);return f.useEffect(()=>{t.error&&t.touched&&be(t.error)},[t.error,t.touched]),null};const fe=a(B)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width:theme.breakpoint.xl){
        margin-top: 0;
  }
`,ye=a.div`
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
`,we=a.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;

    input {
        width: 160px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 165px;
  }
  }
`,ve=a.div`
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
`,je=a(S)`
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

`,ke=a.label`
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
`,_e=a.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`,$e=a.button`
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
`,y=({id:n,value:t,name:c,label:l,onChange:o,checked:p})=>e.jsxs(ke,{children:[e.jsx(je,{id:n,type:"radio",name:c,value:t,checked:p,onChange:o}),l]}),De=({label:n,name:t})=>e.jsxs("div",{children:[e.jsx(g,{children:n}),e.jsx(w,{type:"number",name:t}),e.jsx(m,{name:t})]}),We=U`
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

`,Ie=a.svg`
  position: absolute;
  right: 14px;
  top: 14px;
`;a.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`;const Se=a.input`
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
`,Fe="/ui-power-pulse/assets/sprait-112b8185.svg",ze=({number:n})=>e.jsxs(e.Fragment,{children:[e.jsx(Ie,{width:"18",height:"18",children:e.jsx("use",{href:`${Fe}#icon-calendar`})}),e.jsx(M,{showYearDropdown:!0,scrollableYearDropdown:!0,maxDate:new Date,value:n,customInput:e.jsx(Se,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:t=>t.substring(0,1),showMonthDropdown:!0}),e.jsx(We,{})]}),Ue=()=>{var x;const n=v(),t=j(W),l=(async()=>await n(A()))();l.name,l.email;const o={name:t.name||"Name",email:t.email,height:t.bodyData&&t.bodyData.height||"150",currentWeight:t.bodyData&&t.bodyData.currentWeight||"35",desiredWeight:t.bodyData&&t.bodyData.desiredWeight||"35",birthday:"2006-01-02",blood:t.bodyData.blood||1,sex:t.bodyData.sex||"male",levelActivity:parseInt((x=t.bodyData)==null?void 0:x.levelActivity,10)||1},p=async s=>{if(t.bodyData){if(JSON.stringify(s)===JSON.stringify(o)){d.error("Nothing to change");return}try{const{email:r,...h}=s;console.log("Before API call:",{email:r,bodyData:h});const F=await I.patch("/users/profile",h);return d.success("User data updated successfully"),n(L(h)),F.data}catch(r){d.error("Error updating user data:",r)}}else d.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(T,{initialValues:o,validationSchema:ge,onSubmit:p,children:s=>e.jsxs(fe,{onSubmit:s.handleSubmit,children:[e.jsxs(ye,{children:[e.jsxs("div",{children:[e.jsx(g,{children:"Name"}),e.jsx(w,{type:"text",name:"name"}),e.jsx(m,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(g,{children:"Email"}),e.jsx(w,{type:"email",name:"email",disabled:!0}),e.jsx(m,{name:"email"})]})]}),e.jsxs(we,{children:[ue.map(r=>e.jsx(De,{id:r.id,name:r.name,label:r.label},r.id)),e.jsxs("div",{children:[e.jsx(g,{children:"Day of Birth"}),e.jsxs("div",{style:{position:"relative"},children:[" ",e.jsx(ze,{number:o.birthday})]})]})]}),e.jsxs(ve,{children:[e.jsxs("div",{children:[e.jsx(g,{children:"Blood"}),e.jsx(D,{children:he.map(r=>e.jsx(y,{id:r.id,name:"blood",label:r.label,onChange:()=>s.setFieldValue("blood",r.id),checked:s.values.blood===r.id},r.id))}),e.jsx(m,{name:"blood"})]}),e.jsxs(D,{children:[xe.map(r=>e.jsx(y,{id:r.id,name:"sex",value:r.value,label:r.label},r.id)),e.jsx(m,{name:"sex"})]})]}),e.jsxs(_e,{children:[me.map(r=>e.jsx(y,{id:r.id,name:"levelActivity",label:r.label,onChange:()=>s.setFieldValue("levelActivity",r.value),checked:s.values.levelActivity===r.value},r.id)),e.jsx(m,{name:"levelActivity"})]}),e.jsx($e,{type:"submit",disabled:!s.dirty,children:"Save"}),e.jsx(O,{})]})})},Ae=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`;function qe(){const n=v(),t=j(o=>o.auth.token),[c,l]=f.useState(!1);return f.useEffect(()=>{(async()=>{try{if(t){const x=(await I.get("/users/current",{headers:{Authorization:`Bearer ${t}`}})).data;n(C(x)),l(!0)}else d.error("Token not available. Unable to fetch user data.")}catch(p){d.error("Error fetching user data:",p)}})()},[n,t]),c?e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx(P,{children:e.jsxs(Ae,{children:[e.jsx(pe,{}),e.jsx(Ue,{})]})})})})}):e.jsx(E,{})}export{qe as default};
