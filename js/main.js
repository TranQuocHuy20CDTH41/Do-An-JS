stdList = Array();
khoaList = Array();
lopList = Array();

function create() {
    btn = document.getElementById('input');
    btn.addEventListener("click", addStd);

    tableDom = document.getElementById('table');
    nameDom = document.getElementById('name');
    lopDom = document.getElementById('lop');
    khoaDom = document.getElementById('khoa');
    maDom = document.getElementById('ma');
    toanDom = document.getElementById('toan');
    lyDom = document.getElementById('ly');
    hoaDom = document.getElementById('hoa');

    editDom = document.getElementById('edit');
    inputStdDom = document.getElementById('inputStd');
    editStdDom = document.getElementById('editStd');
    nameEditDom = document.getElementById('edit-name');
    lopEditDom = document.getElementById('edit-lop');
    khoaEditDom = document.getElementById('edit-khoa');
    maEditDom = document.getElementById('edit-ma');
    toanEditDom = document.getElementById('edit-toan');
    lyEditDom = document.getElementById('edit-ly');
    hoaEditDom = document.getElementById('edit-hoa');
}

function render() {
    tableDom.innerHTML =
        '<tr>' +
        '<td style="width:50px">STT</t ">' +
        '<td style="width:220px">Họ và tên</td">' +
        '<td style="width:130px">Mã sinh viên</td">' +
        '<td style="width:150px">Khoa</td>' +
        '<td style="width:100px">Lớp</td>' +
        '<td style="width:100px">Toán</td>' +
        '<td style="width:100px">Lý</td>' +
        '<td style="width:100px">Hoá</td>' +
        '<td style="width:150px" >Action</>' +
        '</tr>';
    stdList.forEach(std => {
        tableDom.appendChild(createNodeStudent(std));
    });
}

function renderSearch() {
    tableDom.innerHTML =
        '<tr>' +
        '<td style="width:50px">STT</t ">' +
        '<td style="width:220px">Họ và tên</td">' +
        '<td style="width:130px">Mã sinh viên</td">' +
        '<td style="width:150px">Khoa</td>' +
        '<td style="width:100px">Lớp</td>' +
        '<td style="width:100px">Toán</td>' +
        '<td style="width:100px">Lý</td>' +
        '<td style="width:100px">Hoá</td>' +
        '<td style="width:150px">Action</>' +
        '</tr>';
    arr.forEach(std => {
        tableDom.appendChild(createNodeStudent(std));
    });
}

function createNodeStudent(std) {
    nodeRow = document.createElement('tr');

    sttRow = document.createElement('td');
    sttRow.innerHTML = std.id;
    nodeRow.appendChild(sttRow);


    nameRow = document.createElement('td');
    nameRow.innerHTML = std.name;
    nodeRow.appendChild(nameRow);

    maRow = document.createElement('td');
    maRow.innerHTML = std.ma;
    nodeRow.appendChild(maRow);

    khoaRow = document.createElement('td');
    khoaRow.innerHTML = std.khoa;
    nodeRow.appendChild(khoaRow);

    lopRow = document.createElement('td');
    lopRow.innerHTML = std.lop;
    nodeRow.appendChild(lopRow);

    toanRow = document.createElement('td');
    toanRow.innerHTML = std.toan;
    nodeRow.appendChild(toanRow);

    lyRow = document.createElement('td');
    lyRow.innerHTML = std.ly;
    nodeRow.appendChild(lyRow);

    hoaRow = document.createElement('td');
    hoaRow.innerHTML = std.hoa;
    nodeRow.appendChild(hoaRow);

    nodeAction = document.createElement('td');
    btnEd = document.createElement('button');
    btnEd.addEventListener("click", function(e) {
        editStd(std.id);
    })
    btnEd.setAttribute('class', 'btn-success')
    btnEd.setAttribute('style', 'margin-right: 10px;')
    btnEd.innerHTML = 'Sửa';
    btnEd.addEventListener("click", function() {
        editStd(std.id);
    })
    nodeAction.appendChild(btnEd);

    btnDlt = document.createElement('button');
    btnDlt.setAttribute('class', 'btn-danger');
    btnDlt.innerHTML = 'Xóa';

    btnDlt.addEventListener("click", function() {
        deleteStd(std.id);
    });
    nodeAction.appendChild(btnDlt);

    nodeRow.appendChild(nodeAction);

    return nodeRow;
}
i = 1;

function addStd() {
    std = new Student(
        i++,
        nameDom.value,
        maDom.value,
        khoaDom.value,
        lopDom.value,
        toanDom.value,
        lyDom.value,
        hoaDom.value
    )
    stdList.push(std);
    render();
}

function deleteStd(id) {
    for (j = 0; j < stdList.length; j++) {
        if (stdList[j].id == id) break;
    }
    stdList.splice(j, 1);
    render();
}
var t;

function editStd(id) {
    stdList.forEach(std => {
        if (std.id == id) {
            nameEditDom.value = std.name;
            lopEditDom.value = std.lop;
            khoaEditDom.value = std.khoa;
            maEditDom.value = std.ma;
            toanEditDom.value = std.toan;
            lyEditDom.value = std.ly;
            hoaEditDom.value = std.hoa;
            editDom.style.display = 'block';
            inputStdDom.style.display = 'none';
            t = std.id;
        }
    });
}

function update() {
    stdList.forEach(std => {
        if (std.id == t) {
            std.name = nameEditDom.value;
            std.lop = lopEditDom.value;
            std.khoa = khoaEditDom.value;
            std.ma = maEditDom.value;
            std.toan = toanEditDom.value;
            std.ly = lyEditDom.value;
            std.hoa = hoaEditDom.value;
            editDom.style.display = 'none';
            inputStdDom.style.display = 'block';
        }
    });
    render();
}

function search() {
    temp = 1;
    arr = new Array();
    key = document.getElementById('key').value;
    stdList.forEach(std => {
        if (std.name.includes(key)) {
            std.id = temp;
            arr.push(std);
            temp++;
        }
    });
    renderSearch();
}

function searchkhoa() {
    temp = 1;
    arr = new Array();
    keykhoa = document.getElementById('keykhoa').value;
    stdList.forEach(std => {
        if (std.khoa.includes(keykhoa)) {
            std.id = temp;
            arr.push(std);
            temp++;
        }
    });
    renderSearch();
}

function searchlop() {
    temp = 1;
    arr = new Array();
    keylop = document.getElementById('keylop').value;
    stdList.forEach(std => {
        if (std.lop.includes(keylop)) {
            std.id = temp;
            arr.push(std);
            temp++;
        }
    });
    renderSearch();
}

function themkhoa() {
    id = khoaList.length + 1;
    domKhoa = document.getElementById('themkhoa');
    k = new khoa(i, domKhoa.value);
    khoaList.push(k);
    truyenKhoa();
}

function truyenKhoa() {
    slectKhoa = document.getElementById('khoa');
    if (khoaList.length != 0) {
        slectKhoa.appendChild(createOption(khoaList[khoaList.length - 1]));
    }
}

function createOption(k) {
    op = document.createElement('option');
    op.innerHTML = k.tenkhoa;
    op.setAttribute("value", k.tenkhoa);
    return op;
}

function themlop() {
    id = lopList.length + 1;
    domLop = document.getElementById('themlop');
    l = new lop(i, domLop.value);
    lopList.push(l);
    truyenLop();
}

function truyenLop() {
    slectLop = document.getElementById('lop');
    if (lopList.length != 0) {
        slectLop.appendChild(createOptionLop(lopList[lopList.length - 1]));
    }
}

function createOptionLop(l) {
    op = document.createElement('option');
    op.innerHTML = l.tenlop;
    op.setAttribute("value", l.tenlop);
    return op;
}
window.onload = function() {
    create();
    render();
}