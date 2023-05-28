export interface Voting {
  id: number;
  question: string;
  options: {
    id: number;
    title: string;
  }[];
}
