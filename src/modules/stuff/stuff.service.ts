import { Injectable } from '@nestjs/common';
import { TStuff } from './types/TStuff';

@Injectable()
export class StuffService {
  private stuff: TStuff[] = [
    {
      id: '1',
      ref: 'juice-spa',
      description:
        'На одной из вакансий после прохождения интервью мне предложили выполнить тестовое задание. Мне оно показалось интересным и я выполнил, и довольно быстро. Правда обратной связи нет по сей день, но тестовое осталось',
      tags: 'Vue3,Scss',
      label: 'SPA для напитков',
      repoLink: 'https://gitlab.com/assasin0076/vue-spa-landing',
      viewLink: 'https://vue-spa-landing-c5ens4xzo-assasin0076.vercel.app/',
      component: 'item',
    },
    {
      id: '2',
      ref: 'this-site',
      description: 'У этого сайта тоже есть кодовая база. Удивительно, не так ли? :)',
      tags: 'Vue3,Tailwind,Typescript',
      label: 'Этот сайт',
      repoLink: 'https://github.com/assasin0076/my-own-blog-front/tree/master',
      viewLink: 'https://my-own-blog-front.vercel.app/',
      component: 'item',
    },
  ];

  findAll(): TStuff[] {
    return this.stuff;
  }
}
