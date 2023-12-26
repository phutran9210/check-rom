import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/v1/users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('register')
  createUser(): string {
    return 'Hello';
  }
}
