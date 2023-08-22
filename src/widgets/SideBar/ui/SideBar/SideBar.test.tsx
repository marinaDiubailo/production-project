import { fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line max-len
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';

describe('SideBar', () => {
	test('Test render', () => {
		renderWithTranslation(<SideBar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('Test toggle', () => {
		renderWithTranslation(<SideBar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
