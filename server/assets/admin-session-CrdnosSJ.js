const KEY = "fsg_admin_token";
function getAdminToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(KEY);
}
function setAdminToken(token) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, token);
}
function clearAdminToken() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
export {
  clearAdminToken as c,
  getAdminToken as g,
  setAdminToken as s
};
