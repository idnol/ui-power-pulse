import{s as a,t,j as e,b as g,u as k,d as b,e as $,a as u,f as _,g as c,h as F,i as z,I as U,k as L,m as A,o as E,p as R}from"./index-afe6ff0f.js";import{c as C,a as D,e as h,f as O,u as q,d as T,F as S,b as N}from"./formik.esm-5b452a89.js";import{i as P}from"./index-48b9bc1c.js";import{T as M}from"./TitlePage-ce18b1ad.js";const B=a.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  gap: 28px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);


  @media screen and (min-width: ${t.breakpoint.md}) {
    padding: 14px;

  }
`,V=a.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${t.breakpoint.md}) {
  line-height: 150%;
}
`,Y=a.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${t.color.white};

@media screen and (min-width: $${t.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,H=a.div`
display: flex;
align-items: center;
gap:8px;
`,W=({svg:n,text:i,number:d,min:l})=>{const s=l?`${d} min`:d;return e.jsxs(B,{children:[e.jsxs(H,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${g}#${n}`})}),e.jsx(V,{children:i})]}),e.jsx(Y,{children:s})]})},J=a.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    gap: 14px;
    justify-content: center;
    @media screen and (max-width: ${t.breakpoint.sm}) {
      max-width: 100%;
    }
    @media screen and (min-width: ${t.breakpoint.md}) {
      gap: 16px;
    }
`,G=a.div`
    max-width: 439px;
    margin: 0 auto;
    @media screen and (min-width:${t.breakpoint.xl}){
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
    @media screen and (min-width: ${t.breakpoint.md}) and (max-width:${t.breakpoint.xl}) {
        margin-top: 64px;
  }
    @media screen and (${t.breakpoint.xl}){
        margin-top: 0;
  }
`,Q=a.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${t.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`,Z=a.div`
    width: 90px;
    height: 90px;
    position: relative;
    border-radius: 100px;
    border: 1px solid #e6533c;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:${t.breakpoint.md}) {
        width: 150px;
        height: 150px;
  }
`;a.img`
    border-radius: 100px;
`;const ee=a.div`
    cursor: pointer;
`,te=a.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${t.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`,ie=a.svg`
    width: 24px;
    height: 24px;
    position: relative;
    top: -13px;
    left: 0px;

  @media screen and (min-width:${t.breakpoint.md}) {
      width: 32px;
      height: 32px;
      top: -17.5px;
  }
`,ae=a.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${t.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`,re=a.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${t.breakpoint.md}) {
        margin-top: 8px;
  }
`,ne=a.img`
    border-radius:50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
`,oe=()=>{const n=k(),i=b($),[d,l]=u.useState(null),s=d||i.bodyData&&i.bodyData.avatar||null,o=e.jsx(te,{children:e.jsx("use",{href:s||`${g}#icon-user`})}),r=async f=>{const x=f.target.files[0];if(x)try{const y=URL.createObjectURL(x);l(y),n(_(x)).then(w=>{_.fulfilled.match(w)?c.success("File uploaded successfully"):c.error("Error uploading file: Server response not successful")}).catch(w=>{c.error("Error uploading file:",w)}).finally(()=>{l(null)})}catch(y){c.error("Error creating URL for file:",y),l(null)}};return e.jsxs(K,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Z,{children:s&&s!=="undefined"?e.jsx(ne,{src:s,alt:"User Avatar"}):o}),e.jsxs(Q,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:r,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(ee,{children:e.jsx(ie,{children:e.jsx("use",{href:`${g}#icon-check-mark`})})})})]})]}),e.jsx(ae,{children:i.name}),e.jsx(re,{children:"User"})]})},se=a.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${t.breakpoint.xl}) {
        font-size: 16px;
    }
`,de=a.div`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width:335px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    max-width:335px;
    @media screen and (min-width: ${t.breakpoint.md}) {
        max-width:439px;
    }
`,le=()=>e.jsxs(de,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${g}#exclamation-mark`})}),e.jsx(se,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),ce=()=>{const n=b($),i=n.dailyCalorie,d=n.dailyExerciseTime;return e.jsxs(G,{children:[e.jsx(oe,{}),e.jsxs(J,{children:[e.jsx(W,{svg:"fork-knife",text:"Daily calorie intake",number:i}),e.jsx(W,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:d,min:!0})]}),e.jsx(le,{}),e.jsx(X,{children:e.jsx(F,{})})]})},pe=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],xe=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],he=[{id:"level-1",value:1,label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:2,label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:3,label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:4,label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:5,label:"Extremely active (very strenuous exercises/sports and physical work)"}],me=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],ge=C().shape({name:D().required(),height:h().min(150).required(),currentWeight:h().min(35).required(),desiredWeight:h().min(35).required(),birthday:O().min(new Date(new Date().getFullYear()-18,0,1)).required(),blood:h().oneOf([1,2,3,4]).required(),sex:D().oneOf(["male","female"]).required(),levelActivity:h().oneOf([1,2,3,4,5]).required()}),ue=n=>{c.error(n)},p=({name:n})=>{const[,i]=q(n);return u.useEffect(()=>{i.error&&i.touched&&ue(i.error)},[i.error,i.touched]),null},be=a(T)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: ${t.breakpoint.xl}){
        margin-top: 0;
  }
`,fe=a.div`
    margin-top: 20px;
    display: flex;
    flex-direction:column;
    gap:14px;

@media screen and (min-width: ${t.breakpoint.md}) {
  flex-direction:row;
    margin-top: 40px;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    }
    input {
        width: 335px;
    }
    @media screen and (min-width: ${t.breakpoint.xl}){
        margin: 0;
    }
`,ye=a.div`
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    @media screen and (min-width: ${t.breakpoint.md}){
        flex-wrap: nowrap;
    }
    input {
        width: 160px;
    @media screen and (min-width: ${t.breakpoint.md}) and (max-width: ${t.breakpoint.xl}) {
        width: 165px;
  }
  }
`,we=a.div`
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
    color: ${t.color.white};


    @media screen and (min-width: ${t.breakpoint.md}) and (max-width: ${t.breakpoint.xl}) {
        width: 341px;
    }

    &:disabled{
        color: ${t.color.greySecond};

    }
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
`,m=a.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${t.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width: ${t.breakpoint.xl}){
        font-size: 14px;
    }
`,ve=a(S)`
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
      border:1.5px solid ${t.color.orange};
    
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        background-color: ${t.color.orange};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      } 
  }

`,je=a.label`
    display: flex;
    align-items:center;
    gap:8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: var(--white);
    height: 36px;
    @media screen and (min-width: ${t.breakpoint.xl}){
        font-size: 16px;
    }
`,I=a.div`
    display: flex;
    gap:8px;
`,ke=a.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`,$e=a.button`
    cursor: pointer;
    border: none;
    background-color: ${t.color.orange};
    border-radius: 12px;
    padding: 12px 40px;
    width: 115px;
    height: 42px;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    color: ${t.color.white};
    &:disabled{
        color: ${t.color.greySecond};
    }
`,v=({id:n,value:i,name:d,label:l,onChange:s,checked:o})=>e.jsxs(je,{children:[e.jsx(ve,{id:n,type:"radio",name:d,value:i,checked:o,onChange:s}),l]}),_e=({label:n,name:i})=>e.jsxs("div",{children:[e.jsx(m,{children:n}),e.jsx(j,{type:"number",name:i}),e.jsx(p,{name:i})]}),De=z`
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

`,We=a.svg`
  position: absolute;
  right: 14px;
  top: 14px;
`;a.div`
  position: absolute;
  left: -40%;
  top: 50%;
  transform: translate(0%, 0%);
  z-index: 999;
`;const Ie=a.input`
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
  color: ${t.color.white};
`,Se="/ui-power-pulse/assets/sprait-112b8185.svg",Fe=({number:n})=>e.jsxs(e.Fragment,{children:[e.jsx(We,{width:"18",height:"18",children:e.jsx("use",{href:`${Se}#icon-calendar`})}),e.jsx(P,{showYearDropdown:!0,scrollableYearDropdown:!0,maxDate:new Date,value:n,customInput:e.jsx(Ie,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:i=>i.substring(0,1),showMonthDropdown:!0}),e.jsx(De,{})]}),ze=()=>{var s;const n=k(),i=b($),d={name:i.name||"Name",email:i.email,height:i.bodyData&&i.bodyData.height||150,currentWeight:i.bodyData&&i.bodyData.currentWeight||35,desiredWeight:i.bodyData&&i.bodyData.desiredWeight||35,birthday:"2006-01-02",blood:i.bodyData.blood||1,sex:i.bodyData.sex||"male",levelActivity:parseInt((s=i.bodyData)==null?void 0:s.levelActivity,10)||1},l=async o=>{if(i.bodyData){if(JSON.stringify(o)===JSON.stringify(d)){c.error("Nothing to change");return}try{const{_id:r,...f}=i,x={_id:r,...o,blood:parseInt(o.blood,10)};n(L({_id:r,...f.bodyData,...x})),c.success("Profile updated successfully")}catch(r){c.error("Error updating user data:",r)}}else c.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(N,{initialValues:d,validationSchema:ge,onSubmit:l,children:o=>e.jsxs(be,{children:[e.jsxs(fe,{children:[e.jsxs("div",{children:[e.jsx(m,{children:"Name"}),e.jsx(j,{type:"text",name:"name"}),e.jsx(p,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(m,{children:"Email"}),e.jsx(j,{type:"email",name:"email",disabled:!0}),e.jsx(p,{name:"email"})]})]}),e.jsxs(ye,{children:[me.map(r=>e.jsx(_e,{id:r.id,name:r.name,label:r.label},r.id)),e.jsxs("div",{children:[e.jsx(m,{children:"Day of Birth"}),e.jsxs("div",{style:{position:"relative"},children:[" ",e.jsx(Fe,{number:d.birthday})]})]})]}),e.jsxs(we,{children:[e.jsxs("div",{children:[e.jsx(m,{children:"Blood"}),e.jsx(I,{children:pe.map(r=>e.jsx(v,{id:r.id,name:"blood",label:r.label,onChange:()=>o.setFieldValue("blood",r.id),checked:o.values.blood==r.id},r.id))}),e.jsx(p,{name:"blood"})]}),e.jsxs(I,{children:[xe.map(r=>e.jsx(v,{id:r.id,name:"sex",value:r.value,label:r.label},r.id)),e.jsx(p,{name:"sex"})]})]}),e.jsxs(ke,{children:[he.map(r=>e.jsx(v,{id:r.id,name:"levelActivity",label:r.label,onChange:()=>o.setFieldValue("levelActivity",r.value),checked:o.values.levelActivity===r.value},r.id)),e.jsx(p,{name:"levelActivity"})]}),e.jsx($e,{type:"submit",disabled:!o.dirty,children:"Save"}),e.jsx(U,{position:"top-right"})]})})},Ue=a.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${t.breakpoint.md}) {
    padding-top: 156px;
  }
`,Le=a.div`
    @media screen and (min-width:${t.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`,Ae=a.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${t.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${t.breakpoint.xl}) {
    max-width: 1248px;
  }
`;function qe(){const n=k(),i=b(s=>s.auth.token),[d,l]=u.useState(!1);return u.useEffect(()=>{(async()=>{try{if(i){const r=(await E.get("/users/current",{headers:{Authorization:`Bearer ${i}`}})).data;n(R(r)),l(!0)}else c.error("Token not available. Unable to fetch user data.")}catch(o){c.error("Error fetching user data:",o)}})()},[n,i]),d?e.jsx(Ue,{children:e.jsx("div",{className:"container",children:e.jsxs(Ae,{children:[e.jsx(M,{children:"Profile Setting"}),e.jsxs(Le,{children:[e.jsx(ce,{}),e.jsx(ze,{})]})]})})}):e.jsx(A,{})}export{qe as default};
