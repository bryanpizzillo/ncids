import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-feature-card.scss';

import img_news1_16x9 from './img/news1-16x9.jpg';
import img_news1_1x1 from './img/news1-1x1.jpg';
import img_news1_4x3 from './img/news1-4x3.jpg';

import img_news2_16x9 from './img/news2-16x9.jpg';
import img_news2_1x1 from './img/news2-1x1.jpg';
import img_news2_4x3 from './img/news2-4x3.jpg';

import img_news3_16x9 from './img/news3-16x9.jpg';
import img_news3_1x1 from './img/news3-1x1.jpg';
import img_news3_4x3 from './img/news3-4x3.jpg';

// language=HTML
const html = `
  <div id="nci-feature-card" class="grid-container">
    <div class="nci-feature-card">
      <a href="https://www.cancer.gov" aria-label="Feature Card">
      <picture>
        <source media="(max-width: 639px)" srcset="${img_news1_16x9}"/>
        <source media="(max-width: 879px)" srcset="${img_news1_1x1}"/>
        <source media="(min-width: 880px)" srcset="${img_news1_4x3}"/>
        <img src="${img_news1_16x9}" />
      </picture>
        <div class="nci-feature-card__text">
          <h2>CRCHD Diversity Training</h2>
          <p>Treatment for severe COVID-19 with interferons decreased the viral load of SARS-CoV-2, a new study found.</p>
        </div>
      </a>
    </div>
  </div>
`;

export const Default = () => <TestCase css={css} html={html} />;
