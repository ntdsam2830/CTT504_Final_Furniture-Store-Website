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
          <img src="svg/profile1.svg" alt="" />
          <div class="name">Thuan Phat</div>
          <div class="design">Database Administrator</div>
          <div class="about">
            Ensuring data integrity by managing database design, security, and
            performance. Thuan Phat troubleshoots issues, implements backups,
            and optimizes structures for efficient data management, contributing
            to the stability of Future Furniture.
          </div>

          <div class="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/profile1.svg" alt="" />
          <div class="name">Man Nhi</div>
          <div class="design">Project Manager</div>

          <div class="about">
            Man Nhi is the leader of Future Furniture who guides this team
            through planning, execution, and successful completion of this
            website. Setting goals, managing resources, and ensuring alignment
            with Future Furniture's vision, fostering collaboration and
            motivation for innovation and success.
          </div>

          <div class="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/profile1.svg" alt="" />
          <div class="name">Nhat Hoa</div>
          <div class="design">Developer</div>
          <div class="about">
            Nhat Hoa takes the main responsibility of creating and implementing
            software solutions, writing, testing, and debugging code
            collaboratively. He ensures seamless integration, adheres to coding
            standards, and contributes to the success of Future Furniture by
            delivering high-quality solutions.
          </div>

          <div class="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/profile2.svg" alt="" />
          <div class="name">Trung Kien</div>
          <div class="design">Tester, Designer</div>
          <div class="about">
            The team's designer and tester. Trung Kien is a versatile
            professional adept at creating visually appealing designs and
            ensuring software quality. He contributes to delivering a seamless
            and high-quality end product for Future Furniture.
          </div>

          <div class="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>

        <div class="teams">
          <img src="svg/profile3.svg" alt="" />
          <div class="name">Dan Sam</div>
          <div class="design">Business Analyst</div>
          <div class="about">
            A bridge between what our team needs and what Future Furniture
            delivers. Dan Sam translates requirements, analyzes information, and
            ensures smooth communication within the team. She plays a key role
            in making sure our project meets its goals effectively.
          </div>

          <div class="social-links">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} color="#444" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} color="#444" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
