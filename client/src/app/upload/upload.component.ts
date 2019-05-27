import { Component, OnInit } from '@angular/core';
import { FileUploader,FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public fileuploader:FileUploader=new FileUploader({url:'http://localhost:3000/users/upload',itemAlias:'photo'});

  constructor() { }

  ngOnInit() {
    this.fileuploader.onAfterAddingFile=(file)=>{file.withCredentials=false};
    this.fileuploader.onCompleteItem=(item:any,status:any,response:any,headers:any)=>{
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    }
  }

}
