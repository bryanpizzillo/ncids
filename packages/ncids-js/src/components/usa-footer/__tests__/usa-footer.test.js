import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('UsaFooter', () => {
	it('renders footer', () => {
		document.body.innerHTML = getExampleDOM();

		// The contentinfo role defines a footer.
		expect(screen.getByRole('contentinfo')).toBeInTheDocument();
	});

	it('renders footer navigation', () => {
		document.body.innerHTML = getExampleDOM();
		expect(screen.getByRole('navigation')).toBeInTheDocument();
		expect(screen.getByLabelText('Footer navigation')).toBeInTheDocument();
	});

	it('clicking Header does not hide secondary links in nci big footer', () => {
		document.body.innerHTML = getExampleDOM();

		const buttons = screen.getAllByRole('button', { expanded: false });
		buttons.forEach((button) => {
			// Accordion activates
			fireEvent.click(button);
			expect(screen.getAllByRole('list')[0]).toBeInTheDocument();

			// Accordion deactivates
			fireEvent.click(button);
			expect(screen.getAllByRole('list')[0]).toBeInTheDocument();
		});
	});

	it('renders subscribe', () => {
		document.body.innerHTML = getExampleDOM();

		expect(
			screen.getByLabelText('Enter your email address')
		).toBeInTheDocument();
	});

	it('subscribe succeeds with valid email', () => {
		document.body.innerHTML = getExampleDOM();

		fireEvent.change(screen.getByLabelText('Enter your email address'), {
			target: { value: 'test@test.com' },
		});

		fireEvent.submit(screen.getByRole('button', { name: /Sign up/i }));

		expect(
			screen.queryByText('Enter a valid email address')
		).not.toBeInTheDocument();
	});

	it('subscribe fails with invalid email', () => {
		document.body.innerHTML = getExampleDOM();

		fireEvent.change(screen.getByLabelText('Enter your email address'), {
			target: { value: 'test' },
		});

		fireEvent.submit(screen.getByRole('button', { name: /Sign up/i }));

		expect(
			screen.queryByText('Enter a valid email address')
		).not.toBeInTheDocument();
	});
});

function getExampleDOM() {
	return `
		<footer class='usa-footer usa-footer--nci-big'>
			<div class='grid-container usa-footer__return-to-top'>
					<a href='#top'>Return to top</a>
			</div>
			<div class='usa-footer__primary-section'>
					<div class='grid-container'>
							<div class='grid-row grid-gap'>
									<div class='tablet:grid-col-8'>
											<nav class='usa-footer__nav' aria-label='Footer navigation'>
													<div class='grid-row grid-gap-4'>
															<div class='mobile-lg:grid-col-6 desktop:grid-col-4'>
																	<section
																			class='usa-footer__primary-content usa-footer__primary-content--collapsible hidden '>
																			<h4>
																					<button
																							aria-expanded='false'
																							aria-controls='accordion1'
																							class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
																							Primary link 1
																					</button>
																					<span
																							class='usa-footer__primary-link usa-footer__nci-primary-link--list-header'>Primary link 1</span>
																			</h4>
																			<ul
																					id='accordion1'
																					aria-label='Primary link 1'
																					class='usa-list usa-list--unstyled'>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 1</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 2</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>
																									Secondary link that's a bit longer than most of the
																									others
																							</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 4</a>
																					</li>
																			</ul>
																	</section>
															</div>
															<div class='mobile-lg:grid-col-6 desktop:grid-col-4'>
																	<section
																			class='usa-footer__primary-content usa-footer__primary-content--collapsible hidden '>
																			<h4>
																					<button
																							aria-expanded='false'
																							aria-controls='accordion2'
																							class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
																							Primary link 2
																					</button>
																					<span
																							class='usa-footer__primary-link usa-footer__nci-primary-link--list-header'>Primary link 2</span>
																			</h4>
																			<ul
																					id='accordion2'
																					aria-label='Primary link 2'
																					class='usa-list usa-list--unstyled'>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 5</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>
																									Secondary link that's pretty long
																							</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 7</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 8</a>
																					</li>
																			</ul>
																	</section>
															</div>
															<div class='mobile-lg:grid-col-6 desktop:grid-col-4'>
																	<section
																			class='usa-footer__primary-content usa-footer__primary-content--collapsible hidden '>
																			<h4>
																					<button
																							aria-expanded='false'
																							aria-controls='accordion3'
																							class='usa-button usa-button--unstyled usa-footer__primary-link usa-footer__nci-primary-link--accordion-header'>
																							Primary link 3
																					</button>
																					<span
																							class='usa-footer__primary-link usa-footer__nci-primary-link--list-header'>Primary link 3</span>
																			</h4>
																			<ul
																					aria-label='Primary link 3'
																					class='usa-list usa-list--unstyled'>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 9</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 10</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 11</a>
																					</li>
																					<li class='usa-footer__secondary-link'>
																							<a href='/'>Secondary link 12</a>
																					</li>
																			</ul>
																	</section>
															</div>
													</div>
											</nav>
									</div>
									<div class='tablet:grid-col-4'>
											<div class='usa-sign-up'>
													<h3 class='usa-sign-up__heading'>
															Sign up for email updates
													</h3>
													<form class='usa-form'>
															<label class='usa-label' for='email' id=''>
																	Enter your email address
															</label>
															<input
																	type='email'
																	class='usa-input width-full'
																	id='email'
																	name='email'
															/>
															<button
																	class='usa-button usa-button--accent-warm'
																	type='submit'>
																	Sign up
															</button>
													</form>
											</div>
									</div>
							</div>
					</div>
			</div>
			<div class='usa-footer__secondary-section'>
					<div class='grid-container'>
							<div class='grid-row grid-gap'>
									<div class=' usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2 '>
											<div class='mobile-lg:grid-col-auto mobile-lg:margin-bottom-3'>
													<p class='usa-footer__logo-heading'>
														<span class='logo__agency-name'>
															National Cancer Institute
														</span>
														<span class='logo__parent-organization'>
															at the National Institute of Health
														</span>
													</p>
											</div>
									</div>
									<div class='usa-footer__contact-links mobile-lg:grid-col-6'>
											<h3 class='usa-footer__contact-heading'>Contact Us</h3>
											<div class='usa-footer__address'>
													<div class='usa-footer__contact-info grid-row grid-gap'>
															<div class='tablet:grid-col-auto'>
																	<a href='tel:1-800-4-CANCER'>Live Chat</a>
															</div>
															<div class='tablet:grid-col-auto tablet:margin-left-2'>
																	<a href='tel:1-800-4-CANCER'>1-800-4-CANCER</a>
															</div>
															<div class='tablet:grid-col-auto tablet:margin-left-2'>
																	<a href='mailto:NCIinfo@nih.gov'>NCIinfo@nih.gov</a>
															</div>
													</div>
											</div>
									</div>
							</div>
							<div class='grid-row grid-gap'>
									<div class='usa-footer__social-links mobile-lg:grid-col-6'>
											<h3 class='usa-footer__social-heading'>Follow us</h3>
											<div class='grid-row grid-gap-1 nci-big__social'>
													<div class='grid-col-auto'>
															<a
																	aria-label='Facebook'
																	class='usa-social-link usa-social-link--facebook'
																	href='https://www.facebook.com/cancer.gov'>
																	<svg class='usa-icon ' role='img' aria-hidden='true'>
																			<use
																					xlink:href='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#facebook'></use>
																	</svg>
															</a>
													</div>
													<div class='grid-col-auto'>
															<a
																	aria-label='Twitter'
																	class='usa-social-link usa-social-link--twitter'
																	href='https://twitter.com/thenci'>
																	<svg class='usa-icon ' role='img' aria-hidden='true'>
																			<use
																					xlink:href='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#twitter'></use>
																	</svg>
															</a>
													</div>
													<div class='grid-col-auto'>
															<a
																	aria-label='Youtube'
																	class='usa-social-link usa-social-link--youtube'
																	href='https://youtube.com/NCIgov'>
																	<svg class='usa-icon ' role='img' aria-hidden='true'>
																			<use
																					xlink:href='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#youtube'></use>
																	</svg>
															</a>
													</div>
													<div class='grid-col-auto'>
															<a aria-label='RSS' class='usa-social-link usa-social-link--rss'
																 href='https://www.cancer.gov/syndication/rss'>
																	<svg class='usa-icon ' role='img' aria-hidden='true'>
																			<use
																					xlink:href='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#rss'></use>
																	</svg>
															</a>
													</div>
											</div>
									</div>
									<div class='usa-footer__contact-links mobile-lg:grid-col-6'>
											<div class='usa-footer__address height-full'>
													<div class='usa-footer__contact-info grid-row grid-gap height-full'>
															<address class='mobile-lg:margin-x-2'>
																	<a href='https://www.hhs.gov/'>
																			U.S. Department of Health and Human Services
																	</a>
																	<a href='https://www.nih.gov/'>
																			National Institutes of Health
																	</a>
																	<a href='https://www.cancer.gov/'>
																			National Cancer Institute
																	</a>
																	<a href='https://usa.gov/'>USA.gov</a>
															</address>
													</div>
											</div>
									</div>
							</div>
					</div>
			</div>
		</footer>
	`;
}
