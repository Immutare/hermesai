import { LinkModel, DefaultLinkModel, PortModelAlignment, DefaultPortModel } from '@projectstorm/react-diagrams';

export class DatabasePortModel extends DefaultPortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'database',
			name: alignment,
			alignment: alignment
		});
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel();
	}
}