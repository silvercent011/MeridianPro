export interface User {
  _id: string;
  cpf: string;
  nome: string;
  level: string;
  email: string;
  created: number;
  updated: number;
  token?: string;
}
