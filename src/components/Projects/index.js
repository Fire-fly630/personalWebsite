import './index.scss';
import project1 from './project1.jpg';
import project2 from './project2.jpg';
import project4 from './project4.jpg';

const Projects = () => {
    return (
        <div className="container project-page">
            <div className="text-zone">
                <h1>My Projects</h1>
                <p>Not including this portfolio, which I also created from scratch utilizing ReactJS and SCSS.</p>
                <div className="projects-list">
                    <p>
                        <img src={project1} alt="Project 1" />
                        For this project, me and three others created an event/party booking system for a local Movie Theater. <br/>
                        We used an API connection, MySQL and Reactjs to complete this project.<br/>
                        January - April 2024
                    </p>
                    <p>
                        <img src={project2} alt="Project 2" />
                        For this project, me and two others collected extensive research about the causes of Dementia.<br/>
                        With the data we collected we created a python package and an API to analyze the inputs and<br/>
                        show the user if they have a chance of contracting dementia, and if they should seek a doctor.<br/>
                        August - November 2024.
                    </p>
                    <p>
                        <img src="" alt="Project 3" />
                        This is my Senior Project. I completed this project with three peers throughout our senior year at Saint Cloud State University.<br/>
                        The Idea of this project is to simulate the movements of an NA06 robot that will be used to read brainwaves from a BCI headset,
                        But our small part just required us to utilize OpenGL and Python to create a 3D model of the final product.<br/>
                        August 2024 - May 2025
                    </p>
                    <p>
                        <img src={project4} alt="Project 4" />
                        6cVinyl is my very first project using reactjs/react native. This is a prototype Vinyl purchasing app where you can search for a specific Vinyl and add it to a wishlist.<br/>
                        The functions provided within this project were; registration, login, search, and save to wishlist.<br/>
                        January - May 2023
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;