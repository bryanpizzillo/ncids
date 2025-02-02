/**
 * The details for a primary nav click event.
 */
type PrimaryNavClickEventDetails = {
	/** The label of the navigation item. */
	label: string;
	/** The href of the navigation item. */
	href: string;
	/** The navigation link. */
	link: HTMLAnchorElement;
};

export default PrimaryNavClickEventDetails;
