export interface JwtPayload {
  email: string;
  sub: string;
  password?: string;
}
