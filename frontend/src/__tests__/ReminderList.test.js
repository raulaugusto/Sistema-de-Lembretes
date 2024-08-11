import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReminderList from '../components/ReminderList';
import { deletarLembrete } from '../services/Lembretes';

jest.mock('../services/Lembretes');

describe('Testes do componente ReminderList', () => {
  it('Deve exibir lembretes corretamente', () => {
    const lembretes = { '2025-08-11': ['Teste'] };
    render(<ReminderList lembretes={lembretes} setLembretes={() => {}} />);
    expect(screen.getByText(/2025-08-11:/i)).toBeInTheDocument();
    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  });

  it('Deve chamar a função deletarLembrete ao clicar em "X"', async () => {
    deletarLembrete.mockResolvedValue({ mensagem: 'Lembrete removido.' });

    const lembretes = { '2025-08-11': ['Teste'] };
    render(<ReminderList lembretes={lembretes} setLembretes={() => {}} />);
    fireEvent.click(screen.getByText(/X/i));

    expect(deletarLembrete).toHaveBeenCalledWith('2025-08-11', 'Teste');
  });
});
