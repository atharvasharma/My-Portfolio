import React, { Component } from 'react';
import Popup from "reactjs-popup";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h2>Check Out Some of My Works.</h2>
        </div>
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                
                      <Popup trigger={
                        <div className="six columns">
                          <button>
                            <img src={item.imgurl} alt="project-image"></img>
                            <h1>{item.name}</h1>
                          </button>
                        </div>
                      } modal closeOnDocumentClick>
                        {close => (
                          <div className="modal">
                            <a onClick={close} className="closeButton">
                              &times;
                            </a>
                            <div className="twelve columns collapsed">
                              <h2 className="header">{item.name}</h2>
                            </div>
                            <div className="seven columns collapsed modalContent">
                              {item.description1}
                              <br></br><br></br>
                              {item.description2}
                            </div>
                            <div className="five columns collapsed modalContent">
                              <img src={item.diagram} alt="project-image" className="modalImage"></img>
                              <a href={item.link} target="_blank">Source Code</a>
                            </div>
                          </div>
                        )}
                      </Popup>
                    
              )
            })
          }
        <div className="twelve columns collapsed viewMore">
          <a href="https://github.com/atharvasharma?tab=repositories" target="_blank">View More</a>
        </div>
        </div>
        
      {/* <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup> */}
  </section>
  
        );
  }
}