import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  createHello(): string{
    return 'User was created.';
  }

  @Get('/user/:name')
  findUser(@Param('name') personName: string): string {
    return 'User name was: ${personName}';
  }

  @Delete('/user/:name')
  deleteUser(@Param('name') personName: string): string {
    return 'User name ${personName} was deleted.';
  }

  @Put('/user/:name')
  updateUser(@Param('name') personName: string): string {
    return 'User name ${personName} was updated.';
  }
}
