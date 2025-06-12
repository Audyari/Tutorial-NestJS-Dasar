import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  HttpStatus,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { User } from './interfaces/user.interface';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Create a new user
   * POST /api/users
   */
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto);
  }

  /**
   * Get all users
   * GET /api/users
   */
  @Get()
  getAllUsers(): User[] {
    return this.userService.findAll();
  }

  /**
   * Get user by ID
   * GET /api/users/:id
   */
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.userService.findOne(id);
    
    if (!user) {
      throw new HttpException(
        `User with ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    
    return user;
  }

  /**
   * Search users by name
   * GET /api/users/search?name=john
   */
  @Get('search')
  searchUsersByName(@Query('name') name: string): User[] {
    if (!name) {
      throw new HttpException(
        'Name query parameter is required',
        HttpStatus.BAD_REQUEST,
      );
    }
    
    return this.userService.findByName(name);
  }

  /**
   * Demo endpoint with name and age parameters
   * GET /api/users/demo/greeting?name=john&age=25
   */
  @Get('demo/greeting')
  getDemoGreeting(
    @Query('name') name: string,
    @Query('age', ParseIntPipe) age: number,
  ): { message: string; data: { name: string; age: number } } {
    if (!name) {
      throw new HttpException(
        'Name query parameter is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      message: `Hello! My name is ${name} and I am ${age} years old`,
      data: { name, age },
    };
  }

  /**
   * Simple hello endpoint for testing
   * GET /api/users/hello
   */
  @Get('hello')
  sayHello(): { message: string; timestamp: string } {
    return {
      message: 'Hello from NestJS User API!',
      timestamp: new Date().toISOString(),
    };
  }
}

