import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent {
  value = '';

  @Input({ required: true }) options!: { label: string, value: string }[];
  @Input() placeholder: string = 'Select an option';

  @Output() blur = new EventEmitter<void>();

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newValue = target?.value || '';
    this.value = newValue;
    this.onChange(this.value);
  }


  onBlur() {
    this.blur.emit();
  }
}
