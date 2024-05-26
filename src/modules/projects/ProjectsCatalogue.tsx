import { PROJECTSLIST } from '@/app/config/constants'
import ProjectBox from '@/components/projects/ProjectBox'
import React from 'react'
import Skills from './SkillsAndProjects/Skills'

const ProjectsCatalogue = () => {
  return (
    <>
        <Skills/>
        {PROJECTSLIST.map((item:Project,k:number)=>{
            return(
                <ProjectBox key = {k} project={item} />
            )
        })}
    </>
  )
}

export default ProjectsCatalogue