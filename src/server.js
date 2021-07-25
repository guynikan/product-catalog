import {
  createServer,
  Model,
  hasMany,
  belongsTo,
  JSONAPISerializer,
} from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    serializers: {
      application: JSONAPISerializer,
    },

    models: {
      storage: Model.extend({
        kitchenware: hasMany(),
      }),
      kitchenware: Model.extend({
        storage: belongsTo(),
      }),
      clothes: Model.extend(),
      books: Model.extend(),
      decor: Model.extend(),
    },

    seeds(server) {
      server.db.loadData({
        storages: [
          {
            name: "Center 1",
            id: "1",
          },
          {
            name: "Center 2",
            id: "2",
          },
          {
            name: "Center 3",
            id: "3",
          },
        ],
        kitchenwares: [
          {
            name: "knife",
            model: "",
            dimensions: "",
            volume: "",
            price: 0,
            description: "",
            amount: 0,
            images: [{ alt: "", url: "" }],
            storageId: "1",
          },
        ],

        clothes: [
          {
            name: "T-shirt",
            color: "",
            model: "",
            size: "",
            price: 0,
            description: "",
            amount: 0,
            images: [{ alt: "", url: "" }],
            storageId: "2",
          },
          {
            name: "Hood",
            color: "",
            model: "",
            size: "",
            price: 0,
            description: "",
            amount: 1,
            images: [{ alt: "", url: "" }],
            storageId: "2",
          },
        ],
        books: [
          {
            name: "Os irmãos Karamazov",
            ISBN: "",
            dimensions: "",
            coverType: "",
            price: 0,
            description: "",
            amount: 0,
            images: [{ alt: "", url: "" }],
            storageId: "3",
          },
        ],

        decors: [
          {
            type: "decor",
            name: "wallpaper",
            dimensions: "",
            price: 0,
            description: "",
            amount: 0,
            images: [{ alt: "", url: "" }],
            storageId: "3",
          },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/storages/:type/:id", (schema, request) => {
        const { type, id } = request.params;
        let product = schema[`${type}`].find(id);
        return product.storage;
      });

      this.get("/storages/", (schema) => {
        return schema.storages.all();
      });

      this.get("/products/kitchenwares", (schema) => {
        return schema.kitchenwares.all();
      });

      this.get("/products/clothes", (schema) => {
        return schema.clothes.all();
      });

      this.get("/products/books", (schema) => {
        return schema.books.all();
      });

      this.get("/products/decors", (schema) => {
        return schema.decors.all();
      });

      this.get("/storages", (schema) => {
        return schema.storages.all();
      });

      this.post("/products", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.forEach((attr) => {
          console.log("e quando eu crio", attr);
          return schema.db[`${attr.type}`].insert(attr.attributes);
        });
      });

      this.patch("/products/:id", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        const id = request.params.id;
        attrs.forEach((attr) => {
          return schema.db[`${attr.type}`].update(id, attr.attributes);
        });
      });

      this.del("/products/:type/:id", (schema, request) => {
        const { id, type } = request.params;
        return schema.db[`${type}`].remove(id);
      });
    },
  });

  return server;
}
