import React from 'react';
import { Link } from 'gatsby';
import {getImageUrl} from 'takeshape-routing';

import { getProjectPath } from './project'

const ProjectListItem = ({project}) => {
  const startYear = new Date(project.startDate).getFullYear();
  const endYear = project.endDate ? new Date(project.endDate).getFullYear() : null;
  const includeEndYear = endYear && startYear !== endYear
  return (
    <Link to={getProjectPath(project.name)} className="project">
      <img className="project__thumbnail" src={getImageUrl(project.coverImage.path, {h: 200, w: 300, fit: 'crop'})} alt={project.description} />
      <p className="project__name"><strong>{project.name}</strong></p>
      <p class="project__metadata">{startYear}{includeEndYear ? `&endash; ${endYear}` : ''}</p>
    </Link>
  )
};

const ProjectList = ({projects}) => (
  <ul className="nostyle project-list">
    {projects.items.map((project, i) => (
      <li className="project-list--entry" key={i}>
        <ProjectListItem project={project} />
      </li>
    ))}
  </ul>
)

export default ProjectList;

/*
<a class="project project-list--entry" href="{{ project|route('project') }}" title="{{ project.name }}">
  <img class="project__thumbnail" src="{{ project.coverImage.path|image({h: 200, w: 300, fit: 'crop'}) }}">
  <p class="project__name"><strong>{{ project.name }}</strong></p>
  <p
    class="project__metadata">{{ project.startDate|date('YYYY') }}{% if not project.endDate and project.startDate|date('YYYY') !== project.endDate|date('YYYY') %} – {% if project.endDate %}{{ project.endDate|date('YYYY') }}{% else %}Present{% endif %}{% endif %}</p>
</a>
*/
