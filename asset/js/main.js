let Persons;
fetch("./asset/js/MOCK_DATA.json")
  .then(res => res.json())
  .then(data => {
    Persons = data;
    renderCards(Persons);
    console.log(data);
  })
function renderCards(data) {
  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    row.innerHTML += `
    <div class="col mb-5">
          <div class="card h-100 m-5 card-bac border-0 shadow">
            <img src="${person.profile}" class="card-img-top img-fluid" alt="${person.first_name} ${person.last_name}">
            <div class="card-body text-center">
              <h5 class="card-title h1">${person.first_name} ${person.last_name}</h5>
              <p class="card-text h6 "><strong>Email:</strong> ${person.email}</p>
              <p class="card-text"><strong>Gender:</strong> ${person.gender}</p>
            </div>
          </div>
          </div>
          `;
  }
};
