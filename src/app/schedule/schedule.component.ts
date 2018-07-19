import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styles: []
})
export class ScheduleComponent implements OnInit {

  schedules: any;

  constructor(
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.schedules = this.db.collection('schedule').valueChanges();
  }

}
