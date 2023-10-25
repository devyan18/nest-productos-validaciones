import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose'

@Injectable()
export class MongoidPipe implements PipeTransform {

  transform(value: any) {
    
    if (!isValidObjectId(value)) throw new BadRequestException(`${value} is not a valid ObjectId`)

    return value;
  
  }

}
