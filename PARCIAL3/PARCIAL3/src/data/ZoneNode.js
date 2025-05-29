export class ZoneNode {
    constructor(name) {
        this.id = crypto.randomUUID();  // ID único para control
        this.name = name;
        this.children = [];
    }

    // Agregar subzona
    addChild(childNode) {
        this.children.push(childNode);
    }

    // Editar el nombre de una zona
    editName(newName) {
        this.name = newName;
    }

    // Buscar zona por ID
    findById(id) {
        if (this.id === id) return this;
        for (const child of this.children) {
            const found = child.findById(id);
            if (found) return found;
        }
        return null;
    }

    // Calcular altura del árbol (desde esta zona)
    getHeight() {
        if (this.children.length === 0) return 1;
        return 1 + Math.max(...this.children.map(child => child.getHeight()));
    }

    // Calcular número total de zonas (desde esta zona)
    getTotalZones() {
        return 1 + this.children.reduce((sum, child) => sum + child.getTotalZones(), 0);
    }

    // Convertir árbol a JSON plano (para Firebase)
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            children: this.children.map(child => child.toJSON()),
        };
    }

    // Cargar árbol desde JSON (desde Firebase)
    static fromJSON(json) {
        const node = new ZoneNode(json.name);
        node.id = json.id;
        node.children = json.children.map(child => ZoneNode.fromJSON(child));
        return node;
    }
}
