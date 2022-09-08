import { compareSync } from 'bcrypt';

import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Usuarios } from 'src/users/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuarios.name)
    private userModel: Model<Usuarios>,
    private jwtService: JwtService,
  ) {}

  async login({ email, id, password }) {
    const accessToken = this.jwtService.sign({ email, id, password });

    return {
      accessToken,
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });

    if (user && compareSync(password, user.password)) {
      const { ...result } = user;

      return result;
    }

    return null;
  }
}
