// ToDoList

// - Debe ser una clase
// - Debe tener los metodos:
//   - geToDo(): debe retornar la lista de tareas
//   - addToDo(): deberia pushear al array una tarea nueva
//   - deleteToDo(): deberia borrar todas las tareas

class ToDoList {
  constructor() {
    this.toDoList = [];
  }

  getToDo() {
    return this.toDoList;
  }

  addToDo(toDo) {
    this.toDoList.push(toDo);
  }

  deleteToDo() {
    this.toDoList.pop();
  }
}

describe("La clase ToDoList", () => {
  beforeEach(() => {
    lista = new ToDoList();
  });

  it("deberia ser una clase", () => {
    expect(typeof ToDoList.prototype.constructor).toBe("function");
  });

  it("Debe tener implementado el metodo getToDo()", () => {
    expect(lista.getToDo).toBeDefined();
  });
  it("Debe tener implementado el metodo addToDo()", () => {
    expect(lista.addToDo).toBeDefined();
  });
  it("Debe tener implementado el metodo deleteToDo()", () => {
    expect(lista.deleteToDo).toBeDefined();
  });
  it("El metodo getToDo() Debería retornar la lista de elementos", () => {
    expect(Array.isArray(lista.getToDo())).toBeTrue();
  });
  it("El metodo addToDo() Debería agregar un elemento a la lista", () => {
    lista.addToDo("Hacer la HW de la clase de hoy");
    expect(lista.getToDo()).toContain("Hacer la HW de la clase de hoy");
  });
  it("El metodo deleteToDo() Debería eliminar el último elemento de la lista", () => {
    lista.addToDo("A");
    lista.addToDo("B");
    lista.addToDo("C");
    lista.deleteToDo();
    expect(lista.getToDo()).toContain("A");
    expect(lista.getToDo()).toContain("B");
    expect(lista.getToDo()).not.toContain("C");
  });
});
