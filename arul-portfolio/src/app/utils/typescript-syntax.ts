import { SyntaxToken } from '../models/syntax-token';

const keywords = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'if',
  'else',
  'for',
  'while',
  'class',
  'interface',
  'extends',
  'implements',
  'import',
  'from',
  'export',
  'default',
  'new',
  'this',
  'true',
  'false',
  'null',
  'undefined',
  'string',
  'number',
  'boolean',
  'void'
]);

export function tokenizeTypeScript(line: string): SyntaxToken[] {
  const tokens: SyntaxToken[] = [];

  const regex =
    /(\/\/.*$|"[^"]*"|'[^']*'|\b\d+(\.\d+)?\b|\b[A-Za-z_$][\w$]*(?=\s*:)|\b[A-Za-z_$][\w$]*\b|[{}[\]();,.:=])/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {

    if (match.index > lastIndex) {
      tokens.push({
        text: line.slice(lastIndex, match.index),
        type: 'normal'
      });
    }

    const value = match[0];

    if (value.startsWith('//')) {
      tokens.push({
        text: value,
        type: 'comment'
      });
    }
    else if (
      value.startsWith('"') ||
      value.startsWith("'")
    ) {
      tokens.push({
        text: value,
        type: 'string'
      });
    }
    else if (/^\d+(\.\d+)?$/.test(value)) {
      tokens.push({
        text: value,
        type: 'number'
      });
    }
    else if (keywords.has(value)) {
      tokens.push({
        text: value,
        type: 'keyword'
      });
    }
    else if (/^[A-Za-z_$][\w$]*$/.test(value)) {
        const remainingText = line.slice(regex.lastIndex);

        if (/^\s*:/.test(remainingText)) {
            tokens.push({
            text: value,
            type: 'property'
            });
        } else {
            tokens.push({
            text: value,
            type: 'normal'
            });
        }
    }
    else {
      tokens.push({
        text: value,
        type: 'punctuation'
      });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({
      text: line.slice(lastIndex),
      type: 'normal'
    });
  }

  return tokens;
}