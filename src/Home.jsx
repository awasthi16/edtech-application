import React, { useState } from 'react'
import "./Home.css"
import Pass from './Pass'
import AllCourses from "./AllCourses"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SevicesCommon from "./SevicesCommon"
import Contact from "./Contact"

const Home = () => {

  const [pop, setpop] = useState(true)
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };

  const blogs = [
    {
      img: "/blod-card/devops_or_software_which_is_hard.jpg",
      title: "Which is Harder – DevOps or Software Engineer?",
      link: "#"
    },
    {
      img: "/blod-card/devops_roles_and_responsibilities.jpg",
      title: "Roles and Responsibilities of DevOps Engineer: A",
      link: "#"
    },
    {
      img: "/blod-card/skills_for_devops.jpg",
      title: "Technical Skills Required for DevOps Engineer: A",
      link: "#"
    },
    {
      img: "/blod-card/software_or_devops_.jpg",
      title: "DevOps Engineer vs Software Engineer: Which is Better?",
      link: "#"
    },
    {
      img: "/blod-card/devops_engineer_vs_software_engineer.jpg",
      title: "DevOps Engineer vs Software Engineer: Key Differences",
      link: "#"
    },
    {
      img: "/blod-card/devops_salary_for_freshers.jpg",
      title: "Salary of DevOps Engineer in India for Freshers: A",
      link: "#"
    }
  ];

  return (
    <>
      {
        pop && (
          <div className="pop">
            <div className="popb">
              <div className="can">
                <svg onClick={() => setpop(false)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </div>
              <div className="img">
                <img src="/Screenshot 2025-08-18 120026.png" alt="" />
              </div>
            </div>
          </div>


        )
      }

      <div className="papa">
        <div className="banner" >

          <Slider {...settings} >
            <div>
              <img src="/Screenshot 2025-08-18 131342.png" alt="" />
            </div>
            <div>
              <img src="/Screenshot 2025-09-18 083518.png" alt="" />
            </div>

          </Slider>
        </div>
      </div>

      <div className="c" >
        <div className="c1">
          <div className="ca">
            <img src="/dockers-kubernetes-online-training-nareshit.png" alt="" width={260} />
          </div><br />
          <div className="c1a">
            <div className="cb">
              <blockquote><h3>Docker & Kubernetes</h3></blockquote>
            </div>
            <div className="cc">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg> 5
            </div><br />
            <div className="cd">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Start Date: 21 Aug 2025</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg> By: Mr.Shiva</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Dur: 45 Days</p>
            </div><br /><br />
          </div>
          <div className="ce">
            <button className='l'>ENROLL</button>
            <button className='p'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg> SHARE</button>
          </div>

        </div>
        <div className="c1">
          <div className="ca">
            <img src="/azure-devops-online-training-nareshit.png" alt="" width={260} />
          </div><br />
          <div className="c1a">
            <div className="cb">
              <blockquote><h3>Azure DevOps (AZ-400)</h3></blockquote>
            </div>
            <div className="cc">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg> 5
            </div><br />
            <div className="cd">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Start Date: 21 Aug 2025</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg> By: Mr.Pavan</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Dur: 60 Days</p>
            </div><br /><br />
          </div>
          <div className="ce">
            <button className='l'>ENROLL</button>
            <button className='p'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg> SHARE</button>
          </div>

        </div>
        <div className="c1">
          <div className="ca">
            <img src="/react-js-online-training-nareshit.png" alt="" width={260} />
          </div><br />
          <div className="c1a">
            <div className="cb">
              <blockquote><h3>React JS</h3></blockquote>
            </div>
            <div className="cc">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg> 5
            </div><br />
            <div className="cd">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Start Date: 18 Aug 2025</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg> By: Mr.Durga Prasad</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Dur: 45 Days</p>
            </div><br /><br />
          </div>
          <div className="ce">
            <button className='l'>ENROLL</button>
            <button className='p'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg> SHARE</button>
          </div>

        </div>
        <div className="c1">
          <div className="ca">
            <img src="/django-with-rest-api-online-training.png" alt="" width={260} />
          </div><br />
          <div className="c1a">
            <div className="cb">
              <blockquote><h3>Docker & Kubernetes</h3></blockquote>
            </div>
            <div className="cc">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg> 5
            </div><br />
            <div className="cd">
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Start Date: 18 Aug 2025</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg> By: Mr.Mahesh</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg> Dur: 60 Days</p>
            </div><br /><br />
          </div>
          <div className="ce">
            <button className='l'>ENROLL</button>
            <button className='p'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg> SHARE</button>
          </div>

        </div>

      </div><br /><br /><br /><br />


      <div className="back" >
        <div className="an">
          <h1><p className='o'>Our</p> Courses</h1>
          <p className='k'>Explore new and trending free online courses.</p>
        </div>
        <br /><br />
        <Pass />
        <br /><br /><br />
        <div className="explore">
          <a href={<AllCourses />}><div className="but" >
            EXPLORE MORE COURSES
          </div></a>
        </div><br /><br />
      </div><br /><br /><br /><br />


      <div className="tra" >
        <p className='oo'>Our <span className='tr'>Training</span> Services</p><br />
        <p>From Basic to Advanced...</p>
        <p>We Offer Classroom, Online, Weekend, and Corporate Training on a Wide Range of Software Courses.</p>
      </div><br />

      <div className="cards-section" >
        <div className="card">
          <img src="/image.png" alt="Real-Time Projects" />
          <div className="card-content">
            <h3>Real-Time Projects</h3>
            <p>Learn by Doing: Real-World Projects for Practical Mastery</p>
            <a href="#">View more →</a>
          </div>
        </div>

        <div className="card">
          <img src="image_1706335329390.jpg" alt="Internships" />
          <div className="card-content">
            <h3>Internships</h3>
            <p>Training & Project Based Internship</p>
            <a href="#">View more →</a>
          </div>
        </div>

        <div className="card">
          <img src="/image_1706335756779.jpg" alt="Workshops" />
          <div className="card-content">
            <h3>Workshops</h3>
            <p>Unlocking IT Excellence: Join Our Transformative Workshops</p>
            <a href="#">View more →</a>
          </div>
        </div>

        <div className="card">
          <img src="/image_1706336807195.jpeg" alt="Weekend Training" />
          <div className="card-content">
            <h3>Weekend Training</h3>
            <p>Supercharge Your Weekends with NareshIT's IT Training Programs</p>
            <a href="#">View more →</a>
          </div>
        </div>
      </div>
      <br /><br />
      <div className="explore" >
        <a href="#"><div className="but" >
          EXPLORE Services
        </div></a>
      </div><br /><br />


      <section className="values-section" >
        <div className="values-header">
          <h4>Our values</h4>
          <h1>
            Empowering Futures: NareshIT's 22-Year
            Legacy of Hands-On Excellence
          </h1>
          <p>
            NareshIT, with over 22 years of training experience, offers hands-on
            training. With expert trainers and a mission to empower, we ensure
            successful placements and career advancement for our students.
          </p>
        </div>

        <div className="values-content">
          <div className="experience-box">
            <h2>22+</h2>
            <span>Years Experience</span>
          </div>
          <div className="belief-box">
            <h2>We Believe in Empowering Tech Talent</h2>
            <p>
              Our core belief lies in empowering aspiring technologists with the
              skills and knowledge necessary to succeed in the ever-evolving software
              industry.
            </p>
          </div>
        </div>
      </section>



      <section className="beliefs-section" >
        <div className="belief-row">
          <div className="stat-box">
            <h2 className="blue">10+</h2>
            <span className="label">LAKHS</span>
            <p>Students Trained</p>
          </div>
          <div className="belief-text">
            <h3>We Believe in Practical Learning</h3>
            <p>
              We believe in providing practical, real-world training that equips our
              students with the confidence and capability to tackle industry
              challenges head-on.
            </p>
          </div>
        </div>

        <div className="belief-row">
          <div className="stat-box">
            <h2 className="pink">95<span>%</span></h2>
            <p>Career Launch Success</p>
          </div>
          <div className="belief-text">
            <h3>We Believe in Building Careers</h3>
            <p>
              We believe in providing comprehensive support, from skill acquisition to
              placement assistance, to help our students build successful careers.
            </p>
          </div>
        </div>
      </section>
      <br /><br /><br />


      <div className="domain" >
        <p><h1>Browse by </h1><span className='do'><h1>Domains</h1></span></p>
        <p className='ex'>Explore new and trending free online courses.</p>
      </div>


      <section className="courses-section" >
        <div className="course-card">
          <img src="/Domain/image.png" alt="Full Stack" />
          <h4>Full Stack</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706093906274.jpg" alt="Operating System" />
          <h4>Operating System</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706094359583.jpg" alt="Mulesoft" />
          <h4>Mulesoft</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1711014922224.jpg" alt="NASSCOM" />
          <h4>NASSCOM</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706532388312.jpg" alt="Digital Marketing" />
          <h4>Digital Marketing</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706090706296.jpg" alt="Cloud Computing" />
          <h4>Cloud Computing</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706094154234.jpg" alt="Software Testing" />
          <h4>Software Testing</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706164993158.jpg" alt="Soft Skills" />
          <h4>Soft Skills</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706164993158.jpg" alt="Data Science" />
          <h4>Data Science</h4>
        </div>

        <div className="course-card">
          <img src="/Domain/image_1706532336352.jpg" alt="Analytics" />
          <h4>Analytics</h4>
        </div>
      </section>

      <br /><br />
      <div className="explore" >
        <a href="#"><div className="but" >
          EXPLORE CateGories
        </div></a>
      </div><br /><br />


      <section className="corporate-section" >
        <div class="corporate-content">
          <h2><span className="highlight">Corporate</span> Software Training</h2>
          <p>
            Elevate Your Team with NareshIT's Corporate Training Programs. NareshIT offers tailored corporate training programs to enhance the skills and efficiency of your workforce. Our specialized courses are designed to meet the demands of the ever-evolving corporate landscape, ensuring your team stays ahead in the competitive market. NareshIT offers tailored corporate training programs to enhance the skills and efficiency of your workforce.
          </p>
          <a href="#" className="view-more">View more →</a>

          <div className="btn-box">
            <a href="#" className="btn">Contact Us</a>
          </div>
        </div>

        <div className="corporate-image">
          <img src="/image_1706335756779.jpg" alt="Corporate Training" />
        </div>
      </section>



      <div className="logo-section" >
        <h2>Our Trainees are Working With Leading MNC's</h2>
        <div className="logo-grid" >
          <img src="/Logos/logo_1706095549234.png" alt="" />
          <img src="/Logos/logo_1706095596384.png" alt="" />
          <img src="/Logos/logo_1706095273280.png" alt="" />
          <img src="/Logos/logo_1706095643303.png" alt="" />
          <img src="/Logos/logo_1706095534994.png" alt="" />
          <img src="/Logos/amazon.png" alt="" />
          <img src="/Logos/triniti.png" alt="" />
          <img src="/Logos/hcl.png" alt="" />
          <img src="/cogni.png" alt="" />
          <img src="/Logos/tcs.png" alt="" />
          <img src="/Logos/tcs.png" alt="" />
          <img src="/Logos/genpact.png" alt="" />
          <img src="/Logos/accenture.png" alt="" />
          <img src="/Logos/google.png" alt="" />
          <img src="/Logos/virtusa.png" alt="" />
          <img src="/Logos/capgemini.png" alt="" />
          <img src="/Logos/valuelab.png" alt="" />
        </div>
      </div>

      <div className="home-review" >
        <div className="home-review1" >
          <h1><p style={{ color: "cyan" }}>2801+</p> Our </h1><h1>students placed in</h1> <h1 >the recent Years</h1>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-patch-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
          </svg></span>
          <span><b>98% of students</b> would <br />recommend "Zint" <br />to a friend</span>
        </div>
        <div className="home-review2">
          <div className="home-one">
            <p>
              “<br />
              I had an opportunity to learn <br />multicloud devops under the <br />guidance of veera sir and it was <br />a great experience. His <br />teaching style is clear, and <br />practical, making complex <br />cloud concepts easy to <br />understand.
              <br />
              ”
            </p><br />
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-half" viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
              </svg></p>
            <br />
            <p>
              <b>Shanmuk Reddy</b>
            </p><br />
            <p><hr style={{ width: "230px" }} /></p><br />
            <p>Course:</p>
            <p style={{ color: "grey" }}>By Real-Time Expert</p>
          </div>
          <div className="home-two">
            <p>
              “<br />
              I completed a data science <br />course at Naresh IT Institute, <br />where Omkar Sir was my <br />trainer. His teaching was <br />excellent, focusing on real- <br />world company problems, and I <br />gained practical experience <br />through internships. I'm <br />thankful to Sir for providing <br />such valuable guidance.
              <br />
              ”
            </p><br />
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </p><br />
            <p><b>V Sai Krishna Teja</b></p><br />
            <p><hr style={{ width: "230px" }} /></p><br />
            <p>Course:</p>
            <p style={{ color: "grey" }}>By Real-Time Expert</p>
          </div>
          <div className="home-three">
            <p>
              “<br />
              Best institute. I am glad that I <br />decided to do my internship <br />and full stack course here.
              <br />
              ”
            </p><br />
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </p><br />
            <p><b>Shakina Bano</b></p><br />
            <p><hr style={{ width: "230px" }} /></p><br />
            <p>Course:</p>
            <p style={{ color: "grey" }}>By Mr. Prakash Senapathi</p>
          </div>
          <div className="home-four">
            <p>
              “<br />
              Good teaching staff especially <br />C KISHORE SIR ORACLE <br />SUDHAKAR SIR HTML CSS JS <br />SIVAKUMAR SIR CORE JAVA <br />RAVI SHANKAR SINGH SIR IS <br />EXCELLENT TEACHING AND <br />VERY GOOD EXPERIENCE <br />FACULTY
              <br />
              ”
            </p><br />
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </p><br />
            <p><b>Abhinav</b></p><br />
            <p><hr style={{ width: "230px" }} /></p><br />
            <p>Course:</p>
            <p style={{ color: "grey" }}>By Real-Time Expert</p>
          </div>
        </div>
      </div>

      <SevicesCommon />

      <div className="explore" >
        <a href="#"><div className="but" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg> <p>TALK TO ADVISOR</p>
        </div></a>
      </div><br /><br />



      <div className="blog-section">
        <h2>
          Our <span className="highlight">Blogs</span>
        </h2>
        <p>Explore new and trending free online courses.</p>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.img} alt={blog.title} className="blog-img" />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <a href={blog.link} className="read-more">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="explore"  style={{backgroundColor: "rgb(214, 214, 214)"}}>
        <a href="#"><div className="but" >
          VIEW MORE BLOGS 
        </div><br /><br /></a>
      </div><br /><br />





      
      <br />
      <div className="learning-head">
        <h1>
          Learn Software Courses from the Expert Trainers
        </h1>
        <p>Explore new and trending free online courses.</p>
      </div><br /><br /><br /><br />
      <div className="learning-section">
        <div className="learning-card">
          <img src="/Course/digital-calsses-02.jpg" alt="Online Classes" />
        </div>

        <div className="learning-card">
          <img src="/Course/digital-calsses-03.jpg" alt="Mobile Learning" />
        </div>

        <div className="learning-card learning-highlight">
          <h3>
            Smart <br /> Learning in <br /> the Digital Era
          </h3>
        </div>

        <div className="learning-card">
          <img src="/Course/download.jpeg" alt="Offline Classes" />
        </div>

        <div className="learning-card">
          <img src="/Course/download (1).jpeg" alt="Corporate Training" />
        </div>
      </div><br /><br /><br />





    <div className="contact-section">
      <div className="contact-info">
        <h2>
          We <span className="highlight">love</span> to help you
        </h2>
        <p>Explore new and trending free online courses.</p>

        <div className="info-item">
          <strong>Phone:</strong>
          <span> 9111118941 / 8965975222</span>
        </div>
        <hr />

        <div className="info-item">
          <strong>Email:</strong>
          <span> zint@gmail.com</span>
        </div>
        <hr />

        <div className="info-item">
          <strong>Location:</strong>
          <span>
            Pholbhag in front of Maruti Suzuki showroom
          </span>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Naresh i Technologies Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.446190929503!2d78.4455604749087!3d17.43782500110542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91bccf00c0b5%3A0xb2ef6f55bb0da56!2sNaresh%20i%20Technologies!5e0!3m2!1sen!2sin!4v1695270400000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div><br /><br />
    <Contact/>





    </>
  )
}

export default Home