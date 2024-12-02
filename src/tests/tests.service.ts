import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { test } from "./tests.entity";
import { Repository } from "typeorm";
import { createTestsDto } from "./dtos/create-test.dto";
@Injectable()
export class testsService{
    constructor(
        @InjectRepository(test) private testRepository: Repository<test>,){}
 async   create(dto:createTestsDto){
        const Test=this.testRepository.create(dto);
        return await this.testRepository.save(Test);
    }

    findMany(){
        return this.testRepository.find();
    }

  async  update(id: number, dto:createTestsDto){
        const Test= await this.testRepository.findOne({ where: { id } });
    Object.assign(Test,dto);
   return await this.testRepository.save(Test);
    
    }

    async  delete(id: number){
        const Test= await this.testRepository.findOne({ where: { id } });
 
   return await this.testRepository.remove(Test);
    
    }
}