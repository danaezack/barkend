export default function getAllDogs() {
  return fetch('https://barkend-api.vercel.app/api/v1/dogs')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to retrieve dogs... Please try again later.`);
      }
    })
}