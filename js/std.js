class Student {
    constructor(id, name, ma, khoa, lop, toan, ly, hoa) {
        this.__id = id;
        this.__name = name;
        this.__ma = ma;
        this.__lop = lop;
        this.__khoa = khoa;
        this.__toan = toan;
        this.__ly = ly;
        this.__hoa = hoa;
    }

    set id(value) { this.__id = value; }
    get id() { return this.__id; }

    set name(value) { this.__name = value; }
    get name() { return this.__name; }

    set ma(value) { this.__ma = value; }
    get ma() { return this.__ma; }

    set khoa(value) { this.__khoa = value; }
    get khoa() { return this.__khoa; }

    set lop(value) { this.__lop = value; }
    get lop() { return this.__lop; }

    set toan(value) { this.__toan = value; }
    get toan() { return this.__toan; }

    set ly(value) { this.__ly = value; }
    get ly() { return this.__ly; }

    set hoa(value) { this.__hoa = value; }
    get hoa() { return this.__hoa; }
}