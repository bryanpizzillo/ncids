import React from "react";
import { TestCase } from "../../../components/test-case";
import css from "./usa-button.scss";

const html = `
<a href="http://www.google.com" class="usa-button">Default</a>
<a href="http://www.google.com" class="usa-button usa-button--hover">Hover</a>
<a href="http://www.google.com" class="usa-button usa-button--active">Active</a>
<a href="http://www.google.com" class="usa-button usa-focus">Focus</a>
<a href="http://www.google.com" class="usa-button" disabled>Disabled</a>
<br/><br/>
<a href="http://www.google.com" class="usa-button usa-button--secondary">Default</a>
<a href="http://www.google.com" class="usa-button usa-button--secondary usa-button--hover">Hover</a>
<a href="http://www.google.com" class="usa-button usa-button--secondary usa-button--active">Active</a>
<a href="http://www.google.com" class="usa-button usa-button--secondary usa-focus">Focus</a>
<a href="http://www.google.com" class="usa-button usa-button--secondary" disabled>Disabled</a>
<br/><br/>
<a href="http://www.google.com" class="usa-button usa-button--accent-cool">Default</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-cool usa-button--hover">Hover</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-cool usa-button--active">Active</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-cool usa-focus">Focus</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-cool" disabled>Disabled</a>
<br/><br/>
<a href="http://www.google.com" class="usa-button usa-button--accent-warm">Default</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-warm usa-button--hover">Hover</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-warm usa-button--active">Active</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-warm usa-focus">Focus</a>
<a href="http://www.google.com" class="usa-button usa-button--accent-warm" disabled>Disabled</a>
<br/><br/>
<a href="http://www.google.com" class="usa-button usa-button--big">Default</a>
<a href="http://www.google.com" class="usa-button usa-button--big usa-button--hover">Hover</a>
<a href="http://www.google.com" class="usa-button usa-button--big usa-button--active">Active</a>
<a href="http://www.google.com" class="usa-button usa-button--big usa-focus">Focus</a>
<a href="http://www.google.com" class="usa-button usa-button--big" disabled>Disabled</a>
<br/><br/>
<a href="http://www.google.com" class="usa-button usa-button--nci-small">Default</a>
<a href="http://www.google.com" class="usa-button usa-button--nci-small usa-button--hover">Hover</a>
<a href="http://www.google.com" class="usa-button usa-button--nci-small usa-button--active">Active</a>
<a href="http://www.google.com" class="usa-button usa-button--nci-small usa-focus">Focus</a>
<a href="http://www.google.com" class="usa-button usa-button--nci-small" disabled>Disabled</a>
`;

export const ExternalLink = () => <TestCase css={css} html={html} />;
