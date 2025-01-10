import './index.scss'
import Resume from './Resume.png'

const About = () => {
    return(
            <div className="container about-page">
                <div className="text-zone">
                    <h1>About Me</h1>
                    <p>I am currently working on my Bachelors of Science for Software Engineering at Saint Cloud State University and am looking forward to Graduating May 9th 2025.</p>
                    <p>I was honored to recieve a Data Engineering internship with the Minnesota Twins throughout the 2024 season where I grew my skills when working with a multitude of API's and Data Manipulation.</p>
                    <p>I became interested in the Software Engineering field becuase of my childhood. When I was growing up my family and I bonded through videogames, and as I grew older I was curious about the makings of the games themselves. Through that curiosity I discovered the Software Engineering field, additionally, through my education at Saint Cloud State, I grew to love creating websites as well. Whether it be creating the UI that users interact with or creating the database that controls the back-end, I found that my heart goes to this field.</p>
                </div>
                <div className='resume-image'>
                    <img src={Resume} alt='Resume'></img>
                </div>
            </div>
       
    )
}

export default About