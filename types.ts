
export enum Category {
  Mammal = '포유류',
  Marine = '해양',
  Bird = '조류',
  Reptile = '파충류',
  Insect = '곤충'
}

export interface AnimalFact {
  id: string;
  category: Category;
  animalName: string;
  mysteryTeaser: string;
  revealTitle: string;
  revealDescription: string;
  deepDiveStory: string;
  silhouetteUrl: string;
  revealImageUrl: string;
  deepDiveImageUrl: string;
  factCheckUrl: string;
  readTime: string;
}

export type AppScreen = 'splash' | 'main_feed' | 'discovery' | 'ranking' | 'profile';
