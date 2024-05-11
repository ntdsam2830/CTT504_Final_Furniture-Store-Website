import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div class="about-container">
      <div class="header">
        <h1>Our Team</h1>
      </div>
      <div class="sub-container">
        <div class="teams">
          <img src="svg/dnhoa.jpg" alt="" />
          <div class="name">Nhat Hoa</div>
          <div class="design">Database Engineer</div>
          <div class="about">
            Ensuring data integrity by managing database design, security, and
            performance. Nhat Hoa troubleshoots issues, implements backups, and
            optimizes structures for efficient data management, contributing to
            the stability of Future Furniture.
          </div>

          <div class="social-links">
            <a href="https://www.facebook.com/nhathoa.1810">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="https://github.com/hoadang0305">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/nqhuong.jpg" alt="" />
          <div class="name">Quynh Huong</div>
          <div class="design">Backend Developer</div>
          <div class="about">
            Collaborating
            closely with frontend developer and database engineer, Quynh Huong
            ensures robust data management and seamless communication between
            server and client, driving project success with efficiency and
            reliability.
          </div>
          <div class="social-links">
            <a href="https://www.facebook.com/ngnqnhhng">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="https://github.com/qhuongng">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/ntdsam.jpg" alt="" />
          <div class="name">Dan Sam</div>
          <div class="design">Frontend Developer</div>
          <div class="about">
            Dan Sam bridges design concepts with functional web interfaces to
            ensure seamless user experiences. Collaborating closely with backend
            developer, Dan Sam plays a pivotal role in crafting visually
            appealing and intuitive interfaces that meet project objectives
            efficiently.
          </div>
          <div class="social-links">
            <a href="https://www.facebook.com/ntdsam2802">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="https://github.com/ntdsam2830">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/nltphuc.jpg" alt="" />
          <div class="name">Tan Phuc</div>
          <div class="design">Business Analyst</div>
          <div class="about">
            A bridge between what our team needs and what Future Furniture
            delivers. Tan Phuc translates requirements, analyzes information,
            and ensures smooth communication within the team. He plays a key
            role in making sure our project meets its goals effectively.
          </div>

          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=100008818771172&mibextid=LQQJ4d">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="https://github.com/TanPhuc1805">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
