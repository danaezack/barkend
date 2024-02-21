export default function getAllDogs() {
  return fetch('http://localhost:3001/api/v1/dogs')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
}