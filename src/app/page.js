import Image from "next/image";
import './Page.css'


export default function Home() {
  return (
    <div className="page">

      {/* Page Heading Section */}
      <section className="headline">
        <h1 className="h1">About Me</h1>
        <div className="border-decore"></div>
      </section>

      {/* Content1 */}
      <section className="page-content">
        {/* <p>
          I am a skilled Full Stack Web Developer from Lucknow, with extensive experience in developing responsive, user-centric web applications. I focus on building solutions that are not only efficient and scalable but also visually engaging and easy to use.
        </p>
        <p>Proficient in both frontend and backend technologies, I deliver end-to-end web solutions tailored to meet real-world needs. I take pride in writing clean, maintainable code and simplifying complex challenges into streamlined, effective features.</p> */}
        <p>Passionate Full Stack Web Developer from Lucknow, delivering end-to-end web solutions designed to solve real-world problems.</p>
        <p>I have strong experience in building intuitive user interfaces and developing CRUD APIs, and I am always open to exploring new areas of programming. I believe continuous learning and consistency are the key drivers of both personal and professional success.</p>
      </section>

      {/* Page Heading Section */}
      <section className="headline">
        <h1 className="h2">What I am doing</h1>
      </section>

      {/* For Card Collections */}
      <section className="page-cards">

        <div className="card">
          <Image src={"/icons/backend.svg"} width={30} height={30} alt="mail-icon" className="icon" />
          <div>
            <h2>Backend Development</h2>
            <p>Utilized SAP CAPM for backend development, and also proficient in building scalable services using Spring Boot and Express.</p>
          </div>
        </div>

        <div className="card">
          <Image src={"/icons/frontend.svg"} width={30} height={30} alt="mail-icon" className="icon" />
          <div>
            <h2>Frontend Development</h2>
            <p>Implemented frontend solutions with SAP Fiori UI5, also experienced in developing user interfaces using React.js.</p>
          </div>
        </div>

        <div className="card">
          <Image src={"/icons/cloud.svg"} width={30} height={30} alt="mail-icon" className="icon" />
          <div>
            <h2>BTP Cloud Platform</h2>
            <p>Experienced in administering and configuring BTP Cloud Platform, with exposure to key modules like CTMS, SBPA, and CIS, etc.</p>
          </div>
        </div>

        <div className="card">
          <Image src={"/icons/book.svg"} width={30} height={30} alt="mail-icon" className="icon" />
          <div>
            <h2>Learning</h2>
            <p>Possess a strong enthusiasm for continuous learning, especially in emerging technologies. I regularly engage in upskilling to adapt to evolving project needs.</p>
          </div>
        </div>

      </section>


      {/* Page Heading Section */}
      <section className="headline">
        <h1 className="h2">Technologies and Tools</h1>
      </section>

      <section className="page-badge">

        <div className="badges">
          <Image src={"/icons/sap.png"} width={50} height={30} alt="SAP-icon" />
          <p>SAP</p>
        </div>

        <div className="badges">
          <Image src={"/icons/nodejs.png"} width={30} height={30} alt="NodeJS-icon" className="badge-icon" />
          <p>Node JS</p>
        </div>

        <div className="badges">
          <Image src={"/icons/express.png"} width={60} height={30} alt="ExpressJS-icon" />
          <p>Express JS</p>
        </div>

        <div className="badges">
          <Image src={"/icons/js.png"} width={30} height={30} alt="JS-icon" className="badge-icon" />
          <p>JS</p>
        </div>

        <div className="badges">
          <Image src={"/icons/nextjs.png"} width={30} height={30} alt="NextJS-icon" className="icon" />
          <p>Next JS</p>
        </div>

        <div className="badges">
          <Image src={"/icons/react.png"} width={30} height={30} alt="ReactJS-icon" className="badge-icon " />
          <p>React JS</p>
        </div>

        <div className="badges">
          <Image src={"/icons/github.png"} width={30} height={30} alt="GitHub-icon" className="icon" />
          <p>Git Hub</p>
        </div>

        <div className="badges">
          <Image src={"/icons/git.png"} width={30} height={30} alt="Git-icon" className="badge-icon" />
          <p>Git</p>
        </div>

        <div className="badges">
          <Image src={"/icons/springboot.png"} width={30} height={30} alt="Springboot-icon" className="badge-icon" />
          <p>Spring Boot</p>
        </div>

        <div className="badges">
          <Image src={"/icons/java.png"} width={30} height={30} alt="Java-icon" className="badge-icon" />
          <p>Java</p>
        </div>

        <div className="badges">
          <Image src={"/icons/bootstrap.png"} width={40} height={30} alt="bootstrap-icon" />
          <p>Bootstrap</p>
        </div>

        <div className="badges">
          <Image src={"/icons/css.png"} width={30} height={30} alt="css-icon" />
          <p>CSS</p>
        </div>

        <div className="badges">
          <Image src={"/icons/html.png"} width={30} height={30} alt="html-icon" />
          <p>HTML</p>
        </div>

        <div className="badges">
          <Image src={"/icons/postman.png"} width={30} height={30} alt="postman-icon" className="badge-icon" />
          <p>Postman</p>
        </div>

      </section>

    </div>
  );
}
