import { ButtonSolid } from '@atoms';

import styles from './button_solid.module.sass';

describe('ButtonSolid Component', () => {
	it('Renders with default props', () => {
		cy.mount(<ButtonSolid>Click me</ButtonSolid>);
		cy.get('button').should('contain.text', 'Click me');
	});

	it('Applies loading state', () => {
		cy.mount(<ButtonSolid isLoading>Loading</ButtonSolid>);
		cy.get('button').should('have.class', styles['button--loading']);
		cy.get('svg').should('have.class', 'animate-spin');
	});

	it('Applies error state', () => {
		cy.mount(<ButtonSolid hasError>Error</ButtonSolid>);
		cy.get('button')
			.should('have.class', styles['button--error'])
			.and('contain.text', 'Error');
	});

	it('Applies disabled state', () => {
		cy.mount(<ButtonSolid disabled>Disabled</ButtonSolid>);
		cy.get('button')
			.should('be.disabled')
			.and('have.class', styles['button--disabled']);
	});

	it('Accepts additional className', () => {
		cy.mount(<ButtonSolid className='custom-class'>Classy</ButtonSolid>);
		cy.get('button').should('have.class', 'custom-class');
	});
});
