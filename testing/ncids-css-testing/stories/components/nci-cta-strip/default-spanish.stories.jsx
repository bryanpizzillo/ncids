import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<div class="nci-cta-strip">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<ul>
				<li><a href="http://www.cancer.gov" class="usa-button nci-cta-button">El NCI para la Nanotecnología en el Cáncer</a></li>
				<li><a href="http://www.google.com/" class="usa-button nci-cta-button">Laboratorio de Caracterización de Nanotecnología</a></li>
				<li><a href="http://www.cancer.gov" class="usa-button nci-cta-button">Plan de Nanotecnología del Cáncer</a></li>
			</ul>
		</div>
	</div>
</div>
`;

export const DefaultSpanish = () => (
	<TestCase css={css} html={html} />
);
