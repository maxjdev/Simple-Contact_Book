const form = document.getElementById(`form-atividade`);
const inputNome = document.getElementById(`nome`);
const inputTel = document.getElementById(`tel`);

function cadastrarContato (inputNome, inputTel) {
    const tbody = document.querySelector(`table tbody`);
    const nvLinha = document.createElement(`tr`);
    
    nvLinha.innerHTML = `
    <td>${inputNome}</td>
    <td>${inputTel}</td>`;
    
    tbody.appendChild(nvLinha);
}
form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    cadastrarContato(inputNome.value, inputTel.value);
    inputNome.value = ``;
    inputTel.value = ``;
})