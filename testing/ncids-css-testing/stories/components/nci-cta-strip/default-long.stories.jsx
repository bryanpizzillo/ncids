import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-cta-strip.scss';

// language=HTML
const html = `
<div class="nci-cta-strip">
	<div class="grid-container">
		<div class="grid-row grid-gap">
			<ul>
				<li><a href="http://www.cancer.gov" class="usa-button nci-cta-button">NCI Alliance for Nanotechnology in Cancer</a></li>
				<li><a href="http://www.google.com/" class="usa-button nci-cta-button">Nanotechnology Characterization Laboratory</a></li>
				<li><a href="http://www.cancer.gov" class="usa-button nci-cta-button">Cancer Nanotechnology Plan</a></li>
			</ul>
		</div>
	</div>
</div>
`;

export const DefaultLong = () => (
	<TestCase css={css} html={html} />
);
