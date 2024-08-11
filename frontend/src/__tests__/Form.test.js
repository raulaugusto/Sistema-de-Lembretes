import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as LembretesService from '../services/Lembretes';
import Form from '../components/Form';

describe('Testes do componente Form', () => {
  it('Deve chamar a função registraLembrete ao submeter o formulário', async () => {
    // Mock da função registraLembrete
    const registraLembreteSpy = jest.spyOn(LembretesService, 'registraLembrete').mockResolvedValue({ nome: 'Teste', data: '2025-08-11' });

    render(<Form fetchLembretes={() => {}} />);

    fireEvent.change(screen.getByLabelText(/Nome:/i), { target: { value: 'Teste' } });
    fireEvent.change(screen.getByLabelText(/Data:/i), { target: { value: '2025-08-11' } });
    fireEvent.click(screen.getByRole('button', { name: /Criar/i }));

    await waitFor(() => {
      expect(registraLembreteSpy).toHaveBeenCalledWith('Teste', '2025-08-11');
    });

    registraLembreteSpy.mockRestore(); // Restaura a função original após o teste
  });
});
