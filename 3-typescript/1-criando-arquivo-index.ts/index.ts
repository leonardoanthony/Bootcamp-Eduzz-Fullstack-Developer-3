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