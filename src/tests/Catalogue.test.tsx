import { render, fireEvent, waitFor } from '@testing-library/react';
import { Catalogue } from '../components/Catalogue/Catalogue.tsx';
import '@testing-library/jest-dom'


describe('<Catalogue />', () => {
    it('clears all filters when clicking the clear button', async () => {
        const { getByAltText, getByText } = render(<Catalogue />);

        // Находим кнопку "крестик" по альтернативному тексту
        const clearButton = getByAltText('cross');

        // Кликаем на кнопку очистки
        fireEvent.click(clearButton);

        // Проверяем, что все фильтры сброшены
        await waitFor(() => {
            expect(getByText('Жанр')).toBeInTheDocument();
            expect(getByText('Теги')).toBeInTheDocument();
            expect(getByText('Демографика')).toBeInTheDocument();
            expect(getByText('Рейтинг')).toBeInTheDocument();
        });
    });
});

