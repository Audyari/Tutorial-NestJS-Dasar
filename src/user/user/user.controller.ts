import { Controller, Post, Get } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Post('')
  createUser(): string {
    return 'create user';
  }

  @Get('sample')
  getUser(): string {
    return 'Hello NestJS';
  }
}
