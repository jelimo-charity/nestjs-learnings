import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { OrdersController } from './controllers/orders/orders.controller';

@Module({
  controllers: [UsersController, OrdersController]
})
export class UsersModule {}
