import React, { Component } from "react";

import ProjectCard from "../components/ProjectCard";
import Col from "../components/Col";
import Row from "../components/Row";
import projectData from "../data/projects.json"


class Projects extends Component {
    state = {
        projects: projectData
    }

    render() {
        return (
            <Row>
                {this.state.projects.map( project => (
                        <Col>
                            <ProjectCard
                                name={project.name}
                                github={project.github}
                                demo={project.demo}
                                image={`${process.env.PUBLIC_URL}/${project.image}`}
                                description={project.description}
                            />
                            <hr/>
                        </Col>
                ))}
            </Row>
        );
    }
}

export default Projects