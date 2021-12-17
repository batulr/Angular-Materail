import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desgn-sys-eg';

  constructor(private formBuilder: FormBuilder) {}
  profileForm = this.formBuilder.group({
    firstName: [''],
    lastname: [''],
    address: [''],
    gender: [''],
    dob: [''],
    eng: [''],
    hin: [''],
    fren: [''],
    germ: [''],
    hobby: [''],
  });

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Reading', completed: false, color: 'primary' },
      { name: 'Listening to Songs', completed: false, color: 'primary' },
      { name: 'Art and Crafts', completed: false, color: 'primary' },
      { name: 'Cycling', completed: false, color: 'primary' },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
