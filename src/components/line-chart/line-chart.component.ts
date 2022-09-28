import {Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  chardata: any[] = [];
  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [{
        data: this.chardata,
      }, ],
      chart: {
        type: "line",
        zoomType: 'x'
      },
      title: {
        text: "linechart",
      },
    };

    setInterval(() => {
      this.chardata.push(this.getRandomInt(0, 300));

      this.chartOptions = {
        series: [{
          data: this.chardata,
        }, ],
        chart: {
          type: "line",
          zoomType: 'x'
        },
        title: {
          text: "linechart",
        },
      };

    }, 3000)
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


}
