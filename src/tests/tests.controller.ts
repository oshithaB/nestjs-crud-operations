import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { testsService } from "./tests.service";
import { createTestsDto } from "./dtos/create-test.dto";
@Controller('tests')
export class testsController{
    constructor(private readonly TestsService:testsService) {}
   
   @Post()
    create(@Body() dto:createTestsDto){
        return this.TestsService.create(dto);
    } 

    @Get()
    findManay(){
        return this.TestsService.findMany();
    } 

    @Put(':id')
    update(@Param('id')id: number,@Body() dto:createTestsDto){
        return this.TestsService.update(id,dto);
    } 

    @Delete(':id')
    delete(@Param('id')id: number){
        return this.TestsService.delete(id);
    } 
}