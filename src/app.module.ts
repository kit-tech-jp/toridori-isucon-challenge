import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./db/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
