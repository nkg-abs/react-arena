import { React } from 'react';
import '../App.scss';
import context from '../core/context';
import { project } from '../services/positionServices';

const Target = () => {
	const { x, y } = project(context.state.target);
	const style = {
		top: `${ x }%`,
		left: `${ y }%`,
	};

	return (
		<div
			className="target"
			style={ style }
			onClick={ () => context.actions.moveTarget() }
		/>
	);
};

export default Target;
