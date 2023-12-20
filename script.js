function addTechSkill() { //add technical skill
    var techSkillInput = document.getElementById('technicalSkills');
    var listTechSkills = document.getElementById('listaHabilidadesTecnicas');

    var techSkill = techSkillInput.value.trim();//obtain input value

    if (techSkill !== '') {
        var newTechSkill = document.createElement('li');
        newTechSkill.className = 'list-group-item';
        newTechSkill.textContent = techSkill;

        listTechSkills.appendChild(newTechSkill); //add skill to list
        techSkillInput.value = '';
    }
}

function addSkill() { //add soft skill
    var skillInput = document.getElementById('softSkills');
    var listSkills = document.getElementById('listaHabilidades');

    var skill = skillInput.value.trim(); //obtain input value

    if (skill != '') {
        var newSkill = document.createElement('li');
        newSkill.className = 'list-group-item';
        newSkill.textContent = skill;

        listSkills.appendChild(newSkill); //add skill to list
        skillInput.value = '';
    }
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


function mostrarVentanaEmergente() { //shows emergent msg
    document.getElementById('miVentanaEmergente').style.display = 'block';
    document.getElementById('fondoOscuro').style.display = 'block';
}

function cerrarVentanaEmergente() { //close emergent msg
    document.getElementById('miVentanaEmergente').style.display = 'none';
    document.getElementById('fondoOscuro').style.display = 'none';
}

window.onload = function () { //shows emergent msg inicializing the window
    mostrarVentanaEmergente();
};


function goToForm() { //redirect us to form window
    window.location.href = "form.html";
}