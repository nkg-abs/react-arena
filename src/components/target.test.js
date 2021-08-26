/* eslint-disable max-lines-per-function */
jest.mock('../core/context', () =>
	({
		state: { target: { x: 10, y: 10 }},
		config: { width: 10, height: 10 },
		actions: { moveTarget: jest.fn() },
	}));
import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';

import * as PositionService from '../services/positionServices';
import Target from './target';

describe('Target', () => {
	const { actions } = context;

	test('renders the component with appropriate styling', () => {
		const target = {
			x: 10,
			y: 10,
		};
		const { x, y } = target;

		jest.spyOn(PositionService, 'project')
			.mockReturnValue(target);

		const { getByRole } = render(Target());

		const component = getByRole('target');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('target');
		expect(component).toHaveStyle({
			top: `${ y }%`,
			left: `${ x }%`,
		});
	});

	test('when clicked triggers the action, moveTarget', () => {
		const component = render(Target()).getByRole('target');

		fireEvent.click(component);

		expect(actions.moveTarget).toHaveBeenCalled();
	});
});
