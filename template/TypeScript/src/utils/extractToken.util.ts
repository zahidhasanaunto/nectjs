export function extractToken(headers: any) {
  let token: string =
    headers && headers.authorization ? headers.authorization : '';
  token = token.replace(/Bearer\s+/gm, '');
  return token;
}
