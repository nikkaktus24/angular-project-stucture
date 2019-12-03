import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICourse} from "../../interfaces/courses";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  public items: any = [];

  constructor(private httpClient: HttpClient, private cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
  }

  public getCourses(): void {
    this.httpClient.get<ICourse[]>('http://localhost:3004/courses/')
        .subscribe((items: ICourse[]) => {
          this.items = items;
          this.cdRef.markForCheck();
          console.log(items);
        });
  }

}
