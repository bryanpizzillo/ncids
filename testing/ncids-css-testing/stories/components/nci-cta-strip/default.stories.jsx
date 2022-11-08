import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<div class="nci-cta-strip">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<ul>
				<li><a href="http://www.cancer.gov" class="usa-button nci-cta-button">Programs</a></li>
				<li><a href="http://www.google.com/" class="usa-button nci-cta-button">Resources</a></li>
				<li><a href="http://www.cancer.gov" class="usa-button nci-cta-button">Success Stories</a></li>
			</ul>
		</div>
	</div>
</div>
`;

export const Default = () => (
	<TestCase css={css} html={html} />
);
