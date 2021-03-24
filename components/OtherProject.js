import React from 'react';
const OtherProject = ({ otherProject }) => {
    console.log(otherProject);
    return (
        <div className="other-project">
            <h1>{otherProject.title}</h1>
            <p>{otherProject.description}</p>
            {otherProject.tools.map(tool => (
                <p>{tool}</p>
            ))}
        </div>
    );
}

export default OtherProject;