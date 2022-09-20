function hitung(opr){
    let form = document.getElementById('calcForm');
    let a1 = parseFloat(form.angka1.value);
    let a2 = parseFloat(form.angka2.value);

    if (isNaN(a1) || isNaN(a2)) return alert('Jawaban harus Angka!');

    switch (opr){
        case '+': total = a1 + a2; break;
        case '-': total = a1 - a2; break;
        case '*': total = a1 * a2; break;
        case '/': total = a1 / a2; break;
        case '^': total = Math.pow(a1, a2); break;
        default: total=0;
    }

    form.hasil.value = total;
}