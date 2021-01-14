var config = require('./../DbConfig');
const sql = require('mssql');

module.exports.getTopics = async function (req, res) {
    try {
        let pool = await sql.connect(config);
        let topics = await pool.request().query("SELECT * from Detai");
        res.json(topics.recordset);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.getDetailTopic = async function (req, res) {
    try {
        let pool = await sql.connect(config);
        let topic = await pool.request().query(`SELECT * from Detai where idDeTai = ${req.params.idDeTai}`);
        res.json(topic.recordset[0]);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports.getAllTopicByIdTeacher = async function (req, res) {

    try {

        let pool = await sql.connect(config);
        let detai = await pool.request().query(`select idDeTai , tenDeTai, noiDungDT,tinhTrangDT from DeTai where idGV = ${req.params.idGV}`);

        res.json(detai.recordset);
    } catch (error) {

    }
}

module.exports.getTopicByIdStudent = async function (req, res) {
    try {
        console.log(req.params.idSV)
        let pool = await sql.connect(config);
        let topics = await pool.request().query(`select dt.idDeTai, tenDeTai, noiDungDT, ct.tinhTrang,ct.ngayDangKy , dt.idGV, dt.idNV 
        from ChiTiet_DeTaiDK ct, DeTai dt
        where dt.idDeTai = ct.idDeTai and idSV = ${req.params.idSV}`);
        res.json(topics.recordset[0]);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports.createTopic = async function (req, res) {
    try {

        try {
            let query = `exec sp_ThemDeTai N'${req.body.tenDeTai}',N'${req.body.noiDungDT}',${req.body.idGV},${req.body.idNV}`;
            await sql.connect(config).then(() => {
                sql.query(query)
                    .then(result => {
                        res.status(200).send("Thêm thành công.");
                    }).catch(err => {
                        res.status(415).send("Thêm thất bại!!!");
                    });

            })
        } catch (error) {

        }
    }
    catch (error) {
        console.log(error);
    }
}



module.exports.changeStatusTopic = async function (req, res) {
    try {


        let query = `update dbo.DeTai set tinhTrangDT = ${req.body.status ? 1 : 0} where idDeTai = ${req.params.idDeTai}`
        let text = "";
        await sql.connect(config).then(() => {
            sql.query(query)
                .then(result => {

                    if (req.body.status) {
                        text = "Đóng"
                    } else {
                        text = "Mở"
                    }
                    res.status(200).send(text + "đề tài thành công");
                }).catch(err => {
                    res.status(415).send(text + "đề tài thất bại!!!");
                });
        })


    }
    catch (error) {
        console.log(error);
    }
}