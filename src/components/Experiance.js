import React from "react";

const Experience = () => {
    return (
      <div className="experience">
          <div className="d-flex justify-content-center my-5">
          <h1>Experience</h1>
          </div>
          <div className="container experience-wrapper">
              <div className="timeline-block timeline-block-left">
                  <div className="marker"></div>
                  <div className="timeline-content">
                      <h3>2020-current</h3>
                      <h4>Process Technician</h4>
                      <h5>Samsung</h5>
                      <h6>Austin, TX</h6>
                      <p>Responsible for change point management and verification, monitoring and maintaining test wafer inventory, responding to statistical process control interlocks on product and non-product, assisting the engineering team with tests, dispositioning abnormal material, safely recovering product during equipment faults, and interfacing with the manufacturing operators.</p>
                  </div>
              </div>
              {/*--*/}
              <div className="timeline-block timeline-block-right">
                  <div className="marker"></div>
                  <div className="timeline-content">
                      <h3>2018-2020</h3>
                      <h4>Qual Technician</h4>
                      <h5>Infineon Technologies AG</h5>
                      <h6>Austin, TX</h6>
                      <p>• Worked in a cleanroom environment
• Followed general fab protocol for a 12 hours shift
• Attended daily pass downs
• Qualed the tools making sure they are running without any issue.
Certified in:
AMAT Producer a-C Operations Spec
CVD TiN Operations & Procedures
AMAT Centura Rapid Thermal Anneal
DNS Scrubber Operation
Prometrix RS-555/TC Spec
Optiprobe 1600/2500/2600 Operation
</p>
                  </div>
              </div>
                {/*--*/}
                {/* <div className="timeline-block timeline-block-right">
                  <div className="marker"></div>
                  <div className="timeline-content">
                      <h3>2014-15</h3>
                      <p>Detail-oriented and solutions-driven full stack web developer with a Coding Boot Camp Certificate from the University of Texas at Austin. Experience in MERN stack utilizing a combination of strong communication, collaboration, problem-solving, and analytical skills. Strong ability to design, build, and maintain websites from conception to production. Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.</p>
                  </div>
              </div> */}
          </div>
      </div>
    )
}

export default Experience;