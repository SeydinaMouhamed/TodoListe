import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

    secondeSub: any;

    constructor() {}

    ngOnInit(): void {
        const salutation = new Observable((observer) => {
            observer.next("Hello")
            observer.next(" world")
            observer.complete();
        });

        const secondeObs = interval(1000);
        /*const secondeObs = new Observable((observer) => {
            let value = 0;

            const intervalle = setInterval(() => {
                //if (value % 2 === 0)
                observer.next(value);
                value++;
            }, 1000 );

            return () => clearInterval(intervalle);
        });*/

        this.secondeSub = secondeObs.subscribe(
            (value) => {
                this.secondeSub = value;
                //console.log(value)
            }
        );
    }

    ngOnDestroy(): void {
        this.secondeSub.unsubscribe();
    }

}
