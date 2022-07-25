import React from "react";

function ProjectCard(props) {
    return (
        <div className="card">
            <img 
                src={props.image} 
                className="card-img-top" 
                alt="project screenshot"
            />
            <div className="card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <div className="card-body">
                    <a href={props.demo}><img src="https://img.icons8.com/color/48/000000/tv--v1.png" alt="Github" className="icon" width={"56"}/></a>
                    <a href="https://github.com/B-smd"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></a>

                </div>    
                </div>
            </div>

    );
}

export default ProjectCard;
