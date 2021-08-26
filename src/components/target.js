import { React } from 'react';
import '../App.scss';
import context from '../core/context';
import { project } from '../services/positionServices';

const Target = () => {
	const { x, y } = project(context.state.target);
	const style = {
		top: `${ y }%`,
		left: `${ x }%`,
	};

	return (
		<div
			className="target"
			role="target"
			style={ style }
			onClick={ () => context.actions.moveTarget() }
		/>
	);
};

export default Target;
