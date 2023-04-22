import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements AfterViewInit {

  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;
  @ViewChild('newItem') newItem!: ElementRef;

  @Output() newCityEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  ngAfterViewInit(): void {
    // console.log('this.newItem', this.newItem);
    this.newItem.nativeElement.focus();
  }

  // onAddNewItem(item: string): void {
  //   this.newCityEvent.emit(item);
  // }

  onAddNewItem(): void {
    this.newCityEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }

  // onUpdateItem(item: City, change: string): void {
  //   console.log('item', item);
  //   console.log('change', change);
  //   const city: City = {
  //     _id: item._id,
  //     name: change
  //   }
  //   this.updateItemEvent.emit(city);
  // }

  onUpdateItem(): void {
    const city: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value
    }
    this.updateItemEvent.emit(city);
    this.onClear();
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }

}
