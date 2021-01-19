import english from './en.json';

const activeLanguege = english;

const locale = activeLanguege as { [key: string]: string };

export const t = (text: string) => locale[text];
