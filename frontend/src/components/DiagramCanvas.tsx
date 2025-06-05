import { useEffect, type ReactElement, useState } from 'react';
import createEngine, { 
    DefaultPortModel,
    DiagramModel,
	PortModelAlignment
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';
import { DatabaseNodeModel } from './diagram/widget/DatabaseNodeModel';
import { DatabaseNodeFactory } from './diagram/widget/DatabaseNodeFactory';
import {  IDatabaseTableMetadata } from './diagram/dto/interfaces/DatabaseTableMetadata';
import { mockgetDatabaseDiagramModel } from 'api/diagrammodels';


function transformDiagramFromJSONToModel(modelJSON: Array<IDatabaseTableMetadata>): Array<DatabaseNodeModel> {
	const models: Array<DatabaseNodeModel> = [];
	for (let i = 0; i < modelJSON.length; i++) {
		const tableNode = new DatabaseNodeModel(modelJSON[i]);
		const row = Math.ceil((i + 1) / 4);
		const x = i * 1.5 / row;
		tableNode.setPosition(250 * x, 250 * row);
		models.push(tableNode);
	}

	return models;
}

export default function DiagramCanvas(): ReactElement {
	const [metadata, setMetadata ] = useState<Array<IDatabaseTableMetadata>>([]);

	const engine = createEngine();
	engine.getNodeFactories().registerFactory(new DatabaseNodeFactory());
	const model = new DiagramModel();

	engine.setModel(model);

	useEffect(() => {
		const fetchMetadata = async () => {
			setMetadata(mockgetDatabaseDiagramModel())
		}

		fetchMetadata().catch((error) => {
			console.error(error);
		})
	}, []);

	useEffect(() => {
		if (!metadata) {
			return;
		}

		const nodes =  transformDiagramFromJSONToModel(metadata);
		if (!nodes.length) {
			return;
		}
		//2) setup the diagram model
		const model = new DiagramModel();

		let portEmp_Mng = null;
		let portEmp_Title = null;
		let portEmp_DeptEmp = null;
		let portEmp_Sal = null;
		let portDept_DeptEmp = null;
		let portDept_Mng = null;

		let portMng_Dept = null;
		let portMng_Emp = null;
		let portDeptEmp_Dept = null;
		let portDeptEmp_Emp = null;
		let portTitle_Emp = null;
		let portSal_Emp = null;

		let employee = null;
		let departments = null;
		let dept_manager = null;
		let dept_emp = null;
		let titles = null;
		let salaries = null;

		for (let i = 0; i < nodes.length; i++) {
			if (nodes[i].tableMetadata?.tableName === 'employees') {
				employee = nodes[i];
				// portEmp_Mng = nodes[i].getPort(PortModelAlignment.TOP);
				// portEmp_Title = nodes[i].getPort(PortModelAlignment.BOTTOM);
				// portEmp_Sal = nodes[i].getPort(PortModelAlignment.LEFT);
				// portEmp_DeptEmp = nodes[i].getPort(PortModelAlignment.RIGHT);
			}
			if (nodes[i].tableMetadata?.tableName === 'departments') {
				departments = nodes[i];
				// portDept_DeptEmp = nodes[i].getPort(PortModelAlignment.LEFT);
				// portDept_Mng = nodes[i].getPort(PortModelAlignment.RIGHT);
			}
			if (nodes[i].tableMetadata?.tableName === 'dept_manager') {
				dept_manager = nodes[i];
				// portMng_Dept = nodes[i].getPort(PortModelAlignment.LEFT);
				// portMng_Emp = nodes[i].getPort(PortModelAlignment.RIGHT);
			}
			if (nodes[i].tableMetadata?.tableName === 'dept_emp') {
				dept_emp = nodes[i];
				// portDeptEmp_Dept = nodes[i].getPort(PortModelAlignment.LEFT);
				// portDeptEmp_Emp = nodes[i].getPort(PortModelAlignment.RIGHT);
			}
			if (nodes[i].tableMetadata?.tableName === 'titles') {
				titles = nodes[i];
				// portTitle_Emp = nodes[i].getPort(PortModelAlignment.RIGHT);
			}
			if (nodes[i].tableMetadata?.tableName === 'salaries') {
				salaries = nodes[i];
				// portSal_Emp = nodes[i].getPort(PortModelAlignment.RIGHT);
			}
		}

		model.addAll(...nodes);

		model.addAll(
			employee?.getPort(PortModelAlignment.TOP)?.link(dept_emp?.getPort(PortModelAlignment.LEFT)),
			employee?.getPort(PortModelAlignment.BOTTOM).link(titles?.getPort(PortModelAlignment.LEFT)),
			employee?.getPort(PortModelAlignment.LEFT).link(dept_manager?.getPort(PortModelAlignment.LEFT)),
			employee?.getPort(PortModelAlignment.RIGHT).link(salaries?.getPort(PortModelAlignment.LEFT)),
			departments?.getPort(PortModelAlignment.LEFT).link(dept_manager?.getPort(PortModelAlignment.RIGHT)),
			departments?.getPort(PortModelAlignment.RIGHT).link(dept_emp?.getPort(PortModelAlignment.RIGHT))
		);

		//5) load model into engine
		engine.setModel(model);

	}, [metadata]);

	return (
		<CanvasWidget engine={engine} className='w-full'/>
	)
}
