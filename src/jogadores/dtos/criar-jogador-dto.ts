import { IsEmail, IsNotEmpty } from 'class-validator';

export class CriarJogadorDto {
  @IsNotEmpty()
  readonly telefoneCelular: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly nome: string;
}

// DTO e focado em objetos que recebera do cliente
