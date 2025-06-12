import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Health check endpoint
   * GET /
   */
  @Get()
  getHealthCheck(): {
    message: string;
    timestamp: string;
    uptime: number;
    environment: string;
  } {
    return this.appService.getHealthCheck();
  }

  /**
   * API information endpoint
   * GET /info
   */
  @Get('info')
  getApiInfo(): {
    name: string;
    version: string;
    description: string;
    endpoints: string[];
  } {
    return this.appService.getApiInfo();
  }
}
