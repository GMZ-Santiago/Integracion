const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Tests de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin', 'image' ", async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      const props = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];

      const keys = Object.keys(body);
      props.forEach((prop) => {
        expect(keys).toContainEqual(prop);
      });
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/piterpan").expect(500);
    }, );
  });

  describe("GET /rickandmorty/login", () => {
    
    it("Responde con un objeto la propiedad access en true si la información del usuario es válida", async () => {
      const {body} = await agent.get(
        "/rickandmorty/login?email=rick@morty.com&password=ryk123"
      );
      expect(body.access).toEqual(true);
    });

    it("Responde con un objeto la propiedad access en false si la información del usuario es inválida", async () => {
      const {body} = await agent.get(
        "/rickandmorty/login?email=morty@rick.com&password=123asd"
      );
      expect(body.access).toEqual(false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
      const char1 = {id: 2, name: "Santi"}
      const char2 = {id: 3, name: "Pirulo"}
      it("Debe guardar el personaje en favoritos", async () => {
        const {body} = await agent.post("/rickandmorty/fav").send(char1);
        expect(body).toContainEqual(char1);
    });

    it("Debe agregar personajes a favoritos sin eliminar los ya existentes", async () => {
      const {body} = await agent.post("/rickandmorty/fav").send(char2);
      expect(body).toContainEqual(char1);
      expect(body).toContainEqual(char2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
      const char1 = {id: 2, name: "Santi"}
      const char2 = {id: 3, name: "Pirulo"}
    it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/1803");
      expect(body).toContainEqual(char1);
      expect(body).toContainEqual(char2);
    });
    it("Si el ID enviado existe, debería eliminarlo de favoritos", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/2");
      expect(body).toContainEqual(char2);
    });
  });
});
