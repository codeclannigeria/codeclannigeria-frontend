import decode from 'jwt-decode';

const checkAuth = () => {
  const token = localStorage.getItem('codeclan_token');

  if (!token) return false;

  try {
    const { exp, role } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
    return role;
  } catch (e) {
    return false;
  }
};
export default checkAuth;
