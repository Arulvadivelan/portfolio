import { SkillCategory } from "../models/skill-model";

export function formatSkills(
  categories: SkillCategory[]
): string[] {

  const lines: string[] = [
    '{'
  ];

  categories.forEach((category, index) => {

    lines.push(`  "${category.name}": [`);

    category.skills.forEach((skill, skillIndex) => {

      const comma =
        skillIndex < category.skills.length - 1
          ? ','
          : '';

      lines.push(`    "${skill}"${comma}`);
    });

    lines.push('  ]');

    if (index < categories.length - 1) {
      lines[lines.length - 1] += ',';
      lines.push('');
    }
  });

  lines.push('}');

  return lines;
}