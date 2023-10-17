import { Controller, Get, Param } from '@nestjs/common';

@Controller('app')
export class AppController {

  @Get('')
  getHello(@Param('name') name: string): string {
    return 'hola! ' + name;
  }

}
