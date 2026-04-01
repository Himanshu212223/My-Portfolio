import Image from "next/image";
import "@/app/Page.css";

export default function Resume() {
  return (
    <div className="page">
      {/* Page Heading Section */}
      <section className="headline">
        <h1 className="h1">Resume</h1>
        <div className="border-decore"></div>
      </section>

      {/* Details section */}
      <section className="details">
        
        <div className="details-heading">
          <div className="details-header-icon">
            <Image src={"/icons/book.svg"} width={30} height={30} alt="mail-icon" className="icon" />
          </div>
          <h2>Experience</h2>
        </div>

        <div className="details-content">
          <ul>
            <li>
              <h3>Infosys Pvt Ltd</h3>
              <p className="details-content-item highlight">2022 - Present</p>
              <p className="details-content-item">Upon joining the organization, I received training in Java Spring Boot for backend development, followed by HTML, CSS, JavaScript, and Node.js frontend logic.</p>
              <p className="details-content-item">Later, I was also trained in SAP Fiori UI5 for frontend and SAP CAPM for backend development.</p>
              
              <p className="details-content-item">Here are the few projects which I can highlight - </p>
              
              <h3 className="details-content-item sub-heading">HANA DB Accelerator Application</h3>
              
              <p className="details-content-item">This UI5 CAP application was designed to synchronize database records between two environments.</p>
              <p className="details-content-item">It consumes events from Event Mesh and stores the relevant data in an entity, followed by triggering an SBPA workflow for application owner approval.</p>
              <p className="details-content-item">Upon approval, the application retrieves entity data from both environments using configured destinations, calculates the delta between records, and updates the entity of both the environments to ensure they are in sync.</p>

              <h3 className="details-content-item sub-heading">Project Transport Management Application</h3>

              <p className="details-content-item">This UI5 CAP application was designed to enable project teams to manage and store Work Package and Transport Request details.</p>
              
              <p className="details-content-item">Based on this data, the application consumes the cTMS destination and invokes its APIs to fetch the current status of transport requests.</p>
              
              <p className="details-content-item">It provides a centralized solution for both the BTP Platform Team and Project Teams to efficiently monitor and track the production movement of projects.</p>

              <h3 className="details-content-item sub-heading">Destination Management Application</h3>

              <p className="details-content-item">This UI5 CAP application serves as a centralized solution to retrieve and view destination details across multiple subaccounts. It consumes the Destination Service APIs to fetch destination data based on user-defined search criteria and displays the results seamlessly within the UI5 application.</p>
              
            </li>
            


            <li>
              <h3>Cognizant</h3>
              <p className="details-content-item highlight">January 2022 - May 2022</p>
              <p className="details-content-item">I did my Intern from Cognizant Technology Solutions were I learned HTML, CSS, JS, React JS Library for Frontend UI Development.</p>
              <p className="details-content-item">Also learned Java with Spring Boot for Backend Development.</p>
            </li>
          </ul>
        </div>
        
      </section>

      {/* Education Details section */}
      <section className="details">
        
        <div className="details-heading">
          <div className="details-header-icon">
            <Image src={"/icons/book.svg"} width={30} height={30} alt="mail-icon" className="icon" />
          </div>
          <h2>Education</h2>
        </div>

        <div className="details-content">
          <ul>
            <li>
              <h3>Btech</h3>
              <p className="details-content-item highlight">2018-2022</p>
              <p className="details-content-item">I have completed by Btech in Electrical Engineering from Shri Ramswaroop Memorial Group Of Professional Colleges affiliated by Dr. A. P. J. Abdul Kalam Technical University.</p>
            </li>
            <li>
              <h3>Intermediate</h3>
              <p className="details-content-item highlight">2016-2018</p>
              <p className="details-content-item">Lucknow Public School and Colleges, Lucknow.</p>
            </li>
            <li>
              <h3>High School</h3>
              <p className="details-content-item highlight">2016-2018</p>
              <p className="details-content-item">Lucknow Public School and Colleges, Lucknow.</p>
            </li>
          </ul>
        </div>
        
      </section>
      
    </div>
  );
}
