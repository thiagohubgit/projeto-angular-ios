import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ListItem {
  id: number;
  label: string;
  enabled: boolean;
}

@Component({
  selector: 'app-ios-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ios-page.component.html',
  styleUrls: ['./ios-page.component.css']
})
export class IosPageComponent {
  items: ListItem[] = [
    { id: 1, label: 'WiFi', enabled: true },
    { id: 2, label: 'Bluetooth', enabled: false },
    { id: 3, label: 'Modo Avião', enabled: false },
    { id: 4, label: 'Notificações', enabled: true }
  ];

  toggleItem(item: ListItem): void {
    item.enabled = !item.enabled;
  }
}
