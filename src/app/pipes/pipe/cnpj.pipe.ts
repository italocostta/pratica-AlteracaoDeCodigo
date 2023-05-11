import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      // Remove todos os caracteres não numéricos
      value = value.replace(/[^\d]/g, '');

      // Aplica a máscara do CNPJ: XX.XXX.XXX/XXXX-XX
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    return value;
  }
}
