import TargetManager from '../services/targetManager';
import actions from '../core/actions';

describe('Actions', () => {
	test('moveTarget returns target with new position', () => {
		const returned = Symbol('returned');

		jest.spyOn(TargetManager, 'moveTarget').mockReturnValue(returned);

		const result = actions.moveTarget();

		expect(TargetManager.moveTarget).toHaveBeenCalled();
		expect(result).toEqual({ target: returned });
	});
});
