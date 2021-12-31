import { Component } from "@angular/core";
import arrayCountries from '../utils/country';

@Component({
    selector: 'country-component',
    templateUrl: './country.component.html',
    styleUrls: ['../app/app.component.css']
})

export class CountryComponent {

    words = '';
    limit = 10;

    handleSlideChange(newLimit: any) {
        this.limit = newLimit.target.value;
    }

    generateCountries(){
        this.words = arrayCountries.slice(0, this.limit).join(' ');
    }
}