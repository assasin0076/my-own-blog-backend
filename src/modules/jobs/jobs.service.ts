import { Injectable } from '@nestjs/common';
import { TJob } from './types/TJobs';

@Injectable()
export class JobsService {
  private jobs: TJob[] = [
    {
      id: 1,
      companyName: 'nLogic',
      position: 'Frontend-разработчик',
      description:
        'Проектная работа.\n' +
        'Разрабатывал компоненты и страницы на vue в паре со старшим разработчиком. Завершили1 проект ( интернет магазин ) , так же учавствовал в разработке социальной сети.\n' +
        'Поработал с vue-router, nuxt, webpack.',
      startAt: '2021-07',
      endAt: '2022-10',
    },
    {
      id: 2,
      companyName: 'Стартап',
      position: 'Frontend-разработчик',
      description:
        'Продуктовая компания.\n' +
        'Разрабатывал 1 продукт и еще 2 поддерживал. Работал в команде со старшим разработчиком.\n' +
        'Проекты, в которых был задействован я представляли собой универсальные системы автоматизации работы с документами, подходящие множеству известных компаний\n' +
        'Поработал с canvas, vue2/vuex, vue3/pinia, писал unit tests на vue-test-utils и vitest, немного писал e2e тесты.',

      startAt: '2021-04',
      endAt: '2021-07',
    },
  ];

  findAll(): TJob[] {
    return this.jobs;
  }
}
