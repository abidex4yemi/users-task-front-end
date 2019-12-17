import styled from 'styled-components';
import {
	normal_space,
	white,
	primary_color,
	secondary_color,
	borderRadius,
	boxShadow,
	dark,
	small_space
} from '../index';

export const ButtonStyled = styled.button`
	height: 48px;
	width: 100%;
	line-height: 48px;
	padding: 0 ${normal_space};
	font-weight: 300;
	color: ${white};
	background: ${primary_color};
	border: none;
	outline: none;
	margin-bottom: ${normal_space};
	border-radius: ${borderRadius};
	box-shadow: ${boxShadow};
	transition: all 100ms ease-in-out;
	cursor: pointer;

	&:active {
		opacity: 0.8;
		box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
	}

	&:hover {
		transform: scale(1.1);
	}
`;

export const ButtonPrimaryStyled = styled(ButtonStyled)`
	background: ${primary_color} linear-gradient(120deg, ${secondary_color} 0, ${primary_color} 100%) no-repeat;
	color: ${white};
`;

export const ButtonSecondaryStyled = styled(ButtonStyled)`
	background-color: unset;
	border: 1px solid ${primary_color};
	box-shadow: none;
	font-weight: 400;
	margin-top: ${small_space};
	color: ${dark};

	&:active {
		opacity: 0.8;
		box-shadow: unset;
	}
`;
