import{s as a,t as i,j as e,a as f,u as w,d as b,b as y,e as _,f as p,g as z,h as U,x as L,i as A,I as R,k as C,m as E,o as q,p as O}from"./index-f7800596.js";import{c as T,a as D,e as g,f as N,u as M,d as P,F as S,b as B}from"./formik.esm-09761be8.js";import{i as V}from"./index-d7ad6235.js";import{T as H}from"./TitlePage-7a75988d.js";const J=a.div`
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
`,Y=a.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${i.color.white};

@media screen and (min-width: $${i.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,K=a.div`
display: flex;
align-items: center;
gap:8px;
`,W=({svg:n,text:t,number:o,min:l})=>{const s=l?`${o} min`:o;return e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${f}#${n}`})}),e.jsx(G,{children:t})]}),e.jsx(Y,{children:s})]})},Q=a.div`
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
`,X=a.div`
    max-width: 439px;
    margin: 0 auto;
    @media screen and (min-width:${i.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }

`,Z=a.div`
    display: flex;
    justify-content:flex-end;
    padding-right: 32px;
    margin-top:32px;
`,$=n=>n.profile.items,ee=a.div`
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
    position: relative;
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
`,de=a.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${i.breakpoint.md}) {
        margin-top: 8px;
  }
`,se=a.img`
    border-radius:50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
`,le=()=>{const n=w(),t=b($),[o,l]=y.useState(null),s=o||t.bodyData&&t.bodyData.avatar||null,c=e.jsx(re,{children:e.jsx("use",{href:s||`${f}#icon-user`})}),d=async r=>{const h=r.target.files[0];if(h)try{const m=URL.createObjectURL(h);l(m),n(_(h)).then(v=>{_.fulfilled.match(v)?p.success("File uploaded successfully"):p.error("Error uploading file: Server response not successful")}).catch(v=>{p.error("Error uploading file:",v)}).finally(()=>{l(null)})}catch(m){p.error("Error creating URL for file:",m),l(null)}};return e.jsxs(ee,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(ie,{children:s&&s!=="undefined"?e.jsx(se,{src:s,alt:"User Avatar"}):c}),e.jsxs(te,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:d,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(ae,{children:e.jsx(ne,{children:e.jsx("use",{href:`${f}#icon-check-mark`})})})})]})]}),e.jsx(oe,{children:t.name}),e.jsx(de,{children:"User"})]})},ce=a.p`
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
`,xe=()=>e.jsxs(pe,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${f}#exclamation-mark`})}),e.jsx(ce,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),he=()=>{const n=b($),t=n.dailyCalorie,o=n.dailyExerciseTime;return e.jsxs(X,{children:[e.jsx(le,{}),e.jsxs(Q,{children:[e.jsx(W,{svg:"fork-knife",text:"Daily calorie intake",number:t}),e.jsx(W,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:o,min:!0})]}),e.jsx(xe,{}),e.jsx(Z,{children:e.jsx(z,{})})]})},me=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],ge=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],ue=[{id:"level-1",value:1,label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:2,label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:3,label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:4,label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:5,label:"Extremely active (very strenuous exercises/sports and physical work)"}],be=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],fe=T().shape({name:D().required(),height:g().min(150).required(),currentWeight:g().min(35).required(),desiredWeight:g().min(35).required(),blood:g().oneOf([1,2,3,4]).required(),sex:D().oneOf(["male","female"]).required(),levelActivity:g().oneOf([1,2,3,4,5]).required(),birthday:N().required("Birthday is required")}),ye=n=>{p.error(n)},x=({name:n})=>{const[,t]=M(n);return y.useEffect(()=>{t.error&&t.touched&&ye(t.error)},[t.error,t.touched]),null},we=a(P)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: ${i.breakpoint.xl}){
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
    @media screen and (min-width: ${i.breakpoint.xl}){
        margin: 0;
    }
`,ke=a.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    @media screen and (min-width: ${i.breakpoint.md}){
        flex-wrap: nowrap;
    }
    input {
        width: 160px;
    @media screen and (min-width: ${i.breakpoint.md}) and (max-width: ${i.breakpoint.xl}) {
        width: 165px;
  }
  }
`,je=a.div`
    display:flex;
    align-items:end;
    flex-wrap:wrap;
    gap:25px;
`,j=a(S)`
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
`,u=a.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${i.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width: ${i.breakpoint.xl}){
        font-size: 14px;
    }
`,$e=a(S)`
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

`,_e=a.label`
    display: flex;
    align-items:center;
    gap:8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: var(--white);
    height: 36px;
    @media screen and (min-width: ${i.breakpoint.xl}){
        font-size: 16px;
    }
`,I=a.div`
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
`,k=({id:n,value:t,name:o,label:l,onChange:s,checked:c})=>e.jsxs(_e,{children:[e.jsx($e,{id:n,type:"radio",name:o,value:t,checked:c,onChange:s}),l]}),Ie=({label:n,name:t})=>e.jsxs("div",{children:[e.jsx(u,{children:n}),e.jsx(j,{type:"number",name:t}),e.jsx(x,{name:t})]}),Fe=U`
  .react-datepicker__wrapper {
    position: absolute;
  
  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9px 18px;
    background-color:${i.color.orangeSecond};
    font-family: 'RobotoRegular';
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
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header {
    position: relative;
    background-color: var(--orange-light-color);
  }
 
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    color: var(--white-color);
        font-family: 'RobotoMedium';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.32px;
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
   color: rgba(239, 237, 232, 0.50);
        font-family: 'RobotoMedium';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: -0.28px;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
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
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: var(--white-color);
    font-family: 'RobotoRegular';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; 
    letter-spacing: -0.28px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: var(--black-color);
    color:var(--white-color);
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`,Se=a.svg`
  position: absolute;
  right: 14px;
  top: 14px;
`;a.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`;a.input`
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
`;const ze=a.button`
  cursor: pointer;
  outline: none;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background: transparent;
  border-radius: 12px;
  padding: 14px 14px 14px 14px;
  height: 46px;
  width: 161px;

  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: ${i.color.white};
`,Ue="/ui-power-pulse/assets/sprait-112b8185.svg",F=n=>{const t=n?new Date(n):new Date;let o=t.getDate(),l=t.getMonth()+1;const s=t.getFullYear();return l=l<10?`0${l}`:l,o=o<10?`0${o}`:o,`${s}-${l}-${o}`};const Le=({formik:n})=>{const t=w(),o=b(d=>d.profile.items.bodyData.birthday),l=F(o),s=L.forwardRef(({onClick:d},r)=>e.jsx(ze,{onClick:d,ref:r,children:l}));s.displayName="CustomInput";const c=d=>{const r=F(d);t(A(r)),n.setFieldValue("birthday",r),n.setFieldTouched("birthday",!0)};return e.jsxs(e.Fragment,{children:[e.jsx(Se,{width:"18",height:"18",children:e.jsx("use",{href:`${Ue}#icon-calendar`})}),e.jsx(V,{selected:o,onChange:c,customInput:e.jsx(s,{}),dateFormat:"dd-MM-yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,1)}),e.jsx(Fe,{})]})},Ae=()=>{var s,c;const n=w(),t=b($),o={name:t.name||"Name",email:t.email,height:t.bodyData&&t.bodyData.height||150,currentWeight:t.bodyData&&t.bodyData.currentWeight||35,desiredWeight:t.bodyData&&t.bodyData.desiredWeight||35,birthday:new Date((s=t.bodyData)==null?void 0:s.birthday)||new Date,blood:t.bodyData.blood||1,sex:t.bodyData.sex||"male",levelActivity:parseInt((c=t.bodyData)==null?void 0:c.levelActivity,10)||1},l=async d=>{if(t.bodyData){if(JSON.stringify(d)===JSON.stringify(o))return;try{const{_id:r,...h}=t,m={_id:r,...d,blood:parseInt(d.blood,10)};n(C({_id:r,...h.bodyData,...m})),p.success("Profile updated successfully")}catch(r){p.error("Error updating user data:",r)}}else p.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(B,{initialValues:o,validationSchema:fe,onSubmit:l,children:d=>e.jsxs(we,{children:[e.jsxs(ve,{children:[e.jsxs("div",{children:[e.jsx(u,{children:"Name"}),e.jsx(j,{type:"text",name:"name"}),e.jsx(x,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(u,{children:"Email"}),e.jsx(j,{type:"email",name:"email",disabled:!0}),e.jsx(x,{name:"email"})]})]}),e.jsxs(ke,{children:[be.map(r=>e.jsx(Ie,{id:r.id,name:r.name,label:r.label},r.id)),e.jsxs("div",{children:[e.jsx(u,{children:"Day of Birth"}),e.jsxs("div",{className:"datePickerWrapper",style:{position:"relative"},children:[" ",e.jsx(Le,{formik:d})]})]})]}),e.jsxs(je,{children:[e.jsxs("div",{children:[e.jsx(u,{children:"Blood"}),e.jsx(I,{children:me.map(r=>e.jsx(k,{id:r.id,name:"blood",label:r.label,onChange:()=>d.setFieldValue("blood",r.id),checked:d.values.blood==r.id},r.id))}),e.jsx(x,{name:"blood"})]}),e.jsxs(I,{children:[ge.map(r=>e.jsx(k,{id:r.id,name:"sex",value:r.value,label:r.label},r.id)),e.jsx(x,{name:"sex"})]})]}),e.jsxs(De,{children:[ue.map(r=>e.jsx(k,{id:r.id,name:"levelActivity",label:r.label,onChange:()=>d.setFieldValue("levelActivity",r.value),checked:d.values.levelActivity===r.value},r.id)),e.jsx(x,{name:"levelActivity"})]}),e.jsx(We,{type:"submit",disabled:!d.dirty,children:"Save"}),e.jsx(R,{position:"top-right"})]})})},Re=a.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${i.breakpoint.md}) {
    padding-top: 156px;
  }
`,Ce=a.div`
    @media screen and (min-width:${i.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`,Ee=a.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${i.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${i.breakpoint.xl}) {
    max-width: 1248px;
  }
`;function Me(){const n=w(),t=b(s=>s.auth.token),[o,l]=y.useState(!1);return y.useEffect(()=>{(async()=>{try{if(t){const d=(await q.get("/users/current",{headers:{Authorization:`Bearer ${t}`}})).data;n(O(d)),l(!0)}else p.error("Token not available. Unable to fetch user data.")}catch(c){p.error("Error fetching user data:",c)}})()},[n,t]),o?e.jsx(Re,{children:e.jsx("div",{className:"container",children:e.jsxs(Ee,{children:[e.jsx(H,{children:"Profile Setting"}),e.jsxs(Ce,{children:[e.jsx(he,{}),e.jsx(Ae,{})]})]})})}):e.jsx(E,{})}export{Me as default};
