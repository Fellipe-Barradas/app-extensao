
function createPdf() {

    const escola = document.getElementById('escola').value;
    const aluno = document.getElementById('aluno').value;
    const ano = document.getElementById('ano').value;
    const equipe = document.getElementById('equipe').value;
    const periodo = document.getElementById('periodo').value;

    const habilidade1_1 = document.querySelector('input[name="habilidade1-1"]:checked').value;
    const habilidade2_1 = document.querySelector('input[name="habilidade2-1"]:checked').value;
    const habilidade3_1 = document.querySelector('input[name="habilidade3-1"]:checked').value;

    const habilidade1_2 = document.querySelector('input[name="habilidade1-2"]:checked').value;
    const habilidade2_2 = document.querySelector('input[name="habilidade2-2"]:checked').value;
    const habilidade3_2 = document.querySelector('input[name="habilidade3-2"]:checked').value;

    const habilidade1_3 = document.querySelector('input[name="habilidade1-3"]:checked').value;
    const habilidade2_3 = document.querySelector('input[name="habilidade2-3"]:checked').value;
    const habilidade3_3 = document.querySelector('input[name="habilidade3-3"]:checked').value;

    const habilidade1_4 = document.querySelector('input[name="habilidade1-4"]:checked').value;
    const habilidade2_4 = document.querySelector('input[name="habilidade2-4"]:checked').value;
    const habilidade3_4 = document.querySelector('input[name="habilidade3-4"]:checked').value;

    const habilidade1_5 = document.querySelector('input[name="habilidade1-5"]:checked').value;
    const habilidade2_5 = document.querySelector('input[name="habilidade2-5"]:checked').value;
    const habilidade3_5 = document.querySelector('input[name="habilidade3-5"]:checked').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Definir a posição inicial e margens
    let y = 20;
    const marginLeft = 10;
    const marginTop = 10;

    // Adicionar título
    doc.setFontSize(16);
    doc.text("Plano Educacional Individual (PEI)", marginLeft, y);
    y += 10;

    // Adicionar informações gerais
    doc.setFontSize(12);
    doc.text(`Escola: ${escola}`, marginLeft, y);
    y += 7;
    doc.text(`Aluno: ${aluno}`, marginLeft, y);
    y += 7;
    doc.text(`Ano/Série: ${ano}`, marginLeft, y);
    y += 7;
    doc.text(`Equipe de Elaboração: ${equipe}`, marginLeft, y);
    y += 7;
    doc.text(`Período de Elaboração: ${periodo}`, marginLeft, y);
    y += 10;

    function addHabilidadeSection(title, habilidade1, habilidade2, habilidade3) {
        doc.setFontSize(14);
        doc.text(title, marginLeft, y);
        y += 7;

        doc.setFontSize(12);
        doc.text("Inteligências / Metas: " + habilidade1, marginLeft, y);
        y += 7;
        doc.text("Metodologia e Recursos Didáticos: " + habilidade2, marginLeft, y);
        y += 7;
        doc.text("Avaliação: " + habilidade3, marginLeft, y);
        y += 10;
    }

    addHabilidadeSection("Habilidades Acadêmicas", habilidade1_1, habilidade2_1, habilidade3_1);
    addHabilidadeSection("Habilidades da Vida Diária", habilidade1_2, habilidade2_2, habilidade3_2);
    addHabilidadeSection("Habilidades Motoras/Atividade Física", habilidade1_3, habilidade2_3, habilidade3_3);
    addHabilidadeSection("Habilidades Sociais", habilidade1_4, habilidade2_4, habilidade3_4);
    addHabilidadeSection("Habilidades Criativas", habilidade1_5, habilidade2_5, habilidade3_5);

    doc.save('Plano_Educacional_Individual.pdf');

}