import { rndBetween } from '@laufire/utils/random';
import context from '../core/context';

const hundred = 100;
const two = 2;

const getRandomX = ({ width }) =>
	rndBetween(width / two, hundred - (width / two));

const getRandomY = ({ height }) =>
	rndBetween(height / two, hundred - (height / two));

const project = (position) => ({
	x: position.x - (context.config.width / two),
	y: position.y - (context.config.height / two),
});

export { getRandomX, getRandomY, project };
