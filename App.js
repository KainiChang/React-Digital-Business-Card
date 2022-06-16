
// import Profile from "./components/Profile"
// import Connect from "./components/Connect"
// import Introduce from "./components/Introduce"
// import Tail from "./components/Tail"
import React from "react"
export default function App() {
    return (

        <div className="container">
            <div className="pro--Img" >
                <img src="./image/pro.png" className="pro--img" alt="facebook"/>
            </div>
            <div>
                <h2 className="pro--name">Kaini Chang</h2>
                <p className="pro--position">Frontend Developer</p>
                <p className="pro--website">imagingwebsite.cn</p>
            </div>
            <connect className="connect">
                <div className="con--btn1">
                    <img src="./image/btn1.png" className="btn--img" alt="facebook"/>
                    <p className="btn--name">Email</p>
                </div>
                <div className="con--btn2">
                    <img src="./image/btn2.jpeg" className="btn--img" alt="facebook"/>
                    <p className="btn--name">Linkedin</p>
                </div>
            </connect>
            <introduce className="introduce">
                <div>
                    <h3 className="introduce--title">About</h3>
                    <p className="introduce--content">I'm studying Master of Computing and Innovation in the University of Adelaide, turning myself to be a developer! I've worked as System Analyst for 6+ years, but I enjoy coding!</p>
                </div>
                <div>
                    <h3 className="introduce--title">Interest</h3>
                    <p className="introduce--content">I love the feeling that I can solve problems. I like challenges and difficulties, they make me excited and my life colorful. Now I'm improving my skills of frontend development by participate free bootcamp "better react", to make a big step towards my future career!</p>
                </div>
            </introduce>
            <tail className="tail">
                <img src="./image/tail1.png" className="tailImg"  alt="facebook"/>
                <img src="./image/tail2.jpg" className="tailImg" alt="facebook" />
                <img src="./image/tail3.ico" className="tailImg"  alt="facebook"/>
                <img src="./image/tail4.png" className="tailImg"  alt="facebook"/>


            </tail>
        </div>

    )
}