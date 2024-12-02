import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity ({name:'tests'})
export class test{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string;
}