import{s as r,t,j as e,a as M,u as C,d as I,e as T,b as h,f as L,g as u,h as ie,i as re,k as ae,m as w,I as ne,o as oe,p as se,q as de,v as le}from"./index-b250d32e.js";import{c as ce,a as O,e as W,f as pe,u as he,d as xe,F as J,b as me}from"./formik.esm-5082b8af.js";import{f as _,i as ue,s as ge,a as fe}from"./index-bb7e3403.js";import{T as be}from"./TitlePage-36f8c39e.js";const ye=r.div`
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
`,we=r.p`
font-weight: 400;
font-size: 12px;
line-height: 133%;
color: rgba(239, 237, 232, 0.8);


@media screen and (min-width: ${t.breakpoint.md}) {
  line-height: 150%;
}
`,ve=r.p`
font-size: 18px;
font-weight: 700;
line-height: 111%;
color: ${t.color.white};

@media screen and (min-width: $${t.breakpoint.md}) {
  font-size: 24px;
  line-height: 133%;
}
`,ke=r.div`
display: flex;
align-items: center;
gap:8px;
`,P=({svg:o,text:i,number:s,min:l})=>{const n=l?`${s} min`:s;return e.jsxs(ye,{children:[e.jsxs(ke,{children:[e.jsx("svg",{width:20,height:20,children:e.jsx("use",{href:`${M}#${o}`})}),e.jsx(we,{children:i})]}),e.jsx(ve,{children:n})]})},je=r.div`
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
`,$e=r.div`
    max-width: 439px;
    margin: 0 auto;
    @media screen and (min-width:${t.breakpoint.xl}){
      padding-left:64px;
      border-left:1px solid rgba(239, 237, 232, 0.2);
    }

`,De=r.div`
    display: flex;
    justify-content:flex-end;
    padding-right: 32px;
    margin-top:32px;
`,We=r.div`
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
`,_e=r.form`
    position: absolute;
    bottom: -26px;
    right: 37%;


@media screen and (min-width:${t.breakpoint.md}) {
    bottom: -36px;
    right: 40%;

  }
`,Se=r.div`
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
`;r.img`
    border-radius: 100px;
`;const Ie=r.div`
    cursor: pointer;
`,Fe=r.svg`
    fill: rgba(239, 237, 232, 0.1);
    width: 40px;
    height: 41px;
    @media screen and (min-width:${t.breakpoint.md}) {
        width: 68px;
        height: 68px;
  }
`,He=r.svg`
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
`,Me=r.p`
    color: #efede8;
    margin-top:18px; 

  @media screen and (min-width: ${t.breakpoint.md}) {
      font-size: 24px;
      line-height: 28px;
  }
`,Ce=r.p`
    font-size: 14px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.5);
    margin-top: 4px;

    @media screen and (min-width: ${t.breakpoint.md}) {
        margin-top: 8px;
  }
`,Ne=r.img`
    border-radius:50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
`,ze=()=>{const o=C(),i=I(T),[s,l]=h.useState(null),n=s||i.bodyData&&i.bodyData.avatar||null,x=e.jsx(Fe,{children:e.jsx("use",{href:n||`${M}#icon-user`})}),c=async a=>{const g=a.target.files[0];if(g)try{const f=URL.createObjectURL(g);l(f),o(L(g)).then(v=>{L.fulfilled.match(v)?u.success("File uploaded successfully"):u.error("Error uploading file: Server response not successful")}).catch(v=>{u.error("Error uploading file:",v)}).finally(()=>{l(null)})}catch(f){u.error("Error creating URL for file:",f),l(null)}};return e.jsxs(We,{children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx(Se,{children:n&&n!=="undefined"?e.jsx(Ne,{src:n,alt:"User Avatar"}):x}),e.jsxs(_e,{children:[e.jsx("input",{type:"file",id:"file-input",name:"file",style:{display:"none"},onChange:c,accept:"image/*"}),e.jsx("label",{htmlFor:"file-input",children:e.jsx(Ie,{children:e.jsx(He,{children:e.jsx("use",{href:`${M}#icon-check-mark`})})})})]})]}),e.jsx(Me,{children:i.name}),e.jsx(Ce,{children:"User"})]})},Ee=r.p`
    width:85%;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: rgba(239, 237, 232, 0.3);
    @media screen and (min-width: ${t.breakpoint.xl}) {
        font-size: 16px;
    }
`,Ue=r.div`
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
`,Te=()=>e.jsxs(Ue,{children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${M}#exclamation-mark`})}),e.jsx(Ee,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),Ae=()=>{const o=I(T),i=o.dailyCalorie,s=o.dailyExerciseTime;return e.jsxs($e,{children:[e.jsx(ze,{}),e.jsxs(je,{children:[e.jsx(P,{svg:"fork-knife",text:"Daily calorie intake",number:i}),e.jsx(P,{style:{flex:"1.1"},svg:"dumbbell",text:"Daily physical activity",number:s,min:!0})]}),e.jsx(Te,{}),e.jsx(De,{children:e.jsx(ie,{})})]})},Re=[{id:"1",value:"1",label:"1"},{id:"2",value:"2",label:"2"},{id:"3",value:"3",label:"3"},{id:"4",value:"4",label:"4"}],Le=[{id:"Male",value:"male",label:"Male"},{id:"Female",value:"female",label:"Female"}],Oe=[{id:"level-1",value:1,label:"Sedentary lifestyle (little or no physical activity)"},{id:"level-2",value:2,label:"Light activity (light exercises/sports 1-3 days per week)"},{id:"level-3",value:3,label:"Moderately active (moderate exercises/sports 3-5 days per week)"},{id:"level-4",value:4,label:"Very active (intense exercises/sports 6-7 days per week)"},{id:"level-5",value:5,label:"Extremely active (very strenuous exercises/sports and physical work)"}],Pe=[{id:"body-info-1",name:"height",label:"Height"},{id:"body-info-2",name:"currentWeight",label:"Current Weight"},{id:"body-info-3",name:"desiredWeight",label:"Desired Weight"}],Ve=ce().shape({name:O().required(),height:W().min(150).required(),currentWeight:W().min(35).required(),desiredWeight:W().min(35).required(),blood:W().oneOf([1,2,3,4]).required(),sex:O().oneOf(["male","female"]).required(),levelActivity:W().oneOf([1,2,3,4,5]).required(),birthday:pe().required("Birthday is required")}),qe=o=>{u.error(o)},D=({name:o})=>{const[,i]=he(o);return h.useEffect(()=>{i.error&&i.touched&&qe(i.error)},[i.error,i.touched]),null},Be=r(xe)`
    margin-top: 18px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: ${t.breakpoint.xl}){
        margin-top: 0;
  }
`,Je=r.div`
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
`,Ke=r.div`
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
`,Ye=r.div`
    display:flex;
    align-items:end;
    flex-wrap:wrap;
    gap:25px;
`,U=r(J)`
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
`,S=r.label`
    display: block;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${t.color.greyThird};
    margin-bottom: 5px;
    @media screen and (min-width: ${t.breakpoint.xl}){
        font-size: 14px;
    }
`,Ge=r(J)`
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

`,Qe=r.label`
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
`,V=r.div`
    display: flex;
    gap:8px;
`,Xe=r.label`
    display: flex;
    flex-direction:column;
    gap:10px;
`,Ze=r.button`
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
`,z=({id:o,value:i,name:s,label:l,onChange:n,checked:x})=>e.jsxs(Qe,{children:[e.jsx(Ge,{id:o,type:"radio",name:s,value:i,checked:x,onChange:n}),l]}),et=({label:o,name:i})=>e.jsxs("div",{children:[e.jsx(S,{children:o}),e.jsx(U,{type:"number",name:i}),e.jsx(D,{name:i})]}),tt=re`
  .profileHeadWrapper  .react-datepicker__wrapper {
    width: 133px;
    height: 24px;
  }

  .profileHeadWrapper  .react-datepicker__input-container{
    position: relative;
  }
  
  
  @media screen and (min-width: ${t.breakpoint.md}) {
    .profileHeadWrapper  .react-datepicker__wrapper {
      width: 159px;
  }
    .profileHeadWrapper  .react-datepicker__input-container{
      width: 159px;
  }
}

  .profileHeadWrapper  .react-datepicker {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 8px;
    width: 215px;
    min-height: 236px;
    background-color: ${t.color.orangeSecond};
    padding: 14px;
}

  .profileHeadWrapper  .react-datepicker__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 187px;
    background-color: ${t.color.orangeSecond};
    border-bottom: none;
}

  .profileHeadWrapper  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 187px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    border-bottom: none;
    padding-top: 14px;
}

  .profileHeadWrapper  .react-datepicker__current-month {
    height: 19px;
    white-space: nowrap;
    color: ${t.color.white};
}

  .profileHeadWrapper  .react-datepicker__day-name {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
}

  .profileHeadWrapper  .react-datepicker__navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${t.color.white};
}

  .profileHeadWrapper  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${t.color.white};
    margin-top: 6px;
}

  .profileHeadWrapper  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    color: ${t.color.white};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;
    cursor: pointer;
}

  .profileHeadWrapper  .react-datepicker__day--selected,
  .profileHeadWrapper  .react-datepicker__day--selected:hover,
  .profileHeadWrapper  .react-datepicker__day:hover,
  .profileHeadWrapper  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: ${t.color.black};
}


  .profileHeadWrapper  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
}

  .profileHeadWrapper  .react-datepicker__triangle {
    visibility: hidden;
}

  .profileHeadWrapper  .react-datepicker__month {
    width: 187px;
    min-height: 161px;
    margin: 0;
}

  .profileHeadWrapper  .react-datepicker__aria-live {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

  .profileHeadWrapper  .react-datepicker__month-container{
    display: flex;
    flex-direction: column;
    width: 187px;
    min-height: 161px;
    margin: 0;
}

  .profileHeadWrapper  .react-datepicker__day--outside-month{
    color: rgba(239, 237, 232, 0.2);
    opacity: 1;
}

  .profileHeadWrapper  .react-datepicker-wrapper .react-datepicker__input-container {
  display: inline-flex; 
  position: relative;
}

.profileHeadWrapper  .react-datepicker__tab-loop {
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 9998;
}

.profileHeadWrapper  .react-datepicker-popper {
  z-index: 9999;
}

.profInputWrapper {
  display: flex;
  align-items: center;
  width: 133px;
  height: 24px;
  border: none;
  padding: 0;
  background-color: ${t.color.black};
  color: ${t.color.white};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  @media screen and (min-width: ${t.breakpoint.md}) {
    width: 159px;   
    }
}

.profInput {
  width: 85px !important;
  height: 24px;
  background-color: ${t.color.black};
  color: ${t.color.white};
  border: none;
}

.profileHeadWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 1px solid rgba(239, 237, 232, 0.3);
    background: transparent;
    border-radius: 12px;
    padding: 14px;
    height: 46px;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    color: #efede8;
}
`,it=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 187px;
  height: 19px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${t.color.white};
  margin-bottom: 14px;
`,q=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 19px;
  padding: 0;
  background-color: transparent;
  border: none;
`,B=r.svg`
  width: 6px;
  height: 10px;
  stroke: ${t.color.white};
  stroke-width: 1.5;
  fill: ${t.color.white};
  stroke: ${t.color.white};
  cursor: pointer;
  `,rt=r.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${t.color.white};
`,at=r.svg`
  width: 18px;
  height: 18px;
  stroke: ${t.color.white};
  margin-left: auto;
  stroke-width: 1.5;
  cursor: pointer;
`,E="/ui-power-pulse/assets/sprait-112b8185.svg";const K=h.forwardRef((o,i)=>{const{formik:s}=o,l=C(),n=I(ae)||new Date,[x,c]=h.useState(""),a=h.useRef(null);h.useEffect(()=>{l(w(n)),c(_(n,"MMMM yyyy"))},[n,l]);const g=()=>{const d=ge(n,1);l(w(d.toISOString())),s.setFieldValue("birthday",d),s.setFieldTouched("birthday",!0)},f=()=>{const d=fe(n,1);l(w(d.toISOString())),s.setFieldValue("birthday",d),s.setFieldTouched("birthday",!0)},v=d=>{l(w(d.toISOString())),s.setFieldValue("birthday",d),s.setFieldTouched("birthday",!0)},A=h.forwardRef(({value:d,onClick:N,onKeyDown:Y},G)=>{const[k,j]=h.useState(""),[Q,X]=h.useState("");h.useEffect(()=>{j(d),X(d)},[d]);const Z=m=>{const p=m.target.value.replace(/\D/g,"");let b=p;if(p.length>2&&p.length<5?b=p.slice(0,2)+"-"+p.slice(2):p.length>=5&&(b=p.slice(0,2)+"-"+p.slice(2,4)+"-"+p.slice(4,8)),j(b),m.target.value.length===10){const[F,H,y]=b.split("-"),$=new Date(`${y}-${H}-${F}`);isNaN($.getTime())||(l(w($.toISOString())),s.setFieldValue("birthday",$),s.setFieldTouched("birthday",!0),v($))}},ee=()=>{(!R(k)||k.trim()==="")&&j(Q),(!R(k)||k.trim()==="")&&j(_(n,"dd-MM-yyyy"))},R=m=>/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/.test(m),te=m=>{if(m.key==="Enter"){m.preventDefault();const p=k.replace(/\//g,""),b=p.substring(0,2),F=p.substring(2,4),H=p.substring(4,8);let y;if(H.length<4){const $=new Date().getFullYear();y=new Date(`${$}-${F}-${b}`)}else y=new Date(`${H}-${F}-${b}`);if(!isNaN(y.getTime())){l(w(y.toISOString())),j(_(y,"dd-MM-yyyy"));return}j(_(n,"dd-MM-yyyy"))}};return e.jsxs("div",{className:"profInputWrapper",children:[e.jsx("input",{className:"profInput",type:"text",value:k,onChange:Z,onBlur:ee,onKeyDown:m=>{te(m),Y(m)},ref:G}),e.jsx(at,{onClick:N,children:e.jsx("use",{href:`${E}#calendar`})})]})});return A.displayName="CustomInputProf",e.jsxs(e.Fragment,{children:[e.jsx(ue,{ref:d=>{a.current=d,i&&(i.current=d)},...o,selected:n,onChange:v,dateFormat:"dd-MM-yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,2),customInput:e.jsx(A,{value:_(n,"dd-MM-yyyy"),onChange:()=>l(w),onKeyDown:d=>{d.key==="Enter"&&d.preventDefault()}}),renderCustomHeader:({decreaseMonth:d,increaseMonth:N})=>e.jsxs(it,{children:[e.jsx(q,{type:"button",className:"react-datepicker__navigation--previous","aria-label":"Previous Month",onClick:d,children:e.jsx(B,{onClick:g,children:e.jsx("use",{href:`${E}#arrow-left`})})}),e.jsx(rt,{className:"react-datepicker__current-month",children:x}),e.jsx(q,{type:"button",className:"react-datepicker__navigation--next","aria-label":"Next Month",onClick:N,children:e.jsx(B,{onClick:f,children:e.jsx("use",{href:`${E}#arrow-right`})})})]})}),e.jsx(tt,{})]})});K.displayName="TestDatepicker";const nt=()=>{var n,x;const o=C(),i=I(T),s={name:i.name||"Name",email:i.email,height:i.bodyData&&i.bodyData.height||150,currentWeight:i.bodyData&&i.bodyData.currentWeight||35,desiredWeight:i.bodyData&&i.bodyData.desiredWeight||35,birthday:new Date((n=i.bodyData)==null?void 0:n.birthday)||new Date,blood:i.bodyData.blood||1,sex:i.bodyData.sex||"male",levelActivity:parseInt((x=i.bodyData)==null?void 0:x.levelActivity,10)||1},l=async c=>{if(i.bodyData){if(JSON.stringify(c)===JSON.stringify(s))return;try{const{_id:a,...g}=i,f={_id:a,...c,blood:parseInt(c.blood,10)};o(oe({_id:a,...g.bodyData,...f})),u.success("Profile updated successfully")}catch(a){u.error("Error updating user data:",a)}}else u.warning("User bodyData is missing or not fully populated. Form not submitted.")};return e.jsx(me,{initialValues:s,validationSchema:Ve,onSubmit:l,children:c=>e.jsxs(Be,{children:[e.jsxs(Je,{children:[e.jsxs("div",{children:[e.jsx(S,{children:"Name"}),e.jsx(U,{type:"text",name:"name"}),e.jsx(D,{name:"name"})]}),e.jsxs("div",{children:[e.jsx(S,{children:"Email"}),e.jsx(U,{type:"email",name:"email",disabled:!0}),e.jsx(D,{name:"email"})]})]}),e.jsxs(Ke,{children:[Pe.map(a=>e.jsx(et,{id:a.id,name:a.name,label:a.label},a.id)),e.jsxs("div",{children:[e.jsx(S,{children:"Day of Birth"}),e.jsxs("div",{className:"profileHeadWrapper",style:{position:"relative"},children:[" ",e.jsx(K,{formik:c})]})]})]}),e.jsxs(Ye,{children:[e.jsxs("div",{children:[e.jsx(S,{children:"Blood"}),e.jsx(V,{children:Re.map(a=>e.jsx(z,{id:a.id,name:"blood",label:a.label,onChange:()=>c.setFieldValue("blood",a.id),checked:c.values.blood==a.id},a.id))}),e.jsx(D,{name:"blood"})]}),e.jsxs(V,{children:[Le.map(a=>e.jsx(z,{id:a.id,name:"sex",value:a.value,label:a.label},a.id)),e.jsx(D,{name:"sex"})]})]}),e.jsxs(Xe,{children:[Oe.map(a=>e.jsx(z,{id:a.id,name:"levelActivity",label:a.label,onChange:()=>c.setFieldValue("levelActivity",a.value),checked:c.values.levelActivity===a.value},a.id)),e.jsx(D,{name:"levelActivity"})]}),e.jsx(Ze,{type:"submit",disabled:!c.dirty,children:"Save"}),e.jsx(ne,{position:"top-right"})]})})},ot=r.section`
  padding-top: 101px;
  padding-bottom: 44px;
  @media (min-width: ${t.breakpoint.md}) {
    padding-top: 156px;
  }
`,st=r.div`
    @media screen and (min-width:${t.breakpoint.xl}){
        display:flex;
        flex-direction:row-reverse;
        gap:64px;
    }

`,dt=r.div`
  max-width: 335px;
  margin: 0 auto;
  @media (min-width: ${t.breakpoint.md}) {
    max-width: 686px;
  }
  @media (min-width: ${t.breakpoint.xl}) {
    max-width: 1248px;
  }
`;function xt(){const o=C(),i=I(n=>n.auth.token),[s,l]=h.useState(!1);return h.useEffect(()=>{(async()=>{try{if(i){const c=(await de.get("/users/current",{headers:{Authorization:`Bearer ${i}`}})).data;o(le(c)),l(!0)}else u.error("Token not available. Unable to fetch user data.")}catch(x){u.error("Error fetching user data:",x)}})()},[o,i]),s?e.jsx(ot,{children:e.jsx("div",{className:"container",children:e.jsxs(dt,{children:[e.jsx(be,{children:"Profile Setting"}),e.jsxs(st,{children:[e.jsx(Ae,{}),e.jsx(nt,{})]})]})})}):e.jsx(se,{})}export{xt as default};
