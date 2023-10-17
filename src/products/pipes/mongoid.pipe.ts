import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MongoidPipe implements PipeTransform {

  transform(value: any) {
  
    return value;
  
  }

}
