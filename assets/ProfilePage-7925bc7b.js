import{s as a,t as i,j as e,b as y,u as k,d as _,a as w,e as I,f as R,g as q,h as U,i as C,k as N}from"./index-6ec9fa09.js";import{B as s,Q as O}from"./react-toastify.esm-6173199b.js";import{c as T,a as S,e as g,f as B,u as M,d as P,F as A,b as Y}from"./formik.esm-a47c4cd7.js";import{i as H}from"./index-4365d4c2.js";import{W as J}from"./WelcomePage.styled-8d877c10.js";const V=a.div`
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
`,G=a.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${i.breakpoint.md}) {
  line-height: 150%;
}
`,Q=a.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${i.color.white};

@media screen and (min-width: $${i.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,X=a.div`
display: flex;
align-items: center;
gap:8px;
`,z=({svg:r,text:t,number:l})=>e.jsxs(V,{children:[e.jsxs(X,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${y}#${r}`})}),e.jsx(G,{children:t})]}),e.jsx(Q,{children:l})]}),K=a.div`
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
`,Z=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }
`,E=r=>r.profile.items,ee=a.div`
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
`,te=a.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${i.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`,ie=a.div`
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
`;const ae=a.div`
    cursor: pointer;
`,re=a.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`,ne=a.svg`
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
`,oe=a.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${i.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`,se=a.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${i.breakpoint.md}) {
        margin-top: 8px;
  }
`,de=a.img`
    width: 90px;
    height:90px;
    border-radius:50%;
    @media screen and (min-width:${i.breakpoint.md}) {
        width: 150px;
        height:150px;
  }

`,le=()=>{const r=k(),t=_(E),[l,d]=w.useState(null),o=l||t.bodyData&&t.bodyData.avatar||null,p=e.jsx(re,{children:e.jsx("use",{href:o||`${y}#icon-user`})}),h=async f=>{const x=f.target.files[0];if(x)try{d(URL.createObjectURL(x));const c=await r(I(x));return I.fulfilled.match(c)?s.success("File uploaded successfully"):s.error("Error uploading file: Server response not successful"),c.data}catch(c){s.error("Error uploading file:",c),d(null)}};return e.jsxs(ee,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ie,{children:o&&o!=="undefined"?e.jsx(de,{src:o,alt:"User Avatar"}):p}),e.jsxs(te,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:h,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(ae,{children:e.jsx(ne,{children:e.jsx("use",{href:`${y}#icon-check-mark`})})})})]})]}),e.jsx(oe,{children:t.name}),e.jsx(se,{children:"User"})]})},ce=a.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${i.breakpoint.xl}) {
        font-size: 16px;
    }
`,pe=a.div`
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
`,he=()=>e.jsxs(pe,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${y}#exclamation-mark`})}),e.jsx(ce,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),xe=()=>e.jsxs(Z,{children:[e.jsx(le,{}),e.jsxs(K,{children:[e.jsx(z,{svg:"fork-knife",text:"Daily calorie intake",number:"0"}),e.jsx(z,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:"0 min"})]}),e.jsx(he,{})]}),me=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],ue=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],ge=[{id:"level-1",value:"1",label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:"2",label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:"3",label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:"4",label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:"5",label:"Extremely active (very strenuous exercises/sports and physical work)"}],be=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],fe=T().shape({name:S().required(),height:g().min(150).required(),currentWeight:g().min(35).required(),desiredWeight:g().min(35).required(),birthday:B().min(new Date(new Date().getFullYear()-18,0,1)).required(),blood:g().oneOf([1,2,3,4]).required(),sex:S().oneOf(["male","female"]).required(),levelActivity:g().oneOf([1,2,3,4,5]).required()}),ye=r=>{s.error(r)},u=({name:r})=>{const[,t]=M(r);return w.useEffect(()=>{t.error&&t.touched&&ye(t.error)},[t.error,t.touched]),null};const we=a(P)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width:theme.breakpoint.xl){
        margin-top: 0;
  }
`,ve=a.div`
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
`,je=a.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;

    input {
        width: 160px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 165px;
  }
  }
`,ke=a.div`
    display:flex;
    align-items:end;
    flex-wrap:wrap;
    gap:25px;
`,j=a(A)`
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
`,b=a.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${i.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width:theme.breakpoint.xl){
        font-size: 14px;
    }
`,_e=a(A)`
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

`,$e=a.label`
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
`,F=a.div`
    display: flex;
    gap:8px;
`,De=a.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`,We=a.button`
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
`,v=({id:r,value:t,name:l,label:d})=>e.jsxs($e,{children:[" ",e.jsx(_e,{id:r,type:"radio",name:l,value:t}),d]}),Ie=({label:r,name:t})=>e.jsxs("div",{children:[e.jsx(b,{children:r}),e.jsx(j,{type:"number",name:t}),e.jsx(u,{name:t})]}),Se=R`
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

`,ze=a.svg`
  position: absolute;
  right: 14px;
  top: 14px;
`;a.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`;const Fe=a.input`
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
`,Ue="/ui-power-pulse/assets/sprait-112b8185.svg",Ae=({number:r})=>e.jsxs(e.Fragment,{children:[e.jsx(ze,{width:"18",height:"18",children:e.jsx("use",{href:`${Ue}#icon-calendar`})}),e.jsx(H,{showYearDropdown:!0,scrollableYearDropdown:!0,maxDate:new Date,value:r,customInput:e.jsx(Fe,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:t=>t.substring(0,1),showMonthDropdown:!0}),e.jsx(Se,{})]}),Ee=()=>{var h,f,x,c,$,D;const r=k(),t=_(E),d=(async()=>await r(q()))();d.name,d.email;const o={name:t.name||"Name",email:t.email,height:t.bodyData&&t.bodyData.height||"150",currentWeight:t.bodyData&&t.bodyData.currentWeight||"35",desiredWeight:t.bodyData&&t.bodyData.desiredWeight||"35",birthday:"2006-01-02",blood:parseInt(((h=t.bodyData)==null?void 0:h.blood)||((f=t.bodyData)==null?void 0:f.blood)||1,10),sex:((x=t.bodyData)==null?void 0:x.sex)||((c=t.bodyData)==null?void 0:c.sex)||"male",levelActivity:parseInt((($=t.bodyData)==null?void 0:$.levelActivity)||((D=t.bodyData)==null?void 0:D.levelActivity)||1,10)},p=async m=>{if(t.bodyData){if(JSON.stringify(m)===JSON.stringify(o)){s.error("Nothing to change");return}try{const{email:n,...W}=m,L=await U.patch("/users/profile",W);return s.success("User data updated successfully"),r(C(W)),L.data}catch(n){s.error("Error updating user data:",n)}}else s.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(Y,{initialValues:o,validationSchema:fe,onSubmit:p,children:m=>e.jsxs(we,{onSubmit:m.handleSubmit,children:[e.jsxs(ve,{children:[e.jsxs("div",{children:[e.jsx(b,{children:"Name"}),e.jsx(j,{type:"text",name:"name"}),e.jsx(u,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(b,{children:"Email"}),e.jsx(j,{type:"email",name:"email",disabled:!0}),e.jsx(u,{name:"email"})]})]}),e.jsxs(je,{children:[be.map(n=>e.jsx(Ie,{id:n.id,name:n.name,label:n.label},n.id)),e.jsxs("div",{children:[e.jsx(b,{children:"Day of Birth"}),e.jsxs("div",{style:{position:"relative"},children:[" ",e.jsx(Ae,{number:o.birthday})]})]})]}),e.jsxs(ke,{children:[e.jsxs("div",{children:[e.jsx(b,{children:"Blood"}),e.jsx(F,{children:me.map(n=>e.jsx(v,{id:n.id,name:"blood",value:o.blood,label:n.label},n.id))}),e.jsx(u,{name:"blood"})]}),e.jsxs(F,{children:[ue.map(n=>e.jsx(v,{id:n.id,name:"sex",value:o.sex,label:n.label},n.id)),e.jsx(u,{name:"sex"})]})]}),e.jsxs(De,{children:[ge.map(n=>e.jsx(v,{id:n.id,name:"levelActivity",value:o.levelActivity,label:n.label},n.id)),e.jsx(u,{name:"levelActivity"})]}),e.jsx(We,{type:"submit",disabled:!m.dirty,children:"Save"}),e.jsx(O,{})]})})},Le=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`;function Te(){const r=k(),t=_(o=>o.auth.token),[l,d]=w.useState(!1);return w.useEffect(()=>{(async()=>{try{if(t){const h=(await U.get("/users/current",{headers:{Authorization:`Bearer ${t}`}})).data;r(N(h)),d(!0)}else s.error("Token not available. Unable to fetch user data.")}catch(p){s.error("Error fetching user data:",p)}})()},[r,t]),l?e.jsx("section",{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx(J,{children:e.jsxs(Le,{children:[e.jsx(xe,{}),e.jsx(Ee,{})]})})})})}):e.jsx("div",{children:"Loading..."})}export{Te as default};
