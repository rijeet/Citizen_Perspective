import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { ArticlesService } from './../src/articles/articles.service';
import { PrismaService } from './../src/prisma/prisma.service';
import { AppModule } from './../src/app.module';

describe('Articles API (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        onModuleInit: async () => {},
        onModuleDestroy: async () => {},
        $connect: async () => {},
        $disconnect: async () => {},
      })
      .overrideProvider(ArticlesService)
      .useValue({
        list: jest.fn().mockResolvedValue({
          data: [
            {
              id: '1',
              slug: 'sample-slug',
              publishedAt: '2024-01-01T00:00:00.000Z',
              coverUrl: null,
              category: 'News',
              title: 'Sample',
              description: 'Desc',
              locale: 'bn',
              source: { name: 'Source', url: null },
            },
          ],
          meta: { page: 1, pageSize: 12, total: 1 },
        }),
        getBySlug: jest.fn().mockResolvedValue({
          id: '1',
          slug: 'sample-slug',
          publishedAt: '2024-01-01T00:00:00.000Z',
          coverUrl: null,
          category: 'News',
          title: 'Sample article',
          description: null,
          bodyMd: '# Hi',
          locale: 'bn',
          source: { name: 'Source', url: null },
        }),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidUnknownValues: false,
      }),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('GET /api/v1/articles', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/v1/articles?locale=en')
      .expect(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].slug).toBe('sample-slug');
  });

  it('GET /api/v1/articles/:slug', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/v1/articles/sample-slug?locale=en')
      .expect(200);
    expect(res.body.title).toBe('Sample article');
    expect(res.body.bodyMd).toBe('# Hi');
  });
});
