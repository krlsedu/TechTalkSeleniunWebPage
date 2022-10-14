import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebPage';

  techTalk: any = {}

  techTalks: any[] = []

  submitForm(formData: any): void {
    console.log("submitForm");
    console.log(formData);
    console.log(this.techTalks);
    this.techTalks.forEach((techTalk: any) => {
        if (techTalk.title == formData.value.title) {
          console.log("Duplicate");
          formData.controls['title'].setErrors({'exists': true});
          return;
        }
      }
    );
    if (formData.valid) {
      console.log(formData.value);
      this.techTalks.push(formData.value);
      formData.reset();
    }
  }
}
