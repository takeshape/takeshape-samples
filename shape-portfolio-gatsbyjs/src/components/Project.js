import React from "react";
import { graphql } from "gatsby";
import { getImageUrl } from "takeshape-routing";
import slugify from "slugify";

import Layout from "../layouts/default";

export const getProjectPath = name => {
  const slug = slugify(name.toLowerCase());
  return `/projects/${slug}/`;
};

export const ProjectMetadata = ({ startDate, endDate, client }) => {
  const startYear = new Date(startDate).getFullYear();
  const endYear = endDate ? new Date(endDate).getFullYear() : null;
  const includeEndYear = endYear && startYear !== endYear;
  return (
    <div className="project__metadata">
      <p className="project__metadata">
        {startYear}
        {includeEndYear ? `&endash; ${endYear}` : ""}
      </p>
      {client ? (
        <p>
          <a href={client.url} target="_blank" rel="noopener noreferrer">
            {client.name}
          </a>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export const Project = ({ project }) => (
  <article className="project">
    <header>
      {project.coverImage ? (
        <img
          className="project__cover-image"
          alt={project.coverImage.description}
          src={getImageUrl(project.coverImage.path, {
            h: 600,
            w: 1200,
            fit: "crop"
          })}
        />
      ) : (
        ""
      )}
      <h1>{project.name}</h1>
      <ProjectMetadata
        startDate={project.startDate}
        endDate={project.endDate}
        client={project.client}
      />
    </header>
    <div
      className="project__description"
      dangerouslySetInnerHTML={{ __html: project.description }}
    />
  </article>
);

export default ({ data }) => (
  <Layout>
    <Project project={data.takeshape.project} />
  </Layout>
);

export const query = graphql`
  query($projectId: ID!) {
    takeshape {
      project: getProject(_id: $projectId) {
        name
        startDate
        endDate
        coverImage {
          description
          path
        }
        client {
          name
          url
        }
        description: descriptionHtml
      }
    }
  }
`;
