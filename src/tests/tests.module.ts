import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { test } from "./tests.entity";
import { testsController } from "./tests.controller";
import { testsService } from "./tests.service";
@Module({
    imports: [TypeOrmModule.forFeature([test])],
    controllers:[testsController],
    providers:[testsService]
})
export class testsmodule{}