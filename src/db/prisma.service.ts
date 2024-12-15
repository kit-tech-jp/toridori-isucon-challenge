import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { type Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient<
    Prisma.PrismaClientOptions,
    "query" | "info" | "warn" | "error"
  >
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({ log: [{ level: "query", emit: "event" }] });
  }

  async onModuleInit(): Promise<void> {
    this.$on("query", (e) => {
      console.log(
        `TimeStamp: ${e.timestamp}
        Query: ${e.query}
        Params: ${e.params}
        Duration: ${e.duration}ms`,
      );
    });

    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
