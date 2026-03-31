import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  hasArrow?: boolean;
  hasToggle?: boolean;
  enabled?: boolean;
}

interface Section {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-ios-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ios-page.component.html',
  styleUrls: ['./ios-page.component.css']
})
export class IosPageComponent {
  sections: Section[] = [
    {
      title: 'Segurança',
      items: [
        { id: 1, label: 'Alterar senha', icon: '✏️', hasArrow: true }
      ]
    },
    {
      title: 'Cartão físico',
      items: [
        { id: 2, label: 'Bloqueio temporário', icon: '🔒', hasToggle: true, enabled: true },
        { id: 3, label: 'Cancelar cartão', icon: '🗑️', hasArrow: true }
      ]
    },
    {
      title: 'Cartão virtual',
      items: [
        { id: 4, label: 'Bloqueio temporário', icon: '🔒', hasToggle: true, enabled: true },
        { id: 5, label: 'Excluir cartão', icon: '🗑️', hasArrow: true }
      ]
    }
  ];

  toggleItem(item: MenuItem): void {
    if (item.hasToggle) {
      item.enabled = !item.enabled;
    }
  }

  goBack(): void {
    console.log('Voltar');
  }
}
