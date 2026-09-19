export interface SyntaxToken {
  text: string;
  type:
    | 'normal'
    | 'keyword'
    | 'string'
    | 'property'
    | 'comment'
    | 'number'
    | 'punctuation';
}