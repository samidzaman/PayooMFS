// show cash out section / form

document.getElementById('show-cash-out').addEventListener('click', function () {
    document.getElementById('cash-out-frm').classList.remove('hidden');
    document.getElementById('add-mony-frm').classList.add('hidden');
})

//show add mony section/ form 

document.getElementById('show-add-mony').addEventListener('click', function () {
    document.getElementById('add-mony-frm').classList.remove('hidden');
    document.getElementById('cash-out-frm').classList.add('hidden');
})