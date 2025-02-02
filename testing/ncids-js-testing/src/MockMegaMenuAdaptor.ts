import { MegaMenuAdaptor } from '@nciocpl/ncids-js';

export class MockMegaMenuAdaptor implements MegaMenuAdaptor {
	useUrlForNavigationId: boolean;

	constructor(useUrlForNavigationId: boolean) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getMegaMenuContent(id: string): Promise<HTMLElement> {
		const template = document.createElement('template');
		template.innerHTML = await this.getContentByPath(id);
		return <HTMLElement>template.content.firstElementChild;
	}

	async getContentByPath(path: string): Promise<string> {
		return <string>await fetch(path)
			.then((response) => response.text())
			.then((string) => string)
			.catch((error) => {
				console.error(`Fetch Error: ${path} ${error}`);
				return [];
			});
	}
}
