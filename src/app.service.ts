import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly startTime = Date.now();

  /**
   * Get application health check information
   */
  getHealthCheck(): {
    message: string;
    timestamp: string;
    uptime: number;
    environment: string;
  } {
    return {
      message: 'NestJS API is running successfully! 🚀',
      timestamp: new Date().toISOString(),
      uptime: Math.floor((Date.now() - this.startTime) / 1000),
      environment: process.env.NODE_ENV || 'development',
    };
  }

  /**
   * Get API information and available endpoints
   */
  getApiInfo(): {
    name: string;
    version: string;
    description: string;
    endpoints: string[];
  } {
    return {
      name: 'NestJS Tutorial API',
      version: '1.0.0',
      description: 'A RESTful API built with NestJS framework for learning purposes',
      endpoints: [
        'GET / - Health check',
        'GET /info - API information',
        'GET /api/users - Get all users',
        'POST /api/users - Create new user',
        'GET /api/users/:id - Get user by ID',
        'GET /api/users/search?name=value - Search users by name',
        'GET /api/users/demo/greeting?name=value&age=value - Demo greeting',
        'GET /api/users/hello - Simple hello message',
      ],
    };
  }
}
