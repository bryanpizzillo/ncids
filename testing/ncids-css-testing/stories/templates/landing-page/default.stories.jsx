import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './landing-page.scss';

import { nciImgLogo } from '../../components/nci-header/nci-header-logo';
import { primaryNojs } from '../../components/nci-header/nci-header-primary';
import { secondary } from '../../components/nci-header/nci-header-secondary';

// language=HTML
const html = `
	<a class="usa-skipnav" href="#main-content">Skip to main content</a>
	<section
		class="usa-banner usa-banner--nci-banner"
		aria-label="Official government website"
	>
		<header class="usa-banner__header">
			<div class="usa-banner__inner">
				<div class="usa-banner__header-text">
					An official website of the United States government
				</div>
				<button href="/" class="usa-button usa-button--nci-small">
					Español
				</button>
			</div>
		</header>
	</section>

	<div class="notifications-area">
		<section
			aria-label="Standard info site alert collapsed with close example"
			class="usa-site-alert usa-site-alert--nci-standard usa-site-alert--nci-info hidden"
			id="site-alert--nci-info"
		>
			<div class="usa-alert">
				<div class="usa-alert__body">
					<div class="usa-alert__nci-header">
						<h3 class="usa-alert__heading">COVID-19 resources.</h3>
						<button
							class="usa-alert__nci-button usa-alert__nci-button--toggle"
							aria-expanded="false"
							aria-controls="gov-banner-default"
							aria-label="Expand alert message"
						>
							<svg class="usa-icon" role="img" aria-hidden="true">
								<use
									xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#angle-arrow-up"></use>
							</svg>
						</button>
					</div>
				</div>
				<button
					class="usa-alert__nci-button usa-alert__nci-button--close"
					aria-label="Dismiss standard info alert"
				>
					<svg class="usa-icon" role="img" aria-hidden="true">
						<use
							xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCgk8c3ltYm9sIGlkPSJjbG9zZS1hbHQiIHZpZXdCb3g9IjAgMCAxNSAxNSI+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMCAxMy4wMzMyOTY0TDEzLjAzMzI5NjQgME0xMy4wMzMyOTY0IDEzLjAzMzI5NjRMMCAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+Cgk8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#close-alt"></use>
					</svg>
				</button>
			</div>
		</section>
	</div>

	<header class="nci-header nci-header--extended">
		<div class="nci-header__navbar">
			${nciImgLogo}
			<div class="nci-header-nav__secondary">
				<button class="usa-button nci-header-mobilenav__open-btn">Menu</button>

				<form class="nci-header-search" role="search">
					<label class="usa-sr-only" for="nci-header-search__field">
						Search
					</label>
					<input class="usa-input" id="nci-header-search__field" type="search" name="search" />
					${secondary}
				</form>
			</div>
		</div>
		<nav aria-label="Primary navigation" class="nci-header-nav">
			<div class="nci-header-nav__inner">
				${primaryNojs}
			</div>
		</nav>
	</header>

	<div class="text-center padding-y-6">
		<h1>Page Title</h1>
		<span as="h3">This is the page's tagline which may get up to multiple lines in length.</span>
	</div>

    <div class="grid-container" style="height: 100px; background-color: #C5C5C5;">Components TBD</div>

	<footer class="usa-footer usa-footer--nci-big" id="nci-footer">
		<div class="grid-container usa-footer__return-to-top">
			<a href="#">Return to top</a>
		</div>
		<div class="usa-footer__primary-section">
			<div class="grid-container">
				<div class="grid-row grid-gap">
					<div class="tablet:grid-col-8">
						<nav class="usa-footer__nav" aria-label="Footer navigation">
							<div class="grid-row grid-gap-4">
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<h4>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 1</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header"
															aria-controls="primary-link-1" aria-expanded="false">Primary link 1
											</button>
										</h4>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-1" aria-label="Primary link 1"
												aria-hidden="true">
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 1</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 2</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">
													Secondary link that"s a bit longer than most of the others
												</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 4</a>
											</li>
										</ul>
									</section>
								</div>
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<h4>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 2</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header"
															aria-controls="primary-link-2" aria-expanded="false">Primary link 2
											</button>
										</h4>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-2" aria-label="Primary link 2"
												aria-hidden="true">
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 5</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">
													Secondary link that"s pretty long
												</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 7</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 8</a>
											</li>
										</ul>
									</section>
								</div>
								<div class="mobile-lg:grid-col-6 desktop:grid-col-4">
									<section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
										<h4>
											<span class="usa-footer__primary-link usa-footer__nci-list-header">Primary link 3</span>
											<button class="usa-footer__primary-link usa-footer__nci-collapse-header"
															aria-controls="primary-link-3" aria-expanded="false">Primary link 3
											</button>
										</h4>
										<ul class="usa-list usa-list--unstyled hidden" id="primary-link-3" aria-label="Primary link 3"
												aria-hidden="true">
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 9</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 10</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 11</a>
											</li>
											<li class="usa-footer__secondary-link">
												<a href="#">Secondary link 12</a>
											</li>
										</ul>
									</section>
								</div>
							</div>
						</nav>
					</div>
					<div class="tablet:grid-col-4">
						<div class="usa-sign-up">
							<h3 class="usa-sign-up__heading">Sign up for email updates</h3>
							<form
								aria-label="Footer subscribe"
								class="usa-form"
								id="signup"
								onsubmit="return false;">
								<input
									type="hidden"
									name="category_id"
									id="category_id"
									value="USNIHNCI_C25"
								/>
								<div class="usa-form-group">
									<label class="usa-label" for="email">
										Enter your email address
									</label>
									<input
										class="usa-input width-full"
										id="email"
										name="email"
										type="email"
										value=""
									/>
								</div>
								<button class="usa-button usa-button--accent-warm" type="submit">
									Sign up
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="usa-footer__secondary-section">
			<div class="grid-container">
				<div class="grid-row grid-gap">
					<div class=" usa-footer__logo grid-row desktop:grid-col-5">
						<div class="mobile-lg:grid-col-auto mobile-lg:margin-bottom-3">
							<p class="usa-footer__logo-heading">
								<span class="logo__agency-name">National Cancer Institute</span>
								<span class="logo__parent-organization">at the National Institute of Health</span>
							</p>
						</div>
					</div>
					<div class="usa-footer__contact-links desktop:grid-col-7">
						<h3 class="usa-footer__contact-heading">Contact Us</h3>
						<div class="usa-footer__address">
							<div class="usa-footer__contact-info grid-row grid-gap">
								<div class="tablet:grid-col-auto">
									<a href="#">Live Chat</a>
								</div>
								<div class="tablet:grid-col-auto tablet:margin-left-2">
									<a href="#">1-800-4-CANCER</a>
								</div>
								<div class="tablet:grid-col-auto tablet:margin-left-2">
									<a href="#">NCIinfo@nih.gov</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid-row grid-gap">
					<div class="usa-footer__social-links desktop:grid-col-5">
						<h3 class="usa-footer__social-heading">Follow us</h3>
						<div class="grid-row grid-gap-1 nci-big__social">
							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--facebook" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" class="usa-icon" role="img" aria-labelledby="facebook-title">
										<title id="facebook-title">Facebook</title>
										<rect fill="none" height="24" width="24" />
										<path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--twitter" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="twitter-title">
										<title id="twitter-title">Twitter</title>
										<path id="Twitter"
													d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5,8.1c0,.1,0,.21,0,.31a6.81,6.81,0,0,1-6.86,6.86,6.74,6.74,0,0,1-3.69-1.08,5.63,5.63,0,0,0,.58,0,4.79,4.79,0,0,0,3-1A2.41,2.41,0,0,1,7.8,13.51a1.75,1.75,0,0,0,.46.05,2.59,2.59,0,0,0,.63-.08A2.42,2.42,0,0,1,7,11.11v0a2.33,2.33,0,0,0,1.09.3A2.43,2.43,0,0,1,7.3,8.16a6.84,6.84,0,0,0,5,2.53,2.59,2.59,0,0,1-.07-.55,2.41,2.41,0,0,1,2.41-2.41,2.38,2.38,0,0,1,1.77.76A4.67,4.67,0,0,0,17.9,7.9a2.39,2.39,0,0,1-1.06,1.34,4.55,4.55,0,0,0,1.39-.39A5,5,0,0,1,17,10.1Z" />
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--instagram" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="instagram-title">
										<title id="instagram-title">Instagram</title>
										<g id="Instagram">
											<path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" />
											<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6,12.69A3.32,3.32,0,0,1,14.69,18H9.31A3.32,3.32,0,0,1,6,14.69V9.31A3.32,3.32,0,0,1,9.31,6h5.38A3.32,3.32,0,0,1,18,9.31Z" />
											<path d="M16.94,9.31a2.25,2.25,0,0,0-2.25-2.25H9.31A2.25,2.25,0,0,0,7.06,9.31v5.38a2.25,2.25,0,0,0,2.25,2.25h5.38a2.25,2.25,0,0,0,2.25-2.25h0ZM12,15.09A3.09,3.09,0,1,1,15.09,12,3.09,3.09,0,0,1,12,15.09Zm3.77-5.75a.79.79,0,0,1-.55.23.83.83,0,0,1-.55-.23.78.78,0,0,1,0-1.11A.82.82,0,0,1,15.22,8a.78.78,0,0,1,.55,1.33Z" />
										</g>
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--youtube" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="youtube-title">
										<title id="youtube-title">Youtube</title>
										<g id="YouTube">
											<path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.75,12.91A1.49,1.49,0,0,1,16.69,16a34.65,34.65,0,0,1-4.69.26A34.65,34.65,0,0,1,7.31,16a1.49,1.49,0,0,1-1.06-1.06A15.88,15.88,0,0,1,6,12a15.88,15.88,0,0,1,.25-2.91A1.49,1.49,0,0,1,7.31,8,34.65,34.65,0,0,1,12,7.77,34.65,34.65,0,0,1,16.69,8a1.49,1.49,0,0,1,1.06,1.06A15.88,15.88,0,0,1,18,12,15.88,15.88,0,0,1,17.75,14.91Z" />
											<polygon points="10.77 13.78 13.91 12 10.77 10.22 10.77 13.78" />
										</g>
									</svg>
								</a>
							</div>

							<div class="grid-col-auto">
								<a class="usa-social-link usa-social-link--linkedin" href="#">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="usa-icon" role="img" aria-labelledby="linkedin-title">
										<title id="linkedin-title">Linkedin</title>
										<g id="final">
											<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.912001,17.584H6.584v-7.472h2.328001V17.584z
												M7.744,9.104C6.992,9.104,6.4,8.488,6.4,7.76c0-0.752,0.592-1.344,1.344-1.344c0.728,0,1.343999,0.592,1.343999,1.344
												C9.087999,8.488,8.472,9.104,7.744,9.104z M17.6,17.584h-2.328v-3.64c0-0.856-0.024001-1.967999-1.216001-1.967999
												s-1.392,0.927999-1.392,1.912v3.696H10.36v-7.472h2.224v1.008h0.024c0.464-0.752,1.296-1.216001,2.199999-1.192
												c2.352001,0,2.792,1.552001,2.792,3.544001C17.6,13.472,17.6,17.584,17.6,17.584z" />
										</g>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="usa-footer__contact-links desktop:grid-col-7">
						<div class="usa-footer__address height-full">
							<div class="usa-footer__contact-info grid-row grid-gap height-full">
								<address>
									<a href="#">
										U.S. Department of Health and Human Services
									</a>
									<a href="#">
										National Institutes of Health
									</a>
									<a href="#">
										National Cancer Institute
									</a>
									<a href="#">USA.gov</a>
								</address>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
`;

export const LandingPage = () => <TestCase css={css} html={html} />;
