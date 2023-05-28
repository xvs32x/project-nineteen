export interface Voting {
  id: string;
  question: string;
  options: {
    id: string;
    title: string;
  }[];
}
