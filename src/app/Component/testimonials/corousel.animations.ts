import {
  animate,
  animation,
  keyframes,
  style,
} from '@angular/animations';

export const slideIn = animation([
  style({ transform: 'translateX(100%)' }),
  animate('{{ time }}', style({ transform: 'translateX(0%)' })),
]);
