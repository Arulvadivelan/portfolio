import { SyntaxToken } from "../models/syntax-token";

const keywords = new Set([
  'true',
  'false',
  'null'
]);

export function tokenizeJson(line: string): SyntaxToken[] {
  const tokens: SyntaxToken[] = [];

  const regex =
    /("(?:\\.|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null|[{}\[\],:])/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {

    // Preserve whitespace and everything between tokens
    if (match.index > lastIndex) {
      tokens.push({
        text: line.slice(lastIndex, match.index),
        type: 'normal'
      });
    }

    const value = match[0];

    if (value.startsWith('"')) {
      const remainingText = line.slice(regex.lastIndex);

      if (/^\s*:/.test(remainingText)) {
        tokens.push({
          text: value,
          type: 'property'
        });
      } else {
        tokens.push({
          text: value,
          type: 'string'
        });
      }
    }
    else if (/^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(value)) {
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
    else {
      tokens.push({
        text: value,
        type: 'punctuation'
      });
    }

    lastIndex = regex.lastIndex;
  }

  // Preserve anything remaining at the end of the line
  if (lastIndex < line.length) {
    tokens.push({
      text: line.slice(lastIndex),
      type: 'normal'
    });
  }

  return tokens;
}