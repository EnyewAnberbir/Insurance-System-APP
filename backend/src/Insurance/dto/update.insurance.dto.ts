/* eslint-disable prettier/prettier */
import {  IsOptional, IsString, IsNumber, IsBoolean } from "class-validator";


/* eslint-disable prettier/prettier */
export class UpdateInsuranceDto{
  @IsString()
  @IsOptional()    
  telebirr?:string; 

  @IsString()  
  @IsOptional()       
  level?:string; 
  @IsOptional() 
   
  deposit?:number;  
  @IsOptional() 
  @IsString()        
  type?:string;

  @IsOptional() 
  room?:number
  @IsString()  
  @IsOptional() 
  location?:string
   
  @IsOptional()  
  size?:number
  
  @IsNumber()  
  @IsOptional() 
  
  monthly_payment?:number
}

export class UpdateByAdminInsurance{
  @IsBoolean()
  @IsOptional()
  status?:boolean;

  @IsOptional()
  @IsNumber()
  monthly_payment?:number;

  @IsOptional()
  @IsString()
  telebirr_QR?:string;
}