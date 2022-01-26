import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe("Tela de descrição de email", () => {

  test('Existe um elemento de input Email?', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  test('Existem botões tipo input?', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('Existe um botão tipo input com valor Enviar?', () => {
    render(<App />);
    const inputButton = screen.getByTestId("id-send");
    expect(inputButton).toHaveProperty('type', 'button');
    expect(inputButton).toHaveValue('Enviar');
  });

  test('Verifica se ao digitar o email e clicar em enviar, o email é renderizado', () => {
    render(<App />);

    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');
  
    // interagir!
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(button);

    // Testar!
    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent('Valor: teste@teste.com');
})});