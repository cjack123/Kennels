const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${animalId}?_expand=locationId&_expand=customerId`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals`)
  .then(res => res.json())
}

export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addAnimal = (newAnimal) => {
  return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
  }).then(response => response.json())
}

export const updateAnimal = (editedAnimal) => {
  return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedAnimal)
  }).then(data => data.json());
}
