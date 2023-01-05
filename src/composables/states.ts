import { Ref } from 'vue';

type User = {
  id: string;
  name: string;
  mail: string;
};

export const useLoginUser = () => {
  const state = useState<User>('login-user', () => ({
    id: '123',
    name: 'ueno',
    mail: 'test@example.com',
  }));
  return {
    user: readonly(state),
    setName: setName(state),
    setMail: setMail(state),
  };
};

const setName = (state: Ref<User>) => {
  return (name: string) => state.value.name = name;
};

const setMail = (state: Ref<User>) => {
  return (mail: string) => state.value.mail = mail;
};
