class Libro{  
    constructor(ISBN, titulo, autor, paginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
      }
    
MostrarLibro(){
    document.write(`<p> El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.paginas} páginas.</p>`)
}

get mostrarISBN(){
    return this.ISBN;
}
set modificarISBN(ISBN){
    this.ISBN= ISBN;
}
get mostrarTitulo(){
    return this.titulo;
}
set modificarTitulo(titulo){
    this.titulo= titulo;
}
get mostrarAutor(){
    return this.autor;
}
set modificarAutor(autor){
    this.autor= autor;
}
get mostrarPaginas(){
    return this.paginas;
}
set modificarPaginas(paginas){
    this.paginas= paginas;
}
    
}

let ISBN=prompt("Ingrese ISBN del libro");
let titulo=prompt("Ingrese titulo del libro");
let autor=prompt("Ingrese autor del libro");
let paginas=parseInt(prompt("Ingrese número de páginas del libro"));
let libro1 = new Libro(ISBN,titulo,autor,paginas);
libro1.MostrarLibro();

ISBN=prompt("Ingrese ISBN del libro")
titulo=prompt("Ingrese titulo del libro")
autor=prompt("Ingrese autor del libro")
paginas=parseInt(prompt("Ingrese número de páginas del libro"))
libro2 = new Libro(ISBN,titulo,autor,paginas);


libro2.MostrarLibro();



if (libro1.paginas>libro2.paginas){
    document.write(`<p> El libro 1 tiene más páginas que el libro 2.</p>`)
}
else if (libro1.paginas===libro2.paginas){
    document.write(`<p> El libro 1 tiene el mismo número de páginas que el libro 2.</p>`) 
}
else{
    document.write(`<p> El libro 2 tiene más páginas que el libro 1.</p>`)
}

