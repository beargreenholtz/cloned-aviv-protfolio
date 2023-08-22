export interface IImage {
	readonly id: number;
	readonly attributes: {
		readonly url: string;
		readonly caption: string;
	};
}
