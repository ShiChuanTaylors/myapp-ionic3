import { Component, Input, ElementRef, AfterViewInit, ViewChild, ChangeDetectorRef  } from '@angular/core';

@Component({
    selector: 'read-more',
    templateUrl: 'read-more.html'
})
@Component({
    selector: 'read-more',
    template: `
        
    `,
    styles: [`
        div.collapsed {
            overflow: hidden;
        }
    `]
})

export class ReadMoreComponent implements AfterViewInit {
    
    
    @ViewChild('contentRead') elementView: ElementRef;
    //the text that need to be put in the container
    @Input() text: string;

    //maximum height of the container
    @Input() maxHeight: number = 100;

    //set these to false to get the height of the expended container 
    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;

    constructor(private cdr: ChangeDetectorRef ) {
    }

    ngAfterViewInit() {
        
        let currentHeight =  this.elementView.nativeElement.offsetHeight;
        //this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
        //collapsable only if the contents make container exceed the max height
        if (currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
            this.cdr.detectChanges();
        } else {
          //for demo purpose, always set the collapsible to true
            this.isCollapsed = true;
            this.isCollapsable = true;
        }

        console.log('is collapsible: '+this.isCollapsable);
        console.log(this.elementView.nativeElement + this.elementView.nativeElement.offsetHeight);
        console.log(currentHeight);
        // this.cdr.detectChanges();
    }
}

// export class ReadMoreComponent implements OnChanges {
//     @Input() text: string;
//     @Input() maxLength: number = 100;
//     currentText: string;

//     public isCollapsable: boolean = false;
//     public isCollapsed: boolean = false;

//     constructor(private elementRef: ElementRef) {

//     }

//     toggleView() {
//         this.isCollapsed = !this.isCollapsed;
//         this.determineView();
//     }
    
//     determineView() {
//         if (this.text.length <= this.maxLength) {
//             this.currentText = this.text;
//             this.isCollapsed = false;
//             this.isCollapsable = false;
//             return;
//         }
        
//         this.isCollapsable = true;
//         if (this.isCollapsed == true) {
//             this.currentText = this.text.substring(0, this.maxLength) + "...";
//         } else if(this.isCollapsed == false)  {
//             this.currentText = this.text;
//         }
//     }

//     ngOnChanges() {
//         this.determineView();       
//     }
// }