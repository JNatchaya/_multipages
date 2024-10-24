import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="left-section">
        <img src="./H3.jpg" alt="Image 1" className="image" style={{ width: "300px", height: "400px" }} />
        {/* <img src="/ME2.jpg" alt="Image 2" className="image" /> */}
      </div>
      <div className="right-section">
        <h1>ABOUT ME</h1> <br />
        <p style={{ textAlign: "left" }}>
          นางสาว ณัฐชยา ตั้งมั่น <br />
          รหัสนักศึกษา 66023796 <br />
          มหาวิทยาลัยศรีปทุม <br />
          คณะเทคโนโลยีสารสนเทศ <br />
          สาขา วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ <br /><br />
          SKILL : <br /> Basic HTML, CSS, JavaScript, React, UX/UI <br />
          HOBBIES : <br /> อ่านหนังสือ, ฟังเพลง, ถ่ายรูป
        </p>
      </div>
    </div>
  );
}

export default Home;
