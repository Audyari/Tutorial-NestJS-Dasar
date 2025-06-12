import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  /**
   * Create a new user
   */
  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.generateId(),
      ...createUserDto,
      createdAt: new Date(),
    };
    
    this.users.push(user);
    return user;
  }

  /**
   * Find all users
   */
  findAll(): User[] {
    return this.users;
  }

  /**
   * Find user by ID
   */
  findOne(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  /**
   * Find users by name (search functionality)
   */
  findByName(name: string): User[] {
    return this.users.filter(user => 
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  /**
   * Generate unique ID for users
   */
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

