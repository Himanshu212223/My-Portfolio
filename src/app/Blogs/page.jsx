import Image from "next/image";
import "@/app/Page.css";

export default function Blogs() {
  return (
    <div className="page">
      {/* Page Heading Section */}
      <section className="headline">
        <h1 className="h1">Blog</h1>
        <div className="border-decore"></div>
      </section>

      <section className="blog-groups">

        <span className="blog-card">
          {/* <iframe src="https://sap-blogs-ipsm.vercel.app/" ></iframe> */}
           <Image src={"/blogpage.png"} width={300} height={100} alt="mail-icon" className="blog-image" />
           <p className="blog-card-design">Design - Sep, 2024</p>
           <h2 className="blog-card-heading">SAP Blogs</h2>
          <p className="blog-card-content">This blog serves as a space to document and share my learning journey.</p>
        </span>

      </section>      
    </div>
  );
}
