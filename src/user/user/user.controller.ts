import { Controller, Post, Get, Req, Query, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {
  //6. HTTP Request 'Express HTTP Request Yg di sarankan 2 parameter
  // http://localhost:3000/api/users/sayHelloParameter?name=Audyari&age=41
  @Get('/sayHelloParameter')
  sayHelloParameter(
    @Query('name') name: string,
    @Query('age') age: number,
  ): string {
    return `Haiii Nama Saya =  ${name} dan Umur = ${age}`;
  }

  //6. HTTP Request 'Express HTTP Request Yg di sarankan
  // http://localhost:3000/api/users/HelloUpdate?name=Audyari W
  @Get('/HelloUpdate')
  sayHelloUpdate(@Query('name') name: string): string {
    return `Pemanggilan Nama =  ${name}`;
  }

  //6. HTTP Request 'Express HTTP Request
  // http://localhost:3000/api/users/Hello?name=Audyari W
  @Get('/Hello')
  sayHello(@Req() request: Request): string {
    return `Pemanggilan Nama =  ${request.query.name}`;
  }

  //6. HTTP Request 'Express HTTP Request
  // http://localhost:3000/api/users/POLITIK
  @Get('/:id')
  getByidUpdate(@Param('id') id: string): string {
    return `get By id Update ${id}`;
  }

  //6. HTTP Request 'Express HTTP Request
  // http://localhost:3000/api/users/POLITIK
  @Get('/:id')
  getByid(@Req() request: Request): string {
    return `GET USER BY ID ${request.params.id}`;
  }

  //5. HTTP Method Decorator metode POST
  //http://localhost:3000/api/users
  @Post('')
  createUser(): string {
    return 'create user';
  }

  //5. HTTP Method Decorator metode GET
  //http://localhost:3000/api/users/sample
  @Get('sample')
  getUser(): string {
    return 'Hello NestJS';
  }
}
