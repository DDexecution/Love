
export interface Memory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export enum ProposalStatus {
  IDLE = 'IDLE',
  READING_STORY = 'READING_STORY',
  THE_QUESTION = 'THE_QUESTION',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED'
}
