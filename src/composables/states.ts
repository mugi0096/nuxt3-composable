export const useLoginUser = () => 
  useState<{ id: string, name: string, mail: string }>('login-user', () => {
    console.log('retrieving user info...');
    return {
      id: '123',
      name: 'ueno',
      mail: 'test@example.com'
    };
})