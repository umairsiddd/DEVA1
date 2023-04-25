
import "../styles/Home.css"
import Profile from "../assets/profile.jpg"
import "../styles/utility.css"
export default function Home() {
    return (
        <>
            <div className="w-75 align-items-center m-auto row" >
                <img src={Profile} className="h-100 col-5 rounded-circle " alt=""
                    style={{ boxShadow: "5px 5px 10px 2px rgba(0,0,0,.8);" }} />
                <div className="col-6" style={{ marginLeft: "20px;" }}>
                    <h1>Shayan Jawed</h1>
                    <p className="text-dark">My name is UMAIR and I am a Full Stack Web and App
                        Developer. With multiple years of experience in
                        the field, I have developed a strong skill set in designing and implementing complex web and
                        mobile
                        applications.</p>

                    <a className="resume" href="./assets/resume.pdf" download>Download CV</a>

                </div>

            </div>
            <h1>What I Do</h1>
            <div className="row justify-content-center align-items-center g-2">
                <div className="col-6 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/web_development.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>Web Development</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/app_development.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>App Development</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/DataBase.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>DataBase Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div style={{ display: "flex;" }}>
                        <div>
                            <img style={{ height: "60px;" }} src="assets/DataBase.png" alt="" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <h5>DataBase Design</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod nulla animi ad
                                architecto officiis repellendus at aliquid ipsa, aut fugit unde dolorum vero soluta
                                maxime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
