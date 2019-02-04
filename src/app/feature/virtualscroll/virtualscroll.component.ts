import { Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualscrollComponent implements OnInit {

  items;
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  constructor() { }

  ngOnInit() {
    this.items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }

}
