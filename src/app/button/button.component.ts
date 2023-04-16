import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button class="btn btn-primary">{{ label }}</button>
  <!-- <p>Counter: {{ counterRender() }}</p> -->
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
export class ButtonComponent {

  @Input() color!: string;
  @Input() label!: string;
  // @Input() selected!: string;

  // constructor() { }

  // // counterRender(): boolean {
  // //   console.log('Render Button');
  // //   return true;
  // // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('Changes ->', changes);
  // }
  
  // ngOnInit(): void {
  //   console.log('OnInit');
  // }

  // ngOnDestroy(): void {
  //   console.log('OnDestroy');
  // }

}
