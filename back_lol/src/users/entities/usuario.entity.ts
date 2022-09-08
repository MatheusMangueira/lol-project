import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export interface IUsuario {
  id: number;
  name: string;
  email: string;
  password: string;
}

export class Usuarios extends Document {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
