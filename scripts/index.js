class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(id, title, description, imgUrl) {
    if (!id) {
      id = this.generateUniqueId();
    }

    if (!title || !description || !imgUrl) {
      throw new Error("Todos los campos son obligatorios");
    }

    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);

    return activity;
  }

  deleteActivity(id) {
    const activityIndex = this.activities.findIndex(
      (activity) => activity.id === id
    );

    if (activityIndex === -1) {
      throw new Error("La actividad no existe");
    }

    this.activities.splice(activityIndex, 1);
  }
  generateUniqueId() {
    return Math.random().toString(36).substring(2, 9);
  }

  //! con las sugerencias de ChatGPT

  getActivityById(id) {
    return this.activities.find((activity) => activity.id === id);
  }
}

const repo = new Repository();

console.log(repo.getAllActivities());

repo.createActivity(1, "correr", "saludable", "imagen");

console.log(repo.getAllActivities());

repo.deleteActivity(1);

console.log(repo.getAllActivities());

repo.createActivity(1, "correr", "saludable", "imagen");
repo.createActivity(2, "dormir", "energia", "imagen");

console.log(repo.getAllActivities());
