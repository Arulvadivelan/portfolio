import { Project } from "../models/projects-model";

export function formatProjects(
  projects: Project[]
): string[] {

  const lines: string[] = [
    'const projects = ['
  ];

  projects.forEach((project, index) => {

    lines.push('  {');

    lines.push(`    name: "${project.name}",`);
    lines.push(`    type: "${project.type}",`);
    lines.push(`    context: "${project.context}",`);

    lines.push('    technologies: [');

    project.technologies.forEach(
      (technology, techIndex) => {

        const comma =
          techIndex < project.technologies.length - 1
            ? ','
            : '';

        lines.push(
          `      "${technology}"${comma}`
        );
      }
    );

    lines.push('    ],');

    lines.push(
      `    description: "${project.description}",`
    );

    lines.push('    highlights: [');

    project.highlights.forEach(
      (highlight, highlightIndex) => {

        const comma =
          highlightIndex < project.highlights.length - 1
            ? ','
            : '';

        lines.push(
          `      "${highlight}"${comma}`
        );
      }
    );

    lines.push('    ]');

    lines.push('  }');

    if (index < projects.length - 1) {
      lines.push(',');
      lines.push('');
    }
  });

  lines.push('];');

  return lines;
}