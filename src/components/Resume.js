import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="twelve columns  text-center">
               <h1><span>Education</span></h1>
            </div>
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <React.Fragment key={item}>
                    <div className="three columns">
                      <img src={item.ImageUrl} alt="LNMIIT logo"/>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                          <div className="twelve columns">
                              <h3>{item.UniversityName}</h3>
                              <p className="info">
                                <h5>{item.specialization}  <em className="date">({item.MonthOfPassing} {item.YearOfPassing})</em></h5>
                              </p>
                              <span>
                              CGPA: {item.CGPA}<br />
                              Societies : {item.Societies}
                              </span>
                          </div>
                        </div>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>
          
          <div className="row work">
            <div className="twelve columns  text-center">
               <h1><span>Work Experience</span></h1>
            </div>
            {
              resumeData.work && resumeData.work.map((item)=>{
                return(
                  <React.Fragment key={item}>
                    
                      <div className="three columns givePadding">
                        <img src={item.ImageUrl} alt="Company logo" className="companyImage"/>
                      </div>
                      <div className="nine columns main-col givePadding">
                          <div className="row item">
                            <div className="twelve columns">
                                <h3>{item.CompanyName}</h3>
                                <p className="info">
                                  <h5>{item.specialization}  <em className="date">({item.MonthOfLeaving} {item.YearOfLeaving})</em></h5>
                                </p>
                                <span>
                                {item.Achievements}
                                </span>
                            </div>
                          </div>
                      </div>
                    
                  </React.Fragment>
                )
              })
            }
            
          </div> 
          <div className="row education">
            <div className="twelve columns  text-center">
               <h1><span>Position of Responsibility</span></h1>
            </div>
            {
              resumeData.positions && resumeData.positions.map((item)=>{
                return(
                  <React.Fragment key={item}>
                       <div className="three columns givePadding">
                        <img src={item.imageUrl} className="positionsImage"/>
                      </div>
                      <div className="nine columns main-col givePadding">
                          <div className="row item">
                            <div className="twelve columns">
                                <h3>{item.organization}</h3>
                                <p className="info">
                                  <h5>{item.designation}</h5>
                                </p>
                                <span>
                                {item.role}
                                </span>
                            </div>
                          </div>
                      </div>
                  </React.Fragment>
                )
              })
            }
          </div>
          <div className="row skills">
            <div className="twelve columns  text-center">
               <h1><span>Skills</span></h1>
            </div>
            {
              resumeData.skills && resumeData.skills.map((item)=>{
                return(
                  <React.Fragment key={item}>
                    <div className="two columns">
                      <button>{item}</button>
                    </div>
                  </React.Fragment>
                )
              })
            }
          </div>
          
          
         
      </section>
    );
  }
}