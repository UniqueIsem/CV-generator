document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-add-tech-skill').addEventListener('click', addTechSkill);
    document.querySelector('.btn-add-soft-skill').addEventListener('click', addSkill); //arregla el tema del btn add
    document.querySelector('.btn-prev').addEventListener('click', prevForm);
    document.querySelector('.btn-next').addEventListener('click', nextForm);
    document.querySelector('.btn-show-pdf').addEventListener('click', nextForm);
    document.querySelector('.btn-pdf').addEventListener('click', generarPDF);
    document.querySelector('.btn-pdf').addEventListener('click', function (event) {
        event.preventDefault(); //Avoid page reload
        generarPDF();
    });

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const showPdf = document.getElementById('showPdf');
    const generatePdf = document.getElementById('generatePdf');

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

            switch (currentFromIndex) {
                case 1:
                    btnPrev.style.display = 'flex';
                    break;
                case 5:
                    btnNext.style.display = 'none';
                    showPdf.style.display = 'flex';
                    break;
                case 6:
                    mostrarPDF();
                    showPdf.style.display = 'none';
                    generatePdf.style.display = 'flex';
            }
        }
    }

    function prevForm() {
        if (currentFromIndex > 0) {
            currentFromIndex--;
            saveInfo();
            showForm(currentFromIndex);

            switch (currentFromIndex) {
                case 0:
                    btnPrev.style.display = 'none';
                    break;
                case 4:
                    btnNext.style.display = 'flex';
                    showPdf.style.display = 'none';
                    generatePdf.style.display = 'none';
                    break;
                case 5:
                    showPdf.style.display = 'flex';
                    generatePdf.style.display = 'none';
            }
        }
    }

    showForm(currentFromIndex);

    function saveInfo() { //save info from current form on an object
        /*const currentForm = forms[currentFromIndex - 1];
        const inputs = currentForm.querySelectorAll('input, textarea');
        const listItems = currentForm.querySelectorAll('ul.list-group li')

        const formInfo = {};

        //Get values from input and txtArea
        inputs.forEach(input => {
            formInfo[input.name] = input.value;
        });

        //Get values of ul li elements
        const listItemsValues = [];
        listItems.forEach(item => {
            listItemsValues.push(item.textContent);
        });
        formInfo['listItems'] = listItemsValues;

        formObject[currentFromIndex] = formInfo - 1;
        console.log(formInfo);*/
    }

    function addTechSkill() { //add technical skill
        var techSkillInput = document.getElementById('tech-skills');
        var listTechSkills = document.getElementById('ulHabilidadesTecnicas');
        var msgError = document.getElementById('message-error-tech-skills');

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
        var msgError = document.getElementById('message-error-soft-skills');

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

function mostrarPDF() {
    const { jsPDF } = jspdf;
    const pdf = new jsPDF();

    //1st form
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const pais = document.getElementById('pais').value;
    const estado = document.getElementById('estado').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    //2nd form
    const inicioEstudios = document.getElementById('inicio').value;
    const graduacion = document.getElementById('graduacion').value;
    const carrera = document.getElementById('carrera').value;
    const escuela = document.getElementById('escuela').value;
    const formacion = document.getElementById('formacion-academica').value;
    //3rd form
    const techSkills = Array.from(document.querySelectorAll('#ulHabilidadesTecnicas li')).map(li => li.textContent);
    //4th form
    const softSkills = Array.from(document.querySelectorAll('#ulHabilidades li')).map(li => li.textContent);
    //5th form
    const empresa = document.getElementById('empresa').value;
    const inicioJob = document.getElementById('inicio-job').value;
    const puesto = document.getElementById('puesto').value;
    const finalJob = document.getElementById('final-job').value;
    const experiencia = document.getElementById('experiencia-profesional').value;
    //6th form
    const resumen = document.getElementById('summary').value;
    const url1Name = document.getElementById('url-1-descripcion').value;
    const url1 = document.getElementById('url-1').value;
    const url2Name = document.getElementById('url-2-descripcion').value;
    const url2 = document.getElementById('url-2').value;
    const url3Name = document.getElementById('url-3-descripcion').value;
    const url3 = document.getElementById('url-3').value;

    //personal information
    pdf.text(20, 20, `${nombres} ${apellidos}`);
    pdf.text(20, 30, `${estado}, ${pais}`);
    pdf.text(20, 40, `${telefono} - ${email}`);
    //education
    pdf.text(20, 60, `EDUCATION`);
    pdf.line(20, 65, 200, 65);
    pdf.text(20, 70, `${carrera}    ${inicioEstudios} - ${graduacion}`);
    pdf.text(20, 80, `${escuela}`);
    pdf.text(20, 90, `${formacion}`);
    //habilidades tecnicas
    pdf.text(20, 110, `TECHNICAL SKILLS`);
    techSkills.forEach((skill, index) => {
        pdf.text(20, 120 + index * 10, skill);
    });
    pdf.line(20, 115, 200, 115);
    //habilidades extra
    const softSkillsStartY = 120 + techSkills.length * 10 + 10;
        pdf.text(20, softSkillsStartY, `SOFT SKILLS`);
        pdf.line(20, softSkillsStartY + 5, 200, softSkillsStartY + 5);
        softSkills.forEach((skill, index) => {
            pdf.text(20, softSkillsStartY + 10 + index * 10, skill);
        });
     // Professional Experience
     const experienceStartY = softSkillsStartY + 10 + softSkills.length * 10 + 10;
     pdf.text(20, experienceStartY, `PROFESSIONAL EXPERIENCE`);
     pdf.line(20, experienceStartY + 5, 200, experienceStartY + 5);
     pdf.text(20, experienceStartY + 10, `${inicioJob} - ${finalJob}`);
     pdf.text(20, experienceStartY + 20, `${puesto} - ${empresa}`);
     pdf.text(20, experienceStartY + 30, `${experiencia}`);
     // Summary and URLs
     const summaryStartY = experienceStartY + 40;
     pdf.text(20, summaryStartY, `SUMMARY`);
     pdf.line(20, summaryStartY + 5, 200, summaryStartY + 5);
     pdf.text(20, summaryStartY + 10, `${resumen}`);
     pdf.text(20, summaryStartY + 20, `${url1Name}:  ${url1}`);
     pdf.text(20, summaryStartY + 30, `${url2Name}:  ${url2}`);
     pdf.text(20, summaryStartY + 40, `${url3Name}:  ${url3}`);
    


    //get pdf content as a blob object
    const pdfBlob = pdf.output('blob');

    //create url for blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    //stablish the src of iframe to show pdf
    document.getElementById('pdfPreview').setAttribute('src', pdfUrl);
}

function generarPDF() { //generate pdf
    const { jsPDF } = jspdf;
    const pdf = new jsPDF();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const pais = document.getElementById('pais').value;
    const estado = document.getElementById('estado');
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    //Add PDF content
    pdf.text(20, 20, `Currículum Vitae de ${nombres} ${apellidos}`);
    pdf.text(20, 30, `${estado}, ${pais}`);
    pdf.text(20, 40, `Telefono:  ${telefono} - ${email}`);
    

    pdf.save('curriculum.pdf');
}