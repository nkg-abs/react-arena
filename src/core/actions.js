import TargetManager from '../services/targetManager';

const moveTarget = () => ({
	target: TargetManager.moveTarget(),
});

const actions = {
	moveTarget,
};

export default actions;
