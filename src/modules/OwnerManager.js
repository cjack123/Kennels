const remoteURL = "http://localhost:8088"

export const getOwnerById = (ownerId) => {
  //be sure your animals have good data and related to a owner and customer
  return fetch(`${remoteURL}/owners/${ownerId}`)
  .then(res => res.json())
}

export const getAllOwners = () => {
  return fetch(`${remoteURL}/owners`)
  .then(res => res.json())
}