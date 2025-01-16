import { Component, OnInit, OnDestroy } from '@angular/core';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'calcite-components-angular-example';
  sliderValue = 50;
  isDialogOpen = true;
  cities: City[] | undefined;
  selectedCity: City | undefined;

  public isLoading: boolean = true;

  ngOnInit() {
    this.fetch();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnDestroy(): void {
    this.clearSliderValue();
  }

  async fetch() {
    await new Promise((r) => setTimeout(r, 2000));
    this.isLoading = false;
  }

  open() {
    this.isDialogOpen = true;
  }

  onSliderInput(event: Event) {
    const value = (event.target as HTMLCalciteSliderElement).value;
    if (typeof value === 'number') {
      this.sliderValue = value;
    }
  }

  clearSliderValue() {
    this.sliderValue = 0;
  }
}
