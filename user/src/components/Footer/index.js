import "./footer.css";
const Footer = () => {
  return (
    <div className="sec-wrapper">
      <div className="sec-container">
        <div className="row">
          <div className="item">
            <h4>Future Furniture.</h4>
            <ul>
              <p>Furniture Store, University of Science</p>
            </ul>
          </div>

          <div className="item">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>

          <div className="item">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="bottom">
          <div className="logo-details">
            <span class="details">2024 furino. All rights reverved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
