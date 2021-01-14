
class Account {
    constructor(taiKhoan, matKhau, sdt, email, ngayLap, idLoai) {
        this.taiKhoan = taiKhoan;
        this.matKhau = matKhau;
        this.sdt = sdt;
        this.email = email;
        this.ngayLap = ngayLap;
        this.idLoai = idLoai;
    }
}

module.exports = Account;