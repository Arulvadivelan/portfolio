import { Experience } from "../models/experience-model";

export function formatExperience(
  experiences: Experience[]
): string[] {

  const lines: string[] = [
    'const experience = ['
  ];

  experiences.forEach((experience, index) => {

    lines.push('  {');

    lines.push(
      `    company: "${experience.company}",`
    );

    lines.push(
      `    role: "${experience.role}",`
    );

    lines.push(
      `    period: "${experience.period}",`
    );

    lines.push('    responsibilities: [');

    experience.responsibilities.forEach(
      (responsibility, responsibilityIndex) => {

        const comma =
          responsibilityIndex <
          experience.responsibilities.length - 1
            ? ','
            : '';

        lines.push(
          `      "${responsibility}"${comma}`
        );
      }
    );

    lines.push('    ],');

    lines.push('    technologies: [');

    experience.technologies.forEach(
      (technology, technologyIndex) => {

        const comma =
          technologyIndex <
          experience.technologies.length - 1
            ? ','
            : '';

        lines.push(
          `      "${technology}"${comma}`
        );
      }
    );

    lines.push('    ]');

    lines.push('  }');

    if (index < experiences.length - 1) {
      lines.push(',');
      lines.push('');
    }
  });

  lines.push('];');

  return lines;
}