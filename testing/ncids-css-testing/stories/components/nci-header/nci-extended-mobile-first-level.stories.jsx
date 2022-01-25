
import React from 'react';
import { TestCase } from '../../../components/test-case';
import css from './nci-extended.scss';
import logo from './img/nci-logo-full.png';


const closeButton = `
<button
  class='nci-header--nci-close-btn'
  aria-controls='some id here'
  aria-label='Close Mobile Menu'
  >
    <svg class="usa-icon " role="img" aria-hidden="true"><use xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCgk8c3ltYm9sIGlkPSJjbG9zZS1hbHQiIHZpZXdCb3g9IjAgMCAxNSAxNSI+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMCAxMy4wMzMyOTY0TDEzLjAzMzI5NjQgME0xMy4wMzMyOTY0IDEzLjAzMzI5NjRMMCAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIi8+Cgk8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iZW52ZWxvcGUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ2NCA2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEydjI4OGMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDQxNmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjExMmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0wIDQ4djQwLjgwNWMtMjIuNDIyIDE4LjI1OS01OC4xNjggNDYuNjUxLTEzNC41ODcgMTA2LjQ5LTE2Ljg0MSAxMy4yNDctNTAuMjAxIDQ1LjA3Mi03My40MTMgNDQuNzAxLTIzLjIwOC4zNzUtNTYuNTc5LTMxLjQ1OS03My40MTMtNDQuNzAxQzEwNi4xOCAxOTkuNDY1IDcwLjQyNSAxNzEuMDY3IDQ4IDE1Mi44MDVWMTEyaDQxNnpNNDggNDAwVjIxNC4zOThjMjIuOTE0IDE4LjI1MSA1NS40MDkgNDMuODYyIDEwNC45MzggODIuNjQ2IDIxLjg1NyAxNy4yMDUgNjAuMTM0IDU1LjE4NiAxMDMuMDYyIDU0Ljk1NSA0Mi43MTcuMjMxIDgwLjUwOS0zNy4xOTkgMTAzLjA1My01NC45NDcgNDkuNTI4LTM4Ljc4MyA4Mi4wMzItNjQuNDAxIDEwNC45NDctODIuNjUzVjQwMEg0OHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImZhY2Vib29rIiB2aWV3Qm94PSIwIDAgMjE2IDE0NiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMTguMzQ4IDQ5Ljg2VjM4LjI5M2MwLTEuNzM3LjA4LTMuMDgyLjI0My00LjAzMi4xNjUtLjk1LjUzLTEuODg2IDEuMTA0LTIuODEuNTctLjkyMyAxLjQ5NC0xLjU2IDIuNzctMS45MTQgMS4yNzctLjM1NCAyLjk3NS0uNTMgNS4wOTQtLjUzaDExLjU2OFY1Ljg2NkgxMjAuNjNjLTEwLjcwMiAwLTE4LjM4NyAyLjU0LTIzLjA1OCA3LjYxNy00LjY3IDUuMDgtNy4wMDYgMTIuNTYtNy4wMDYgMjIuNDQ2djEzLjkzSDc2LjcxNFY3M2gxMy44NXY2Ny4xMzRoMjcuNzg0VjczaDE4LjQ5NGwyLjQ0NC0yMy4xNGgtMjAuOTM4eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJsaW5rZWRpbiIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJwcmludCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDQ4IDE5MlY3Ny4yNWMwLTguNDktMy4zNy0xNi42Mi05LjM3LTIyLjYzTDM5My4zNyA5LjM3Yy02LTYtMTQuMTQtOS4zNy0yMi42My05LjM3SDk2Qzc4LjMzIDAgNjQgMTQuMzMgNjQgMzJ2MTYwYy0zNS4zNSAwLTY0IDI4LjY1LTY0IDY0djExMmMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NmMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDMyMGMxNy42NyAwIDMyLTE0LjMzIDMyLTMydi05Nmg0OGM4Ljg0IDAgMTYtNy4xNiAxNi0xNlYyNTZjMC0zNS4zNS0yOC42NS02NC02NC02NHptLTY0IDI1NkgxMjh2LTk2aDI1NnY5NnptMC0yMjRIMTI4VjY0aDE5MnY0OGMwIDguODQgNy4xNiAxNiAxNiAxNmg0OHY5NnptNDggNzJjLTEzLjI1IDAtMjQtMTAuNzUtMjQtMjQgMC0xMy4yNiAxMC43NS0yNCAyNC0yNHMyNCAxMC43NCAyNCAyNGMwIDEzLjI1LTEwLjc1IDI0LTI0IDI0eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icnNzIiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPGNpcmNsZSBmaWxsPSJjdXJyZW50Q29sb3IiIGN4PSI2LjE4IiBjeT0iMTcuODIiIHI9IjIuMTgiLz4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQgNC40NHYyLjgzYzcuMDMgMCAxMi43MyA1LjcgMTIuNzMgMTIuNzNoMi44M2MwLTguNTktNi45Ny0xNS41Ni0xNS41Ni0xNS41NnptMCA1LjY2djIuODNjMy45IDAgNy4wNyAzLjE3IDcuMDcgNy4wN2gyLjgzYzAtNS40Ny00LjQzLTkuOS05LjktOS45eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0idHdpdHRlciIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTcyLjIgMzMuMjRjLTUuMDUgMi4xNzQtMTAuMTAzIDMuNTMtMTUuMTUyIDQuMDc2IDUuNzAzLTMuNDIyIDkuNTYtOC4yNTYgMTEuNTctMTQuNTAyLTUuMjE2IDMuMDk1LTEwLjc4MyA1LjIxMy0xNi43MDMgNi4zNTQtNS4yMTUtNS41NC0xMS42MjMtOC4zMS0xOS4yMjgtOC4zMS03LjI3OCAwLTEzLjQ4MyAyLjU2NS0xOC42MTcgNy42OTgtNS4xMzMgNS4xMzMtNy43IDExLjMzOC03LjcgMTguNjE2IDAgMS45NTUuMjE4IDMuOTY1LjY1MyA2LjAzLTEwLjc1NS0uNTQ0LTIwLjg0NC0zLjI0Ni0zMC4yNjgtOC4xMDctOS40MjQtNC44NjItMTcuNDIyLTExLjM0LTIzLjk5NC0xOS40MzItMi4zOSA0LjA3My0zLjU4MiA4LjUtMy41ODIgMTMuMjggMCA0LjUwOCAxLjA2IDguNjkgMy4xNzggMTIuNTQ3IDIuMTE4IDMuODU2IDQuOTcgNi45OCA4LjU1NSA5LjM3LTQuMjM3LS4xNjQtOC4yMDItMS4yNzgtMTEuODk1LTMuMzQydi4zMjZjMCA2LjM1NSAxLjk5NiAxMS45MzUgNS45ODggMTYuNzQzIDMuOTkyIDQuODA4IDkuMDMgNy44MzUgMTUuMTEzIDkuMDg0LTIuMjguNi00LjU5LjktNi45MjUuOS0xLjUyIDAtMy4xNzctLjEzNy00Ljk3LS40MDcgMS42ODUgNS4yNyA0Ljc4IDkuNiA5LjI5IDEyLjk5NSA0LjUwNyAzLjM5NiA5LjYxMyA1LjE0NiAxNS4zMTYgNS4yNTYtOS41NiA3LjQ5NS0yMC40NSAxMS4yNDMtMzIuNjcgMTEuMjQzLTIuMzM2IDAtNC40NTQtLjEwNy02LjM1NS0uMzI1IDEyLjIyIDcuODc2IDI1LjY5IDExLjgxMyA0MC40MSAxMS44MTMgOS4zNDQgMCAxOC4xMTYtMS40OCAyNi4zMTYtNC40NCA4LjIwMy0yLjk2IDE1LjIxLTYuOTI0IDIxLjAyLTExLjg5NSA1LjgxMi00Ljk3IDEwLjgyMy0xMC42ODYgMTUuMDMyLTE3LjE1IDQuMjEtNi40NjMgNy4zNDUtMTMuMjEgOS40MS0yMC4yNDUgMi4wNjQtNy4wMzUgMy4wOTYtMTQuMDggMy4wOTYtMjEuMTQzIDAtMS41Mi0uMDI3LTIuNjYtLjA4Mi0zLjQyMiA1LjE2My0zLjc0NiA5LjU2My04LjI4MiAxMy4yLTEzLjYwNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#close-alt"></use></svg>
</button>`
;

const mobileNav = `
	<nav class="nci-header--nci-mobile-container active">
	  ${closeButton}
		<ul class="nci-header--nci-mobilenav">
			<li data-options="0" data-isroot="false" data-path="/about" class="nci-header--nci-mobilenav__node active">
			<span id="nci-mobilenav__msg">Main Menu</span>
			</li>
			<li class="nci-mobilenav__holder">
				<ul class="nci-header--nci-mobilenav">
					<li data-options="0" class="nci-header--nci-mobilenav__item">
						<a class="nci-header--nci-mobilenav__link" href="/about-cancer">Explore Section</a>
					</li>
					<li data-options="0" data-isroot="false" data-path="/example" class="nci-header--nci-mobilenav__node">
						<span id="nci-mobilenav__label">Second Section</span>
					</li>
					<li data-options="0" data-isroot="false" data-path="/example" class="nci-header--nci-mobilenav__node">
						<span id="nci-mobilenav__label">Third Section Link With Long Title Example</span>
					</li>
					<li data-options="0" data-isroot="false" data-path="/example" class="nci-header--nci-mobilenav__node">
						<span id="nci-mobilenav__label">Fourth Section</span>
					</li>
					<li data-options="0" data-isroot="false" data-path="/example" class="nci-header--nci-mobilenav__node">
						<span id="nci-mobilenav__label">Fifth Section</span>
					</li>
				</ul>
		  </li>
		</ul>
	</nav>`;

const html = `
<header class="usa-header nci-header-extended">
  <div class="nci-header--nci-navbar">
		<div class="usa-logo--nci-logo" id="extended-mega-logo">
			<em class="usa-logo--nci-logo__text">
				<a href="http://cancer.gov" title="Home" aria-label="Home">
					<img src=${logo} class="nci-logo"/>
				</a>
			</em>
		</div>

  </div>
  <nav aria-label="Primary navigation" class="nci-header--nci-nav">
    <div class="nci-header--nci-nav__inner">
		<ul class="nci-header--nci-nav__primary">
			<li class="nci-header--nci-nav__primary-item">
				<a href="/"  class="nci-primary__button" aria-expanded="false" aria-controls="extended-mega-nav-section-one">
					<span>Current section</span>
				</a>
			</li>
			<li class="nci-header--nci-nav__primary-item">
				<a href="/"  class="nci-primary__button" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
					<span>Second Section</span>
				</a>
			</li>
			<li class="nci-header--nci-nav__primary-item">
				<a href="/"  class="nci-primary__button" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
					<span>Third Section</span>
				</a>
			</li>
			<li class="nci-header--nci-nav__primary-item">
				<a href="/"  class="nci-primary__button" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
					<span>Fourth Section</span>
				</a>
			</li>
			<li class="nci-header--nci-nav__primary-item">
				<a href="/" class="nci-primary__button" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
					<span>Fifth Section</span>
				</a>
			</li>
			<li class="nci-header--nci-nav__primary-item">
				<a href="/" class="nci-primary__button" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
					<span>Sixth Section</span>
				</a>
			</li>
		</ul>
	
		<button class="nci-header--nci-menu-btn">Menu</button>
		<div class="nci-header--nci-nav__secondary">
		<form class="nci-header--nci-search usa-search--small" role="search">
			<label class="usa-sr-only" for="extended-mega-search-field-en-small">
				Search
			</label>
			<input class="usa-input" id="extended-mega-search-field-en-small" type="search" name="search">
				<button class="usa-button" type="submit"><label class="nci-search-label">Search</label>
				<svg class="usa-icon " role="img" aria-hidden="true">
					<use xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CgogIDxzeW1ib2wgaWQ9ImFuZ2xlLWFycm93LWRvd24iIHZpZXdCb3g9IjAgMCA2NCAzOSI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02My4zNiA0LjAwNEw2MC4xNTUuNzQxYy0uNDI3LS40MzYtLjkxOS0uNjU0LTEuNDc1LS42NTQtLjU1NSAwLTEuMDQ3LjIxOC0xLjQ3NS42NTRMMzIgMjYuNCA2Ljc5OC43NEM2LjM3LjMwNiA1Ljg3OC4wODggNS4zMjMuMDg4Yy0uNTU2IDAtMS4wNDguMjE4LTEuNDc2LjY1NEwuNjQyIDQuMDA1Qy4yMTMgNC40NCAwIDQuOTQxIDAgNS41MDdjMCAuNTY1LjIxNCAxLjA2Ni42NDIgMS41MDFsMjkuODgzIDMwLjQyN2MuNDI3LjQzNS45Mi42NTIgMS40NzUuNjUyLjU1NiAwIDEuMDQ3LS4yMTcgMS40NzQtLjY1Mkw2My4zNjEgNy4wMDhjLjQyNy0uNDM1LjYzOS0uOTM2LjYzOS0xLjUwMSAwLS41NjYtLjIxMi0xLjA2Ny0uNjQtMS41MDN6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDM4IDY0Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy45MTcuNjRMLjY1MyAzLjg0NUMuMjE3IDQuMjczIDAgNC43NjUgMCA1LjMycy4yMTcgMS4wNDcuNjUzIDEuNDc1TDI2LjMxMyAzMiAuNjUyIDU3LjIwMmMtLjQzNi40MjgtLjY1My45Mi0uNjUzIDEuNDc1IDAgLjU1Ni4yMTcgMS4wNDguNjUzIDEuNDc2bDMuMjY1IDMuMjA1Yy40MzUuNDI5LjkzNi42NDIgMS41MDIuNjQyLjU2NSAwIDEuMDY2LS4yMTQgMS41LS42NDJsMzAuNDI3LTI5Ljg4M2MuNDM2LS40MjcuNjUzLS45Mi42NTMtMS40NzUgMC0uNTU2LS4yMTctMS4wNDctLjY1My0xLjQ3NEw2LjkyMS42MzlDNi40ODYuMjEyIDUuOTg1IDAgNS40MiAwYy0uNTY2IDAtMS4wNjcuMjEyLTEuNTAzLjY0eiIvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJhbmdsZS1hcnJvdy11cCIgdmlld0JveD0iMCAwIDY0IDM5Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTS42NTUgMzQuMTg3Yy0uNDI3LS40MzctLjY0LS45MzctLjY0LTEuNTAzIDAtLjU2Ni4yMTMtMS4wNjcuNjQtMS41MDJMMzAuNTQyLjc1NmMuNDI3LS40MzYuOTE4LS42NTMgMS40NzQtLjY1My41NTUgMCAxLjA0OC4yMTggMS40NzQuNjUzbDI5Ljg4NCAzMC40MjZjLjQyOC40MzUuNjQyLjkzNi42NDIgMS41MDJzLS4yMTMgMS4wNjYtLjY0MiAxLjUwMWwtMy4yMDYgMy4yNjVjLS40MjcuNDM2LS45MTkuNjUzLTEuNDc1LjY1My0uNTU1IDAtMS4wNDctLjIxNy0xLjQ3NS0uNjUzTDMyLjAxNiAxMS43OSA2LjgxIDM3LjQ1Yy0uNDI3LjQzNi0uOTE5LjY1My0xLjQ3NC42NTMtLjU1NiAwLTEuMDQ4LS4yMTctMS40NzUtLjY1M0wuNjU1IDM0LjE4N3oiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0iYXJyb3ctbGVmdC1zb2xpZCIgdmlld0JveD0iMCAwIDI1NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0eiIgLz4KICA8L3N5bWJvbD4KCgk8c3ltYm9sIGlkPSJjbG9zZS1hbHQiIHZpZXdCb3g9IjAgMCAxNSAxNSI+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTAgMTMuMDMzMjk2NEwxMy4wMzMyOTY0IDBNMTMuMDMzMjk2NCAxMy4wMzMyOTY0TDAgMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPgoJPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9ImVudmVsb3BlIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00NjQgNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMnYyODhjMCAyNi41MSAyMS40OSA0OCA0OCA0OGg0MTZjMjYuNTEgMCA0OC0yMS40OSA0OC00OFYxMTJjMC0yNi41MS0yMS40OS00OC00OC00OHptMCA0OHY0MC44MDVjLTIyLjQyMiAxOC4yNTktNTguMTY4IDQ2LjY1MS0xMzQuNTg3IDEwNi40OS0xNi44NDEgMTMuMjQ3LTUwLjIwMSA0NS4wNzItNzMuNDEzIDQ0LjcwMS0yMy4yMDguMzc1LTU2LjU3OS0zMS40NTktNzMuNDEzLTQ0LjcwMUMxMDYuMTggMTk5LjQ2NSA3MC40MjUgMTcxLjA2NyA0OCAxNTIuODA1VjExMmg0MTZ6TTQ4IDQwMFYyMTQuMzk4YzIyLjkxNCAxOC4yNTEgNTUuNDA5IDQzLjg2MiAxMDQuOTM4IDgyLjY0NiAyMS44NTcgMTcuMjA1IDYwLjEzNCA1NS4xODYgMTAzLjA2MiA1NC45NTUgNDIuNzE3LjIzMSA4MC41MDktMzcuMTk5IDEwMy4wNTMtNTQuOTQ3IDQ5LjUyOC0zOC43ODMgODIuMDMyLTY0LjQwMSAxMDQuOTQ3LTgyLjY1M1Y0MDBINDh6IiAvPgogIDwvc3ltYm9sPgoKICA8c3ltYm9sIGlkPSJmYWNlYm9vayIgdmlld0JveD0iMCAwIDIxNiAxNDYiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTE4LjM0OCA0OS44NlYzOC4yOTNjMC0xLjczNy4wOC0zLjA4Mi4yNDMtNC4wMzIuMTY1LS45NS41My0xLjg4NiAxLjEwNC0yLjgxLjU3LS45MjMgMS40OTQtMS41NiAyLjc3LTEuOTE0IDEuMjc3LS4zNTQgMi45NzUtLjUzIDUuMDk0LS41M2gxMS41NjhWNS44NjZIMTIwLjYzYy0xMC43MDIgMC0xOC4zODcgMi41NC0yMy4wNTggNy42MTctNC42NyA1LjA4LTcuMDA2IDEyLjU2LTcuMDA2IDIyLjQ0NnYxMy45M0g3Ni43MTRWNzNoMTMuODV2NjcuMTM0aDI3Ljc4NFY3M2gxOC40OTRsMi40NDQtMjMuMTRoLTIwLjkzOHoiLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0ibGlua2VkaW4iIHZpZXdCb3g9IjAgMCA0NDggNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQxNiAzMkgzMS45QzE0LjMgMzIgMCA0Ni41IDAgNjQuM3YzODMuNEMwIDQ2NS41IDE0LjMgNDgwIDMxLjkgNDgwSDQxNmMxNy42IDAgMzItMTQuNSAzMi0zMi4zVjY0LjNjMC0xNy44LTE0LjQtMzIuMy0zMi0zMi4zek0xMzUuNCA0MTZINjlWMjAyLjJoNjYuNVY0MTZ6bS0zMy4yLTI0M2MtMjEuMyAwLTM4LjUtMTcuMy0zOC41LTM4LjVTODAuOSA5NiAxMDIuMiA5NmMyMS4yIDAgMzguNSAxNy4zIDM4LjUgMzguNSAwIDIxLjMtMTcuMiAzOC41LTM4LjUgMzguNXptMjgyLjEgMjQzaC02Ni40VjMxMmMwLTI0LjgtLjUtNTYuNy0zNC41LTU2LjctMzQuNiAwLTM5LjkgMjctMzkuOSA1NC45VjQxNmgtNjYuNFYyMDIuMmg2My43djI5LjJoLjljOC45LTE2LjggMzAuNi0zNC41IDYyLjktMzQuNSA2Ny4yIDAgNzkuNyA0NC4zIDc5LjcgMTAxLjlWNDE2eiIgLz4KICA8L3N5bWJvbD4KCiAgPHN5bWJvbCBpZD0icHJpbnQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQ0OCAxOTJWNzcuMjVjMC04LjQ5LTMuMzctMTYuNjItOS4zNy0yMi42M0wzOTMuMzcgOS4zN2MtNi02LTE0LjE0LTkuMzctMjIuNjMtOS4zN0g5NkM3OC4zMyAwIDY0IDE0LjMzIDY0IDMydjE2MGMtMzUuMzUgMC02NCAyOC42NS02NCA2NHYxMTJjMCA4Ljg0IDcuMTYgMTYgMTYgMTZoNDh2OTZjMCAxNy42NyAxNC4zMyAzMiAzMiAzMmgzMjBjMTcuNjcgMCAzMi0xNC4zMyAzMi0zMnYtOTZoNDhjOC44NCAwIDE2LTcuMTYgMTYtMTZWMjU2YzAtMzUuMzUtMjguNjUtNjQtNjQtNjR6bS02NCAyNTZIMTI4di05NmgyNTZ2OTZ6bTAtMjI0SDEyOFY2NGgxOTJ2NDhjMCA4Ljg0IDcuMTYgMTYgMTYgMTZoNDh2OTZ6bTQ4IDcyYy0xMy4yNSAwLTI0LTEwLjc1LTI0LTI0IDAtMTMuMjYgMTAuNzUtMjQgMjQtMjRzMjQgMTAuNzQgMjQgMjRjMCAxMy4yNS0xMC43NSAyNC0yNCAyNHoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InJzcyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxjaXJjbGUgZmlsbD0iY3VycmVudENvbG9yIiBjeD0iNi4xOCIgY3k9IjE3LjgyIiByPSIyLjE4Ii8+CiAgICA8cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00IDQuNDR2Mi44M2M3LjAzIDAgMTIuNzMgNS43IDEyLjczIDEyLjczaDIuODNjMC04LjU5LTYuOTctMTUuNTYtMTUuNTYtMTUuNTZ6bTAgNS42NnYyLjgzYzMuOSAwIDcuMDcgMy4xNyA3LjA3IDcuMDdoMi44M2MwLTUuNDctNC40My05LjktOS45LTkuOXoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InR3aXR0ZXIiIHZpZXdCb3g9IjAgMCAyMTYgMTQ2Ij4KICAgIDxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE3Mi4yIDMzLjI0Yy01LjA1IDIuMTc0LTEwLjEwMyAzLjUzLTE1LjE1MiA0LjA3NiA1LjcwMy0zLjQyMiA5LjU2LTguMjU2IDExLjU3LTE0LjUwMi01LjIxNiAzLjA5NS0xMC43ODMgNS4yMTMtMTYuNzAzIDYuMzU0LTUuMjE1LTUuNTQtMTEuNjIzLTguMzEtMTkuMjI4LTguMzEtNy4yNzggMC0xMy40ODMgMi41NjUtMTguNjE3IDcuNjk4LTUuMTMzIDUuMTMzLTcuNyAxMS4zMzgtNy43IDE4LjYxNiAwIDEuOTU1LjIxOCAzLjk2NS42NTMgNi4wMy0xMC43NTUtLjU0NC0yMC44NDQtMy4yNDYtMzAuMjY4LTguMTA3LTkuNDI0LTQuODYyLTE3LjQyMi0xMS4zNC0yMy45OTQtMTkuNDMyLTIuMzkgNC4wNzMtMy41ODIgOC41LTMuNTgyIDEzLjI4IDAgNC41MDggMS4wNiA4LjY5IDMuMTc4IDEyLjU0NyAyLjExOCAzLjg1NiA0Ljk3IDYuOTggOC41NTUgOS4zNy00LjIzNy0uMTY0LTguMjAyLTEuMjc4LTExLjg5NS0zLjM0MnYuMzI2YzAgNi4zNTUgMS45OTYgMTEuOTM1IDUuOTg4IDE2Ljc0MyAzLjk5MiA0LjgwOCA5LjAzIDcuODM1IDE1LjExMyA5LjA4NC0yLjI4LjYtNC41OS45LTYuOTI1LjktMS41MiAwLTMuMTc3LS4xMzctNC45Ny0uNDA3IDEuNjg1IDUuMjcgNC43OCA5LjYgOS4yOSAxMi45OTUgNC41MDcgMy4zOTYgOS42MTMgNS4xNDYgMTUuMzE2IDUuMjU2LTkuNTYgNy40OTUtMjAuNDUgMTEuMjQzLTMyLjY3IDExLjI0My0yLjMzNiAwLTQuNDU0LS4xMDctNi4zNTUtLjMyNSAxMi4yMiA3Ljg3NiAyNS42OSAxMS44MTMgNDAuNDEgMTEuODEzIDkuMzQ0IDAgMTguMTE2LTEuNDggMjYuMzE2LTQuNDQgOC4yMDMtMi45NiAxNS4yMS02LjkyNCAyMS4wMi0xMS44OTUgNS44MTItNC45NyAxMC44MjMtMTAuNjg2IDE1LjAzMi0xNy4xNSA0LjIxLTYuNDYzIDcuMzQ1LTEzLjIxIDkuNDEtMjAuMjQ1IDIuMDY0LTcuMDM1IDMuMDk2LTE0LjA4IDMuMDk2LTIxLjE0MyAwLTEuNTItLjAyNy0yLjY2LS4wODItMy40MjIgNS4xNjMtMy43NDYgOS41NjMtOC4yODIgMTMuMi0xMy42MDR6IiAvPgogIDwvc3ltYm9sPgoKCQk8c3ltYm9sIGlkPSJzZWFyY2giIHZpZXdCb3g9IjAgMCAyNCAyNCI+CgkJCQk8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+CgkJCQk8cGF0aCAgZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+CgkJPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InZvbHVtZS11cCIgdmlld0JveD0iMCAwIDU3NiA1MTIiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjE1LjAzIDcxLjA1TDEyNi4wNiAxNjBIMjRjLTEzLjI2IDAtMjQgMTAuNzQtMjQgMjR2MTQ0YzAgMTMuMjUgMTAuNzQgMjQgMjQgMjRoMTAyLjA2bDg4Ljk3IDg4Ljk1YzE1LjAzIDE1LjAzIDQwLjk3IDQuNDcgNDAuOTctMTYuOTdWODguMDJjMC0yMS40Ni0yNS45Ni0zMS45OC00MC45Ny0xNi45N3ptMjMzLjMyLTUxLjA4Yy0xMS4xNy03LjMzLTI2LjE4LTQuMjQtMzMuNTEgNi45NS03LjM0IDExLjE3LTQuMjIgMjYuMTggNi45NSAzMy41MSA2Ni4yNyA0My40OSAxMDUuODIgMTE2LjYgMTA1LjgyIDE5NS41OCAwIDc4Ljk4LTM5LjU1IDE1Mi4wOS0xMDUuODIgMTk1LjU4LTExLjE3IDcuMzItMTQuMjkgMjIuMzQtNi45NSAzMy41IDcuMDQgMTAuNzEgMjEuOTMgMTQuNTYgMzMuNTEgNi45NUM1MjguMjcgNDM5LjU4IDU3NiAzNTEuMzMgNTc2IDI1NlM1MjguMjcgNzIuNDMgNDQ4LjM1IDE5Ljk3ek00ODAgMjU2YzAtNjMuNTMtMzIuMDYtMTIxLjk0LTg1Ljc3LTE1Ni4yNC0xMS4xOS03LjE0LTI2LjAzLTMuODItMzMuMTIgNy40NnMtMy43OCAyNi4yMSA3LjQxIDMzLjM2QzQwOC4yNyAxNjUuOTcgNDMyIDIwOS4xMSA0MzIgMjU2cy0yMy43MyA5MC4wMy02My40OCAxMTUuNDJjLTExLjE5IDcuMTQtMTQuNSAyMi4wNy03LjQxIDMzLjM2IDYuNTEgMTAuMzYgMjEuMTIgMTUuMTQgMzMuMTIgNy40NkM0NDcuOTQgMzc3Ljk0IDQ4MCAzMTkuNTQgNDgwIDI1NnptLTE0MS43Ny03Ni44N2MtMTEuNTgtNi4zMy0yNi4xOS0yLjE2LTMyLjYxIDkuNDUtNi4zOSAxMS42MS0yLjE2IDI2LjIgOS40NSAzMi42MUMzMjcuOTggMjI4LjI4IDMzNiAyNDEuNjMgMzM2IDI1NmMwIDE0LjM4LTguMDIgMjcuNzItMjAuOTIgMzQuODEtMTEuNjEgNi40MS0xNS44NCAyMS05LjQ1IDMyLjYxIDYuNDMgMTEuNjYgMjEuMDUgMTUuOCAzMi42MSA5LjQ1IDI4LjIzLTE1LjU1IDQ1Ljc3LTQ1IDQ1Ljc3LTc2Ljg4cy0xNy41NC02MS4zMi00NS43OC03Ni44NnoiIC8+CiAgPC9zeW1ib2w+CgogIDxzeW1ib2wgaWQ9InlvdXR1YmUiIHZpZXdCb3g9IjAgLTMgMjEgMzEiPgogICAgPHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLDE3LjhjMCwyLjItMC4xLDMuOC0wLjQsNC45CgkJCWMtMC4yLDAuNS0wLjQsMS0wLjgsMS40Yy0wLjQsMC4zLTAuOSwwLjYtMS40LDAuNmMtMS44LDAuMi00LjQsMC4zLTcuOSwwLjNzLTYuMi0wLjEtNy45LTAuM2MtMC41LTAuMS0xLjEtMC4zLTEuNS0wLjYKCQkJYy0wLjQtMC4zLTAuNy0wLjktMC44LTEuNGMtMC4zLTEtMC40LTIuNy0wLjQtNC45YzAtMi4yLDAuMS0zLjgsMC40LTQuOWMwLjItMC41LDAuNC0xLDAuOC0xLjRjMC40LTAuMywwLjktMC42LDEuNS0wLjcKCQkJYzEuOC0wLjIsNC40LTAuMyw3LjktMC4zczYuMiwwLjEsNy45LDAuM2MwLjUsMC4xLDEuMSwwLjMsMS41LDAuN2MwLjQsMC4zLDAuNywwLjksMC44LDEuNEMyMC44LDE0LDIxLDE1LjcsMjEsMTcuOEwyMSwxNy44egoJCQkgTTQuNCwxNC40aDEuNXYtMS4zSDEuNXYxLjNIM3Y4aDEuNFYxNC40TDQuNCwxNC40eiBNNi45LDBoMS41TDYuNiw1LjV2My44SDUuMlY1LjVDNS4xLDQuOCw0LjcsMy45LDQuMywyLjZDNCwxLjYsMy43LDAuOCwzLjMsMAoJCQloMS41bDEsMy42TDYuOSwwTDYuOSwweiBNOC41LDIyLjNoMS4ydi02LjlIOC41djUuM2MtMC4zLDAuNC0wLjUsMC42LTAuOCwwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM3YtMC41di01LjFINi4ydjUuNAoJCQljMCwwLjQsMCwwLjgsMC4xLDFjMC4xLDAuMywwLjQsMC41LDAuOCwwLjVjMC40LDAsMS0wLjMsMS40LTAuOVYyMi4zTDguNSwyMi4zeiBNMTIsNC43djIuNGMwLDAuOC0wLjIsMS4zLTAuNCwxLjYKCQkJYy0wLjQsMC40LTAuOSwwLjctMS41LDAuN1M5LDkuMiw4LjYsOC43QzguMyw4LjQsOC4yLDcuOSw4LjIsNy4xVjQuN2MwLTAuOCwwLjItMS4zLDAuNC0xLjZDOSwyLjUsOS41LDIuMywxMC4xLDIuMwoJCQlzMS4xLDAuMywxLjUsMC43QzExLjksMy40LDEyLDMuOSwxMiw0LjdMMTIsNC43eiBNMTAuOCw3LjRWNC40YzAtMC42LTAuMi0xLTAuNi0xcy0wLjYsMC4zLTAuNiwxdjIuOWMwLDAuNywwLjIsMSwwLjYsMQoJCQlDMTAuNSw4LjMsMTAuOCw4LDEwLjgsNy40TDEwLjgsNy40eiBNMTQuNiwyMC4ydi0yLjhjMC0wLjcsMC0xLjEtMC4xLTEuNGMtMC4yLTAuNS0wLjUtMC44LTEtMC44Yy0wLjQsMC0wLjksMC4zLTEuMywwLjh2LTNIMTEKCQkJdjkuM2gxLjJ2LTAuN2MwLjQsMC41LDAuOSwwLjgsMS4zLDAuOGMwLjUsMCwwLjktMC4zLDEtMC44QzE0LjYsMjEuNCwxNC42LDIwLjksMTQuNiwyMC4yTDE0LjYsMjAuMnogTTEzLjQsMTcuNHYyLjkKCQkJYzAsMC42LTAuMiwxLTAuNSwxYy0wLjIsMC0wLjQtMC4xLTAuNi0wLjN2LTQuMmMwLjItMC4yLDAuNC0wLjMsMC42LTAuM0MxMy4yLDE2LjQsMTMuNCwxNi44LDEzLjQsMTcuNEwxMy40LDE3LjR6IE0xNi44LDIuNHY3CgkJCWgtMS4zVjguN2MtMC41LDAuNi0xLDAuOS0xLjUsMC45Yy0wLjQsMC0wLjctMC4yLTAuOS0wLjVDMTMsOC43LDEzLDguNCwxMyw4VjIuNGgxLjN2NS4xVjhjMCwwLjIsMC4xLDAuMywwLjMsMC4zCgkJCWMwLjMsMCwwLjUtMC4yLDAuOC0wLjZWMi40SDE2LjhMMTYuOCwyLjR6IE0xOS40LDIwLjJWMjBoLTEuM3YwLjljLTAuMSwwLjMtMC4zLDAuNS0wLjUsMC41Yy0wLjQsMC0wLjYtMC4zLTAuNi0xdi0xLjJoMi41di0xLjUKCQkJYzAtMC43LTAuMS0xLjMtMC40LTEuNmMtMC40LTAuNS0wLjktMC43LTEuNS0wLjdzLTEuMSwwLjMtMS41LDAuN2MtMC4zLDAuMy0wLjQsMC45LTAuNCwxLjZ2Mi40YzAsMC44LDAuMiwxLjMsMC40LDEuNgoJCQljMC40LDAuNCwwLjksMC43LDEuNSwwLjdjMC43LDAsMS4yLTAuMywxLjUtMC44YzAuMi0wLjMsMC4zLTAuNSwwLjMtMC44VjIwLjJMMTkuNCwyMC4yeiBNMTguMiwxNy40VjE4aC0xLjN2LTAuNgoJCQljMC0wLjYsMC4yLTEsMC42LTFTMTguMiwxNi44LDE4LjIsMTcuNEwxOC4yLDE3LjR6Ii8+CiAgPC9zeW1ib2w+Cjwvc3ZnPgo=#search"></use>
					</svg>
				</button>
				<div class="nci-search--sws-overlay"></div>
			</form>
      </div>
    </div>
  </nav>
	${mobileNav}
	<div class="nci-mobile-overlay active" />
</header>`;

export const NCIExtendedMobileFirstLevel= () => <TestCase css={css} html={html} />;