function gerarpdf()
{
    // instanciar o JsPdf
    var doc = new jsPDF();
    
    alert("Arquivo Baixado");
    
    // Texto que deve estar no Pdf
    doc.text('Pdf Gerado com JS', 10, 10)
    
    // Gerou e salvou o Pdf
    doc.save('conteúdo.pdf')
}