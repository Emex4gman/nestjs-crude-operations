import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModuel } from './products/products.module';

@Module({
  imports: [ProductModuel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
