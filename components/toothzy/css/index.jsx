"use client";
import React from "react";
import Swal from 'react-sweetalert2'
import "../css/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
const Index1 = () => {
    const [items, setItems] = useState([]);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");

    const [editing, setEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const addItem = () => {
      const newItemData = { fname, lname, email, phone, date };

      axios
        .post("http://localhost:5000/items", newItemData)
        .then((response) => {
          setItems([...items, response.data]);
        })
        .catch((error) => console.error(error));

  };

const addtem = () => {
  

  axios
    .post("http://localhost:5000/items", newItemData)
    .then((response) => {
      setItems([...items, response.data]);
      setFname("");
      setDate("");
      setEmail("");
      setLname("");
      setPhone("");
    })
    .catch((error) => console.error(error));
};

  return (
    <div>
      <header class="header">
        <a href="#" class="logo">
          {" "}
          <i class="fas fa-tooth"></i> TOOTHZY MULTISPEACLITY CINIC{" "}
        </a>
        <nav class="navbar">
          <a href="#home" className=" text-blue-400">
            home
          </a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#team">treatment</a>
        </nav>

        <a href="#" class="btn">
          {" "}
          make appointment{" "}
        </a>
        <div id="menu-btn" class="fas fa-bars"></div>
      </header>

      <section class="home" id="home">
        <div class="content">
          <h3>make your smile shine</h3>
          <p>
            {" "}
            taking care of our dental health is much more than achieving a
            bright smile. It’s a critical component of our overall health and
            well-being. By prioritizing preventive care and embracing the latest
            technological advancements, we can ensure that our dental health is
            maintained at the highest level. Regular visits to the dentist,
            proper oral hygiene, and a healthy lifestyle are the keys to a long
            life with a healthy, beautiful smile.
          </p>
          <a href="#" class="btn">
            make appointment
          </a>
        </div>
      </section>

      <section class="about" id="about">
        <h1 class="heading"> about us </h1>

        <div class="row">
          <div class="image">
            <Image
              src="/about.webp"
              alt="Example Image"
              width={500}
              height={300}
            />
          </div>

          <div class="content">
            <h3>our clinic is made for you to be smiling all the time</h3>
            <p>
              Our mission is to deliver comprehensive dental care in a friendly,
              compassionate, and professional environment. We strive to build
              lasting relationships with our patients based on trust and
              respect, ensuring that each visit to our clinic is a positive and
              stress-free experience..
            </p>
            <p>
              Our team of highly skilled and experienced dental professionals is
              dedicated to staying at the forefront of dental advancements. Led
              by<mark> Dr a.ASHOK KUMAR ,</mark> a renowned dentist with 7 years
              of experience,
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <h1 class="heading">our treatment </h1>

        <div class="box-container">
          <div class="box">
            <Image
              src="/rootcanal.png"
              alt="Example Image"
              width={500}
              height={300}
            />
            <h3>rootcanal thratpy</h3>
            <p>
              a root canal treatment is dental inflamed or infected pulp on the
              inside of the tooth which is then carefully cleaned and
              disinfected ,then filled and sealed.
            </p>
          </div>

          <div class="box">
            <Image src="/braceses.jpeg" width={500} height={300} alt="" />
            <h3>braces-orthodontics</h3>
            <p>
              braces improve you smile health,function and appearance
              <br />
              braces can correct a wide range of dental issues,including crooked
              gapped rotated or crowded teeth
            </p>
          </div>

          <div class="box">
            <Image src="/oral surgery.png" width={500} height={300} alt="" />
            <h3>oral surgery</h3>
            <p>
              the most common type of oral surgery is tooth extraction (tooth
              removal)an extraction might be recommended if you have severe
              tooth decay,gum disease,dental trauma or wisdom teeth complication
            </p>
          </div>
          <div class="box">
            <Image src="/p.jpg.jpg" width={500} height={300} alt="" />
            <h3>pedodontics</h3>
            <p>
              pediatric dentist are dedicated to the oral health of children
              from infancy through the teen years
              <br />
              they have the experince and qualifications to th care for a
              child&apos;s teeth,gums and mouth
            </p>
          </div>
          <div class="box">
            <Image
              src="/prostodonics.jpg.jpg"
              width={500}
              height={300}
              alt=""
            />
            <h3>prosthodontics</h3>
            <p>
              prothodontis is a branch of dentistry dedicated to makeing
              replacement for missing or dameged teeeth common prothodontic
              treatment include dentures dental implants, crowns and brideges
            </p>
          </div>
          <div class="box">
            <Image src="/cosmatic.jpeg" width={500} height={300} alt="" />
            <h3>cosmatic dentistry</h3>
            <p>
              cosmetic dentistry is a branch of dentistry that focuses on
              improving the appearance of yours smile.common cosmatic dental
              treatements include teeth whiteing, dental bonding and veneers.
            </p>
          </div>
        </div>
      </section>

      <section class="team" id="team">
        <h1 class="heading"> our team</h1>

        <div class="swiper team-slider">
          <div class="swiper-wrapper flex flex-row">
            <div class="swiper-slide slide">
              <div class="image">
                <Image src="/team-1.jpg" width={500} height={300} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>john lacy</h3>
                <span>genral surgeon</span>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <Image src="/team-2.jpg" width={500} height={300} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>john lacy</h3>
                <span>genral surgeon</span>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <Image src="/team-3.jpg" width={500} height={300} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>john lacy</h3>
                <span>genral surgeon</span>
              </div>
            </div>

            <div class="swiper-slide slide">
              <div class="image">
                <Image src="/team-4.jpg" width={500} height={300} alt="" />
                <div class="share">
                  <a href="#" class="fab fa-facebook-f"></a>
                  <a href="#" class="fab fa-twitter"></a>
                  <a href="#" class="fab fa-instagram"></a>
                  <a href="#" class="fab fa-linkedin"></a>
                </div>
              </div>
              <div class="content">
                <h3>john lacy</h3>
                <span>genral surgeon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h1 class="heading">make appointment</h1>

        <form action="">
          <span>your name:</span>
          <div class="inputBox">
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="first name"
            />
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="last name"
            />
          </div>

          <span>your email :</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            class="box"
          />

          <span>your number :</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="enter your number"
            class="box"
          />

          <span>appointment date :</span>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datetime-local"
            class="box"
          />

          <input
            type="submit"
            onClick={addItem}
            value="Book Appoinment"
            class="btn"
          />
        </form>
      </section>

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>address</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex
              placeat.
            </p>
            <div class="share">
              <a href="#" class="fab fa-facebook-f"></a>
              <a href="#" class="fab fa-twitter"></a>
              <a href="#" class="fab fa-linkedin"></a>
              <a href="#" class="fab fa-instagram"></a>
            </div>
          </div>

          <div class="box">
            <h3>e-mail</h3>
            <a href="#" class="link">
              ninjashub4@gmail.com
            </a>
            <a href="#" class="link">
              ninjashub4@gmail.com
            </a>
          </div>
          <div class="box">
            <h3>call us</h3>
            <p>+61 (0) 3 2587 4569</p>
            <p>+61 (0) 3 2587 4569</p>
          </div>

          <div class="box">
            <h3>opening hours</h3>
            <p>
              monday - friday : 8:00 - 24:00 <br />
              saturday : 9:00 - 24:00
            </p>
          </div>
        </div>

        <div class="credit">
          created by <span>Alexander</span> | all rights reserved!
        </div>
      </section>


    </div>
  );
};

export default Index1;