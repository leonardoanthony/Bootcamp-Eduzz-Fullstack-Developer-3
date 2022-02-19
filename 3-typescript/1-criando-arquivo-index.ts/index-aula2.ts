const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const info = event.currentTarget as HTMLInputElement;
    console.log(info.value);
})

// Generic Types

function addValueToList(arrayList, value){
    return arrayList.map(() => value);
}

addValueToList([1,2,3],4);

//TS

function addValueToListNew<T>(arrayList: T[], value: T){
    return arrayList.map(() => value);
}

addValueToListNew(['A', 'B'],'c');
addValueToListNew([1,2,3],4);

// Condicionais em parametros

interface IUsuario {
    id: string,
    email: string,
    cargo?: 'Diretor' | 'Gerente' | 'Supervisor',
}

// interface IAdmin extends IUsuario{
//     cargo: 'Diretor' | 'Gerente' | 'Supervisor',
// }

function redirectUser(usuario: IUsuario){
    // if('cargo' in usuario){
    if(usuario.cargo){
        //redireciona para área de admin
    }else{
        //redireciona para área de usuario
    }
}

