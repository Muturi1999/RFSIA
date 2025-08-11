let token: string | null = null;
export const auth = {
  get: () => token,
  set: (t: string | null) => { token = t; },
};
