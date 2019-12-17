import styled from 'styled-components';
import { normal_space, primary_color, boxShadow, borderRadius, dark, small_font_size } from '../index';

export const InputStyled = styled.input`
	width: 100%;
	height: 32px;
	appearance: none;
	display: block;
	padding: ${normal_space};
	border-radius: ${borderRadius};
	font-size: ${small_font_size};
	font-weight: 400;
	border: 1px solid ${dark};
	background-color: unset;
	outline: none;
	transition: all 200ms ease-in-out;
	color: ${dark};

	&::placeholder {
		color: ${dark};
	}

	&:focus,
	&:checked {
		border: 1px solid ${primary_color};
		box-shadow: ${boxShadow};
	}
`;
