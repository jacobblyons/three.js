import { Points } from "./../objects/Points.d";
import { Mesh } from "./../objects/Mesh.d";
import { TextureLoader } from "./TextureLoader.d";
import { Texture } from "./../textures/Texture.d";
import { LoadingManager } from "./LoadingManager.d";

export class PCDLoader {
	constructor(manager?: LoadingManager);

	manager: LoadingManager;
	crossOrigin: string;
	withCredentials: string;
	path: string;

	/**
	 * Begin loading from url
	 *
	 * @param url
	 */
	load(
		url: string,
		onLoad?: (data: any) => void,
		onProgress?: (event: ProgressEvent) => void,
		onError?: (event: ErrorEvent) => void
	): Texture;
	setPath(path: string): TextureLoader;
	parse(data: any, url: string): Mesh;
}
