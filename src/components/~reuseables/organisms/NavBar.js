import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.header`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	border-bottom: 1px solid #002a32;
	background: #002a32;
	padding: 1.5rem 0;
`;

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const ListItem = styled.li`
	font-size: 2rem;

	a {
		text-decoration: none;
		color: #fff;
		transition: 0.2s;

		&:hover {
			color: #00d6d6;
		}
	}

	.selected {
		font-weight: bold;
		color: #00d6d6;
	}
`;

export const NavBar = props => {
	const { navLinkArray } = props;

	return (
		<NavBarStyles>
			<ContainerStyles>
				<nav>
					<List>
						{navLinkArray.map(({ to, linkText, id }) => {
							return (
								<ListItem key={id}>
									<NavLink to={to} activeClassName="selected">
										{linkText}
									</NavLink>
								</ListItem>
							);
						})}
					</List>
				</nav>
			</ContainerStyles>
		</NavBarStyles>
	);
};

NavBar.propTypes = {
	navLinkArray: PropTypes.array
};
