import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name:"imagesFilter"
})

export class ImagesFilterPipe implements PipeTransform{
    transform(images, inputValue:string){
        if(!images || !inputValue){
            return images;
        }

        return images.filter(images=> images.name.toLowerCase().indexOf(inputValue.toLowerCase()) != -1);
    }
}