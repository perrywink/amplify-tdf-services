import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'tdf-assets-bucket',
  access: (allow) => ({
    'assets/*': [
      allow.guest.to(['delete','read','write'])
    ]
  })
});