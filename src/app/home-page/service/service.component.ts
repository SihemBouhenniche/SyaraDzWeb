import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input() name: string;
  @Input() details: string;
  @Input() icon : string;
  constructor() { }

  ngOnInit() {
  }

}
