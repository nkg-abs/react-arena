import TargetManager from '../services/targetManager';

const moveTarget = (context) => ({
	target: TargetManager.moveTarget(context),
});

const actions = {
	moveTarget,
};

export default actions;
