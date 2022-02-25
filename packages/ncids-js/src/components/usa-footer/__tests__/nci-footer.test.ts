import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { NCIBigFooter } from '../nci-big-footer.component';
import { getExampleDOM } from './nci-footer-dom';
import { getExampleDOMWithoutSignup } from './nci-footer-dom-without-signup';

describe('NCI Footer', () => {
	afterEach(() => {
		document.getElementsByTagName('body')[0].innerHTML = '';
	});

	it('should throw an error when create is called on invalid element', () => {
		expect(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			NCIBigFooter.create('chicken');
		}).toThrow('Element is not an HTMLElement');
	});

	it('should render footer landmark', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element);

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});

	it('should render footer landmark with options', () => {
		const container = getExampleDOM();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element, {
			subscribe: { invalidEmailAlert: 'chicken' },
		});

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});

	it('should render footer landmark without form', () => {
		const container = getExampleDOMWithoutSignup();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element);

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});

	it('should render footer landmark without form with options', () => {
		const container = getExampleDOMWithoutSignup();
		document.body.append(container);

		const element = document.getElementById('nci-footer');
		const footer = NCIBigFooter.create(<HTMLElement>element, {
			collapse: { collapseWidth: 400 },
		});

		expect(footer).toBeTruthy();
		const query = screen.queryByRole('contentinfo');
		expect(query).toBeInTheDocument();
	});
});
