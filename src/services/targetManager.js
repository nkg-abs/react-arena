import context from '../core/context';
import { getRandomX, getRandomY } from './positionServices';

const moveTarget = () => ({
	x: getRandomX(context.config),
	y: getRandomY(context.config),
});

export default { moveTarget };
