import React from 'react'
import Select from 'react-select';


const roles = [
  {value:'backend', label: 'Backend'},
  {value:'frontend', label: 'Frontend'},
  {value:'fullstack', label: 'Fullstack'},
  {value:'ios', label: 'IOS'},
  {value:'flutter', label: 'Flutter'},
  {value:'react native', label: 'React Native'},
  {value:'android', label: 'Android'},
  {value:'frontend', label: 'Frontend'},
  {value:'tech lead', label: 'Tech Lead'},
  {value:'dev-ops', label: 'Dev-Ops'},
  {value:'data engineer', label: 'Data Engineer'},
  {value:'data science', label: 'Data Science'},
  {value:'computer-vision', label: 'Computer-Vision'},
  {value:'nlp', label: 'NLP'},
  {value:'deep learning', label: 'Deep Learning'},
  {value:'test / qa', label: 'Test / QA'},
  {value:'web3', label: 'Web3'},
  {value:'sre', label: 'SRE'},
  {value:'data-infrastructure', label: 'Data-Infrastructure'},
  {value:'designer', label: 'Designer'},
  {value:'design manager', label: 'Design Manager'},
  {value:'graphic designer', label: 'Graphic Designer'},
  {value:'product designer', label: 'Product Designer'},
  {value:'product manager', label: 'Product Manager'},
  {value:'operations manager', label:'Operations Manager'},
  {value:`founder's office/ chief of staff`, label:`Founder's Office/Chief Of Staff`},
  {value:'sales development representative', label: 'Sales Development Representative'},
  {value:'account executive', label: 'Account Executive'},
  {value:'account manager', label: 'Account Manager'},
  {value:'digital marketing manager', label: 'Digital Marketing Manager'},
  {value:'growth hacker', label: 'Growth Hacker'},
  {value:'marketing', label: 'Marketing'},
  {value:'product marketing manager', label: 'Product Marketing Manager'},
  {value:'hardware', label:'Hardware'},
  {value:'mechanical', label: 'Mechanical'},
  {value:'systems', label: 'Systems'},
  {value:'business analyst', label: 'Business Analyst'},
  {value:'data analyst', label:'Data Analyst'},
  {value:'project manager', label: 'Project Manager'},
  {value:'management', label: 'Management'},
  {value:'legal', label: 'Legal'},
  {value:'hr', label: 'HR'},
  {value:'finance', label: 'Finance'},
  
];
function Filter() {
  return (
    <div>
      <Select
      // defaultValue={[colourOptions[2], colourOptions[3]]}
      isMulti
      name="colors"
      options={roles}
      className="basic-multi-select"
      classNamePrefix="select"
      />
    </div>
  )
}

export default Filter