import React from 'react'
const OtherProject = ({ otherProject }) => {
  console.log(otherProject)
  return (
    <div className='other-project'>
      <div className='icons-folder-git'>
        <a href={otherProject.url} target='_blank'>
          <i className='far fa-folder'></i>
        </a>
        <a href={otherProject.git} target='_blank'>
          <i class='fab fa-git-alt'></i>
        </a>
        <a href={otherProject.url} target='_blank'>
          <i class='fas fa-external-link-alt'></i>
        </a>
      </div>
      <h1>{otherProject.title}</h1>
      <p>{otherProject.description}</p>
      <div className='tools-container'>
        {otherProject.tools.map(tool => (
          <p className='tools'>{tool}</p>
        ))}
      </div>
    </div>
  )
}

export default OtherProject
