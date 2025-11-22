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
              <p className="details-content-item">Worked as part of the development team to create a simple banking application using trained technologies.</p>
              <p className="details-content-item">Later, I was also trained in SAP Fiori UI5 for frontend and SAP CAPM for backend development.</p>
              <p className="details-content-item">Using these, I developed full-stack applications with Fiori and CAPM. In addition to development, I was responsible for administrating the SAP Cloud Platform.</p>
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
