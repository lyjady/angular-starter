import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = '提示框';

  content = 'AppComponent Content';

  cancelText = '取消';

  confirmText = '确定';

  isVisible = false;

  fontSize = 16;

  changeVisible(): void {
    this.isVisible = !this.isVisible
  }

  resetTitle(newTitle: string): void {
    this.title = newTitle
  }
}
