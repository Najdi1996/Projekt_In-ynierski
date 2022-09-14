import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DateClickArg} from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: ['./kalendarz.component.scss']
})
export class KalendarzComponent implements OnInit {
  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ],
    //  dateClick: function(info) {
    //   alert('Clicked on: ' + info.dateStr);
    //   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    //   alert('Current view: ' + info.view.type);
    //   // change the day's background color just for fun
    //   info.dayEl.style.backgroundColor = 'red';
    //  }, 
    dateClick: this.handleDateClick.bind(this),
    selectable: true,
    editable: true,
    themeSystem: 'standard',
    // initialView: 'dayGridMonth',
    initialView: 'listDay',
    height: 650,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridDay,timeGridDay,timeGridWeek,listWeek,listDay'
    }
  };

  handleDateClick(arg: DateClickArg) {
    this.calendarComponent.getApi().changeView('timeGridDay', arg.date);
  }

  constructor() { }

  ngOnInit() {
  }

}
