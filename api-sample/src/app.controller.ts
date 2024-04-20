import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Training from './Training';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/training")
  getTraining(): Training {
    return this.appService.getTraining();
  }
}
