var Persons;
fetch("./asset/js/MOCK_DATA.json")
.then(res =>res.json())
.then(data =>{
    Persons = data;
    console.log(data);
});