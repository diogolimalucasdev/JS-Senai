const brands = ['nike', 'adidas', 'lacoste', 'calvin kleyn']

const brandComA = brands.filter((brand) =>{

    // peço pra ele filtrar as marcas que contenha as letras 'a'
    return brand.includes('a')
    
})

console.log(brandComA)




const nomes = ['Diogo', 'laryssa', 'Miguel', 'Fidelcino']


const nomesComL = nomes.filter((nome) => {
    return nome.includes('l')
})

console.log(nomesComL)



