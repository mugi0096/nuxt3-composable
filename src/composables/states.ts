import { Ref } from 'vue';

type User = {
  id: string;
  name: string;
  mail: string;
};

export const useLoginUser = () => 
  useState<User>('login-user', () => {
    return {
      id: '123',
      name: 'ueno',
      mail: 'test@example.com'
    };
})