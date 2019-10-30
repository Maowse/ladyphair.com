import React from 'react';

const Resume = () => (
  <div>
    <h1>Resume</h1>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <div style={{minWidth:'60%', maxWidth: '60%'}}>
        <h3>Professional Experience</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{minWidth:'80%'}}>
            <div>Software Engineer, Sr.</div>
            <div>ProQuest - Bethesda, MD</div>
          </div>
          <div style={{minWidth:'20%'}}>
            May 2017 - Present
          </div>
        </div>
        <div>
          <ul>
            <li>Worked as a full stack developer while implementing a Content Management System (CMS) for ProQuest editors to use during editorial curation</li>
            <li>Converted the CMS from AngularJS to Angular within a year</li>
            <li>Collaborated with UI/UX team to convert designs into working features</li>
            <li>Developed and maintained Java microservices to support data processing and front-end applications</li>
            <li>Managed, deployed and monitored cloud infrastructure on AWS</li>
          </ul>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{minWidth:'80%'}}>
            <div>Web Developer/Senior Developer</div>
            <div>Shivan Computers Corporation - Washington, DC</div>
          </div>
          <div style={{minWidth:'20%'}}>
            May 2016 - May 2017
          </div>
        </div>
        <div>
          <ul>
            <li>Implemented a variety of web applications for the U.S. Energy Information Administration</li>
            <li>Assisted in converting the eia.gov website from a ColdFusion to PHP backend</li>
            <li>Developed a forecasting web tool for EIA analysts to use when predicting future oil consumption/supply
across the world</li>
          </ul>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{minWidth:'80%'}}>
            <div>Software Developer</div>
            <div>Pillar Innovations LLC - Morgantown, WV</div>
          </div>
          <div style={{minWidth:'20%'}}>
            June 2013 - May 2016
          </div>
        </div>
        <div>
          <ul>
            <li>Created a time tracking application for Pillar employees to use to record their time sheets, which supported both desktop and mobile versions of the app. Data collected in the app was able to be exported for use in accounting software, resulting in cost savings for the company.</li>
            <li>Migrated internal infrastructure to AWS</li>
            <li>Created an IOT solution in conjunction with an engineering team to gather stain data from gas pipe
devices in the field. Customers could then access the data via a web portal, as well as receive
customized alerts and perform other device management functions.</li>
            <li>Developed a quality control application for tracking, recording and reporting pipe measurements during
a customer project.</li>
          </ul>
        </div>
        <h3>Education</h3>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{minWidth:'80%'}}>
            <div>Master of Engineering in Systems Engineering</div>
            <div>Pennsylvania State University</div>
            <div>GPA: 3.64</div>
          </div>
          <div style={{minWidth:'20%'}}>
            June 2014 - May 2016
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{minWidth:'80%'}}>
            <div>Bachelor of Science in Computer Science</div>
            <div>Minor in Philosophy</div>
            <div>West Virginia University</div>
            <div>GPA: 3.71, Magna Cum Laude</div>
          </div>
          <div style={{minWidth:'20%'}}>
            Aug. 2009 - May 2013
          </div>
        </div>
      </div>
      <div style={{minWidth: '40%', maxWidth: '60%'}}>
        <h3>Skill Highlights</h3>
        <div>Angular</div>
        <div>Java</div>
        <div>JavaScript</div>
        <div>SQL</div>
      </div>
    </div>
  </div>
);

export default Resume;
