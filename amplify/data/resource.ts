import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  ClientProfile: a
    .model({
      email: a.string().required(),
      companyName: a.string(),
      taxYearStatus: a.string(),      // e.g., "2025 Filed", "Awaiting Documents"
      portalNotice: a.string(),       // Direct messages to this specific client
    })
    .authorization((allow) => [
      // Enforces strict multi-user sandboxing: 
      // Users can only view or modify records they specifically own
      allow.owner(),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});