import * as PositionService from '../services/positionServices';
import TargetManager from '../services/targetManager';

describe('TargetManager', () => {
	test('moveTargets changes position of a target', () => {
		const randomXValue = Symbol('randomX');
		const randomYValue = Symbol('randomY');

		jest.spyOn(PositionService, 'getRandomX').mockReturnValue(randomXValue);
		jest.spyOn(PositionService, 'getRandomY').mockReturnValue(randomYValue);

		const result = TargetManager.moveTarget();

		expect(result).toEqual({ x: randomXValue, y: randomYValue });
	});
});
