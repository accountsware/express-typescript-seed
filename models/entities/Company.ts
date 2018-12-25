import {AllowNull, BeforeSave, Column, Table, Unique} from 'sequelize-typescript';
import {Utils} from "../../utils";
import {BaseModel} from "./BaseModel";

@Table
export class Company extends BaseModel<Company> {

    @AllowNull(false)
    @Unique
    @Column
    companyId: string;

    @AllowNull(false)
    @Column
    companyName: string;

    @Column
    VATcycle: number;

    @Column
    ACS: Date;

    @Column
    YearEnd: Date;


   
}
