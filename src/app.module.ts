import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './common/db/db.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ProjectModule } from './modules/project/project.module';
import { AssignModule } from './modules/assign/assign.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    // DbModule,
    // EmployeeModule,
    // ProjectModule,
    // AssignModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
