import {mat4} from 'gl-matrix';

/*
Meshes are consists of a bunch of primitives. Primitives doesn't need to
coincide with primitives renderers support natively. But any renderer
needs to know how to convert each type of primitives here
to real native primitives that can be rendered
*/
export class Mesh {
  constructor() {
    // this.vertices = null;
    // this.texCoords = null;
    // this.color = null;
    // this.vertexIndices = null;
    // this.normals = null;
    this.modelMatrix = mat4.create();
    this.id = '';

    this.attributes = new Map();
    this.attributes.set('vertices', null);
    this.attributes.set('texCoords', null);
    this.attributes.set('color', null);
    this.attributes.set('vertexIndices', null);
    this.attributes.set('normals', null);
  }

  updateAttribute({attribute, data}) {

  }
}
