export default function authHeader() {
    const userStr = localStorage.getItem('user');
    const user = userStr && JSON.parse(userStr);

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return { Authorization: '' };
    }
}
