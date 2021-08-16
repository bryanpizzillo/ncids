import React, { useState } from 'react';
import { Link } from 'gatsby';

export const NCIBigFooter = () => {
	const [activeItem, setActiveItem] = useState(0);

	return (
		<footer className="usa-footer usa-footer--big usa-footer--nci-big">
			<div className="grid-container usa-footer__return-to-top">
				<Link to="#top">Return to top</Link>
			</div>

			<div className="usa-footer__primary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div className="tablet:grid-col-8">
							<nav className="usa-footer__nav" aria-label="Footer navigation">
								<div className="grid-row grid-gap-4">
									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section
											className={`usa-footer__primary-content usa-footer__primary-content--collapsible ${
												activeItem === 1 ? 'visible' : 'hidden'
											} `}>
											<button
												onClick={() => setActiveItem(activeItem === 1 ? 0 : 1)}
												className="usa-button usa-button--unstyled">
												<h4 className="usa-footer__primary-link">
													Primary link 1
												</h4>
											</button>

											<ul
												aria-label="Primary link 1"
												className="usa-list usa-list--unstyled">
												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 1</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 2</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">
														Secondary link that&#39;s a bit longer than most of
														the others
													</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 4</Link>
												</li>
											</ul>
										</section>
									</div>

									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section
											className={`usa-footer__primary-content usa-footer__primary-content--collapsible ${
												activeItem === 2 ? 'visible' : 'hidden'
											} `}>
											<button
												onClick={() => setActiveItem(activeItem === 2 ? 0 : 2)}
												className="usa-button usa-button--unstyled">
												<h4 className="usa-footer__primary-link">
													Primary link 2
												</h4>
											</button>

											<ul
												aria-label="Primary link 2"
												className="usa-list usa-list--unstyled">
												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 5</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">
														Secondary link that&#39;s pretty long
													</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 7</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 8</Link>
												</li>
											</ul>
										</section>
									</div>

									<div className="mobile-lg:grid-col-6 desktop:grid-col-4">
										<section
											className={`usa-footer__primary-content usa-footer__primary-content--collapsible ${
												activeItem === 3 ? 'visible' : 'hidden'
											} `}>
											<button
												onClick={() => setActiveItem(activeItem === 3 ? 0 : 3)}
												className="usa-button usa-button--unstyled">
												<h4 className="usa-footer__primary-link">
													Primary link 3
												</h4>
											</button>

											<ul
												aria-label="Primary link 3"
												className="usa-list usa-list--unstyled">
												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 9</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 10</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 11</Link>
												</li>

												<li className="usa-footer__secondary-link">
													<Link to="/">Secondary link 12</Link>
												</li>
											</ul>
										</section>
									</div>
								</div>
							</nav>
						</div>

						<div className="tablet:grid-col-4">
							<div className="usa-sign-up">
								<h3 className="usa-sign-up__heading">
									Sign up for email updates
								</h3>
								<form className="usa-form">
									<label className="usa-label" htmlFor="email" id="">
										Enter your email address
									</label>
									<input
										className="usa-input width-full"
										id="email"
										name="email"
										type="email"
									/>
									<button
										className="usa-button usa-button--accent-warm"
										type="submit">
										Sign up
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="usa-footer__secondary-section">
				<div className="grid-container">
					<div className="grid-row grid-gap">
						<div
							className="
								usa-footer__logo
								grid-row
								mobile-lg:grid-col-6 mobile-lg:grid-gap-2
							">
							<div className="mobile-lg:grid-col-auto mobile-lg:margin-bottom-3">
								<p className="usa-footer__logo-heading">
									<span className="logo__agency-name">
										National Cancer Institute{' '}
									</span>
									<span className="logo__parent-organization">
										at the National Institute of Health
									</span>
								</p>
							</div>
						</div>

						<div className="usa-footer__contact-links mobile-lg:grid-col-6">
							<h3 className="usa-footer__contact-heading">Contact Us</h3>

							<div className="usa-footer__address">
								<div className="usa-footer__contact-info grid-row grid-gap">
									<div className="tablet:grid-col-auto">
										<a href="tel:1-800-4-CANCER">Live Chat</a>
									</div>

									<div className="tablet:grid-col-auto tablet:margin-left-2">
										<a href="tel:1-800-4-CANCER">1-800-4-CANCER</a>
									</div>
									<div className="tablet:grid-col-auto tablet:margin-left-2">
										<a href="mailto:NCIinfo@nih.gov">NCIinfo@nih.gov</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid-row grid-gap">
						<div className="usa-footer__social-links mobile-lg:grid-col-6">
							<h3 className="usa-footer__social-heading">Follow us</h3>

							<div className="grid-row grid-gap-1">
								<div className="grid-col-auto">
									<a
										aria-label="Facebook"
										className="usa-social-link usa-social-link--facebook"
										href="https://www.facebook.com/cancer.gov">
										<span>Facebook</span>
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="Twitter"
										className="usa-social-link usa-social-link--twitter"
										href="https://twitter.com/thenci">
										<span>Twitter</span>
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="Youtube"
										className="usa-social-link usa-social-link--youtube"
										href="https://youtube.com/NCIgov">
										<span>YouTube</span>
									</a>
								</div>

								<div className="grid-col-auto">
									<a
										aria-label="RSS"
										className="usa-social-link usa-social-link--rss"
										href="https://www.cancer.gov/syndication/rss">
										<span>RSS</span>
									</a>
								</div>
							</div>
						</div>

						<div className="usa-footer__contact-links mobile-lg:grid-col-6">
							<div className="usa-footer__address height-full">
								<div className="usa-footer__contact-info grid-row grid-gap height-full">
									<address className="mobile-lg:margin-x-2">
										<a href="https://www.hhs.gov/">
											U.S. Department of Health and Human Services
										</a>
										<a href="https://www.nih.gov/">
											National Institutes of Health
										</a>
										<a href="https://www.cancer.gov/">
											National Cancer Institute
										</a>
										<a href="https://usa.gov/">USA.gov</a>
									</address>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default NCIBigFooter;
