document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-add-tech-skill').addEventListener('click', addTechSkill);
    document.querySelector('.btn-add-soft-skill').addEventListener('click', addSkill); //arregla el tema del btn add
    document.querySelector('.btn-prev').addEventListener('click', prevForm);
    document.querySelector('.btn-next').addEventListener('click', nextForm);
    document.querySelector('.btn-pdf').addEventListener('click', generarPDF);
    let currentFromIndex = 0;
    const forms = document.querySelectorAll('.form');
    const formObject = [];

    function showForm(index) {
        forms.forEach((form, i) => {
            form.classList.remove('active', 'hidden');
            switch (i) {
                case index:
                    form.classList.add('active');
                    break;
                case index - 1:
                    form.classList.add('left');
                    break;
                case index + 1:
                    form.classList.add('right');
                    break;
                default:
                    form.classList.remove('active', 'left', 'right');
                    form.classList.add('hidden');
                    break;
            }

            /*if (i === index) {
                form.classList.add('active');
            } else {
                form.classList.remove('active');
            }*/
        });
    }

    function nextForm() {
        if (currentFromIndex < forms.length - 1) {
            currentFromIndex++;
            saveInfo();
            showForm(currentFromIndex);
        }
    }

    function prevForm() {
        if (currentFromIndex > 0) {
            currentFromIndex--;
            saveInfo();
            showForm(currentFromIndex);
        }
    }

    showForm(currentFromIndex);

    function saveInfo() {
        const currentForm = forms[currentFromIndex - 1];
        const inputs = currentForm.querySelectorAll('input, textarea, li');

        const formInfo = {};
        inputs.forEach(input => {
            formInfo[input.name] = input.value;
        });

        formObject[currentFromIndex] = formInfo - 1;
        console.log(formInfo);
    }



    function addTechSkill() { //add technical skill
        var techSkillInput = document.getElementById('tech-skills');
        var listTechSkills = document.getElementById('ulHabilidadesTecnicas');
        var msgError = document.getElementById('message-error');

        var techSkill = techSkillInput.value;//obtain input value

        if (techSkill !== '') {
            msgError.style.display = 'none';

            var newTechSkill = document.createElement('li');
            newTechSkill.className = 'list-group-item';
            newTechSkill.textContent = techSkill;

            listTechSkills.appendChild(newTechSkill); //add skill to list
            techSkillInput.value = '';
        } else {
            msgError.style.display = 'flex';
        }
    }

    function addSkill() { //add soft skill
        var skillInput = document.getElementById('soft-skills');
        var listSkills = document.getElementById('ulHabilidades');
        var msgError = document.getElementById('message-error');

        var skill = skillInput.value.trim(); //obtain input value

        if (skill != '') {
            msgError.style.display = 'none';
            var newSkill = document.createElement('li');
            newSkill.className = 'list-group-item';
            newSkill.textContent = skill;

            listSkills.appendChild(newSkill); //add skill to list
            skillInput.value = '';
        } else {
            msgError.style.display = 'flex';
        }
    }
});

function mostrarVentanaEmergente() { //shows emergent msg
    document.getElementById('miVentanaEmergente').style.display = 'block';
    document.getElementById('fondoOscuro').style.display = 'block';
}

function cerrarVentanaEmergente() { //close emergent msg
    document.getElementById('miVentanaEmergente').style.display = 'none';
    document.getElementById('fondoOscuro').style.display = 'none';
}

function goToForm() { //redirect us to form window
    window.location.href = "form.html";
}

function generarPDF() { //generate pdf
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const region = document.getElementById('region').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    const pdf = new jsPDF();

    //Add PDF content
    pdf.text(20, 20, `Currículum Vitae de ${nombres} ${apellidos}`);
    pdf.text(20, 20, `${region}`);
    pdf.text(20, 20, `Currículum Vitae de ${telefono} - ${email}`);
    // Agrega más contenido según sea necesario

    pdf.save('curriculum.pdf');
}