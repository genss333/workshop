import { type SchemaGenerator } from '@babelcoder/restmock';

const schema: SchemaGenerator = ({ faker, _ }) => {
  return {
    users: {
      generator: () => ({
        username: faker.internet.displayName(),
        email: faker.internet.email(),
      }),
      defaultFields: () => ({
        role: 'user',
      }),
      files: ['avatar'],
      excludeFields: ['password', 'refreshToken'],
    },
    articles: {
      generator: () => ({
        title: 'string',
        content: 'string',
      })
    },
    comments: {
      generator: () => ({
        message: 'string',
        articleId: 'ref:article:random',
      })
    }
  };
};

export default schema;
