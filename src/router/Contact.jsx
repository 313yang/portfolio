import "../assets/Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div>
        <h1 className="menu-title">Contact</h1>
        <div className="contact-section__connect">
          <p>
            구인관련 및 궁금한 점이 있으시다면, 아래 연락처를 통해 연락 바랍니다
            📞
          </p>
          <div>
            <i className="fas fa-mobile-alt"></i>
            <span>+82 10 8216 4468</span>
          </div>
          <div>
            <i className="far fa-envelope"></i>
            <span>313yang@naver.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
