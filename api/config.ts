import { type ConfigInFile } from '@babelcoder/restmock';

const config: ConfigInFile = {
  port: 3663,
  dataDir: './api/data',
  schemaFile: 'schema.ts',
  mapPaths: [
    {
      path: "/users",
      collection: "users",
    },
    {
      path: "/articles",
      collection: "articles",
    },
    {
      path: "/comments",
      collection: "comments",
    },
  ],
  extraRoutes: [],
  middleware: [
    [
      'auth',
      {
        kind: 'jwt-cookies',
        accessTokenSecretKey: 'secret',
        refreshTokenSecretKey: 'secret',
        accessTokenExpiresIn: '5m',
        refreshTokenExpiresIn: '90d',
        payloadFields: ['role'],
        enableAuthFor: [],
        filterRecordsForUser: [],
      },
    ],
    [
      'casl',
      {
        defineAbilitiesFor({ user, can }) {},
        checkAbilitiesFor: [],
      },
    ],
  ],
  errorHandlers: [],
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
  hooks: {
    afterResolveRecords: [],
    beforeSaveRecord: [],
  },
};

export default config;
