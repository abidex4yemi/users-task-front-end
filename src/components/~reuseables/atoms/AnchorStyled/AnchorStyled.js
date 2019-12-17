import styled from 'styled-components';
import { normal_space, secondary_color, primary_color, small_font_size } from '../index';

export const AnchorStyled = styled.a`
	font-size: ${small_font_size};
	padding: ${normal_space};
	font-weight: 600;
	color: ${primary_color};
	text-decoration: none;
	transition: all 100ms ease-in-out;
	cursor: pointer;

	&:active {
		color: ${secondary_color};
	}
`;
