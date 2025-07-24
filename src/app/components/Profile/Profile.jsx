"use client"

import { useState } from "react";
import "./Profile.css";
import Image from "next/image";

const Profile = () => {

    const [showBottom, setShowBottom] = useState("bottom-profile-hide");

    const toggleShowMore = () => {
        if(showBottom === "bottom-profile-hide"){
            setShowBottom("bottom-profile");
        }
        else{
            setShowBottom("bottom-profile-hide");
        }
    }

    
  return (
    <section className="profile">
      
      <div className="top-profile" onClick={toggleShowMore}>

        {/* Profile Picture Section */}
        <section className="profile-pic-section">
          <span className="profile-pic-container">
            <Image src={"/Picture2.jpg"} layout="fill" alt="profile picture" className="profile-pic" />
          </span>
        </section>
        
        {/* Basic Info below the Picture */}
        <section className="profile-basic-details">
          <h1 className="h1">Himanshu</h1>
          <span className="quality">Web Developer</span>
        </section>
        
        <section className="down-arrow">
          <Image src={"/icons/down.svg"} width={20} height={20} alt="mail-icon" className="icon" />
        </section>
        
      </div>



      <div className={showBottom}>
        
        <div className="bottom-profile-content">
          <span className="icon-pack">
            <Image src={"/icons/mail.svg"} width={20} height={20} alt="mail-icon" className="icon" />
          </span>
          <section>
            <label className="bottom-profile-label">Email</label>
            <p className="content email">himanshu212223@gmail.com</p>
          </section>
        </div>

        <div className="bottom-profile-content">
          <span className="icon-pack">
            <Image src={"/icons/phone.svg"} width={20} height={20} alt="mail-icon" className="icon" />
          </span>
          <section>
            <label className="bottom-profile-label">Phone</label>
            <p className="content">+91 90261 83710</p>
          </section>
        </div>

        <div className="bottom-profile-content">
          <span className="icon-pack">
            <Image src={"/icons/location.svg"} width={20} height={20} alt="mail-icon" className="icon" />
          </span>
          <section>
            <label className="bottom-profile-label">Location</label>
            <p className="content">Gomti Nagar, Lucknow, Uttar Pradesh</p>
          </section>
        </div>

        <div className="bottom-profile-content-icons">
          <a href="https://www.linkedin.com/in/himanshu-9556261b7/" target="_blank" className="icon-pack-nav">
            <Image src={"/icons/linkedin.svg"} width={20} height={20} alt="mail-icon" className="icon" />
          </a>
          <a href="https://github.com/Himanshu212223" target="_blank" className="icon-pack-nav">
            <Image src={"/icons/github.svg"} width={20} height={20} alt="mail-icon" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
