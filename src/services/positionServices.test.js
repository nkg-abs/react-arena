/* eslint-disable max-lines-per-function */

import * as random from '@laufire/utils/random';
import { getRandomX, getRandomY, project } from '../services/positionServices';
import context from '../core/context';

describe('PositionService', () => {
	const randomValue = Symbol('randomValue');

	test('getRandomX delegates positioning to rndBetween', () => {
		const widthRange = 50;
		const min = 25;
		const max = 75;

		jest.spyOn(random, 'rndBetween').mockReturnValue(randomValue);

		const result = getRandomX({ width: widthRange });

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);
		expect(result).toEqual(randomValue);
	});

	test('getRandomY delegates positioning to rndBetween', () => {
		const heightRange = 50;
		const min = 25;
		const max = 75;

		jest.spyOn(random, 'rndBetween').mockReturnValue(randomValue);

		const result = getRandomY({ height: heightRange });

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);
		expect(result).toEqual(randomValue);
	});

	test('project returns the adjusted position', () => {
		const target = { x: 10, y: 10 };

		const { x, y } = target;
		const two = 2;

		const result = project(target);

		expect(result).toMatchObject({
			x: x - (context.config.width / two),
			y: y - (context.config.height / two),
		});
	});
});
