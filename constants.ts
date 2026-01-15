
import { Category, AnimalFact } from './types';

export const COLORS = {
  primary: '#FF6B35',
  background: '#F9F9F9',
  surface: '#FFFFFF',
  textDark: '#1C110D',
  textMuted: '#6B5852',
};

export const SAMPLE_FACTS: AnimalFact[] = [
  {
    id: 'cow-1',
    category: Category.Mammal,
    animalName: '소',
    mysteryTeaser: '소에게도 사실 OO이 있대... (속닥)',
    revealTitle: '소들도 우리처럼 절친이 있대! 🐮',
    revealDescription: '베프랑 떨어지면 진짜 속상해한대... 너무 귀엽지 않아?',
    deepDiveStory: `그냥 풀만 뜯는 줄 알았지? 사실 소들도 마음이 엄청 섬세해.\n\n완전 신기한 사실! 소들도 '베프'가 있다는 거. 최애 절친이랑 떨어지면 심장이 쿵쾅거린대... 연구 결과에 따르면 단짝이랑 있을 때 훨씬 맘도 편하고 똑똑해진다고 함.\n\n그냥 무리지어 다니는 게 아니라 진짜 우정인 거지. 담에 소 떼 보면 잘 관찰해봐. 절친끼리 꽁냥꽁냥 수다 떨고 있을지도 모름!`,
    silhouetteUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=800&auto=format&fit=crop',
    revealImageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1200&auto=format&fit=crop',
    deepDiveImageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop',
    factCheckUrl: 'https://example.com/fact-check',
    readTime: '3분 읽기'
  },
  {
    id: 'sloth-1',
    category: Category.Mammal,
    animalName: '나무늘보',
    mysteryTeaser: '나무늘보는 일주일에 딱 한 번 OO하러 내려온대요!',
    revealTitle: '나무늘보의 목숨 건 화장실 나들이 💩',
    revealDescription: '일주일에 한 번, 땅으로 내려오는 순간이 가장 위험하대요.',
    deepDiveStory: `나무늘보는 평생의 대부분을 나무 위에서 보내지만, 딱 한 가지 이유로 땅에 내려와요. 바로 '배변' 때문이죠!\n\n에너지를 극도로 아끼는 나무늘보에게 땅으로 내려가는 건 엄청난 모험이에요. 천적에게 노출될 위험이 큼에도 불구하고 꼭 땅에 내려와 흔적을 남긴답니다.\n\n신기한 건 이 행동이 나무늘보 털 속에 사는 나방들과의 공생 관계 때문이라는 설이 유력해요. 정말 느리지만 철저한 계획형 동물이죠?`,
    silhouetteUrl: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=800&auto=format&fit=crop',
    revealImageUrl: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=1200&auto=format&fit=crop',
    deepDiveImageUrl: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=1000&auto=format&fit=crop',
    factCheckUrl: 'https://example.com/fact-check',
    readTime: '2분 읽기'
  },
  {
    id: 'octopus-1',
    category: Category.Marine,
    animalName: '문어',
    mysteryTeaser: '문어의 다리 끝에는 OO이 있대요!',
    revealTitle: '문어는 다리 하나하나가 지능을 가졌대! 🐙',
    revealDescription: '뇌가 하나가 아니라 무려 9개나 된다고?',
    deepDiveStory: '문어는 정말 외계 생명체일까요? 각 다리마다 뉴런이 밀집되어 있어 뇌의 명령 없이도 다리 스스로 맛을 느끼고 물체를 만질 수 있습니다. 심지어 도구를 사용하거나 병뚜껑을 따는 놀라운 지능을 보여줍니다.',
    silhouetteUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=800&auto=format&fit=crop',
    revealImageUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1200&auto=format&fit=crop',
    deepDiveImageUrl: 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?q=80&w=1000&auto=format&fit=crop',
    factCheckUrl: 'https://example.com/fact-check',
    readTime: '2분 읽기'
  }
];
