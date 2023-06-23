import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggableTable]'
})
export class DraggableTableDirective {

  private draggedCell: HTMLTableCellElement | null = null;
  private dragImage: HTMLDivElement | null = null;
  private dropTarget: HTMLInputElement | null = null;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const closestCell = target.closest('td');
    if (closestCell) {
      closestCell.draggable = true;
    }
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent): void {
    const cell = event.target as HTMLTableCellElement;
    if (cell.tagName === 'TD') {
      this.draggedCell = cell;

      const input = cell.querySelector('input');
      if (input) {
        event.dataTransfer!.setData('text/plain', input.value || '');
      } else {
        event.dataTransfer!.setData('text/plain', cell.textContent || '');
      }

      // Create a custom drag image
      this.dragImage = document.createElement('div');
      this.dragImage.textContent = input ? input.value : cell.textContent;
      this.dragImage.style.position = 'absolute';
      this.dragImage.style.pointerEvents = 'none';
      this.dragImage.style.border = 'none';
      this.dragImage.style.paddingLeft = '20px';
      this.dragImage.style.backgroundColor = 'transparent';
      this.dragImage.style.top = '-150px';
      this.dragImage.style.left = '-500px';
      this.dragImage.style.fontSize = '14px';
      document.body.appendChild(this.dragImage);

      event.dataTransfer!.setDragImage(this.dragImage, 0, 0);
    }
  }

  @HostListener('dragend')
  onDragEnd(): void {
    // Remove the custom drag image
    if (this.dragImage && this.dragImage.parentNode) {
      this.dragImage.parentNode.removeChild(this.dragImage);
      this.dragImage = null;
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent): void {
    event.preventDefault();
  }

  @HostListener('drop')
  onDrop(): void {
    if (this.draggedCell && this.dropTarget) {
      const input = this.draggedCell.querySelector('input');
      this.dropTarget.value = input ? input.value : this.draggedCell.textContent;
    }
  }

  @HostListener('dragenter', ['$event'])
  onDragEnterContainer(event: DragEvent): void {
    this.dropTarget = event.target as HTMLInputElement;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeaveContainer(event: DragEvent): void {
    if (this.dropTarget === event.target) {
      this.dropTarget = null;
    }
  }
}
