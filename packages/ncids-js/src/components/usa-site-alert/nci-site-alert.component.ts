import { NCISiteAlertOptions } from './nci-site-alert-options';
import { SiteAlertCloseButton } from './utils/site-alert-close-button.component';
import { SiteAlertCollapse } from './utils/site-alert-collapse.component';

/**
 * A site alert communicates urgent site-wide information.
 *
 *
 * Initialize the Site Alert component:
 * ```
 * NCISiteAlert.element.create(HTMLElement);
 * ```
 */
export class NCISiteAlert {
	/** The component that contains collapsible sections. */
	protected element: HTMLElement;
	/** Combined options with defaults and user settings, user settings take precedence. */
	protected options: NCISiteAlertOptions;
	/** The close button component. */
	private closeButton!: SiteAlertCloseButton;
	/** The collapse component. */
	private collapse!: SiteAlertCollapse;
	/** Default settings for the component, combines close button and collapse components. */
	private static optionDefaults: NCISiteAlertOptions = {
		closeable: false,
		closeAriaLabel: 'Dismiss alert',
		closeButtonClass: 'usa-alert__nci-button--close',
		closeEventListenerLabel: 'usa-site-alert:close-button',
		closeCookiePath: '/',
		collapseAriaLabel: 'Toggle alert message',
		collapseButtonClass: 'usa-alert__nci-button--toggle',
		collapseCookiePath: '/',
		collapseEventListenerLabel: 'usa-site-alert:content',
	};
	/** Map object of the component. */
	private static _components: Map<HTMLElement, NCISiteAlert> = new Map<
		HTMLElement,
		NCISiteAlert
	>();

	/**
	 * Initializes class properties then builds component.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCISiteAlertOptions>} options Optional settings for component generation.
	 * @protected
	 */
	protected constructor(
		element: HTMLElement,
		options?: Partial<NCISiteAlertOptions>
	) {
		this.element = element;
		this.options = {
			...NCISiteAlert.optionDefaults,
			...options,
		};

		const existingComponent = NCISiteAlert._components.get(this.element);
		if (existingComponent) {
			existingComponent.unregister();
		}
		NCISiteAlert._components.set(this.element, this);

		this.initialize();
	}

	/**
	 * Instantiates this component of the given element.
	 *
	 * @param {HTMLElement} element Component being created.
	 * @param {Partial<NCISiteAlertOptions>} options Optional settings for component generation.
	 * @public
	 */
	public static create(
		element: HTMLElement,
		options?: Partial<NCISiteAlertOptions>
	): NCISiteAlert {
		if (!(element instanceof HTMLElement)) {
			throw 'Element is not an HTMLElement';
		}

		return this._components.get(element) || new this(element, options);
	}

	/**
	 * Resets component to a clean state.
	 * @public
	 */
	public unregister(): void {
		// Remove collapse
		if (this.collapse) {
			this.collapse.unregister();
		}

		// Remove dismiss button
		if (this.closeButton) {
			this.closeButton.unregister();
		}

		// Remove element
		NCISiteAlert._components.delete(this.element);
	}

	/**
	 * Hides site alert if cookie exists, adds event listeners, and creates close
	 * and collapse functionality.
	 * @private
	 */
	private initialize(): void {
		this.createCloseButton();
		this.createCollapse();
	}

	/**
	 * Creates the close button.
	 *
	 * @see SiteAlertCloseButton
	 * @private
	 */
	private createCloseButton(): void {
		if (this.options.closeable && this.element.id) {
			this.closeButton = new SiteAlertCloseButton(this.element, this.options);
		}
	}

	/**
	 * Creates the collapsible sections.
	 *
	 * @see SiteAlertCollapse
	 * @private
	 */
	private createCollapse(): void {
		if (
			this.element.classList.contains('usa-site-alert--nci-standard') &&
			this.element.id
		) {
			this.collapse = new SiteAlertCollapse(this.element, this.options);
		}
	}
}
