export type Questions = {
   name: string;
   topic: string;
   difficulty?: string;
   questions: Question[];
}

export type TopicInfo = {
   name: string;
   difficulty: string;
   picture: string;
   link: string;
   date: string;
}

export type Question = {
   question: string;
   answer: string;
}

export type Game = {
   name: string;
   picture: Blob;
   questionsURL: string;
   maxPlayers: number;
}